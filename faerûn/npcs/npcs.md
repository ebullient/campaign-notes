---
obsidianUIMode: preview
---
# npcs Overview
 
```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterNpcs(Campaign.folderPages(dv, "faerûn"));
dv.table(["⚪️", "Name", "Where", "IFF", "Affiliation"], elements)
```