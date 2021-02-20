<%*
const { Campaign } = window.customJS;
-%>
## NPC Activity
- *Emmek Frewn's mood*: <%* tR += await Campaign.mood() %>

### Bregan D'aerthe
- *Jarlaxle's mood*: <%* tR += await Campaign.mood() %>

### Xanathar Guild
- *Xanathar's mood*: <%* tR += `${await Campaign.mood()}, ${await Campaign.mood()}, ${await Campaign.mood()}` %>

### Manshoon's Zhenterim
- *Manshoon's mood*: <%* tR += await Campaign.mood() %>
- *Urstul Floxin's mood*: <%* tR += await Campaign.mood() %>

### The Doom Raiders
- *Davil Starsong's mood*: <%* tR += await Campaign.mood() %>
- *Yagra's mood*: <%* tR += await Campaign.mood() %>