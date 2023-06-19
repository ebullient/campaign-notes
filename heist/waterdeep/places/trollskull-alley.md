---
obsidianUIMode: preview
aliases: ["Trollskull Alley"]
tags: 
- type/area/neighborhood
- place/waterdeep/trollskull-alley
- region/sword-coast-north/waterdeep/city-ward/north
---
# Trollskull Alley
<span class="subhead">Alley, North Ward of Waterdeep</span>

```leaflet
id: waterdeep-map
image: compendium/adventures/waterdeep-dragon-heist/img/trollskull-alley-players.jpg
bounds:
    - [0,0]
    - [691,1000]

height: 500px
unit: feet

defaultZoom: -1
minZoom: -1
maxZoom: 1
zoomDelta: 0.2
scale: 1
defaultZoom: -.6

lat: 346
long: 500
unit: feet

marker: home,455.5760803222656,575.105224609375,trollskull-manor,Trollskull Manor,-2,2
marker: shop,326.4295959472656,823.52490234375,the-bent-nail,The Bent Nail,-2,2
marker: shop,201.7537841796875,777.300537109375,steam-and-steel,Steam and Steel,-2,2
marker: shop,239.1402587890625,553.0654296875,corellons-crown,Corellon's Crown,-2,2
marker: shop,453.4166259765625,348.24554443359375,tigers-eye,Tiger's Eye,-2,2
marker: shop,394.4166259765625,118.24554443359375,book-wyrms-treasure,Book Wyrm's Treasure,-2,2
marker: tavern,357.01434326171875,19.577880859375,frewns-brews,Frewn's Brews,-2,2
marker: shop,196,80.0888671875,zephyr-post,Zephyr Post,-2,2
marker: shop,222.640625,370,path-of-crumbs,Path of Crumbs,-2,2
```

A narrow passage through the interior of the city block:
- Saerdoun Street to the North
- Delzorin Street to the South
- Whaelgond Way to the East
-  Windborne Way to the West
 
Two entrance points existed into the alley from Saerdoun Street and one from Delzorin Street.
The alley itself runs mostly parallel to Delzorin Street.

At the southeast end of the alley, closest to the intersection between Whaelgond Way and Delzorin Street, a removable metal grate opened into a surface shaft that led to the Waterdhavian sewer system.

The narrow alley was marked by its architecture of closely-constructed rowhouses. Several business buildings also backed onto it from the surrounding streets.

<span class="nav">[NPCs](#NPCs) [Locations](#Locations) [History](#History)</span>

## NPCs

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#place/waterdeep/trollskull-alley', 'npc'));
```

## Locations

```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.itemsForTag(dv, '#place/waterdeep/trollskull-alley', 'location'));
```

## History
```dataviewjs
const { Campaign } = window.customJS;
dv.list(Campaign.logsForTag(dv, '#place/waterdeep/trollskull-alley'));
```

https://www.sageadvice.eu/why-waterdeep-trollskull-alley-is-called-that-what-the-story-behind-the-name-is/

> Certainly. Most Waterdhavians “today” (that is, the late 1490s DR) will know only that the North Ward alley has “always” been called that, and may guess it’s named for Trollskull Manor, when the truth is the other way around. Even the Palace clerks can’t help, because it’s called that on their oldest surviving deeds and city plans, meaning it was already called that. 
> 
> I can do better, IF we can trust Elminster, my primary source for almost all we know of the Realms in the first place (he’s been known to bend the truth and indulge in spin a time or two, out of whimsy and in service to Mystra, but is “generally” a reliable narrator). So, according to Elminster, the true derivation of the name is as follows: 
> 
> In 1298 DR, during the bloody collapse of the Shadow Thieves guild, some of its desperate members sought to cover their escapes from the city (that is, giving themselves time to grab all the riches they could to take with them by working with evil wizards of their acquaintance to teleport and release various monsters to maraud in the city, to keep the Watch and the Lords’ agents who were hunting them busy). 
> 
> One mage translocated a foraging band of trolls from the Evermoors to North Ward, and they stalked this alley, then known as Lormaundeir’s Skulk thanks to an unsavory local smuggler, Lormaundeir, who lived on it in the 1270s and owned many properties along it that he rented out; the tenants were initially unaware that he used secret passages built into the walls of these rented rooms to eavesdrop on them, and learn much, but learned the truth when he died in a secret passage, was found by his reek, and local tales of his haunting the passages developed. The trolls slew some citizens along the alley ere they perished in flaming spheres hurled at them by the wizard Tazhara Lurael, of Turmish (formerly one of Elminster’s apprentices). She was racing about the city dealing with many released-by-Shadow-Thieves monsters, and lacked the time to “clean up” properly, so some local youths ended up playing with scorched troll bones, bowling with the skulls for some years ere they all disintegrated under the rigors of such handling. By then, the rest of the city had dubbed the way “Trollskull Alley,” the name stuck, and many of the locals didn’t mind—because it transformed their reputations, from folk living with the ghost of a creepy smuggler to folk who’d survived battling fearsome monsters. 
> 
> So there you have it. (And yes, many locals have reported seeing the phantom apparitions of skulking Lormaundeir AND a trio of trolls proceeding silently down the alley. Not to mention the inquisitive ghost of a tressym, though no one knows where it came from.)