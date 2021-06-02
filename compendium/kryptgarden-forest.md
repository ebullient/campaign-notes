---
aliases: ["Kryptgarden Forest"]
type: location
tags: 
- type/region/forest
- region/sword-coast-north/kryptgarden-forest
---
# Kryptgarden Forest
<span class="subhead">Forest in the Sword Coast North</span>

This ancient forest tucked behind the Sword Mountains contains the ruins of bygone dwarven civilizations. 

The ancient green dragon Claugiyliamatar, nicknamed the Old Gnawbone, also lairs in the woods. 

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/kryptgarden-forest')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/kryptgarden-forest  and "pc-logs"
```
