class Campaign {

    constructor() {  // Constructor
        console.log("Creating Campaign");

        this.monsterSize = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
        this.monsterType = ['Aberration', 'Beast', 'Celestial', 'Construct',
            'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze',
            'Plant', 'Undead'];
    }

    /**
     * Folders that should be skipped when prompting for a folder
     * to add a new note to.
     * @param {string} fullname full path of folder (from vault root)
     * @return {boolean} true to include folder, false to exclude it
     */
    chooseFolderFilter = (fullname) => !fullname.startsWith("assets");

    /**
     * Files that should be skipped when calculating previous and next links.
     * Must return a boolean.
     * @param {string} folder full path of folder (from vault root)
     * @param {string} filename (excludes path)
     * @return {boolean} true to include file, false to exclude it
     */
    prevNextFilter = (folder, filename) => {
        const foldername = folder.substr(folder.lastIndexOf('/') + 1);
        return !filename.contains('Untitled') && !filename.contains(foldername);
    }

    /**
     * Map a folder to a tag
     * @param {string} folder full path of folder (from vault root)
     * @returns {string} tag that should be associated with this folder
     */
    folderToTag = (foldername) => foldername.substring(0, foldername.indexOf('/'));

    /**
     * Adjust the query for folder pages
     * @param {*} dv Dataview api
     * @param {string} Query string
     * @returns {*} result of dataview query
     */
    folderPages = (dv, query) => {
        if (query === undefined) {
            return dv.pages(`"${dv.current().file.folder}"`);
        }
        // Adjust query (nested vault)
        if ( query === "miscellanea" ) {
            return dv.pages(`"heist/duet/miscellanea"`);
        }
        return dv.pages(query);
    }

    /**
     * Adjust the query for folder pages
     * @param {*} dv Dataview api
     * @param {*} scope Dataview current file
     * @param {string} tag string
     * @returns {*} result of dataview query
     */
    queryTagPages = (dv, scope, tag) => {
        if (scope.folder.contains("miscellanea")) {
           return dv.pages(`"heist/duet/miscellanea" and (${tag})`);
        } else if (scope.folder.contains("witchlight")) {
            return dv.pages(`"witchlight" and (${tag})`);
        }
        return dv.pages(tag);
    }

    /**
     * List filter: Match a dataview page to a "type", see itemsForTag
     * @param {*} p dataview page
     * @param {string} type string to match additional conditions
     * @returns {boolean} true to include page
     */
    matchType = (p, type) => {
        if (!p.tags) {
            // exclude all pages that don't have tags
            return false;
        }
        switch(type) {
            case 'area':
                return !!p.tags.find(t => t && t.startsWith('type/area'));
            case 'encounter':
                // has  encounter attribute: new / active / completed, etc.
                return p.encounter;
            case 'group':
                return !!p.tags.find(t => t && t.startsWith('type/group'));
            case 'item':
                return !!p.tags.find(t => t && t.startsWith('type/item'));
            case 'location':
                // include locations and areas
                return !!p.tags.find(t => t && (t.startsWith('type/location') || t.startsWith('type/area')));
            case 'npc' :
                // npc tags can be scoped: campaign/npc/...
                return !!p.tags.find(t => t && t.contains('npc/'));
        }
        // exclude all pages that don't match conditions above
        return false;
    }

    /**
     * Change a Title string into a desired filename format,
     * e.g. "Pretty Name" to pretty-name (lower-kebab / slugified)
     */
    toFileName = (name) => {
        return name
            .replace(/([a-z])([A-Z])/g, '$1-$2') // separate on camelCase
            .replace(/[\s_]+/g, '-')         // replace all spaces and low dash
            .replace(/['"]+/g, '')           // remove quotes
            .toLowerCase();                  // convert to lower case
    }

    /**
     * Prompt to select a target folder from a list of potential folders
     * for a new file from a filtered list of subfolders of
     * the specified folder (specify "/" or "" for the vault root)
     */
    chooseFolder = async (tp, folder) => {
        if (folder === "/") {
            folder = "";
        }
        const folders = Object.entries(app.vault.adapter.files)
            .filter(x => x[1].type === "folder")
            .filter(x => x[0].startsWith(folder))
            .filter(x => this.chooseFolderFilter(x[0]))
            .map(x => x[0]);

        if (folders.length > 0 ) {
            folders.sort();
            const choice = await tp.system.suggester(folders, folders);
            if (!choice) {
                warn("No choice selected. Using 'compendium'");
                return 'compendium';
            }
            return choice;
        }
        return folder;
    }

    /**
     * Prompt to select a tag from a list of potential tags for a new file.
     * The list will contain all tags that match the specified prefix,
     * and will include '--' to indicate none. If no value is chosen,
     * it will return the provided default value.
     */
    chooseTag = async (tp, prefix, value) => {
        let values = [];
        const filter = '#' + prefix;
        for (const itItem of Object.keys(app.metadataCache.getTags())) {
            if (itItem.startsWith(filter)) {
                values.push(itItem.substring(1));
            }
        }
        values.sort();
        values.unshift('--'); // add to the beginning
        const choice = await tp.system.suggester(values, values);
        if (!choice || choice === '--') {
            console.log(`No choice selected. Using ${value}`);
            return value;
        }
        return choice;
    }

    chooseTagOrEmpty = async (tp, prefix) => {
        let result = await this.chooseTag(tp, prefix, '--');
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
     * Quick math: create a date from the string, add 7 days
     * @param {string} input matching YYYY-MM-DD.*
     * @return {moment} date from the input string + 7 days
     */
    nextWeek = (input) => {
        const titledate = input.substring(0, 10);
        return moment(titledate).add(1, 'week');
    }

    /**
     * Create properties for the next session:
     * Assumes session logs are YYYY-MM-DD-something
     */
    nextSession = async (tp) => {
        const folder = tp.file.folder(true);
        console.log("Looking for files in %s", folder);

        // List all files in the folder (sorted list)
        // Grab the last 4, iterate backwards until you find a
        // file that matches .*YYYY-MM-DD.* (e.g. skip Untitled and folder note)
        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files.slice(-4);
        let lastSession = files.pop();
        while (!lastSession.match(/^.*\d{4}-\d{2}-\d{2}.*/)) {
            lastSession = files.pop();
        }

        // Lift the date out of the file name
        const date = lastSession.replaceAll(/^.*(\d{4}-\d{2}-\d{2}).*$/g, "$1");

        // Return the folder, the next date, the previous date, and
        // a tag for the folder (see folderToTag)
        return {
            folder: folder,
            next: this.nextWeek(date).format("YYYY-MM-DD"),
            lastSession: date,
            tag: this.folderToTag(folder)
        }
    }

    /**
     * Find the previous file from a filtered list of files
     * (see prevNextFilter)
     */
    prevFile = async (tp) => {
        const folder = tp.file.folder(true);
        const filename = tp.file.title;

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files
            .filter(f => this.prevNextFilter(folder, f.replace(`${folder}/`, "")));
        files.sort();

        // Starting from the end, walk backwards through
        // files in the folder to find "this" file
        // Return the name of the file preceeding it
        const fullname = `${folder}/${filename}`;
        for (let i = files.length - 1; i > 0 ; i--) {
            if (files[i] == fullname) {
                return files[i - 1].replace(`${folder}/`, "");
            }
        }
        // undefined
    }

    /**
     * Find the last file in a filtered list of files
     * (see prevNextFilter)
     */
    lastFile = async (tp) => {
        const folder = tp.file.folder(true);
        const filename = tp.file.title;
        console.log(filename);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files
            .filter(f => this.prevNextFilter(folder, f.replace(`${folder}/`, "")));
        files.sort();

        return files[files.length - 1].replace(`${folder}/`, "");
    }

    /**
     * Links for previous and next document (based on name-sort)
     */
    prevNext = async (tp) => {
        const folder = tp.file.folder(true);
        const filename = tp.file.title;

        // remove files that don't match the filter from the list
        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files
            .filter(f => this.prevNextFilter(folder, f.replace(`${folder}/`, "")));
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
        // result: { prev?: .., next?: ... }
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
     * @return {object} the discovered date (proposal) and the tag associated with this folder
     */
    nextHarptosDay = async (tp) => {
        const folder = tp.file.folder(true);
        console.log("Looking for files in %s", folder);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files.slice(-4);

        let lastLog = files.pop();
        while (!lastLog.match(/^.*\d{4}-\d{2}-\d{2}.*/)) {
            lastLog = files.pop();
        }

        const date = this.splitDateString(lastLog.replaceAll(/.*([0-9-]+).*/g, "$1"));
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
        return {
            date: `${date.year}-${this.pad(date.month)}-${this.pad(date.day)}`,
            tag: this.folderToTag(folder)
        };
    }

    /**
     * Harptos filename and heading
     * @param {string} dateStr date to use for new file (result of prompt)
     * @param {string} fallback valid date string (e.g. from nextHarptosDay result)
     * @returns {object} filename (padded date), pretty heading (formatted date), season, date object, monthName
     */
    harptosDay = (dateStr, fallback) => {
        if (!dateStr.match(/^[0-9-]+$/)) {
            dateStr = fallback;
        }
        const date = this.splitDateString(dateStr);
        const monthName = this.monthName(date.month, date.day);
        const season = this.faerunSeason(date.month, date.day);
        const pretty = `${monthName} ${date.day}, ${date.year}`;
        return {
            filename: `${date.year}-${this.pad(date.month)}-${this.pad(date.day)}-${this.toFileName(monthName)}`,
            heading: pretty,
            season: season,
            date: date,
            monthName: monthName
        }
    }

    /**
     * Split a string into harptos calendar compatible segments.
     * This assumes files with the following format:
     * - single day:   1498-08-09     -> { year: 1498, month: 8, day: 9}
     * - several days: 1498-08-09-11  -> { year: 1498, month: 8, day: 11}
     * (This doesn't work for ranges that span special days or months)
     * @param {string} string A date string
     * @returns {object} date object containing year, month, day
     */
    splitDateString = (string) => {
        const segments = string.split('-');
        console.log("harptosDate: %o -> %o", string, segments);

        let year = parseInt(segments[0]);
        let month = parseInt(segments[1]);
        let day = parseInt(segments[2]);

        if (segments.length > 3 && !isNaN(segments[3])) {
            day = parseInt(segments[3]);
        }
        return {
            year: year,
            month: month,
            day: day
        }
    }

    pad = (x) => {
        return `${x}`.padStart(2, '0');
    }

    faerunSeason = (m, d) => {
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
        if (( m == 1 && d == 31) || ( m == 2 && d == 0)) {
            return 'Midwinter';
        }
        if (( m == 4 && d == 31) || ( m == 5 && d == 0)) {
            return 'Greengrass';
        }
        if (m == 7 && d == 31) {
            return 'Midsummer';
        }
        if (m == 8 && d == 0) {
            return 'Shieldmeet';
        }
        if (( m == 9 && d == 31) || ( m == 10 && d == 0)) {
            return 'Highharvestide';
        }
        if (( m == 11 && d == 31) || ( m == 12 && d == 0)) {
            return 'Feast of the Moon';
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

    /* Sort npcs */
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

    /**
     * Filter dataview pages to those that are groups (using matchType).
     * Map these pages to an array: [pagelink, type]
     * - type tags: either "type/group/usethis" or ".../group/usethis"
     * @param {*} pages Dataview result, array of pages
     * @returns Array. Each array element is an array of [pagelink, type]
     */
    filterFactions = (pages) => {
        const typeRegex = /group\/([^/]+)/;
        return pages
            .where(p => this.matchType(p, 'group'))
            .sort(p => p.file.name, 'asc')
            .map(k => {
                var type = "unknown";
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/group/')) {
                        type = tag.substring(11);
                    } else if ( type === "unknown" ) {
                        const found = tag.match(typeRegex);
                        if (found) {
                            type = found[1];
                        }
                    }
                });

                return [this.pageToLink(k), type]
            });
    }

    /**
     * Filter dataview pages to those that are locations (using matchType).
     * Map these pages to an array: [pagelink, type, where, affiliation]:
     * - type tags: "type/usethis"
     * - where tags: "region/usethis"
     * - affiliation tags: "group/usethis"
     * @param {*} pages Dataview result, array of pages
     * @returns Array. Each array element is an array of [pagelink, type, where, affiliation]
     */
    filterPlaces = (pages) => {
        return pages
            .where(p => this.matchType(p, 'location'))
            .sort(p => p.file.name, 'asc')
            .map(k => {
                var type = 'location';
                var where = 'region';
                var affiliation = [];
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/')) {
                        type = tag.substring(5);
                    } else if (tag.startsWith('region/')) {
                        where = tag.substring(tag.lastIndexOf('/')+1);
                    } else if (tag.startsWith('group/') ) {
                        affiliation.push(tag.replace('group/', ''));
                    }
                });

                return [this.pageToLink(k), type, where, affiliation.sort().join(", ")]
            });
    }

    /**
     * Filter dataview pages to those that are npcs (using matchType).
     * Map these pages to an array: [pagelink, status, iff, where, affiliation]:
     * - status (e.g. alive, dead) tags: ".../npc/usethis"
     * - iff (is friend or foe, e.g. friend, enemy, positive, negative, unknown) tags: ".../iff/usethis"
     * - where tags: "place/usethis" or "region/usethis"
     * - affiliation tags: "group/usethis"
     * @param {*} pages Dataview result, array of pages
     * @returns Sorted array (see sortNpcs). Each array element is an array of [pagelink, status, iff, where, affiliation]
     */
    filterNpcs = (pages) => {
        return pages
            .where(p => this.matchType(p, 'npc'))
            .map(p => {
                var status = 'alive';
                var iff = 'unknown';
                var where = 'unknown';
                var region = 'unknown';
                var affiliation = [];
                p.tags.forEach((tag) => {
                    const iffPos = tag.indexOf("iff/");
                    const npcPos = tag.indexOf("npc/");
                    if (iffPos >= 0) {
                        iff = tag.substring(iffPos + 4);
                    } else if (npcPos >= 0) {
                        status = tag.substring(npcPos + 4);
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
                    link: this.pageToLink(p),
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

    /**
     * Filter dataview pages to encounters that match the specified query (or the current folder)
     * Map encounter pages to an array containing [pagelink, encounter status, where, affiliation]
     * - value of encounter attribute (e.g. new, pending, active, complete)
     * - where tags: "place/usethis" or "region/usethis"
     * - affiliation tags: "group/usethis"
     * @param {*} pages Dataview result, array of pages
     * @returns Sorted array (see sortNpcs). Each array element is an array of [pagelink, status, iff, where, affiliation]
     */
    filterEncounters = (dv, query) => {
        const scope = dv.current().file;
        return dv.pages(query ? query : `"${scope.folder}"` )
            .where(p => p.encounter)
            .sort(p => p.file.name, 'asc')
            .map(k => {
                var link = this.pageToLink(k);
                var where = 'region';
                var affiliation = [];
                var level = isNaN(k.file.name[0]) ? '' : k.file.name[0];

                if ( k.tags) {
                    k.tags.forEach((tag) => {
                        if (tag.startsWith('place/')) {
                            where = tag.substring(6);
                        } else if (where == 'region' && tag.startsWith('region/')) {
                            where = tag.substring(7);
                        } else if (tag.startsWith('group/') ) {
                            affiliation.push(tag.replace('group/', ''));
                        }
                    });
                }

                return [link, k.encounter, where, affiliation.sort().join(", "), level]
            });
    }

    pageToListItem = (k) => {
        return `<small>(${k.file.path.substring(0, k.file.path.indexOf('/'))})</small> ${this.pageToLink(k)}`;
    }

    pageToLink = (k) => {
        return `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`;
    }

    /**
     * Find pages (excluding this one) that have the specified tag
     * See queryTagPages for further constraints based on current scope
     * @param {*} pages Dataview result, array of pages
     * @returns Array of pages sorted by file name, then by first path segment (grouped by folder root)
     */
    pagesForTag = (dv, tag) => {
        const scope = dv.current().file;
        return this.queryTagPages(dv, scope, tag)
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.name, 'asc')
            .sort(p => p.file.path.substring(0, p.file.path.indexOf('/')), 'asc');
    }

    itemsForTag = (dv, tag, type) => {
        const pages = this.pagesForTag(dv, tag);
        return pages
            .where(p => this.matchType(p, type))
            .sort(k => this.pageToListItem(k))
            .map(k => this.pageToListItem(k));
    }

    logsForTag = (dv, tag) => {
        return this.pagesForTag(dv, tag ? `[[]] or ${tag}` : "[[]]")
            .where(p => p.file.folder.contains("sessions"))
            .sort(p => p.file.path.substring(0, p.file.path.indexOf('/')), 'asc')
            .map(k => this.pageToListItem(k));
    }

    linkedToPage = (dv) => {
        const pages = this.pagesForTag(dv, "[[]]");
        return pages.map(k => this.pageToListItem(k));
    }

    itemsInFolder = (dv, type) => {
        const scope = dv.current().file;
        return this.folderPages(dv)
            .where(p => this.matchType(p, type))
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.name, 'asc')
            .map(k => this.pageToLink(k));
    }

    pagesInFolder = (dv) => {
        const scope = dv.current().file;
        return this.folderPages(dv)
            .where(p => p.file.path != scope.path)
            .sort(p => p.file.path, 'asc')
            .map(k => this.pageToLink(k));
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
                let folder = p.file.folder;
                let link = this.pageToLink(p);
                let title = (p.file.aliases[0] ? p.file.aliases[0] : p.file.name);
                return [folder, link, title, p.file.name];
            })
            .groupBy(p => p[0]); // group by folder

        groups.forEach(g => {
            if (g.key != pg.folder) {
                dv.header(3, g.key);
            }

            // Sort folder notes first
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

    // Resolve table roll from template
    faire = async (type) => {
        return this.tableRoll(`[](/heist/waterdeep/places/sea-maidens-faire.md#^${type})`);
    }

    // Resolve table roll from template
    mood = async () => {
        return this.tableRoll("[](/compendium/tables/mood-tables.md#^mood-table)");
    }

    // Resolve table roll from template
    secrets = async (type) => {
        return this.tableRoll(`[](/heist/secrets.md#^${type})`);
    }

    // Resolve table roll from template
    tavern = async (type) => {
        let result = await this.tableRoll(`[](/heist/encounters/trollskull-manor-tables.md#^${type})`);
        if ( type == 'visiting-patrons' ) {
            result = result.replaceAll(/,? ?\(\d+\) /g, '\n    - ')
        }
        while ( result.contains("%mood%") ) {
            const mood = await this.mood();
            result = result.replace("%mood%", `_[${mood}]_`);
        }
        if ( result.contains("🔹") ) {
            result = result.replaceAll(/\s*🔹\s*/g, '\n        > ');
            console.log(result);
        }
        return result;
    }

    // Resolve table roll from template
    weather = async (season) => {
        return this.tableRoll(`[](/heist/waterdeep/waterdeep-weather.md#^${season})`);
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
