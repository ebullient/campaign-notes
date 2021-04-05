---
aliases: ['']
type: location
xtags: 
- type/shop/{{shopType}}
- {{shop-tag}}
---
# {{Title}}
<span class="subhead">{{shopType}}, {{town}}</span>

TL;DR description

* **Owner**
* **Location**

<span class="nav">[Selling](#Selling) [NPCs](#NPCs) [History](#History)</span>
## Selling

## NPCs

```dataview
list from #{{shop-tag}}
where type = "npc"
```

## History
```dataview
list from #{{shop-tag}} and "pc-logs"
```