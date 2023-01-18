<%* 
const { Campaign } = window.customJS;
const season = await tp.system.suggester(["spring", "summer", "autumn", "winter"], ["spring", "summer", "autumn", "winter"]);
const weather = await Campaign.weather(season);
console.log(season, weather);
-%>
> [!weather] Weather on ...
> <% weather %>
^weather
