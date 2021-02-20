---
obsidianUIMode: preview
---
# Places Overview
 
```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterPlaces(Campaign.folderPages(dv, "faerûn"));
dv.table(["Name", "Type", "Where", "Affiliation"], elements)
```