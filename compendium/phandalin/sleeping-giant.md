---
aliases: ["Sleeping Giant"]
type: location
tags:
  - type/shop/tavern
  - place/town/phandalin/sleeping-giant
---
![The Sleeping Giant](/[assets]/attachments/phandalin-sleeping-giant.jpeg#portrait)
# The Sleeping Giant
<span class="subhead">Tavern, Phandalin</span>

* **Barkeep** [Grista](grista.md)

<span class="nav">[NPCs](sleeping-giant.md#NPCs) [History](sleeping-giant.md#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/sleeping-giant')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/sleeping-giant  and "pc-logs"
```