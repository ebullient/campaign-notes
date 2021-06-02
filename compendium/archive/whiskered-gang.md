---
aliases: ['Whiskered Gang']
type: group
tags:
  - npc/dead
  - iff/enemy
  - region/sword-coast-north
  - place/ruin/shrine-of-savras
  - group/mercenaries/whiskered-gang
---
<span class="nav">[Locations](#Locations) [History](#History) [References](#References)</span>
# Whiskered Gang

A mercenary group of Wererats.
* Displaced from [Shrine of Savras](../shrine-of-savras.md) by [Many Arrows Orc Tribe](../groups/many-arrows-orc-tribe.md)
* Went to [Mountain's Toe Gold Mine](../mountains-toe-gold-mine.md)
* Bit [Don-Jon Raskin](../don-jon-raskin.md)
* Destroyed by party

## Locations

```dataviewjs
dv.list(dv.pages('#group/mercenaries/whiskered-gang')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #group/mercenaries/whiskered-gang  and "pc-logs"
```
