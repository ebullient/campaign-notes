---
aliases: ["Cult of Myrkul"]
type: group
tags:
- group/faction/cult-of-myrkul
---
<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [History](#History) [References](#References)</span>
# Cult of Myrkul

Members are fervent religious cultists who worship [Myrkul](#Myrkul), the god of death. The cult is led by the priest [Ularan Mortus](../ularan-mortus.md)

* **Beliefs**
    1. ..
    2. ..
    3. ..
* **Alignment** 
* **Allegiances** 
* **Enemies** 

## Myrkul

Myrkul, The Lord of Bones, Old Lord Skull, the Reaper Myrkul is an ancient god, one of three former mortals who were raised to deityhood when Jergal grew weary of his divine duties and distributed his influence between them. 
Myrkul became the god of death and the dead, and ruled over the City of the Dead for centuries until he, in turn, was slain. In time Myrkul returned, for can death itself

## Locations

```dataviewjs
dv.list(dv.pages('#group/faction/cult-of-myrkul')
  .where(p => p.type == "location")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## NPCs

```dataviewjs
dv.list(dv.pages('#group/faction/cult-of-myrkul')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History

```dataview
list from #group/faction/cult-of-myrkul  and "pc-logs"
```

## References

