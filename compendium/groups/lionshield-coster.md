---
aliases: ["Lionshield Coster"]
type: group
tags:
- group/merchant/lionshield-coster
- region/sword-coast-north
- region/savage-frontier
---
<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [History](#History) [References](#References)</span>
# Lionshield Coster
<span class="subhead">Merchant company</span>

The Lionshields are a merchant company based in Yartar. They ship finished goods, like armor and weapons, to Phandalin and other small settlements and towns in the region.

* [Linene Graywind](../phandalin/linene-graywind.md) is the master of the trading post in Phandalin.
* The nearest trading post is "The Lion's Share" in Triboar, run by Narth Tezrin and Alaestra Ulgar

## Locations

```dataviewjs
dv.list(dv.pages('#group/merchant/lionshield-coster')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('#group/merchant/lionshield-coster')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #group/merchant/lionshield-coster and "pc-logs"
```

Mercantile companies were organizations primarily focused on trade between the cities and nations of Faerûn and greater Toril. 

Costers were companies that gathered smaller merchants together to form temporary or permanent alliances focused on safety and protection while traveling. Typical services provided included wagons, beasts of burden, guards, guides, and warehouse space.

## Reference

* [Forgotton Realms: Lionshield Coster](https://forgottenrealms.fandom.com/wiki/Lionshield_Coster)
* [Forgotten Realms: Lion's Share](https://forgottenrealms.fandom.com/wiki/Lion%27s_Share)
