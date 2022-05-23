---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.lowerKebab(title);
await tp.file.rename(lower);

const groupTag = await Campaign.chooseTagOrEmpty(tp, 'group', '');
const placeTag = await Campaign.chooseTagOrEmpty(tp, 'place/', 'place');

let tags = '\ntags:\n- rowen/iff/unknown\n- npc/alive';
if ( placeTag || groupTag ) {
  if ( placeTag ) {
    tags += `\n- ${placeTag}`;
  }
  if ( groupTag ) {
    tags += `\n- ${groupTag}`;
  }
}
console.log("%o", tags);
const aliases = `aliases: ["${title}"]`;
-%>
<% aliases %>
type: npc<% tags %>
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

```dataview
LIST
FROM [[]]
WHERE !contains(file.inlinks, this.file.link)
```
