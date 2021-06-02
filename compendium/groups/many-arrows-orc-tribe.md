---
aliases: ["Many Arrows Orc Tribe"]
type: group
tags:
  - region/sword-coast-north/sword-mountains
  - place/ruin/icespire-hold
  - place/ruin/shrine-of-savras
  - place/ruin/woodland-manse
  - group/tribe/many-arrows-orcs
---
<span class="nav">[Locations](#Locations) [History](#History) [References](#References)</span>
# Many Arrows
<span class="subhead">Orc tribe</span>

Vicious orc tribe that raided the eastern end of the Triboar Trail. 

The tribe was rendered leaderless by Cryovain, its members scattered into different smaller roving bands.


## Locations

```dataviewjs
dv.list(dv.pages('#group/tribe/many-arrows')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #log/monster/orc  and "pc-logs"
```

They were lead by "Brughor Axe Biter", a savage brute more interested in murdering and looting than scouting. 

Attracted to the area around Phandalin by new settlers and traffic on the Triboar trail. They originally settled in the area around Wyvern Tor, but soon discovered the abandoned Icespire Hold. 

Brughor moved the tribe into the fortress, and enjoyed collecting his battle trophies from a room in the top floor of the keep. When [Cryovain](../bestiary/dragon.md) attacked the fortress, tribe members either scattered or were eaten. Brughor died trying to defend his hoard from the dragon. All that remained of him was his axe and the hand he held it with.

Members of the tribe fled the Sword Mountains. Without the unifying presence of Brughor, the fleeing orcs splintered into different groups. 

The largest group headed due north, making for the forest. They found the Shrine of Savras, and settled there, displacing the [Whiskered Gang](../archive/whiskered-gang.md), who could not defend themselves against the sheer number of orcs and allied ogres.

A small band splintered from that group to attack Butterskull Ranch

Another cluster of orcs followed a different course. Going into the woods west of Agatha's Lair. Their headlong northern rush lead them to the [Woodland Manse](../neverwinter-wood/woodland-manse.md), where they allied with [Grannoc](../archive/grannoc.md) and the Cult of Talos.

## References

