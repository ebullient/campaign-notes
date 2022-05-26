---
obsidianUIMode: preview
---
# Groups and Factions Overview

```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterFactions(Campaign.folderPages(dv, '"rowen" or "faerûn"'));
dv.table(["Name", "Type"], elements)
```