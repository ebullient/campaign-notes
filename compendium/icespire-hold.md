---
aliases: ["Icespire Hold"]
type: location
tags:
  - type/stronghold
  - place/ruin/icespire-hold
  - region/sword-coast-north/sword-mountains
---
# Icespire Hold
<span class="subhead">Warlord Fortress, Sword Mountains</span>

Icespire Hold is an abandoned fortress perched on the icy northeast spur of Icespire Peak.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/ruin/icespire-hold')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/ruin/icespire-hold  and "pc-logs"
```

The [Many Arrows Orc Tribe](groups/many-arrows-orc-tribe.md) moved here from [Wyvern Tor](wyvern-tor.md) when they discovered the abandoned fortress.

When [Cryovain](bestiary/dragon.md) attacked and claimed the fortress, she ate several orcs, including the tribe's leader, Brughor Axe Biter.

The [Stone Cold Reavers](groups/stone-cold-reavers.md) followed Cryovain back to her lair, and hid, hoping to raid her hoard the next time she left to go hunting. 

The party disabled the Reavers and faced Cryovain alone. They left a steaming carcasse and a looted keep for the Reavers to rummage through.