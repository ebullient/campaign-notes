---
obsidianUIMode: preview
---
# npcs Overview
 
```dataviewjs
const { Campaign } = window.customJS;
const elements = Campaign.filterNpcs(dv.pages('"heist/waterdeep" and #rowen/iff'));
dv.table(["⚪️", "Name", "Where", "IFF", "Affiliation"], elements)
```