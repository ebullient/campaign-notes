---
type: location
xtags: 
- type/town
- town/...
- region/...
---
# {{Title}}
*{{townSize}}, {{context}}*  

* **Population**
* **Government**

<span class="nav">[Places](#Places) [NPCs](#NPCs) [History](#History)</span>

## Places

```dataview
list from #town/...
where type = "location"
```

## NPCs

```dataview
list from #town/...
where type = "npc"
```

## History
```dataview
list from #town/...   and "pc-logs"
```