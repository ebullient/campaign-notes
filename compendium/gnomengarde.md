---
aliases: ["Gnomengarde"]
type: location
tags:
  - type/colony
  - place/settlement/gnomengarde
  - region/sword-coast-north/sword-mountains
---
# Gnomengarde
<span class="subhead">Rock Gnome Recluse enclave, Sword Mountains</span>

TL;DR description

* **Leadership** Two kings, 
* **Location**

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/gnomengarde')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/settlement/gnomengarde  and "pc-logs"
```