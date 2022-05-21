<%*
const { Campaign } = window.customJS;
-%>
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

### Xanathar Guild
- *Xanathar's mood*: <%* tR += `${await Campaign.mood()}, ${await Campaign.mood()}, ${await Campaign.mood()}` %>

### Manshoon's Zhenterim
- *Manshoon's mood*: <%* tR += await Campaign.mood() %>
- *Urstul Floxin's mood*: <%* tR += await Campaign.mood() %>

### The Doom Raiders
- *Davil Starsong's mood*: <%* tR += await Campaign.mood() %>
- *Yagra's mood*: <%* tR += await Campaign.mood() %>

