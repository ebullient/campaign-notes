---
tags: [ timeline, heist/events ]
---
# Timeline
- [Calendar](https://app.fantasy-calendar.com/calendars/4067bba61cefcf17988a8aa12789708a)

```dataviewjs
const { Campaign } = window.customJS;
const codes = ['🪕', '📰', '🧵', '👤', '😈', '🗣️', '🗿', '🐲', '😵', '🥸', '🦹', '👺', '💃', '🧝🏿', '🌿', '🪬', '🎻', '🏰', '🌹', '🧙‍♀️', '👾', '⚔️', '🐀'];

const events = [];
const regexp = /(<span[^>]*>)([\s\S]*?)<\/span>/g;

async function findEvents(file) {
    const suffix = file.endsWith('story-events.md') ? '' : ` [➹](${file} "tg")`;
    const content = await dv.io.load(file);
    const matches = content.matchAll(Campaign.eventRegex());
    for (const match of matches) {
        if (match[1].contains("ob-timelines")) {
            events.push(Campaign.eventSpan(match, suffix));
        }
    }
}

function groupEvents(events) {
  const groups = events.reduce((acc, event) => {
    const year = event.replace(/.*data-date=['"](\d{4}).*?['"].*/g, '$1');
    if (isNaN(year)) { // Filter out recurring events
        return acc;
    }
    if (!acc[year]) {
      acc[year] = []; // Create a new group if it doesn't exist
    }
    acc[year].push(event); // Add the event to its corresponding group
    return acc;
  }, {});
  
  const sortedKeys = Object.keys(groups).sort(); // Sort the keys in ascending order
  const sortedGroups = sortedKeys.reduce((acc, key) => {
    groups[key].sort(compareSpan); // Sort the values
    acc[key] = groups[key];        // Assign the sorted groups based on the sorted keys
    return acc;
  }, {});

  return sortedGroups;
}

function compareSpan(a, b) {
    const as = a.replace(/.*data-date=['"](.*?)['"].*/g, '$1');
    const bs = b.replace(/.*data-date=['"](.*?)['"].*/g, '$1');
    return Campaign.compareHarptosDate(as, bs);
}

const promises = dv.pages('"heist" AND #timeline')
    .map(async(p) => await findEvents(p.file.path));

await Promise.all(promises);
const groupedEvents = groupEvents(events);

for (const year of Object.keys(groupedEvents)) {
    dv.header(2, `${year}`);
    dv.list(groupedEvents[year]);
}
```
