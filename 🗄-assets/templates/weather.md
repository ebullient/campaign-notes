<%* 
const { Campaign } = window.customJS;
const season = tp.system.suggester(["spring", "summer", "autumn", "winter"], ["spring", "summer", "autumn", "winter"]) 
-%>

> [!weather] Weather on xxxx xx, 1499  
> <%* tR += await Campaign.weather(season) %>
