---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.toFileName(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log(title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const typeTag = await Campaign.chooseTag(tp, 'type/area', 'type/area');
const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group/');
const regionTag = await Campaign.chooseTag(tp, 'region/', 'region');

const placeTag = `${regionTag}/${lower}`
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
<span class="subhead">{{townSize}}, {{context}}</span>

TL;DR description

- **Population**
- **Government**

<span class="nav">[Places](#Places) [NPCs](#NPCs) [History](#History)</span>

## Places

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#<% placeTag %>', 'location'));
```

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