---
aliases: ["Mere of Dead Men"]
type: location
tags: 
- type/region/swamp
- region/sword-coast-north/mere-of-dead-men
---
# Mere of Dead Men
<span class="subhead">Creepy place along the High Road, Sword Coast North</span>

Travelers on the High Road, which skirts the mere to the east, must resist being lured into this cold, desolate swamp by bobbing will-o’-wisps.

Many adventurers have died here, drawn by tales of ruined castles half-sunk in the mire.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/mere-of-dead-men')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/mere-of-dead-men   and "pc-logs"
```
