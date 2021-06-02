---
aliases: ["Alderleaf Farm"]
type: location
tags:
  - place/town/phandalin/alderleaf-farm
  - type/farm
---
![Alderleaf farm](/[assets]/attachments/phandalin-alderleaf-farm.jpeg#portrait)
# Alderleaf Farm
<span class="subhead">Farm, Phandalin</span>

TL;DR description

* **Owner** [Quelline Alderleaf](quelline-alderleaf.md)
* **Location** Southeast Phandalin

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/alderleaf-farm')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/alderleaf-farm and "pc-logs"
```

The party crossed Alderleaf farm fields on the way to and from the Redbrand Hideout.

