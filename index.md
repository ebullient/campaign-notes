# Index

<span class="nav">[Locations](#Locations) [NPCs](#NPCs)  [Factions](#Factions)</span>

## Locations

```dataviewjs
dv.list(dv.pages('"compendium"')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('"compendium"')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## Groups

```dataviewjs
dv.list(dv.pages('"compendium"')
  .where(p => p.type == "group")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```
