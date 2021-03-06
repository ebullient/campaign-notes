---
type: location
xtags: 
- type/...
- {{regionTag}}
---
# {{Title}}
<span class="subhead">{{placeType}}, {{town}}</span>

TL;DR description

* **Owner**
* **Location**

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```dataview
list from #{{regionTag}}
where type = "npc"
```

## History
```dataview
list from #{{regionTag}} and "pc-logs"
```