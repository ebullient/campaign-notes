class Campaign {
    EVENT_CODES = ['🪕', '📰', '🧵', '👤', '😈', '🗣️', '🗿', '🐲', '😵', '🥸', '🦹',
        '👺', '💃', '🧝🏿', '🌿', '🪬', '🎻', '🏰', '🌹', '🧙‍♀️', '👾', '⚔️', '🐀'];

    constructor() {  // Constructor
        console.log("Creating Campaign");

        this.monsterSize = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
        this.monsterType = ['Aberration', 'Beast', 'Celestial', 'Construct',
            'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze',
            'Plant', 'Undead'];
        this.eventRegexp = /(<span[^>]*>)([\s\S]*?)<\/span>/g;
    }

    /**
     * Folders that should be skipped when prompting for a folder
     * to add a new note to.
     * @param {string} fullname full path of folder (from vault root)
     * @return {boolean} true to include folder, false to exclude it
     */
    chooseFolderFilter = (fullname) => !fullname.startsWith("assets") && !fullname.contains("archive");

    /**
     * Files that should be skipped when calculating previous and next links.
     * Must return a boolean.
     * @param {string} folder full path of folder (from vault root)
     * @param {string} filename (excludes path)
     * @return {boolean} true to include file, false to exclude it
     */
    prevNextFilter = (folder, filename) => {
        const foldername = folder.substring(folder.lastIndexOf('/') + 1);
        return !filename.contains('Untitled') && !filename.contains(foldername);
    }

    /**
     *
     */
    sessionFileNamePattern = (folder) => {
        if (folder.startsWith("witchlight")) {
            return /^session-(\d{3}).*$/g;
        } else {
            return /^.*(\d{4}-\d{2}-\d{2}).*$/g;
        }
    }

    nextSessionDate = (folder, next) => {
        if (folder.startsWith("witchlight")) {
            return `session-${next + 1}`;
        } else {
            return this.nextWeek(next).format("YYYY-MM-DD");
        }
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
        if (scope.folder.contains("heist")) {
            return dv.pages(`"heist" and (${tag})`);
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
        switch (type) {
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
            case 'npc':
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
            .replace(/[:'"&,!]+/g, '')         // remove quotes, colons, ampersands, commas
            .replace(/[\s_]+/g, '-')         // replace spaces and low dash
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

        if (folders.length > 0) {
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

        const pattern = this.sessionFileNamePattern(folder);
        console.log(pattern);

        // List all files in the folder (sorted list)
        // Grab the last 4, iterate backwards until you find a
        // file that matches .*YYYY-MM-DD.* (e.g. skip Untitled and folder note)
        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files.slice(-4);
        let lastSession = files.pop();
        console.log(lastSession);
        while (!lastSession.match(pattern)) {
            lastSession = files.pop();
        }

        // Lift the date/session number out of the file name; find the next one
        const prev = lastSession.replaceAll(pattern, "$1");
        const nextName = this.nextSessionDate(folder, prev);

        // Return the folder, the next name or date, the previous name or date, and
        // a tag for the folder (see folderToTag)
        return {
            folder: folder,
            next: nextName,
            prev,
            lastSession,
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
        console.log(filename);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files
            .filter(f => this.prevNextFilter(folder, f.replace(`${folder}/`, "")));
        files.sort();
        console.log(files);

        // Starting from the end, walk backwards through
        // files in the folder to find "this" file
        // Return the name of the file preceeding it
        const fullname = `${folder}/${filename}.md`;
        for (let i = files.length - 1; i > 0; i--) {
            if (files[i] == fullname) {
                console.log("found this file: " + fullname);
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

    pad = (x) => {
        return `${x}`.padStart(2, '0');
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
            .sort(p => this.sortByName(p), 'asc')
            .map(k => {
                var type = "unknown";
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/group/')) {
                        type = tag.substring(11);
                    } else if (type === "unknown") {
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
            .sort(p => this.sortByName(p), 'asc')
            .map(k => {
                var type = 'location';
                var where = 'region';
                var affiliation = [];
                k.tags.forEach((tag) => {
                    if (tag.startsWith('type/')) {
                        type = tag.substring(5);
                    } else if (tag.startsWith('region/')) {
                        where = tag.substring(tag.lastIndexOf('/') + 1);
                    } else if (tag.startsWith('group/')) {
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
        return dv.pages(query ? query : `"${scope.folder}"`)
            .where(p => p.encounter)
            .sort(p => this.sortByName(p), 'asc')
            .map(k => {
                var link = this.pageToLink(k);
                var where = 'region';
                var affiliation = [];
                var level = isNaN(k.file.name[0]) ? '' : k.file.name[0];

                if (k.tags) {
                    k.tags
                        .filter(t => t != null && t.length > 0)
                        .forEach((tag) => {
                            if (tag.startsWith('place/')) {
                                where = tag.substring(6);
                            } else if (where == 'region' && tag.startsWith('region/')) {
                                where = tag.substring(7);
                            } else if (tag.startsWith('group/')) {
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

    pageToListItem = (k, type) => {
        return `<small>(${k.file.path.substring(0, k.file.path.indexOf('/'))})</small> ${this.pageToLink(k, type)}`;
    }

    pageToLink = (k) => {
        return `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`;
    }

    // For pages with mixed types (location and npc).
    // If the page has a frontmatter attribute of the specified type, use that as the link text
    // Otherwise use the first alias
    pageToLink = (k, type) => {
        let text = k.file.name;
        if (k.file && k.file.frontmatter && k.file.frontmatter[type]) {
            text = k.file.frontmatter[type];
        } else if (k.file.aliases[0]) {
            text = k.file.aliases[0];
        }
        return `[${text}](/${k.file.path})`;
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
            .sort(p => this.sortByName(p), 'asc')
            .sort(p => p.file.path.substring(0, p.file.path.indexOf('/')), 'asc');
    }

    itemsForTag = (dv, tag, type) => {
        const pages = this.pagesForTag(dv, tag);
        console.log(pages);
        return pages
            .where(p => this.matchType(p, type))
            .sort(p => this.sortByName(p), 'asc')
            .sort(p => p.file.path.substring(0, p.file.path.indexOf('/')), 'asc')
            .map(k => this.pageToListItem(k, type));
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
            .sort(p => this.sortByName(p), 'asc')
            .map(k => this.pageToLink(k));
    }

    pagesInFolder = (dv) => {
        const scope = dv.current().file;
        return this.folderPages(dv)
            .where(p => p.file.path != scope.path)
            .sort(p => this.sortByPath(p), 'asc')
            .map(k => this.pageToLink(k));
    }

    folderIndex = (dv, w = (p) => true) => {
        const pg = dv.current().file;
        const pages = this.folderPages(dv)
            .where(p => p.file.path != pg.path)
            .where(w);

        this.index(dv, pg, pages);
    }

    sortByName = (p) => {
        if (p.file.frontmatter && p.file.frontmatter.sort) {
            return p.file.frontmatter.sort + p.file.name;
        }
        return p.file.name;
    }

    sortByPath = (p) => {
        if (p.file.frontmatter && p.file.frontmatter.sort) {
            return p.file.frontmatter.sort + p.file.path;
        }
        return p.file.path;
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
                    if (r1[3] === sortKey) {
                        return -1;
                    } else if (r2[3] === sortKey) {
                        return 1;
                    }
                    return r1[2].localeCompare(r2[2]);
                })
                .map(r => r[1] + (r[3] === sortKey ? " (index)" : "")));
        })
    }

    // Resolve table roll from template
    faire = async (type) => {
        return this.tableRoll(`[](heist/waterdeep/places/sea-maidens-faire.md#^${type})`);
    }

    // Resolve table roll from template
    mood = async () => {
        return this.tableRoll("[](assets/tables/mood-tables.md#^mood-table)");
    }

    // Resolve table roll from template
    news = async () => {
        const paper = await this.tableRoll(`[](heist/tables/news.md#^papers)`);
        const news = await this.tableRoll(`[](heist/tables/news.md#^news)`);
        return `${paper} ${news}`;
    }
    thread = async () => {
        const paper = await this.tableRoll(`[](heist/tables/news.md#^papers)`);
        const news = await this.tableRoll(`[](heist/tables/news.md#^thread)`);
        return `${paper} ${news}`;
    }
    reviews = async () => {
        const paper = await this.tableRoll(`[](heist/tables/news.md#^papers)`);
        const news = await this.tableRoll(`[](heist/tables/news.md#^reviews)`);
        return `${paper} ${news}`;
    }
    rumors = async () => {
        return this.tableRoll(`[](heist/tables/rumors.md#^rumors)`);
    }

    // Resolve table roll from template
    tavern = async (type) => {
        let result = await this.tableRoll(`[](heist/tables/trollskull-manor-tables.md#^${type})`);
        if (type == 'visiting-patrons') {
            result = result.replaceAll(/,? ?\(\d+\) /g, '\n    - ')
        }
        while (result.contains("%mood%")) {
            const mood = await this.mood();
            result = result.replace("%mood%", `_[${mood}]_`);
        }
        if (result.contains("🔹")) {
            result = result.replaceAll(/\s*🔹\s*/g, '\n    > ');
            console.log(result);
        }
        return result;
    }

    // Resolve table roll from template
    weather = async (season) => {
        return await this.tableRoll(`[](heist/tables/waterdeep-weather.md#^${season})`);
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

    // Harptos Calendar

    compareHarptosDate = (a, b) => {
        const as = a.toLowerCase().split('-');
        const bs = b.toLowerCase().split('-');
        // compare year as[0], then month as[1], then day as[2], then offset as as[3]
        if (as[0] == bs[0]) {
            if (as[1] == bs[1]) {
                if (as[2] == bs[2]) {
                    if (as.length > 3 && bs.length > 3) {
                        return Number(as[3]) - Number(bs[3]);
                    }
                    return 0;
                }
                return Number(as[2]) - Number(bs[2]);
            }
            return this.monthSort(as[1]) - this.monthSort(bs[1]);
        }
        return Number(as[0]) - Number(bs[0]);
    }

    /**
     * Calculate the next day that should be logged, according to the Harptos calendar.
     * This assumes files with the following format:
     * - single day:   1498-ches-09
     * - several days: 1498-klythorn-09-11-optional-other-stuff
     *
     * Once it has found the last day.. figure out the _next_ day, with rollover
     * for the year.
     * @return {object} the discovered date (proposal) and the tag associated with this folder
     */
    nextHarptosDay = async (tp) => {
        const folder = tp.file.folder(true);
        console.log("Looking for files in %s", folder);

        const fileList = await app.vault.adapter.list(folder);
        const files = fileList.files
            .filter(f => f.match(/^.*\d{4}-[^-]+-.*/))
            .toSorted((a, b) => compareHarptosDate(a, b));
        let lastLog = files.pop();
        console.log("Found lastlog", lastLog);

        const date = this.splitDateString(lastLog);
        console.log("Found date in %o", date);

        // Find the next available day
        switch (date.month) {
            case 39: // midsummer
                if (date.year % 4 == 0) {
                    date.day = 2; // Shieldmeet is 2nd day of intercalary month
                    date.month += 1;
                    break;
                }
            case 31: // midwinter
            case 35: // greengrass
            case 40: // shieldmeet
            case 43: // highharvestide
            case 46: // feast of the moon
                date.day = 1;
                date.month += 1;
                break;
            case 47: // nightal, end of year
                if (date.day == 30) {
                    date.month = 30;
                    date.year += 1;
                    date.day = 1;
                } else {
                    date.day += 1;
                }
                break;
            default:
                if (date.day == 30) {
                    date.day = 1;
                    date.month += 1;
                } else {
                    date.day += 1;
                }
                break;
        }
        console.log("%o", date);
        return {
            date: `${date.year}-${this.monthName(date.month)}-${this.pad(date.day)}`,
            tag: this.folderToTag(folder)
        };
    }

    /**
     * Harptos filename and heading
     * @param {string} dateStr date to use for new file (result of prompt)
     * @param {string} fallback valid date string (e.g. from nextHarptosDay result)
     * @returns {object} filename (padded date), pretty heading (formatted date), season, date object, monthName
     */
    harptosDay = (dateStr) => {
        const date = this.splitDateString(dateStr);
        const monthName = this.monthName(date.month, date.day);
        const season = this.faerunSeason(date.month, date.day);
        const pretty = `${monthName} ${date.day}, ${date.year}`;
        return {
            filename: `${date.year}-${this.monthName(date.month)}-${this.pad(date.day)}`,
            sort: `${date.year}-${date.month}-${this.pad(date.day)}`,
            heading: pretty,
            season: season,
            date: date,
            monthName: monthName
        }
    }

    /**
     * Split a string into harptos calendar compatible segments.
     * This assumes files with the following format:
     * - single day:   1498-ches-09     -> { year: 1498, month: 33, day: 9}
     * - several days: 1498-tarsakh-09-11  -> { year: 1498, month: 34, day: 11}
     * (This doesn't work for ranges that span special days or months)
     * @param {string} string A date string
     * @returns {object} date object containing year, month, day
     */
    splitDateString = (string) => {
        if (string.contains("/")) {
            const pos = string.lastIndexOf('/') + 1;
            string = string.substring(pos);
        }
        string = string.replace('.md', '');
        const segments = string.toLowerCase().split('-');
        console.log("splitDateString", string, segments);

        let year = parseInt(segments[0]);
        let month = this.monthSort(segments[1]);
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

    monthSort = (m) => {
        switch (m) {
            case 'hammer': return 30;
            case 'midwinter': return 31;
            case 'alturiak': return 32;
            case 'ches': return 33;
            case 'tarsakh': return 34;
            case 'greengrass': return 35;
            case 'mirtul': return 36;
            case 'kythorn': return 37;
            case 'flamerule': return 38;
            case 'midsummer': return 39;
            case 'shieldmeet': return 40;
            case 'eleasis': return 41;
            case 'eleint': return 42;
            case 'highharvestide': return 43;
            case 'marpenoth': return 44;
            case 'uktar': return 45;
            case 'feast':
            case 'feast of the moon':
                return 46;
            case 'nightal': return 47;
        }
    }

    faerunSeason = (m, d) => {
        switch (m) {
            case 'hammer':
            case 1:
            case 'alturiak':
            case 2:
            case 'midwinter':
                return 'winter';

            case 'tarsakh':
            case 4:
            case 'mirtul':
            case 5:
            case 'greengrass':
                return 'spring';

            case 'flamerule':
            case 7:
            case 'eleasis':
            case 8:
            case 'midsummer':
            case 'shieldmeet':
                return 'summer';

            case 'marpenoth':
            case 10:
            case 'uktar':
            case 11:
            case 'highharvestide':
            case 'the Feast of the Moon':
                return 'autumn';

            case 'ches':
            case 3:
                return d < 19
                    ? 'winter'
                    : 'spring';
            case 'kythorn':
            case 6:
                return d < 20
                    ? 'spring'
                    : 'summer';
            case 'elient':
            case 9:
                return d < 21
                    ? 'summer'
                    : 'autumn';
            case 'nightal':
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
        if (!Number.isInteger(m)) {
            return m;
        }
        if ((m == 1 && d == 31) || (m == 2 && d == 0)) {
            return 'Midwinter';
        }
        if ((m == 4 && d == 31) || (m == 5 && d == 0)) {
            return 'Greengrass';
        }
        if (m == 7 && d == 31) {
            return 'Midsummer';
        }
        if (m == 8 && d == 0) {
            return 'Shieldmeet';
        }
        if ((m == 9 && d == 31) || (m == 10 && d == 0)) {
            return 'Highharvestide';
        }
        if ((m == 11 && d == 31) || (m == 12 && d == 0)) {
            return 'Feast of the Moon';
        }

        switch (m) {
            case 30:
            case 1:
                return 'Hammer';
            case 31:
                return 'Midwinter';
            case 32:
            case 2:
                return 'Alturiak';
            case 33:
            case 3:
                return 'Ches';
            case 34:
            case 4:
                return 'Tarsakh';
            case 35:
                return 'Greengrass';
            case 36:
            case 5:
                return 'Mirtul';
            case 37:
            case 6:
                return 'Kythorn';
            case 38:
            case 7:
                return 'Flamerule';
            case 39:
                return 'Midsummer';
            case 40:
                return 'Shieldmeet';
            case 41:
            case 8:
                return 'Elesias';
            case 42:
            case 9:
                return 'Eleint';
            case 43:
                return 'Highharvestide';
            case 44:
            case 10:
                return 'Marpenoth';
            case 45:
            case 11:
                return 'Uktar';
            case 46:
                return 'Feast of the Moon';
            case 47:
            case 12:
                return 'Nightal';
        }
    }

    eventRegex = () => this.eventRegexp;

    eventSpan = (match, suffix) => {
        const text = match[1];
        const sort = text.replace(/.*data-date=['"](.*?)['"].*/g, '$1');
        const date = text.replace(/.*data-date=['"](.*?)-\d{2}['"].*/g, '$1');

        let name = text.contains('data-name="')
            ? text.replace(/.*data-name="(.*?)".*/g, '$1')
            : text.replace(/.*data-name='(.*?)'.*/g, '$1');
        if (!name.endsWith('.') && !name.endsWith('!')) {
            name += '.';
        }

        let data = match[2].trim();
        if (data.length > 0 && !data.endsWith('.') && !data.endsWith('!')) {
            data += '.';
        }

        return `<span class="timeline" data-date="${sort}">\`${date}\` *${name}* ${data} ${suffix}</span>`;
    }
}
