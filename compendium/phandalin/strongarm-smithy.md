---
aliases: ["Strongarm Smithy"]
type: location
tags:
  - type/shop/blacksmith
  - place/town/phandalin/smithy
---
# Strongarm Smithy
<span class="subhead">Blacksmith, Phandalin</span>


* **Owner** [Maccus Strongarm](maccus-strongarm.md)
* **Location** North section of Phandalin, near Barthen's Provisions

[Seamus](seamus.md) is an apprentice here

<span class="nav">[Selling](#Selling) [NPCs](#NPCs) [History](#History)</span>

## Selling

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/smithy')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/smithy  and "pc-logs"
```
