---
aliases: ["Butterskull Ranch"]
type: location
tags:
  - type/farm
  - place/settlement/butterskull-ranch
  - region/sword-coast-north/triboar-trail
  - group/tribe/many-arrows
---
# Butterskull Ranch
<span class="subhead">Farm and Ranch, Triboar Trail</span>

TL;DR description

* **Owner** [Alfonse "Big Al" Kalazorn](alfonse-kalazorn.md)
* **Location** Directly off of the Triboar trail near Conyberry. 

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs found here
```dataviewjs
dv.list(dv.pages('#place/settlement/butterskull-ranch')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/settlement/butterskull-ranch and "pc-logs"
```