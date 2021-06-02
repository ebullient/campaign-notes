---
aliases: ['Wayside Inn']
type: location
tags: 
- type/shop/inn
- region/sword-coast-north/high-road 
- place/settlement/wayside-inn
---
# The Wayside Inn
<span class="subhead">Inn at the crossroads of the [High Road](high-road.md) and the [Triboar Trail](triboar-trail.md)</span>

An oddly shaped building sits at the juncture of the Triboar Trail and the High Road. Two entrances into the building are apparent: a smaller one at the northern corner, and a larger one, suitable for beasts of burden and wagons, near the first.  

* **Owner** [Martisha Vinetalker](martisha-vinetalker.md)

<span class="nav">[Selling](#Selling) [NPCs](#NPCs) [History](#History)</span>

## Selling

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/wayside-inn')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```dataview
list from #place/settlement/wayside-inn and "pc-logs"
```