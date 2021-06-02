---
aliases: ["House of Thalivar"]
type: location
tags:
  - type/manor/ruin
  - place/town/leilon/house-of-thalivar
---
# House of Thalivar
<span class="subhead">{{placeType}}, Leilon</span>

TL;DR description

* **Owner**
* **Location**

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/leilon/house-of-thalivar')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/leilon/house-of-thalivar and "pc-logs"
```