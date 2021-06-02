---
aliases: ["Savage Frontier"]
type: location
tags: 
- type/region
- region/savage-frontier
---
# Savage Frontier

The rugged frontier of the north that attracted farmsteaders and others that chose to live off the land.

The [Savage Frontier](https://forgottenrealms.fandom.com/wiki/Savage_Frontier) was the region of 
northwest Faerûn north of the Delimbiyr River, excluding the Sword Coast North, the High Forest 
and the former nation of Luruar, also known as the Silver Marches.

* [Map of Northwest Faerûn](/[assets]/attachments/map-northwest-faerun.jpg)
* [Map of Faerûn](/[assets]/attachments/map-faerun-highres.jpg)

<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [Factions](#Factions)</span>

## Locations

```dataviewjs
dv.list(dv.pages('#region/savage-frontier')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('#region/savage-frontier')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```dataview
list from #region/savage-frontier and "pc-logs"
```