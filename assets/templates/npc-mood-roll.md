<%*
const { Campaign } = window.customJS;
const character = await tp.system.prompt("Character name");
const mood = await Campaign.mood();
if (character) {
    tR += `- *${character}'s mood*: ${mood}`;
} else { 
    tR += `_[${mood}]_`;
} 
-%>
