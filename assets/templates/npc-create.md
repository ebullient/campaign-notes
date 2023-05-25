---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.toFileName(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log(title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group');
const placeTag = await Campaign.chooseTagOrEmpty(tp, 'place/');
const regionTag = await Campaign.chooseTagOrEmpty(tp, 'region/');

const campaign = folder.contains("witchlight")
    ? 'witchlight'
    : 'heist';

const tags = 'tags: ';
let moretags = '';
if ( placeTag ) {
    moretags += `\n- ${placeTag}`;
}
if ( groupTag ) {
    moretags += `\n- ${groupTag}`;
}
if ( regionTag ) {
    moretags += `\n- ${regionTag}`;
}
console.log("%o", tags);
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
<% tags %>
- <% campaign %>/iff/unknown
- <% campaign %>/npc/alive<% moretags %>
---
# <% title %>
<span class="subhead">{{primary location}}</span>

TL;DR description / personality / motivation


```ad-npc
*{{gender}} {{race}} {{role/occupation}}, {{alignment}}*  
- **Trait**
- **Ideal**
- **Bond**
- **Flaw**
```

<span class="nav">[Details](#Details) [Relationships](#Relationships) [Secrets](#Secrets) [Related](#Related)</span>

## Details


## Relationships

**Organization or Faction**

## Secrets

## Related

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.linkedToPage(dv));
```
