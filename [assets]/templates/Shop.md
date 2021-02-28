---
type: location
xtags: 
- type/shop/...
- town/...
---
# {{Title}}
*{{shopType}}, {{town}}*  

TL;DR description

* **Owner**
* **Location**

<span class="nav">[For Sale](#For\ Sale) [NPCs](#NPCs) [History](#History)</span>
## For Sale

## NPCs

```dataview
list from #shop-tag
where type = "npc"
```

## History
```dataview
list from #shop-tag   and "pc-logs"
```