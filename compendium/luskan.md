---
aliases: ["Luskan"]
type: location
tags:
  - type/city
  - place/city/luskan
  - region/sword-coast-north
  - group/faction/bregan-daerthe
---
# Luskan
<span class="subhead">City of Sails, Sword Coast North</span>

Luskan, also known as the City of Sails, was a port city at the mouth of the River Mirar on the Sword Coast North. 

* **Population** 4000. Mostly humans, drow
* **Government** Five High Captains, secretly influenced by 

Luskan, despite the presence of the Ten Towns was considered by many to be civilization's farthest reach. 

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/city/luskan')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/city/luskan   and "pc-logs"
```
