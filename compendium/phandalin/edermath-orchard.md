---
aliases: ["Edermath Orchard"]
type: location
tags:
  - type/farm
  - place/town/phandalin/edermath-orchard
---
![Edermath Orchard](/[assets]/attachments/phandalin-edermath-orchard.jpeg#portrait)
# Edermath Orchard
<span class="subhead">Orchard, Phandalin</span>

An apple orchard located just outside of the ruined town walls on the Northwest edge of Phandalin.

* **Owner** [Daran Edermath](daran-edermath.md)

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/edermath-orchard')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/edermath-orchard  and "pc-logs"
```