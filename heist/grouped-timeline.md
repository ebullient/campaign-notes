---
tags: [ timeline, heist/events ]
---
# Grouped timelines
- [Calendar](https://app.fantasy-calendar.com/calendars/4067bba61cefcf17988a8aa12789708a)

```dataviewjs
const { Campaign } = window.customJS;
const codes = ['🪕', '📰', '🧵', '👤', '😈', '🗣️', '🗿', '🐲', '😵', '🥸', '🦹', '👺', '💃', '🧝🏿', '🌿', '🪬', '🎻', '🏰', '🌹', '🧙‍♀️', '👾', '⚔️', '🐀'];

const emoji = {};
const regexp = /(<span[^>]*>)([\s\S]*?)<\/span>/g;

async function lookAtText(file) {
    const suffix = file.endsWith('story-events.md') ? '' : ` [➹](${file} "tg")`;
    const content = await dv.io.load(file);
    const matches = content.matchAll(Campaign.eventRegex());
    for (const match of matches) {
        const text = Campaign.eventSpan(match, suffix);

        codes.forEach(e => {
            if (text.contains(e)) {
                emoji[e] = emoji[e] || [];
                emoji[e].push(text);
            }
        });
    }
}

function compareSpan(a, b) {
    const as = a.replace(/.*data-date=['"](.*?)['"].*/g, '$1');
    const bs = b.replace(/.*data-date=['"](.*?)['"].*/g, '$1');
    return Campaign.compareHarptosDate(as, bs);
}

function list(emoji, level, icon, heading) {
    if (emoji[icon]) {
        dv.header(level, `${icon} ${heading}`);
        emoji[icon].sort(compareSpan);
        dv.list(emoji[icon]);
    }
}

const file = "heist/events/story-events.md";
await lookAtText(file);

const promises = dv.pages('"heist/sessions"')
    .map(async(p) => await lookAtText(p.file.path));

await Promise.all(promises);

list(emoji, 2, '📰', "Set up");

list(emoji, 3, "🗣️", "Dagult Neverember");
list(emoji, 3, "🐲", "Aurinax");
list(emoji, 3, "😵", "Dalahkar's Trail");
list(emoji, 3, "🗿", "Where is the Stone?");

list(emoji, 2, "🧵", "Central thread");

dv.header(2, "Allied Factions");

list(emoji, 3, "⚔️", "Doom Raiders");
list(emoji, 3, "🪬", "Force Grey");
list(emoji, 3, "🎻", "Harpers");

dv.header(2, "Opposing Factions");

list(emoji, 3, "🧝🏿", "Bregan D'aerthe");
list(emoji, 3, "👺", "Cassalanters");
list(emoji, 3, "💃", "Gralhund's (Cassalanters / Zhenterim)");
list(emoji, 3, "🦹", "Manshoon Clone / Zhenterim");
list(emoji, 3, "👾", "Xanathar Guild");

dv.header(2, "Nusiances");

list(emoji, 3, '🥸', 'Emmek Frewn');
list(emoji, 3, "🐀", "Shard Shunners");

dv.header(2, "Other factions and actors");

list(emoji, 3, "🌿", "Emerald Enclave");
list(emoji, 3, "🏰", "Lords' Alliance");
list(emoji, 3, "🌹", "Order of the Gauntlet");
list(emoji, 3, "🧙‍♀️", "Watchful Order");
```
