---
obsidianUIMode: preview
aliases: ["Encounters"]
---
# Encounters

```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterEncounters(dv);

dv.header(2, "Active");
dv.table(["Name", "Where", "Affiliation"], elements
    .filter(k => k[1] === 'active')
    .map(k => [k[0], k[2], k[3]]));

dv.header(2, "New");
dv.table(["Level", "Name", "Where", "Affiliation"], elements
    .filter(k => k[1] === 'new')
    .map(k => [k[4], k[0], k[2], k[3]]));

dv.header(2, "Other");
dv.table(["Name", "Status", "Where", "Affiliation"], elements
    .filter(k => k[1] !== 'new' && k[1] !== 'active')
    .map(k => [k[0], k[1], k[2], k[3]]));
```
