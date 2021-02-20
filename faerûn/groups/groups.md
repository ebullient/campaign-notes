---
obsidianUIMode: preview
---
# Groups and Factions Overview

```dataviewjs
const typeRegex = /group\/([^/]+)/;
const { Campaign } = window.customJS;
const elements = Campaign.filterFactions(Campaign.folderPages(dv, "faerûn"));
dv.table(["Name", "Type"], elements)
```