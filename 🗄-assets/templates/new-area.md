---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.lowerKebab(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log("%o, %o, %o", title, lower, folder);

await tp.file.move(`${folder}/${lower}`);
const placeTag = `place/${lower}`;

const typeTag = await Campaign.chooseTagOrEmpty(tp, 'type/area', 'type/area');
const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group/', '');
const regionTag = await Campaign.chooseTagOrEmpty(tp, 'region/', 'region/sword-coast-north');

let tags = '';
if ( placeTag || groupTag || regionTag || typeTag ) {
  tags = '\ntags:';
  if ( placeTag ) {
    tags += `\n- ${placeTag}`;
  }
  if ( groupTag ) {
    tags += `\n- ${groupTag}`;
  }
  if ( regionTag ) {
    tags += `\n- ${regionTag}`;
  }
  if ( typeTag ) {
    tags += `\n- ${typeTag}`;
  }
}
const dataview = 'dataview';
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
type: location<% tags %>
---
# <% title %>
<span class="subhead">{{townSize}}, {{context}}</span>

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