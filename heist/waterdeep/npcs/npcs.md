---
obsidianUIMode: preview
---
# NPC Overview
 
```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterNpcs(dv.pages('"heist/waterdeep" and #heist/iff'));
dv.table(["⚪️", "Name", "Where", "IFF", "Affiliation"], elements)
```