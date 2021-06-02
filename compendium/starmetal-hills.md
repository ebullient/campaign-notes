---
aliases: ["Starmetal Hills"]
type: location
tags: 
- type/region/mountains
- region/sword-coast-north/starmetal-hills
---
# Starmetal Hills
<span class="subhead">Range of hills in the Sword Coast North</span>

Range of rocky knolls is so named because the area has been an impact site of a number of meteor showers over millennia.

The hills are haunted by ruthless barbarian tribes, giving others little reason to visit the area.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#region/sword-coast-north/starmetal-hills')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #region/sword-coast-north/starmetal-hills  and "pc-logs"
```