---
type: location
aliases: ["Circle of Thunder"]
tags:
  - type/shrine
  - group/faction/cult-of-talos
  - place/landmark/circle-of-thunder
  - region/sword-coast-north/neverwinter-wood
---
# Circle of Thunder
<span class="subhead">Ritual site for Talos, Neverwinter Wood</span>

Reclusive anchorites gather on this hill to make sacrifices to Talos the storm god. 

* **Owner** Anchorites in the [Cult of Talos](../groups/cult-of-talos.md)
* **Location** Equidistant from [Falcon's Hunting Lodge](falcons-hunting-lodge.md) and [Woodland Manse](woodland-manse.md).

A circle of standing stones atop the hill helped to focus the anchorites’ magic to make the summoning of Gorthok possible. The stone structures were toppled by the party on 15 Eleint, 1498. A druid further caused plants to grow over the toppled stones, and throughout the anchorites' caves.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs
```dataviewjs
dv.list(dv.pages('#place/landmark/circle-of-thunder')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/landmark/circle-of-thunder and "pc-logs"
```

