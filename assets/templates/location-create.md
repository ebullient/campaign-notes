---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.toFileName(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log(title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const place = await Campaign.chooseTag(tp, 'place/', 'place');
const placeTag = `${place}/${lower}`;

const typeTag = await Campaign.chooseTag(tp, 'type/location', 'type/location/shop');
const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group/');
const regionTag = await Campaign.chooseTag(tp, 'region/', 'region/sword-coast-north');
console.log(typeTag, groupTag, regionTag, placeTag);

let tags = 'tags:';
tags += `\n- ${typeTag}`;
tags += `\n- ${placeTag}`;
if ( groupTag ) {
    tags += `\n- ${groupTag}`;
}
tags += `\n- ${regionTag}`;

const dataview = 'dataview';
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
<% tags %>
---
# <% title %>
<span class="subhead">{{placeType}}, {{region}}</span>

TL;DR description

- **Owner**
- **Location**

<span class="nav">[NPCs](#NPCs) [History](#History)</span>

## NPCs

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#<% placeTag %>', 'npc'));
```

## History
```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.logsForTag(dv, '#<% placeTag %>'));
```