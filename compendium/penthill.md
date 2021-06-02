---
aliases: [ "Penthill" ]
type: location
tags:
  - type/town
  - region/sword-coast-north/triboar-trail
  - place/town/penthill
---
# Penthill
<span class="subhead">{{placeType}}, {{town}}</span>

Off the east edge of the current map
Site of Igor's Challenge

* **Population**
* **Government** 

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/pentill')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/pentill   and "pc-logs"
```
