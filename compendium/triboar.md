---
aliases: ["Triboar"]
type: location
tags: 
- type/town
- place/town/triboar
- region/savage-frontier
- group/faction/harpers
---
# Triboar
<span class="subhead">Large town, Dessarin Valley, Savage Frontier</span>

Crossroads town at instersection of Evermoor Way and the Long Road.

* **Population** ~2500
* **Government** Democracy, elected Lord Protector

Lord Protector's task was to command the town's militia and to settle disputes. The town's legal system was called the "Lord's Decrees" and the lord protector had the power to amend this system at will.

As of 1491 DR, the lord protector is a Harper and retired adventurer, Darathra Shendrel.

* [Triboar](https://forgottenrealms.fandom.com/wiki/Triboar)
* [Darathra Shendrel](https://forgottenrealms.fandom.com/wiki/Darathra_Shendrel)

### Travel Distances from Silverymoon

* To Yartar - 60 miles (via the Evermoor Way)
* To Phandalin - 225 miles (via Triboar Trail)
* To Silverymoon - 330 miles (via the Evermoor Way and Yartar)
* To Waterdeep - 280 miles (via the Long Road)

<span class="nav">[Places](#Places) [NPCs](#NPCs) [History](#History)</span>

## Places
```dataviewjs
dv.list(dv.pages('#place/town/triboar')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs
```dataviewjs
dv.list(dv.pages('#place/town/triboar')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```dataview
list from #place/town/triboar and "pc-logs"
```