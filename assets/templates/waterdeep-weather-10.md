<%* 
const { Campaign } = window.customJS;
const date = await tp.system.prompt("Month day");
const [month, start] = date.split(' ');
const d = Number(start) || 1
console.log(month, start, d);

for(let i = 0; i < 10; i++) {
    const day = d + i;
    const season = Campaign.faerunSeason(month, day);
    console.log(month, day, season);
    tR += `> [!weather] Weather on ${month} ${day}\n`;
    tR += "> " + await Campaign.weather(season) + "\n";
    tR += `^weather-${day}\n\n`
}
-%>
