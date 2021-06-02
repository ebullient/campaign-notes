---
aliases: ["Conyberry"]
type: location
tags:
  - type/town/ruin
  - place/ruin/conyberry
  - region/sword-coast-north/triboar-trail
---
# Conyberry
<span class="subhead">Ruined town, Triboar Trail</span>

Abandoned town, sacked by barbarians years ago. Now lies in ruins.

[Triboar Trail](triboar-trail.md) runs right through it.

Dirt road extending south leads to ruined [Shrine](shrine-of-savras.md) dedicated to Savras (god of divination and fate).

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs
```dataviewjs
dv.list(dv.pages('#place/ruin/conyberry')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/ruin/conyberry and "pc-logs"
```