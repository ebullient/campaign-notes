<%*
const title = await tp.system.prompt("Enter Name");
const folder = await tp.user.chooseFolder(tp);

const lower = tp.user.lowerKebab(title);
console.log("%o, %o, %o", title, lower, folder);

const groupTag = await tp.user.chooseTags(tp, 'group', '');
console.log("%o", groupTag);

const tags = 'tags'

await tp.file.move(`${folder}/${lower}`);
-%>
---
aliases: ['<% title %>']
type: npc
<% tags %>: 
- npc/alive
- iff/unknown
- location
<%* if (groupTag && groupTag !== '--') { %>
- <% groupTag %>
<%* } %>
---
# <% title %>
<span class="subhead">{{primary location}}</span>

TL;DR description / personality / motivation

> *{{gender}} {{race}} {{role/occupation}}, {{alignment}}*  
> * **Trait**
> * **Ideal**
> * **Bond**
> * **Flaw**

<span class="nav">[Details](#Details) [Relationships](#Relationships) [Secrets](#Secrets) [History](#History)</span>

## Details


## Relationships

**Organization or Faction**

## Secrets

## History

Any queries?