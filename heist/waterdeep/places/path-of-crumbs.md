---
aliases: ["Path of Crumbs"]
tags: 
- type/location/shop/bakery
- group/waterdeep/guild/bakers-guild
- place/waterdeep/trollskull-alley/path-of-crumbs
- region/sword-coast-north/waterdeep/city-ward/north
---
# Path of Crumbs
<span class="subhead">Bakery, Trollskull Alley, North Ward of Waterdeep</span>

The sign above the door is wooden. There are no words, but the carving and paint clearly show a plate with half-eaten bread, and a trail of crumbs pointing toward the shop's door.

The shop is a two-story timber and brick building, with tall elf-wrought wooden shelves. The air is warm.

- **Owner** [Elyellas](../npcs/elyellas-graycastle.md)
- **Location** Delzorin Street, near the south entrance to Trollskull Alley

<span class="nav">[Selling](#Selling) [NPCs](#NPCs) [History](#History)</span>

## Selling
| Wares   | Cost | Inventory |
| ------- | ---- | --------- |
| Bread, fresh baked | 1-4 cp/loaf (depending on size, quality) | `dice: 1d6` |
| Pastries | 1 cp each, or if small, a dozen for 2 cp | `dice: 1d12` |
| Waybread (older, hard baked) | 2 cp/loaf | `dice: 1d8` |

## NPCs

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#place/waterdeep/trollskull-alley/path-of-crumbs', 'npc', 'faerûn'));
```

## History
```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.logsForTag(dv, '#place/waterdeep/trollskull-alley/path-of-crumbs'));
```

## Other

| dice: 1d10 | Smells |
|------------|---------|
| 1-5 |Baking bread laced with savory herbs. Rosemary is what you think of first |
|  6 |There is a fruity overtone to the air, and realize he must be making muffins or breads with fruit in them |
|  7 | The air smells rich: still bread, but maybe an egg bread, or a cheese pastry |
|  8 | The air smells strongly of apple! And you notice several pies cooling on a rack |
|  9 | The air smells strongly of berries! And you notice several delicate tarts either cooling on racks, or in the protected display cabinet for purchase |
|  10 | The air smells strongly of citrus! Maybe .. lemons? He has a few racks of cookies on display |
