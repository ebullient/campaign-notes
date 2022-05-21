---
<%*
const { Campaign } = window.customJS;
const initial = await Campaign.nextHarptosDay(tp);
const filename = await tp.system.prompt("Enter date", initial);
const result = Campaign.harptosDay(filename, initial);
console.log(initial, result);
await tp.file.rename(result.filename);
tR += 'tags:' %>
- timeline
- events/npc/waterdeep
---
# <% result.heading %>

> [!weather] Weather on <% result.heading %>
> <%* tR += await Campaign.weather(result.season) %>
^weather

## News and Rumors on <% result.heading %>
<%* 
tR += `- [ ] NEWS: ${await Campaign.secrets('news')}\n`
tR += `- [ ] NEWS: ${await Campaign.secrets('news')}\n`
tR += `- [ ] ${await Campaign.secrets('rumors')}\n`
tR += `- [ ] ${await Campaign.secrets('rumors')}\n`
tR += `- [ ] ${await Campaign.secrets('rumors')}\n`
-%>

## Events

## NPC Activity
> [!mood]- Mood of the party
> - *Coral's mood*: <%* tR += await Campaign.mood() %>
> - *Nora's mood*: <%* tR += await Campaign.mood() %>
> - *Euphemia's mood*: <%* tR += await Campaign.mood() %>
> - *Lidda's mood*: <%* tR += await Campaign.mood() %>
> - *Trym's mood*: <%* tR += await Campaign.mood() %>

### Adversaries
- *Emmek Frewn's mood*: <%* tR += await Campaign.mood() %>

### Bregan D'aerthe
- *Jarlaxle's mood*: <%* tR += await Campaign.mood() %>
- Sea Maiden's Faire: 
<%*
tR += `    - On the docks: ${await Campaign.faire('buskers')}, ${await Campaign.faire('animals')}\n`
if (result.date.day % 2 == 0) {
    tR += '    - No Carnival tonight'
} else {
    tR += '    - Carnival tonight'
}
%>

### Xanathar Guild
- *Xanathar's mood*: <%* tR += `${await Campaign.mood()}, ${await Campaign.mood()}, ${await Campaign.mood()}` %>

### Manshoon's Zhenterim
- *Manshoon's mood*: <%* tR += await Campaign.mood() %>
- *Urstul Floxin's mood*: <%* tR += await Campaign.mood() %>

### The Doom Raiders
- *Davil Starsong's mood*: <%* tR += await Campaign.mood() %>
- *Yagra's mood*: <%* tR += await Campaign.mood() %>

## Sessions
```dataview
LIST
FROM [[]]
WHERE !contains(file.inlinks, this.file.link)
```