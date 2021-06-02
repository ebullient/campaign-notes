---
aliases: ["Phandalin Miner's Exchange"]
type: location
tags:
  - type/shop/trading-post
  - place/town/phandalin/miners-exchange
---
![Miner's Exchange](/[assets]/attachments/phandalin-miners-exchange.jpeg#portrait)
# Phandalin Miner's Exchange
<span class="subhead">Trading post, Phandalin</span>

Miners come here to have valuable finds weighted and measured, to exchange for gps. Great place to meet people who spend a lot of time out and about the countryside surrounding Phandalin. 

Enough wealth is hidden in nearby streams and valleys to support many independent prospectors. Unofficial records office, registering claims to streams and excavations around the area.

* **Owner** [Halia Thornton](halia-thornton.md)
* **Location** Southern edge of Phandalin

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/town/phandalin/miners-exchange')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/town/phandalin/miners-exchange  and "pc-logs"
```




