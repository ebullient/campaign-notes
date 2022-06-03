---
obsidianUIMode: preview
---
# npcs Overview
 
```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterNpcs(Campaign.folderPages(dv, '"faerûn"'))
    .map(e => [e[0], e[1], e[2], e[4]]);
dv.table(["⚪️", "Name", "Where", "Affiliation"], elements)
```