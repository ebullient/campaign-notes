---
aliases: ["Phandalin"]
type: location
tags:
  - type/town
  - place/town/phandalin
  - region/sword-coast-north
---
# Phandalin
<span class="subhead">Small town, Sword Coast North</span>

Nestled in the foothills of the Sword Mountains, morning mist would often lurk between the town’s buildings and swirl across the narrow, uneven roads until the sun crested a nearby ridge and chased it away.

* **Population** 600
* **Government** Semi-democratic. Elected Townmaster. But ultimately beholden to Lords' Alliance

Phandalin is not well known outside of the region.

* The original Phandalin town established and ruled by the Tresendar family for a number of generations until it was raided and destroyed by Orcs about five centuries ago. The town was abandoned afterwards.
* Frontiersmen from Neverwinter and Waterdeep settled the new town about a decade previous as a spot for miners to operate from when searching the Sword Mountains.

<span class="nav">[Places](#Places) [NPCs](#NPCs) [History](#History)</span>

![Phandalin](https://media-waterdeep.cursecdn.com/attachments/5/747/map-phandalin.jpg#full-width)

## Places

```dataviewjs
dv.list(dv.pages('#place/town/phandalin')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

[01. A Messy Morning](/pc-writing/01-a-messy-morning.md)

```dataview
list from #place/town/phandalin and "pc-logs"
```

