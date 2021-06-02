---
aliases: ["Thundertree"]
type: location
tags:
  - type/town/ruin
  - place/ruin/thundertree
  - region/sword-coast-north/neverwinter-wood
  - group/faction/emerald-enclave
---
# Thundertree
<span class="subhead">Ruined town near Neverwinter Wood, Sword Coast North</span>

TL;DR description

* **Location** The town ruins are near where the [[Neverwinter River]] emerges from [Neverwinter Wood](neverwinter-wood/neverwinter-wood.md)

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/ruin/thundertree')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/ruin/thundertree   and "pc-logs"
```