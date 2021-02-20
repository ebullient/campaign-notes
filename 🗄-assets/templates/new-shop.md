---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.lowerKebab(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log("%o, %o, %o", title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const place = await Campaign.chooseTagOrEmpty(tp, 'place/', 'place');
const placeTag = `${place}/${lower}`;

const typeTag = await Campaign.chooseTagOrEmpty(tp, 'type/location/shop', 'type/location/shop');
const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group', '');
const regionTag = await Campaign.chooseTagOrEmpty(tp, 'region/', 'region/sword-coast-north');

let tags = '';
if ( placeTag || groupTag || regionTag ) {
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
}
console.log("%o", tags);
const dataview = 'dataview'
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
type: location<% tags %>
---
# <% title %>
<span class="subhead">{{shopType}}, {{town}}</span>

TL;DR description

- **Owner**
- **Location**

<span class="nav">[Selling](#Selling) [NPCs](#NPCs) [History](#History)</span>
## Selling

## NPCs

```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#<% placeTag %>', 'npc', 'faerûn'));
```

## History
```<% dataview %>js
const { Campaign } = window.customJS;
dv.list(Campaign.logsForTag(dv, '#<% placeTag %>'));
```