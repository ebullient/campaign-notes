---
aliases: ["The Crags"]
type: location
tags: 
- type/region/mountains
- region/sword-coast-north/the-crags
---
# The Crags
<span class="subhead">Range of hills in the Sword Coast North</span>

Rocky, windswept hills are dotted with old mines and invested with monsters.

<span class="nav">[NPCs](crags.md#NPCs) [History](crags.md#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/the-crags')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/the-crags   and "pc-logs"
```