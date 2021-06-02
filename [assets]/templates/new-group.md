<%*
const title = await tp.system.prompt("Enter group name");
const lower = tp.user.lowerKebab(title);
console.log("%o, %o", title, lower);

const groupTag = `group/faction/${lower}`
const dataview = 'dataview'
const tags = 'tags'

await tp.file.move(`compendium/groups/${lower}`);
-%>
---
aliases: ['<% title %>']
type: group
<% tags %>: 
- <% groupTag %>
---
# <% title %>
<span class="subhead">{{short description}}</span>

TL;DR 

**Beliefs**

1. ..
2. ..
3. ..

More...

* **Alignment** 
* **Allegiances** 
* **Enemies** 


<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [History](#History) [References](#References)</span>

## Locations

```<% dataview %>
list from #<% groupTag %>
where type = "location"
```

## NPCs

```<% dataview %>
list from #<% groupTag %>
where type = "npc"
```

## History

```<% dataview %>
list from #<% groupTag %> and "pc-logs"
```

## References

