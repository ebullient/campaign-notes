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

The shop is a two-story timber and brick building. It has a wooden sign above the door with a clear painting of aa plate with half-eaten bread, and a trail of crumbs pointing toward the shop's door.

Inside, the shop is warm and inviting. The walls are painted a light yellow, and the floor is a dark wood. There are several tables and chairs for patrons to sit and enjoy their purchases. There is a large display case with a variety of pastries and breads.

`dice: [](/heist/waterdeep/places/path-of-crumbs.md#^baking-smells)`

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
| 1-5 | The air smells of baking bread laced with savory herbs. Rosemary is what you think of first. |
|  6 | There is a rich, fruity tone to the air that makes you think of muffins |
|  7 | The air smells rich and slightly sweet. Maybe there are egg breads in the oven, or cheese pastries! |
|  8 | The air smells strongly of apple! And you notice several pies cooling on a rack |
|  9 | The air smells strongly of berries! And you notice several delicate tarts either cooling on racks, or in the protected display cabinet for purchase. |
|  10 | The air smells strongly of citrus! Maybe .. lemons? He has a few racks of cookies on display |
^baking-smells