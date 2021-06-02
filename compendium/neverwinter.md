---
aliases: ["Neverwinter"]
type: location
tags:
  - type/city
  - region/sword-coast-north
  - place/city/neverwinter
  - group/faction/lords-alliance
---
# Neverwinter
<span class="subhead">City of Skilled Hands, Sword Coast North</span>

This city was badly damaged when Mount Hotenow erupted some fifty years ago. Rebuilding has begun under watchful eye (and with funds from) Lord Neverember.

* **Population**
* **Government** Lord Protector, Dagult Neverember, rules in the absence of an heir to Neverwinter’s crown.

No legitimate heirs to the old Alagondar royal line are known to exist, and many believe that the line is ended. Lord Neverember, taking no chances, quietly pays off or disposes of anyone claiming a connection to the rulers of old.

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataviewjs
dv.list(dv.pages('#place/city/neverwinter')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #place/city/neverwinter  and "pc-logs"
```