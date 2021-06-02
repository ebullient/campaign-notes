---
aliases: ["Sword Mountains"]
type: location
tags:
  - type/region/mountains
  - region/sword-coast-north/sword-mountains
  - place/landmark/icespire-peak
---
# Sword Mountains
<span class="subhead">Mountain range in the Sword Coast North</span>

Steep, craggy, snow-capped mountains are home to scattered tribes of orcs and monsters.

**Icespire Peak** is tallest among them.

Their foothills are strewn with ruins of bygone kingdoms, and more than a few half-forgotten dungeons and tombs.

[[A shrine to Bahamut]], god of good dragons, is hidden in a network of caverns in the mountains. For more information on this location, see “Bronze Shrine.”


<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/sword-mountains')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/sword-mountains and "pc-logs"
```