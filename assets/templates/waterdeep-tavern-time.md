<%*
const { Campaign } = window.customJS;
-%>
- [ ] **Tavern Event**: <%* tR += await Campaign.tavern('events') %>
- [ ] **Tavern Patrons (1)**: <%* tR += await Campaign.tavern('visiting-patrons') %>
- [ ] **Tavern Patrons (2)**: <%* tR += await Campaign.tavern('visiting-patrons') %>
- [ ] **Tavern Patrons (3)**: <%* tR += await Campaign.tavern('visiting-patrons') %>
