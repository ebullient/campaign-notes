---
aliases: ["Tresendar Manor"]
type: location
tags:
  - place/town/phandalin/tresendar-manor
  - type/manor
---
![Tresendar Manor](/[assets]/attachments/phandalin-tresendar-manor.jpeg#portrait)
# Tresendar Manor
<span class="subhead">Ruined manor, Phandalin</span>

Home to [Hot Dog (Nothic)](hot-dog-nothic.md). 
Cleared of Redbrands.

Granted to [Kyle Monsterdrinker](../../characters/kyle-monsterdrinker.md) as a reward.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/tresendar-manor')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/tresendar-manor  and "pc-logs"
```