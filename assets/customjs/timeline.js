

class Timeline {
    RENDER_TIMELINE = /([\s\S]*?<!--TIMELINE BEGIN-->)[\s\S]*?(<!--TIMELINE END-->[\s\S]*?)/i;

    constructor() {  // Constructor
        const { Campaign } = window.customJS;
        this.Campaign = Campaign;
        this.event_codes = Campaign.EVENT_CODES;
        console.log("Creating Timeline renderer");
    }

    async invoke() {
        console.log("Render timelines");

        const HeistAPI = window.Calendarium.getAPI("Heist");
        const events = HeistAPI.getEvents();

        const groupByYear = this.groupByYear(HeistAPI, events);
        const timeline = app.vault.getAbstractFileByPath("heist/all-timeline.md");
        await this.renderTimeline(timeline, () => {
            let result = '\n';
            for (const year of Object.keys(groupByYear)) {
                result += this.list(groupByYear, 2, year, '');
            }
            return result;
        });

        const emoji = this.groupByEmoji(HeistAPI, events);
        const groupedTimeline = app.vault.getAbstractFileByPath("heist/grouped-timeline.md");
        console.log(emoji);
        await this.renderTimeline(groupedTimeline, () => {
            let result = '\n';
            result += this.list(emoji, 2, '📰', "Set up");
            result += '\n';

            result += this.list(emoji, 3, "🗣️", "Dagult Neverember");
            result += this.list(emoji, 3, "🐲", "Aurinax");
            result += this.list(emoji, 3, "😵", "Dalahkar's Trail");
            result += this.list(emoji, 3, "🗿", "Where is the Stone?");

            result += this.list(emoji, 2, "🧵", "Central thread");

            result += '\n';
            result += '## Allied Factions\n';
            result += '\n';

            result += this.list(emoji, 3, "⚔️", "Doom Raiders");
            result += this.list(emoji, 3, "🪬", "Force Grey");
            result += this.list(emoji, 3, "🎻", "Harpers");

            result += '\n';
            result += '## Opposing Factions\n';
            result += '\n';

            result += this.list(emoji, 3, "🧝🏿", "Bregan D'aerthe");
            result += this.list(emoji, 3, "👺", "Cassalanters");
            result += this.list(emoji, 3, "💃", "Gralhund's (Cassalanters / Zhenterim)");
            result += this.list(emoji, 3, "🦹", "Manshoon Clone / Zhenterim");
            result += this.list(emoji, 3, "👾", "Xanathar Guild");

            result += '\n';
            result += '## Nusiances\n';
            result += '\n';

            result += this.list(emoji, 3, '🥸', 'Emmek Frewn');
            result += this.list(emoji, 3, "🐀", "Shard Shunners");

            result += '\n';
            result += '## Other factions and actors\n';
            result += '\n';

            result += this.list(emoji, 3, "🌿", "Emerald Enclave");
            result += this.list(emoji, 3, "🏰", "Lords' Alliance");
            result += this.list(emoji, 3, "🌹", "Order of the Gauntlet");
            result += this.list(emoji, 3, "🧙‍♀️", "Watchful Order");
            return result;
        });
    }

    renderTimeline = async (file, renderer) => {
        await app.vault.process(file, (source) => {
            let match = this.RENDER_TIMELINE.exec(source);
            if (match) {
                source = match[1];
                source += renderer();
                source += match[2];
            }
            return source;
        });
    }


    groupByYear = (API, events) => {
        const groups = events.reduce((acc, event) => {
            const year = event.date?.year;
            if (isNaN(year) || !year) { // Filter out recurring events
                return acc;
            }
            acc[year] = acc[year] || []; // Create a new group if it doesn't exist
            acc[year].push(event); // Add the event to its corresponding group
            return acc;
        }, {});

        const sortedKeys = Object.keys(groups).sort(); // Sort the keys in ascending order
        const sortedGroups = sortedKeys.reduce((acc, key) => {
            groups[key].sort(API.compareEvents); // Sort the values
            acc[key] = groups[key];  // Assign the sorted groups based on the sorted keys
            return acc;
        }, {});

        return sortedGroups;
    }

    groupByEmoji = (API, events) => {
        const emoji = events.reduce((acc, event) => {
            // for each event
            this.event_codes.forEach(e => {
                // for each emoji
                if (event.name.contains(e)) {
                    acc[e] = acc[e] || [];
                    acc[e].push(event);
                }
            });
            return acc;
        }, {});
        Object.keys(emoji).forEach((icon) => emoji[icon].sort(API.compareEvents));
        return emoji;
    }

    list = (groups, level, key, description) => {
        let result = '';
        if (groups[key]) {
            result += `${"#".repeat(level)} ${key} ${description}\n`;
            result += "\n";
            groups[key].forEach((e) => {
                result += `- ${this.eventText(e)}\n`
            });
            result += "\n";
        }
        return result;
    }

    eventText = (event) => {
        const name = this.punctuate(event.name);
        const date = this.harptosEventDate(event);
        const data = this.punctuate(event.description);
        const suffix = event.note ? ` [➹](${event.note} "tg")` : '';

        return `<span data-timeline="${event.sort.timestamp}">\`${date}\` *${name}* ${data}${suffix}</span>`;
    }

    harptosEventDate = (event) => {
        const month = this.harptosZeroIndexMonth(event);
        const day = this.harptosDay(event);
        return `${event.date.year}-${month}${day}`;
    }

    harptosDay = (event) => {
        switch(event.date.month) {
            case 1:
            case 5:
            case 9:
            case 12:
                return '';
            default:
                return `-${event.date.day}`;
        }
    }

    harptosZeroIndexMonth = (event) => {
        switch (event.date.month) {
            case 0:
                return 'Hammer';
            case 1:
                return 'Midwinter';
            case 2:
                return 'Alturiak';
            case 3:
                return 'Ches';
            case 4:
                return 'Tarsakh';
            case 5:
                return 'Greengrass';
            case 6:
                return 'Mirtul';
            case 7:
                return 'Kythorn';
            case 8:
                return 'Flamerule';
            case 9:
                if (event.date.day == 2) {
                    return 'Shieldmeet';
                }
                return 'Midsummer';
            case 10:
                return 'Elesias';
            case 11:
                return 'Eleint';
            case 12:
                return 'Highharvestide';
            case 13:
                return 'Marpenoth';
            case 14:
                return 'Uktar';
            case 15:
                return 'Feast of the Moon';
            case 16:
                return 'Nightal';
        }
    }

    punctuate = (str) => {
        str = str.trim();
        if (!str.match(/.*[.!?]$/)) {
            str += '.';
        }
        return str;
    }
}