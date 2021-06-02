---
aliases: ["Silver Marches"]
type: location
tags: 
- type/region
- region/silver-marches
---
# Silver Marches

A confederation of humans, dwarves, and elves, with the city of Silverymoon at its heart.

* [Map of Northwest Faerûn](/[assets]/attachments/map-northwest-faerun.jpg)
* [Map of Faerûn](/[assets]/attachments/map-faerun-highres.jpg)

<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [Factions](#Factions)</span>

## Locations

```dataviewjs
dv.list(dv.pages('#region/silver-marches')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('#region/silver-marches')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```dataview
list from #region/silver-marches and "pc-logs"
```