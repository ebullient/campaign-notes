---
aliases: ["Umbrage Hill"]
type: location
tags:
  - type/outpost
  - region/sword-coast-north
  - place/settlement/umbrage-hill
---
# Umbrage Hill
<span class="subhead">Windmill settlement, Sword Coast North</span>

TL;DR description

* **Owner** [Adabra Gwynn](adabra-gwynn.md)
* **Location** 5 miles south of Phandalin

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/umbrage-hill')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/settlement/umbrage-hill   and "pc-logs"
```