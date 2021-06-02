<%*
const title = await tp.system.prompt("Enter Name");
const folder = await tp.user.chooseFolder(tp);
const lower = tp.user.lowerKebab(title);
console.log("%o, %o, %o", title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const place = await tp.user.chooseTags(tp, 'place/', 'place/settlement');
const placeTag = `${place}/${lower}`;
console.log("%o", placeTag);

const typeTag = await tp.user.chooseTags(tp, 'type', 'type/shop');
console.log("%o", typeTag);

const regionTag = await tp.user.chooseTags(tp, 'region/', 'region/sword-coast-north');
console.log("%o", regionTag);

const tags = 'tags';
const dataview = 'dataview';
-%>
---
aliases: ['<% title %>']
type: location
<% tags %>: 
- <% typeTag %>
- <% placeTag %>
- <% regionTag %>
---
# <% title %>
<span class="subhead">{{placeType}}, {{town}}</span>

TL;DR description

* **Owner**
* **Location**

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```<% dataview %>js
dv.list(dv.pages('#<% placeTag %>')
  .where(p => p.type == "npc")
  .sort(p => p.file.name, 'asc')
  .map(k => `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`))
```

## History
```<% dataview %>
list from #<% placeTag %> and "pc-logs"
```