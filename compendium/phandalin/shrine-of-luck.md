---
aliases: ["Shrine of Luck"]
type: location
tags:
  - type/shrine
  - place/town/phandalin/shrine-of-luck
---
![Shrine of Luck](/[assets]/attachments/phandalin-shrine-garaele.jpeg#portrait)
# Shrine of Luck
<span class="subhead">Shrine, Phandalin</span>

Phandalin’s only temple is a shrine made of stones taken from the nearby ruins. It is dedicated to Tymora (goddess of luck and good fortune).
Sister Garaele regularly reports to her superiors in Neverwinter on events in and around Phandalin. The shrine is left untended when she is away.

* **Caretaker** [Sister Garaele](sister-garaele.md)
* **Location** The runined Shrine on the north edge of the town square, or marketplace.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/shrine-of-luck')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/shrine-of-luck  and "pc-logs"
```