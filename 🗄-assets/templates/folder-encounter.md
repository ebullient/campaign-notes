---
<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.lowerKebab(title);
console.log("%o, %o", title, lower);
await tp.file.rename(lower);

let regionTag = await Campaign.chooseTagOrEmpty(tp, 'region/', '');
let placeTag = await Campaign.chooseTagOrEmpty(tp, 'place/', '');
let groupTag = await Campaign.chooseTagOrEmpty(tp, 'group', '');
let tags = '';
if ( placeTag || groupTag || regionTag ) {
  tags = '\ntags:';
  if ( regionTag ) {
    tags += `\n- ${regionTag}`;
  }
  if ( placeTag ) {
    tags += `\n- ${placeTag}`;
  }
  if ( groupTag ) {
    tags += `\n- ${groupTag}`;
  }
}
console.log("%o", tags);
const dataview = 'dataview';
const aliases = `aliases: ["Encounter: ${title}"]`;
-%>
<% aliases %>
type: encounter
status: new<% tags %>
---
# <% title %>
%% Abstract %%

## Ideas
- .

## Main NPCs