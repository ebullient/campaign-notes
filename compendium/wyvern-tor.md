---
aliases: ["Wyvern Tor"]
type: location
tags:
  - type/landmark
  - place/landmark/wyvern-tor
  - region/sword-coast-north/triboar-trail
---
# Wyvern Tor
<span class="subhead">Landmark, Triboar Trail</span>

Wyvern Tor is a towering crag in the rugged hills northeast of the Sword Mountains, and is easily seen by any on the Triboar Trail near the vicinity of Conyberry. 

* **Location** Rugged hills northeast of the [Sword Mountains](sword-mountains.md)

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/landmark/wyvern-tor')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/landmark/wyvern-tor   and "pc-logs"
```

The [Many Arrows Orc Tribe](groups/many-arrows-orc-tribe.md) had a hidden camp in a cave on the Tor's hillside. The cave is now abandoned.