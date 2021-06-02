---
aliases: ["Logger's Camp"]
type: location
tags:
  - type/outpost
  - place/settlement/loggers-camp
  - region/sword-coast-north/neverwinter-wood
---
![Loggers Camp](/[assets]/attachments/loggerscamp.jpg#portrait)
# Logger's Camp
<span class="subhead">Logging encampment, Neverwinter Wood</span>

One of several logging camps that uses the Neverwinter River to supply wood to Neverwinter.

Tibor gets supplies from Phandalin to avoid paying taxes to Neverwinter, though getting supplies through Neverwinter Wood is not a task taken lightly.

* **Owner** [Tibor Wester](tibor-wester.md)
* **Location** The loggers’ camp is roughly 50 miles north of Phandalin.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/settlement/loggers-camp')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/settlement/loggers-camp and "pc-logs"
```