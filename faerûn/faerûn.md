---
aliases: ['Faerûn']
tags: 
- type/area
- region
---
# Faerûn
<span class="subhead">Continent</span>

<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [Groups](#Groups)</span>

![Map of Faerûn](/assets/attachments/map-faerun-highres.jpg)

## Locations

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '"faerûn" or "heist/waterdeep" or "archive/uvms/sword-coast"', 'location'));
```

## NPCs

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '"faerûn" or "heist/waterdeep" or "archive/uvms/sword-coast"', 'npc'));
```

## Groups

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '"faerûn" or "heist/waterdeep" or "archive/uvms/sword-coast"', 'group'));
```
