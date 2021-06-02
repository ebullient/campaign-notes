---
aliases: ["Triboar Trail"]
type: location
tags: 
- type/trade-road
- region/sword-coast-north/triboar-trail
---
# Triboar Trail
<span class="subhead">Trade road, Sword Coast North</span>

This path south of Neverwinter Wood is the safest route between Neverwinter and the town of Triboar, located in the Dessarin Valley to the east (off the map).

The trail is not patrolled, and monster attacks are commonplace.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/triboar-trail')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/triboar-trail   and "pc-logs"
```