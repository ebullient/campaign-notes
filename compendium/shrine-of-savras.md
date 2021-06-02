---
aliases: ["Shrine of Savras"]
type: location
tags:
  - region/sword-coast-north/triboar-trail
  - type/shrine
  - place/ruin/shrine-of-savras
  - group/mercenaries/whiskered-gang
  - group/tribe/many-arrows
---
# Shrine of Savras
<span class="subhead">Ruined Shrine, Triboar Trail</span>

TL;DR description

* **Location** Near [Conyberry](conyberry.md)

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/ruin/shrine-of-savras')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/ruin/shrine-of-savras and "pc-logs"
```