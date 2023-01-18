---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter group name");
const lower = Campaign.toFileName(title);
console.log("%o, %o", title, lower);
await tp.file.rename(lower);

const group = await Campaign.chooseTag(tp, 'group/', 'group');
const groupTag = `${group}/${lower}`;
const typeTag = await Campaign.chooseTag(tp, 'type/group', 'type/group');

const tags = 'tags:';
const dataview = 'dataview';
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
<% tags %>
- <% groupTag %>
- <% typeTag %>
---
# <% title %>
<span class="subhead">{{short description}}</span>

TL;DR 

**Beliefs**

1. ..
2. ..
3. ..

More...

- **Alignment** 
- **Allegiances** 
- **Enemies** 


<span class="nav">[Locations](#Locations) [NPCs](#NPCs) [History](#History) [References](#References)</span>

## Locations

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#<% groupTag %>', 'location'));
```

## NPCs

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#<% groupTag %>', 'npc'));
```

## History

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.logsForTag(dv, '#<% groupTag %>'));
```

## References

