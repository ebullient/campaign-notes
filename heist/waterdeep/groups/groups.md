---
obsidianUIMode: preview
---
# Groups and Factions Overview

```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterFactions(Campaign.folderPages(dv, '"heist" or "faerûn"'));
dv.table(["Name", "Type"], elements)
```
