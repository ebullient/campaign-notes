class Campaign {

    constructor() {  // Constructor
        console.log("Creating Campaign");

        this.monsterSize = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
        this.monsterType = ['Aberration', 'Beast', 'Celestial', 'Construct',
            'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze',
            'Plant', 'Undead'];
    }

    nextWeek = (filename) => {
        const titledate = filename.substring(0, 10);
        return moment(titledate).add(1, 'week');
    }

    lowerKebab = (name) => {
        return name
            .replace(/([a-z])([A-Z])/g, '$1-$2') // separate on camelCase
            .replace(/[\s_]+/g, '-')         // replace all spaces and low dash
            .replace(/['"]+/g, '')           // remove quotes
            .toLowerCase();                  // convert to lower case
    }

    chooseFolder = async (tp, folder) => {
        if (folder === "/") {
            folder = "";
        }
        const folders = Object.entries(app.vault.adapter.files)
            .filter(x => x[1].type === "folder")
            .filter(x => !x[0].startsWith("🗄-assets"))
            .filter(x => x[0].startsWith(folder))
            .map(x => x[0]);
        folders.sort();
        const choice = await tp.system.suggester(folders, folders);
        if (!choice) {
            warn("No choice selected. Using 'compendium'");
            return 'compendium';
        }
        return choice;
    }

    chooseTags = async (tp, prefix, value) => {
        let values = [];
        const filter = '#' + prefix;
        for (const itItem of Object.keys(app.metadataCache.getTags())) {
            if (itItem.startsWith(filter)) {
                values.push(itItem.substring(1));
            }
        }
        values.sort();
        values.unshift('--');
        const choice = await tp.system.suggester(values, values);
        if (!choice) {
            console.log(`No choice selected. Using ${value}`);
            return value;
        }
        return choice;
    }

    chooseTagOrEmpty = async (tp, prefix, value) => {
        let result = await this.chooseTags(tp, prefix, value);
        if (result && result != '--') {
            return result;
        }
        return '';
    }

    chooseMonsterType = async (tp) => {
        return await tp.system.suggester(this.monsterType, this.monsterType);
    }

    chooseMonsterSize = async (tp) => {
        return await tp.system.suggester(this.monsterSize, this.monsterSize);
    }

    /**
     * Calculate the next session log
     */
    nextSession = async (tp) => {
        const folder = tp.file.folder(true);
        console.log("Looking for files in %s", folder);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files.slice(-4);
        let lastSession = files.pop();
        while (lastSession.contains('Untitled')) {
            lastSession = files.pop();
        }
        const pos = lastSession.lastIndexOf('/') + 1;
        const name = lastSession.substring(pos);
        return {
            folder: folder,
            next: this.nextWeek(name).format("YYYY-MM-DD"),
            lastSession: name
        }
    }

    /**
     * Calculate the previous session log
     */
    prevSession = async (tp) => {
        const folder = tp.file.folder(true);
        const filename = tp.file.title;
        console.log("Looking for files in %s", folder);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files;
        for (let i = files.length - 1; i > 0 ; i--) {
            if (files[i].contains(filename)) {
                const pos = files[i].lastIndexOf('/') + 1;
                return files[i - 1].substring(pos);
            }
        }
    }

    /**
     * Links for previous and next document (based on name-sort)
     */
    prevNext = async (tp) => {
        const folder = tp.file.folder(true);
        const filename = tp.file.title;
        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files;
        files.sort();
        const result = {};
        for (let i = 0; i < files.length; i++) {
            if (files[i].contains(filename)) {
                const pos = files[i].lastIndexOf('/') + 1;
                if (i > 0) {
                    result["prev"] = `[← previous](${files[i - 1].substring(pos)})`;
                }
                if (i < files.length - 1) {
                    result["next"] = `[next →](${files[i + 1].substring(pos)})`;
                }
                break;
            }
        }
        return result;
    }

    /**
     * Calculate the next day that should be logged, according to the Harptos calendar.
     * This assumes files with the following format:
     * - single day:   1498-08-09
     * - several days: 1498-08-09-11
     *
     * Once it has found the last day.. figure out the _next_ day, with rollover
     * for the year, and insertion of a day 0 for special calendar days.
     */
    nextHarptosDay = async (tp) => {
        const folder = tp.file.folder(true);
        console.log("Looking for files in %s", folder);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files.slice(-4);

        let lastLog = files.pop();
        while (lastLog.contains('Untitled')) {
            lastLog = files.pop();
        }

        const date = this.splitDateString(lastLog.substring(lastLog.lastIndexOf('/') + 1));
        if (date.day == 30) {
            switch (date.month) {
                // New Year
                case 12:
                    date.year += 1;
                    date.month = 1;
                    date.day = 1;
                    break;
                // Special holidays --> 31
                case 1:
                case 4:
                case 7:
                case 9:
                case 11:
                    date.day += 1;
                    break;
                // Everything else
                default:
                    date.month += 1;
                    date.day = 1;
            }
        } else if (date.day == 31) {
            date.month += 1;
            if ( date.year % 4 == 0 ) {
                date.day = 0; // Shieldmeet
            } else {
                date.day = 1;
            }
        } else {
            date.day += 1;
        }
        console.log("%o", date);
        return `${date.year}-${this.pad(date.month)}-${this.pad(date.day)}`;
    }

    /**
     * Harptos filename and heading
     *
     */
    harptosDay = (dateStr, fallback) => {
        if (!dateStr.match(/^[0-9-]+$/)) {
            dateStr = fallback;
        }
        const date = this.splitDateString(dateStr);
        const monthName = this.monthName(date.month, date.day);
        const season = this.season(date.month, date.day);
        const pretty = `${monthName} ${date.day}, ${date.year}`;
        return {
            filename: `${date.year}-${this.pad(date.month)}-${this.pad(date.day)}-${this.lowerKebab(monthName)}`,
            heading: pretty,
            season: season,
            date: date
        }
    }

    /**
     * Split a string into harptos calendar compatible segments.
     * This assumes files with the following format:
     * - single day:   1498-08-09
     * - several days: 1498-08-09-11
     */
    splitDateString = (string) => {
        const segments = string.split('-');
        console.log("harptosDate: %o -> %o", string, segments);

        let year = parseInt(segments[0]);
        let month = parseInt(segments[1]);
        let day = parseInt(segments[2]);

        if (segments.length == 4 && Number.isInteger(segments[3])) {
            day = parseInt(segments[3]);
        }
        return {
            year: year,
            month: month,
            day: day
        }
    }

    /**
     * Add padding to numbers less than 10.
     * Yes, printf could also do this, but whatever.
     */
    pad = (x) => {
        return `${x}`.padStart(2, '0');
    }

    season = (m, d) => {
        switch(m) {
            case 1:
            case 2:
                return 'winter';
            case 4:
            case 5:
                return 'spring';
            case 7:
            case 8:
                return 'summer';
            case 10:
            case 11:
                return 'autumn';

            case 3:
                return d < 19
                    ? 'winter'
                    : 'spring';
            case 6:
                return d < 20
                    ? 'spring'
                    : 'summer';
            case 9:
                return d < 21
                    ? 'summer'
                    : 'autumn';
            case 12:
                return d < 20
                    ? 'autumn'
                    : 'winter';
        }
    }

    /**
     * Map the month and day to pretty names according to the Harptos Calendar.
     * Days 31 and 0 are special days (between months)
     */
    monthName = (m, d) => {
        if (d == 31 || d == 0 ) {
            switch (m) {
                case 1:
                    return 'Midwinter';
                case 4:
                    return 'Greengrass';
                case 7:
                    return 'Midsummer';
                case 8:
                    return 'Shieldmeet';
                case 9:
                    return 'Highharvestide';
                case 11:
                    return 'Feast of the Moon';
            }
        }
        switch (m) {
            case 1:
                return 'Hammer';
            case 2:
                return 'Alturiak';
            case 3:
                return 'Ches';
            case 4:
                return 'Tarsakh';
            case 5:
                return 'Mirtul';
            case 6:
                return 'Kythorn';
            case 7:
                return 'Flamerule';
            case 8:
                return 'Elesias';
            case 9:
                return 'Eleint';
            case 10:
                return 'Marpenoth';
            case 11:
                return 'Uktar';
            case 12:
                return 'Nightal';
        }
    }

    /* Sort npcs by a status, where they are, then their name */
    sortNpcs = (n1, n2) => {
        return this.testStatus(n1, n2,
            //() => this.testWhere(n1, n2,
                () => this.testName(n1, n2));
    }

    /* Sort by the status field (or fallback on equals) */
    testStatus = (n1, n2, fallback) => {
        if (n1.status == n2.status) {
            return fallback();
        }
        return n1.status.localeCompare(n2.status);
    }

    /* Sort by the where field (or fallback on equals) */
    testWhere = (n1, n2, fallback) => {
        if (n1.where == n2.where) {
            return fallback();
        }
        return n1.where.localeCompare(n2.where);
    }

    /* Sort by the name field */
    testName = (n1, n2) => {
        return n1.name.localeCompare(n2.name);
    }

    /* Convert iff status into an emoji */
    iffStatus = (iff) => {
        switch (iff) {
            case 'friend': return '🟩';
            case 'positive': return '⬆️';
            case 'negative': return '⬇️';
            case 'enemy': return '🟥';
            default: return '⬜️';
        }
    }

    folderPages = (dv, root) => {
        if (root === undefined) {
            return dv.pages(`"${dv.current().file.folder}"`);
        }
        if ( root === "miscellanea" ) {
            return dv.pages(`"rowen/duet/miscellanea"`);
        }
        return dv.pages(`"${root}"`);
    }

    filterFactions = (pages) => {
        const typeRegex = /group\/([^/]+)/;
        return pages
            .where(p => p.type == "group")
            .sort(p => p.file.name, 'asc')
            .map(k => {
                var link = `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`;
                var type = "unknown";
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/')) {
                        type = tag.substring(5);
                    }
                    else if ( type === "unknown" ) {
                        const found = tag.match(typeRegex);
                        if (found) {
                            type = found[1];
                        }
                    }
                });

                return [link, type]
            });
    }

    filterPlaces = (pages) => {
        return pages
            .where(p => p.type == "location")
            .sort(p => p.file.name, 'asc')
            .map(k => {
                var link = `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`;
                var type = 'location';
                var where = 'region';
                var affiliation = [];
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/')) {
                        type = tag.substring(5);
                    } else if (tag.startsWith('region/')) {
                        where = tag.substring(tag.lastIndexOf('/')+1);
                    } else if (tag.startsWith('group/') ) {
                        affiliation.push(tag.replace('group/', '').replace('faction/', ''));
                    }
                });

                return [link, type, where, affiliation.sort().join(", ")]
            });
    }

    /* Filter npcs from the given list of pages */
    filterNpcs = (pages) => {
        return pages
            .where(p => p.type == "npc")
            .map(p => {
                var status = 'alive';
                var iff = 'unknown';
                var where = 'unknown';
                var region = 'unknown';
                var affiliation = [];
                p.tags.forEach((tag) => {
                    if (tag.startsWith('iff/')) {
                        iff = tag.substring(4);
                    } else if (tag.startsWith('npc/')) {
                        status = tag.substring(4);
                    } else if (tag.startsWith('place/')) {
                        where = tag.substring(6);
                    } else if (tag.startsWith('region/')) {
                        region = tag.substring(7);
                    } else if (tag.startsWith('group/')) {
                        affiliation.push(tag.substring(6));
                    }
                });
                return {
                    name: p.file.name,
                    link: `[${p.file.aliases[0] ? p.file.aliases[0] : p.file.name}](/${p.file.path})`,
                    status: status,
                    iff: iff,
                    where: where == 'unknown' ? region : where,
                    affiliation: affiliation
                }
            })
            .sort(p => p, 'asc', this.sortNpcs)
            .map(p => [
                p.status == 'alive' ? '⚪️' : '☠️',
                p.link,
                p.where,
                this.iffStatus(p.iff),
                p.affiliation.sort().join(", ")]);
    }

    pagesForTag = (dv, tag) => {
        const scope = dv.current().file;
        let pages;
        if (scope.folder.contains("miscellanea")) {
            pages = dv.pages(`"rowen/duet/miscellanea" and ${tag}`);
        } else if (scope.folder.contains("faerûn")) {
            pages = dv.pages(`"faerûn" and ${tag}`);
        } else {
            pages = dv.pages(tag);
        }
        return pages
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.name, 'asc');
    }

    itemsForTag = (dv, tag, type) => {
        const pages = this.pagesForTag(dv, tag);
        return pages
            .where(p => p.type == type)
            .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`);
    }

    logsForTag = (dv, tag) => {
        return dv.pages(`${tag}`)
            .where(p => p.file.folder.startsWith("rowen"))
            .sort(p => p.file.name, 'asc')
            .map(k => {
                return `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`
            });
    }

    itemsInFolder = (dv, type) => {
        const scope = dv.current().file;
        return this.folderPages(dv)
            .where(p => p.type == type)
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.name, 'asc')
            .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`);
    }

    pagesInFolder = (dv) => {
        const scope = dv.current().file;
        return this.folderPages(dv)
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.path, 'asc')
            .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`);
    }

    folderIndex = (dv, w = (p) => true) => {
        const pg = dv.current().file;
        const pages = this.folderPages(dv)
            .where(p => p.file.path != pg.path)
            .where(w);

        this.index(dv, pg, pages);
    }

    index = (dv, pg, pages) => {
        const groups = pages
            .map(p => {
                let title = (p.file.aliases[0] ? p.file.aliases[0] : p.file.name);
                let link = `[${title}](/${p.file.path})`;
                let folder = p.file.folder;
                return [folder, link, title, p.file.name];
            })
            .groupBy(p => p[0]);

        groups.forEach(g => {
            if (g.key != pg.folder) {
                dv.header(3, g.key);
            }
            const sortKey = g.key.substring(g.key.lastIndexOf('/') + 1);
            dv.list(g.rows
                .sort(r => r, 'asc', (r1, r2) => {
                    if(r1[3] === sortKey) {
                        return -1;
                    } else if (r2[3] === sortKey) {
                        return 1;
                    }
                    return r1[2].localeCompare(r2[2]);
                })
                .map(r =>  r[1] + (r[3] === sortKey ? " (index)" : "")));
        })
    }

    faire = async (type) => {
        return this.tableRoll(`[](/faerûn/places/waterdeep/sea-maidens-faire.md#^${type})`);
    }

    mood = async () => {
        return this.tableRoll("[](/compendium/tables/mood-tables.md#^mood-table)");
    }

    secrets = async (type) => {
        return this.tableRoll(`[](/rowen/secrets.md#^${type})`);
    }

    tavern = async (type) => {
        let result = await this.tableRoll(`[](/rowen/encounters/trollskull-manor-tables.md#^${type})`);
        if ( type == 'visiting-patrons' ) {
            result = result.replaceAll(/,? ?\(\d+\) /g, '\n    - [ ] ')
        }
        while ( result.contains("%mood%") ) {
            const mood = await this.mood();
            result = result.replace("%mood%", `_(${mood})_`);
        }
        return result;
    }

    weather = async (season) => {
        return this.tableRoll(`[](/rowen/encounters/waterdeep-weather.md#^${season})`);
    }

    tableRoll = async (lookup) => {
        let re = /`dice:(.+?)`/;
        let match;
        const dice = window.app.plugins.plugins['obsidian-dice-roller'];
        let diceResult = await dice.parseDice(lookup, '');
        let result = diceResult.result;
        while ((match = re.exec(result)) !== null) {
            diceResult = await dice.parseDice(match[1], '');
            result = result.replace(match[0], diceResult.result);
        }
        return result;
    }
}
