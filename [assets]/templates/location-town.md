---
aliases: ['']
type: location
xtags: 
- type/town
- {{town-tag}}
- region/name
---
# {{Title}}
<span class="subhead">{{townSize}}, {{context}}</span>

* **Population**
* **Government**

<span class="nav">[Places](#Places) [NPCs](#NPCs) [History](#History)</span>

## Places

```dataview
list from #{{town-tag}}
where type = "location"
```

## NPCs

```dataview
list from #{{town-tag}}
where type = "npc"
```

## History
```dataview
list from #{{town-tag}} and "pc-logs"
```