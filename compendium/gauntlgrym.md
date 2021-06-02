---
aliases: ["Gauntlgrym"]
type: location
tags: 
- group/dwarves
- type/stronghold
- place/settlement/gauntlgrym
- region/sword-coast-north
---
# Gauntlgrym
<span class="subhead">Dwarven Stronghold, Sword Coast North</span>

An ancient city in and beneath Mt. Hotenow. It has a complicated history full of strife and conquest, and challenges from above and below. A battle over the fire primordial that used to power Gauntlgrym's forges is what caused the eruption of Mt. Hotenow (and the resultant destruction of Neverwinter), just as an example.

There is a core group of dwarves that are focused on solidifying their hold on Gauntlgrym and rebuilding the stronghold. There is hope that the forges can be restarted such that trade in fabled artifacts can begin again, but not yet.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/gauntlgrym')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```dataview
list from #place/settlement/gauntlgrym and "pc-logs"
```

* [Canon-summary of Gautlgrym](https://forgottenrealms.fandom.com/wiki/Gauntlgrym)  