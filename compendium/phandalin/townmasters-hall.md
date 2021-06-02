---
aliases: ["Townmaster's Hall"]
type: location
tags:
  - type/municipal
  - place/town/phandalin/townmaster-hall
---
![Townmaster's Hall](/[assets]/attachments/phandalin-townmaster.jpeg#portrait)
# 

<span class="subhead">Common building, Phandalin</span>

The townmaster’s hall has sturdy stone walls, a pitched wooden roof, and a bell tower at the back. The job board next to the front door features a sparse number of notices, all written in Common, and in the same hand.

The Townmaster, [Harbin Wester](harbin-wester.md), serves as judge in minor disputes and keeps required records.

The townmaster’s hall has a small but serviceable jail in the cellar with two cells. Harbin carries the keys to the cell doors.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/townmaster-hall')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

[Gildas Glasstaff](../gildas-glasstaff.md) had a brief stay in one of the holding cells, but escaped in the middle of the night (thanks to the help of Simon, his pet rat). Harbin, however, had traded his Staff to [Mabina Cawood](../mabina-cawood.md)...  #todo

```dataview
list from #place/town/phandalin/townmaster-hall  and "pc-logs"
```