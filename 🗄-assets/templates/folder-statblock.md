---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.lowerKebab(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log("%o, %o, %o", title, lower, folder);

await tp.file.move(`${folder}/${lower}`);

const size = await Campaign.chooseMonsterSize(tp);
const sizeTag = size.toLowerCase();
const type = await Campaign.chooseMonsterType(tp);
const typeTag = type.toLowerCase();

const tags = 'tags';
const aliases = `aliases: ["${title}"]`;
-%>
cssclass: 5e-monster
<% aliases %>
<% tags %>:
- monster/<% sizeTag %>
- monster/<% typeTag %>
---
# <% title %>

```ad-statblock
title: <% title %>
*<% size %> <% typeTag %>, any alignment*

- **Armor Class** 10
- **Hit Points** 22 (5d8)
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|

- **Skills** 
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 1 (200 XP)

## Traits
***Trait name.*** Trait description

## Actions
***Attack.*** *Melee Weapon Attack.*

***Attack.*** *Ranged Weapon Attack.*

## Reactions
,,,
```

## Description

## History

<!-- ```dataview
list from #log/monster/...
``` -->

