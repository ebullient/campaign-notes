---
aliases: ['Neverwinter Wood']
type: location
tags: 
- type/region/forest
- region/sword-coast-north/neverwinter-wood
---
# Neverwinter Wood
<span class="subhead">Forest near Neverwinter in the Sword Coast North</span>

Forest east of Neverwinter seems to have a magical quality about it, or at least an air of magical secrecy. It is a deep, but not pristine, woods. There are plenty of ruins in the woods.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/neverwinter-wood')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/neverwinter-wood and "pc-logs"
```