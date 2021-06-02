---
aliases: ["Falcon's Hunting Lodge"]
type: location
tags:
  - type/manor
  - place/settlement/falcons-lodge
  - region/sword-coast-north/neverwinter-wood
---
# Falcon's Hunting Lodge
<span class="subhead">Rustic Manor, Neverwinter Wood</span>

TL;DR description

* **Owner** [Falcon the Hunter](falcon-the-hunter.md)

Equidistant to [Circle of Thunder](circle-of-thunder.md)
and [Woodland Manse](woodland-manse.md).

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/falcons-lodge')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

* Retainers living at the Lodge:
    * Pell, a mute 12-year old stablehand
    * Corwin, an elderly, world-weary cook
  
## History

```dataview
list from #place/settlement/falcons-lodge  and "pc-logs"
```