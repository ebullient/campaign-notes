---
obsidianUIMode: preview
---
# NPC Generator tables

## Race

### Faerun Races

| dice: d100 | Race                                                |
| ---------- | --------------------------------------------------- |
| 1-80       | [Human](races/human.md)                             |
| 81-84      | [Halfling (Lightfoot)](races/halfling-lightfoot.md) |
| 85-87      | [Halfling (Stout)](races/halfling-stout.md)         |
| 88-92      | `dice: [[dwarf-tables#^race-dwarf]]`         |
| 93-100     | `dice: [[npc-generator-tables#^other-races]]`       |
^faerun-races

### Other Races

| dice: d20 | Race                                           | 
| --------- | ---------------------------------------------- |
| 1-4       | `dice: [[elf-tables#^race-elf]]`     |
| 5-7       | [Half-Elf](races/half-elf.md)                  |
| 8-9       | `dice: [[gnome-tables#^race-gnome]]`   |
| 10-11     | [Orc](bestiary/humanoid/orc.md)                |
| 12        | [Half-Orc](races/half-orc.md)                  |
| 13        | [Goblin](races/goblin.md)                      |
| 14        | [Tabaxi](races/tabaxi.md)                      |
| 15        | [Kenku](bestiary/humanoid/kenku.md)            |
| 16        | [Tiefling](races/tiefling.md)                  |
| 17        | `dice: [[npc-generator-tables#^race-aasimar]]` |
| 18        | [Dragonborn](races/dragonborn.md)              |
| 19        | [Goliath](races/goliath.md)                    |
| 20        | [Aarakocra](races/aarakocra.md)                |
^other-races

| dice: d6  | Aasimar                                           |
| --------- | ------------------------------------------------- |
| 1-3       | [Aasimar (Protector)](races/aasimar-protector.md) |
| 4-5       | [Aasimar (Fallen)](races/aasimar-fallen.md)       |
| 6         | [Aasimar (Scourge)](races/aasimar-scourge.md)     |
^race-aasimar

## Adventuring NPCs

| classes      |
| ------------ |
| Barbarian    |
| Bard         |
| Cleric       |
| Druid        |
| Fighter      |
| Monk         |
| Paladin      |
| Ranger       |
| Rogue        |
| Sorcerer     |
| Warlock      |
| Wizard       |
^class-types

| dice: d20 | Tier / Level                                        |
| --------- | --------------------------------------------------- |
| 1-14      | Early: `dice: [[npc-generator-tables#^early-tier]]` |
| 15-18     | Mid: `dice: [[npc-generator-tables#^mid-tier]]`     |
| 19-20     | Late: `dice: [[npc-generator-tables#^late-tier]]`   |
^level

| dice: d20 | Early tier level |
| --------- | ---------------- |
| 1-6       | 1                |
| 7-11      | 2                |
| 12-15     | 3                |
| 16-18     | 4                |
| 19-20     | 5                 |
^early-tier

| dice: d20 | Mid tier level |
| --------- | -------------- |
| 1-3       | 5              |
| 4-6       | 6              |
| 7-8       | 7              |
| 9-10      | 8              |
| 11-12     | 9              |
| 13-14     | 10             |
| 15-16     | 11             |
| 17        | 12             |
| 18        | 13             |
| 19        | 14             |
| 20        | 50             |
^mid-tier

| dice: d20 | Late tier level |
| --------- | --------------- |
| 1-6       | 16              |
| 7-11      | 17              |
| 12-15     | 18              |
| 16-18     | 19              |
| 19-20     | 20              |
^late-tier

| dice: d100 | Classes                                                                          |
| -------- | -------------------------------------------------------------------------------- |
| 1-70     | `dice: [[npc-generator-tables#^class-types]]` (`dice: [[npc-generator-tables#^level]]`)                                         |
| 71-100    | `dice: [[npc-generator-tables#^class-types]]` / `dice: [[npc-generator-tables#^class-types]]`  (`dice: [[npc-generator-tables#^level]]`) |
^npc-hero

## Career or laborer or ...
| dice: d100 | profession                                             | 
| ---------- | ------------------------------------------------------ |
| 1-25       | Commoner (unemployed)                                  |
| 26-90      | Professional: `dice: [[npc-generator-tables#^jobs]]`   |
| 91-100     | Adventurer: `dice: [[npc-generator-tables#^npc-hero]]` |
^profession


| dice: d100 | jobs                     |
| ---------- | ------------------------ |
| 1-2        | Farmer                   |
| 3-4        | Artist                   |
| 5-6        | Herbalist                |
| 7-8        | Horse Trainer            |
| 9-10       | Blacksmith               |
| 11-12      | Finesmith                |
| 13-14      | Locksmith                |
| 15-16      | Jeweler                  |
| 17-18      | Entertainer              |
| 19-20      | Teacher                  |
| 21-22      | Armorer                  |
| 23-24      | Cook                     |
| 25-26      | Tailor                   |
| 27-28      | Ropemaker                |
| 29-30      | Fletcher                 |
| 31-32      | Cooper                   |
| 33-34      | Cartwright               |
| 35-36      | Carpenter                |
| 37-38      | Gravedigger / Undertaker |
| 39-40      | Winemaker                |
| 41-42      | Ferryman                 |
| 43-44      | Boatbuilder              |
| 45-46      | Ship's Captain           |
| 47-48      | Fortune Teller           |
| 49-50      | Handmaiden               |
| 51-52      | Miller                   |
| 53-54      | Executioner              |
| 55-56      | Restauranteur            |
| 57-58      | Priest / Cultist         |
| 59-60      | Engineer                 |
| 61-62      | Scribe                   |
| 63-64      | Soldier                  |
| 65-66      | Banker                   |
| 67-68      | Apothecary               |
| 69-70      | Woodcutter               |
| 71-72      | Tax Collector            |
| 73-74      | Fisher                   |
| 75-76      | Fishmonger               |
| 77-78      | Butcher                  |
| 79-80      | Fruit seller             |
| 81-82      | Conman                   |
| 83-84      | Petty thief              |
| 85-86      | Healer                   |
| 87-88      | Butler                   |
| 89-90      | Clerk                    |
| 91-92      | Baker                    |
| 93-94      | Cheesemaker              |
| 95-96      | Innkeeper                |
| 97-98      | Dung Shoveler            |
| 99-100     | Courier                  | 
^jobs

## Abilities

| High Ability |
| ------------ |
| Strength; powerful, brawny, strong as an ox |
| Dexterity; lithe, agile, graceful |
| Constitution; hardy, hale, healthy |
| Intelligence; studious, learned, inquisitive |
| Wisdom; perceptive, spiritual, insightful |
| Charisma; persuasive, forceful, born leader |
^ability-high

| Low Ability |
| -------------------------- |
| Strength; feeble, scrawny |
| Dexterity; clumsy, fumbling |
| Constitution; sickly, pale |
| Intelligence; dim-witted, slow |
| Wisdom; oblivious, absentminded |
| Charisma; dull, boring |
^ability-low

## Wealth

| dice: d100 | Economic Status        |
| ---------- | ---------------------- |
| 1-4        | destitute / homeless   |
| 5-12       | poor                   |
| 13-20      | just getting by        |
| 21-30      | able to support themselves |
| 31-40      | climbing the ladder    |
| 41-52      | comfortable            |
| 53-62      | well-off               |
| 63-74      | rich                   |
| 75-88      | extremely wealthy      |
| 89-100     | royalty-level wealthy  |
^wealth

## Motivation

| Goals                             |
| --------------------------------- |
| a better life                     |
| to attain enlightenment           |
| to attain infamy                  |
| acceptance                        |
| to attain fame                    |
| to infiltrate an opposing faction |
| to acquire a special item         |
| justice                           |
| to craft a special item           |
| glory                             |
| to destroy special item           |
| to impress someone                |
| to locate someone                 |
| to resolve dispute                |
| love                              |
| mastery                           |
| to reveal a secret                |
| to serve their ideology           |
| power                             |
| revenge                           |
| to serve their leader             |
| to reach a location               |
| to sabotage opposing faction      |
| to rescue someone                 |
| wealth                            |
^goals

## Archetype

| archetypes  | 
| ----------- |
| hero        |
| anti-hero   |
| analyst     |
| bureaucrat  |
| caretaker   |
| catalyst    |
| coward      |
| curmudgeon  |
| mentor      |
| guide       |
| herald      |
| trickster   |
| fool        |
| innocent    |
| hermit      |
| wanderer    |
| tracker     |
| judge       |
| maker       |
| executioner |
| giver       |
| superhuman  |
| dreamer     |
| gossip      |
| guardian    |
| hedonist    |
| leader      |
| martyr      |
| everyman    |
| poet        |
| rebel       |
| captive     |
| samaritan   |
| scholar     |
| survivor    |
| sycophant   |
| tempter     |
| tyrant      |
| sufferer    |
| ragamuffin  |
| lackey      |
^archetypes

## Adjectives and Qualities

| personal adjective |
| ------------------ |
| able               |
| abnormal           |
| absent-minded      |
| above average      |
| adventurous        |
| affectionate       |
| agile              |
| agreeable          |
| alert              |
| amazing            |
| ambitious          |
| amiable            |
| amusing            |
| analytical         |
| angelic            |
| apathetic          |
| apprehensive       |
| ardent             |
| artificial         |
| artistic           |
| assertive          |
| attentive          |
| average            |
| awesome            |
| awful              |
| balanced           |
| beautiful          |
| below average      |
| beneficent         |
| blue               |
| blunt              |
| boisterous         |
| brave              |
| bright             |
| brilliant          |
| buff               |
| callous            |
| candid             |
| cantankerous       |
| capable            |
| careful            |
| careless           |
| caustic            |
| cautious           |
| charming           |
| childish           |
| childlike          |
| cheerful           |
| chic               |
| churlish           |
| circumspect        |
| civil              |
| clean              |
| clever             |
| clumsy             |
| coherent           |
| cold               |
| competent          |
| composed           |
| conceited          |
| condescending      |
| confident          |
| confused           |
| conscientious      |
| considerate        |
| content            |
| cool               |
| cool-headed        |
| cooperative        |
| cordial            |
| courageous         |
| cowardly           |
| crabby             |
| crafty             |
| cranky             |
| crass              |
| critical           |
| cruel              |
| curious            |
| cynical            |
| dainty             |
| decisive           |
| deep               |
| deferential        |
| deft               |
| delicate           |
| demonic            |
| dependent          |
| delightful         |
| demure             |
| depressed          |
| devoted            |
| dextrous           |
| diligent           |
| direct             |
| dirty              |
| disagreeable       |
| discerning         |
| discreet           |
| disruptive         |
| distant            |
| distraught         |
| distrustful        |
| dowdy              |
| dramatic           |
| dreary             |
| drowsy             |
| drugged            |
| drunk              |
| dull               |
| dutiful            |
| eager              |
| earnest            |
| easy-going         |
| efficient          |
| egotistical        |
| elfin              |
| emotional          |
| energetic          |
| enterprising       |
| enthusiastic       |
| evasive            |
| even-tempered      |
| exacting           |
| excellent          |
| excitable          |
| experienced        |
| fabulous           |
| fastidious         |
| ferocious          |
| fervent            |
| fiery              |
| flabby             |
| flaky              |
| flashy             |
| frank              |
| friendly           |
| funny              |
| fussy              |
| generous           |
| gentle             |
| gloomy             |
| glutinous          |
| good               |
| grave              |
| great              |
| groggy             |
| grouchy            |
| guarded            |
| hateful            |
| hearty             |
| helpful            |
| hesitant           |
| hot-headed         |
| hypercritical      |
| hysterical         |
| idiotic            |
| idle               |
| illogical          |
| imaginative        |
| immature           |
| immodest           |
| impatient          |
| imperturbable      |
| impetuous          |
| impractical        |
| impressionable     |
| impressive         |
| impulsive          |
| inactive           |
| incisive           |
| incompetent        |
| inconsiderate      |
| inconsistent       |
| independent        |
| indiscreet         |
| indolent           |
| indefatigable      |
| industrious        |
| inexperienced      |
| insensitive        |
| inspiring          |
| intelligent        |
| interesting        |
| intolerant         |
| inventive          |
| irascible          |
| irritable          |
| irritating         |
| jocular            |
| jovial             |
| joyous             |
| judgmental         |
| keen               |
| kind               |
| lame               |
| lazy               |
| lean               |
| leery              |
| lethargic          |
| level-headed       |
| listless           |
| lithe              |
| lively             |
| local              |
| logical            |
| long-winded        |
| lovable            |
| love-lorn          |
| lovely             |
| maternal           |
| mature             |
| mean               |
| meddlesome         |
| mercurial          |
| methodical         |
| meticulous         |
| mild               |
| miserable          |
| modest             |
| moronic            |
| morose             |
| motivated          |
| musical            |
| naive              |
| nasty              |
| natural            |
| naughty            |
| negative           |
| nervous            |
| noisy              |
| normal             |
| nosy               |
| numb               |
| obliging           |
| obnoxious          |
| old-fashioned      |
| one-sided          |
| orderly            |
| ostentatious       |
| outgoing           |
| outspoken          |
| passionate         |
| passive            |
| paternal           |
| paternalistic      |
| patient            |
| peaceful           |
| peevish            |
| pensive            |
| persevering        |
| persnickety        |
| petulant           |
| picky              |
| plain              |
| plain-speaking     |
| playful            |
| pleasant           |
| plucky             |
| polite             |
| popular            |
| positive           |
| powerful           |
| practical          |
| prejudiced         |
| pretty             |
| proficient         |
| proud              |
| provocative        |
| prudent            |
| punctual           |
| quarrelsome        |
| querulous          |
| quick              |
| quick-tempered     |
| quiet              |
| realistic          |
| reassuring         |
| reclusive          |
| reliable           |
| reluctant          |
| resentful          |
| reserved           |
| resigned           |
| resourceful        |
| respected          |
| respectful         |
| responsible        |
| restless           |
| revered            |
| ridiculous         |
| sad                |
| sassy              |
| saucy              |
| sedate             |
| self-assured       |
| selfish            |
| sensible           |
| sensitive          |
| sentimental        |
| serene             |
| serious            |
| sharp              |
| short-tempered     |
| shrewd             |
| shy                |
| silly              |
| sincere            |
| sleepy             |
| slight             |
| sloppy             |
| slothful           |
| slovenly           |
| slow               |
| smart              |
| snazzy             |
| sneering           |
| snobby             |
| somber             |
| sober              |
| sophisticated      |
| soulful            |
| soulless           |
| sour               |
| spirited           |
| spiteful           |
| stable             |
| staid              |
| steady             |
| stern              |
| stoic              |
| striking           |
| strong             |
| stupid             |
| sturdy             |
| subtle             |
| sullen             |
| sulky              |
| supercilious       |
| superficial        |
| surly              |
| suspicious         |
| sweet              |
| tactful            |
| tactless           |
| talented           |
| testy              |
| thinking           |
| thoughtful         |
| thoughtless        |
| timid              |
| tired              |
| tolerant           |
| touchy             |
| tranquil           |
| ugly               |
| unaffected         |
| unbalanced         |
| uncertain          |
| uncooperative      |
| undependable       |
| unemotional        |
| unfriendly         |
| unguarded          |
| unhelpful          |
| unimaginative      |
| unmotivated        |
| unpleasant         |
| unpopular          |
| unreliable         |
| unsophisticated    |
| unstable           |
| unsure             |
| unthinking         |
| unwilling          |
| venal              |
| versatile          |
| vigilant           |
| warm               |
| warmhearted        |
| wary               |
| watchful           |
| weak               |
| well-behaved       |
| well-developed     |
| well-intentioned   |
| well-respected     |
| well-rounded       |
| willing            |
| wonderful          |
| volcanic           |
| vulnerable         |
| zealous            |
^personal-adj

| Qualities        |
| ---------------- |
| abandoned        |
| abused           |
| affirmative      |
| alluring         |
| ambitious        |
| amusing          |
| angry            |
| average          |
| brave            |
| caring           |
| changeable       |
| charitable       |
| clever           |
| common           |
| compelling       |
| confusing        |
| crafty           |
| cranky           |
| craven           |
| credulous        |
| curious          |
| dark             |
| deceitful        |
| dedicated        |
| demanding        |
| dependable       |
| determined       |
| devoted          |
| dominating       |
| driven           |
| dynamic          |
| educating        |
| egocentric       |
| endearing        |
| enlightening     |
| expositional     |
| fair             |
| fearful          |
| final            |
| generous         |
| giving           |
| guiding          |
| healing          |
| helpful          |
| hurt             |
| incredible       |
| injured          |
| innocent         |
| inspiring        |
| logical          |
| lucky            |
| lyrical          |
| manipulative     |
| mercurial        |
| mindless         |
| misleading       |
| morbid           |
| mysterious       |
| mystical         |
| myterious        |
| naive            |
| neglected        |
| noble            |
| normal           |
| obedient         |
| opinionated      |
| patient          |
| patronizing      |
| predictable      |
| protective       |
| questioning      |
| quiet            |
| rational         |
| rebellious       |
| reflecting       |
| reluctant        |
| resolute         |
| revealing        |
| secretive        |
| self-sacrificing |
| selfless         |
| short-sighted    |
| sickly           |
| silly            |
| simple           |
| sombre           |
| straightforward  |
| strong           |
| struggling       |
| talkative        |
| thorough         |
| thoughtful       |
| thoughtless      |
| trapped          |
| typical          |
| unbiased         |
| unfettered       |
| unpredictable    |
| unwilling        |
| weak             |
| willing          |
| wishful          |
^qualities

## Personality Traits
| Traits |
| ----- |
| Acolyte: `dice: [](npc-generator-tables.md#^acolyte-traits)` |
| Charlatan: `dice: [](npc-generator-tables.md#^charlatan-traits)` |
| Criminal `dice: [](npc-generator-tables.md#^criminal-traits)` |
| Entertainer: `dice: [](npc-generator-tables.md#^entertainer-traits)` |
| Faction Agent: `dice: [](npc-generator-tables.md#^acolyte-traits)` (replace faith with faction) |
| Fisher: `dice: [](npc-generator-tables.md#^fisher-traits)` |
| Folk hero: `dice: [](npc-generator-tables.md#^folk-hero-traits)` |
| Gambler: `dice: [](npc-generator-tables.md#^gambler-traits)` |
| Grinner: `dice: [](npc-generator-tables.md#^grinner-traits)` |
| Guild artisan: `dice: [](npc-generator-tables.md#^guild-artisan-traits)` |
| Hermit: `dice: [](npc-generator-tables.md#^hermit-traits)` |
| Marine: `dice: [](npc-generator-tables.md#^marine-traits)` |
| Noble: `dice: [](npc-generator-tables.md#^noble-traits)` |
| Outlander: `dice: [](npc-generator-tables.md#^outlander-traits)` |
| Plaintiff: `dice: [](npc-generator-tables.md#^plaintiff-traits)` |
| Sage: `dice: [](npc-generator-tables.md#^sage-traits)` |
| Sailor: `dice: [](npc-generator-tables.md#^sailor-traits)` |
| Shipwright: `dice: [](npc-generator-tables.md#^shipwright-traits)` |
| Smuggler: `dice: [](npc-generator-tables.md#^smuggler-traits)` |
| Soldier: `dice: [](npc-generator-tables.md#^soldier-traits)` |
| Urchin: `dice: [](npc-generator-tables.md#^urchin-traits)` |
^personality-traits

| Acolyte Traits |
| ----- |
| I idolize a particular hero of my faith and constantly refer to that person's deeds and example. |
| I can find common ground between the fiercest enemies, empathizing with them and always working toward peace. |
| I see omens in every event and action. The gods try to speak to us, we just need to listen. |
| Nothing can shake my optimistic attitude. |
| I quote (or misquote) the sacred texts and proverbs in almost every situation. |
| I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods. |
| I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me. |
| I've spent so long in the temple that I have little practical experience dealing with people in the outside world. |
^acolyte-traits

| Charlatan Traits |
| ----- |
| I fall in and out of love easily, and am always pursuing someone. |
| I have a joke for every occasion, especially occasions where humor is inappropriate. |
| Flattery is my preferred trick for getting what I want. |
| I'm a born gambler who can't resist taking a risk for a potential payoff. |
| I lie about almost everything, even when there's no good reason to. |
| Sarcasm and insults are my weapons of choice. |
| I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment. |
| I pocket anything I see that might have some value. |
^charlatan-traits

| Criminal Traits |
| ----- |
| I always have plan for what to do when things go wrong. |
| I am always calm, no matter what the situation. I never raise my voice or let my emotions control me. |
| The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden. |
| I would rather make a new friend than a new enemy. |
| I am incredibly slow to trust. Those who seem the fairest often have the most to hide. |
| I don't pay attention to the risks in a situation. Never tell me the odds. |
| The best way to get me to do something is to tell me I can't do it. |
| I blow up at the slightest insult. |
^criminal-traits

| Entertainer Traits |
| ----- |
| I know a story relevant to almost every situation. |
| Whenever I come to a new place, I collect local rumors and spread gossip. |
| I'm a hopeless romantic, always searching for that 'special someone'. |
| Nobody stays angry at me or around me for long, since I can defuse any amount of tension. |
| I love a good insult, even one directed at me. |
| I get bitter if I'm not the center of attention. |
| I'll settle for nothing less than perfection. |
| I change my mood or my mind as quickly as I change key in a song. |
^entertainer-traits

| Fisher Traits |
| ----- |
| I am unmoved by the wrath of nature. |
| My friends are my crew; we sink or float together. |
| I need long stretches of quiet to clear my head. |
| Rich folk don't know the satisfaction of hard work. |
| I laugh heartily, feel deeply, and fear nothing. |
| I work hard; nature offers no handouts. |
| I dislike bargaining; state your price and mean it. |
| Luck favors me, and I take risks others might not. |
^fisher-traits

| Folk Hero Traits |
| ----- |
| I judge people by their actions, not their words. |
| If someone is in trouble, I'm always willing to lend help. |
| When I set my mind to something, I follow through no matter what gets in my way. |
| I have a strong sense of fair play and always try to find the most equitable solution to arguments. |
| I'm confident in my own abilities and do what I can to instill confidence in others. |
| Thinking is for other people. I prefer action. |
| I misuse long words in an attempt to sound smarter. |
| I get bored easily. When am I going to get on with my destiny? |
^folk-hero-traits

| Gambler Traits |
| ----- |
| I plan for every contingency. Leave nothing to chance! |
| Every copper wants to be a silver. Each bet is an opportunity. |
| I'm one of Lady Luck's favored. Anything I try is destined to succeed. |
| I've lost so much to gambling that I refuse to spend money on anything anymore. |
| Nothing is certain. Planning is a coward's act. |
| I can't be sure who I've swindled, cheated, or defeated, so I keep a low profile in public. |
| The perfect bet is out there somewhere. I just have to keep my eyes open. |
| I have beaten my addiction, but all it takes is one weak moment and I'll be back at the card table. |
^gambler-traits

| Grinner |
| ------- |
| I love the spotlight. Everyone, look at me! |
| Give me a drink and I'm your friend. |
| Talk to me about yourself. I'm a hell of a listener. |
| I hate to start fights, but I love to finish them. |
| I can't sit still. |
| I'm always humming an old tune from my past. |
| When I don't have a reason to smile, I'm miserable. |
| I'm lucky like you wouldn't believe. |
^grinner-traits

| Guild Artisan Traits |
| ----- |
| I believe that everything worth doing is worth doing right. I can't help it--I'm a perfectionist. |
| I'm a snob who looks down on those who can't appreciate fine art. |
| I always want to know how things work and what makes people tick. |
| I'm full of witty aphorisms and have a proverb for every occasion. |
| I'm rude to people who lack my commitment to hard work and fair play. |
| I like to talk at length about my profession. |
| I don't part with my money easily and will haggle tirelessly to get the best deal possible. |
| I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me. |
^guild-artisan-traits

| Hermit Traits |
| ----- |
| I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt. |
| I am utterly serene, even in the face of disaster. |
| The leader of my community has something wise to say on every topic, and I am eager to share that wisdom. |
| I feel tremendous empathy for all who suffer. |
| I'm oblivious to etiquette and social expectations. |
| I connect everything that happens to me to a grand cosmic plan. |
| I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings. |
| I am working on a grand philosophical theory and love sharing my ideas. |
^hermit-traits

| Marine Traits |
| ----- |
| I speak rarely but mean every word I say. |
| I laugh loudly and see the humor in stressful situations. |
| I prefer to solve problems without violence, but I finish fights decisively. |
| I enjoy being out in nature; poor weather never sours my mood. |
| I am dependable. |
| I am always working on some project or other. |
| I become cantankerous and quiet in the rain. |
| When the sea is within my sight, my mood is jovial and optimistic. |
^marine-traits

| Noble Traits |
| ----- |
| My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world. |
| The common folk love me for my kindness and generosity. |
| No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses. |
| I take great pains to always look my best and follow the latest fashions. |
| I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations. |
| Despite my birth, I do not place myself above other folk. We all have the same blood. |
| My favor, once lost, is lost forever. |
| If you do me an injury, I will crush you, ruin your name, and salt your fields. |
^noble-traits

| Plaintiff Traits |
| -------- |
| I can't believe I have a chance to join Acquisitions Incorporated! The fun I'm going to have! |
| I've been wronged my entire life, and the world owes me. |
| I have always tried to make the best of a bad situation. |
| The law doesn't protect the honest and the hard working. I'm going to do whatever needs to be done to make things right. |
| I'm always in the wrong place at the wrong time. |
| My superiors are smarter and wiser than I am. I do what I'm told. |
| Never pass up the opportunity to make an easy bit of coin. That's my motto. |
| I'm beginning to feel like the gods are not on my side. |
^plaintiff-traits

| Outlander Traits |
| ----- |
| I'm driven by a wanderlust that led me away from home. |
| I watch over my friends as if they were a litter of newborn pups. |
| I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to. |
| I have a lesson for every situation, drawn from observing nature. |
| I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear. |
| I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them. |
| I feel far more comfortable around animals than people. |
| I was, in fact, raised by wolves. |
^outlander-traits

| Sage Traits |
| ----- |
| I use polysyllabic words to convey the impression of great erudition. |
| I've read every book in the world's greatest libraries--or like to boast that I have. |
| I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others. |
| There's nothing I like more than a good mystery. |
| I'm willing to listen to every side of an argument before I make my own judgment. |
| I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared...to me. |
| I am horribly, horribly awkward in social situations. |
| I'm convinced that people are always trying to steal my secrets. |
^sage-traits

| Sailor Traits |
| ----- |
| My friends know they can rely on me, no matter what. |
| I work hard so that I can play hard when the work is done. |
| I enjoy sailing into new ports and making new friends over a flagon of ale. |
| I stretch the truth for the sake of a good story. |
| To me, a tavern brawl is a nice way to get to know a new city. |
| I never pass up a friendly wager. |
| My language is as foul as an otyugh nest. |
| I like a job well done, especially if I can convince someone else to do it. |
^sailor-traits

| Shipwright Traits |
| ----------------- |
| I love talking and being heard more than I like to listen. |
| I'm extremely fond of puzzles. |
| I thrive under pressure. |
| I love sketching and designing objects, especially boats. |
| I'm not afraid of hard work—in fact, I prefer it. |
| A pipe, an ale, and the smell of the sea: paradise. |
| I have an endless supply of cautionary tales related to the sea. |
| I don't mind getting my hands dirty. |
^shipwright-traits

| Smuggler Traits |
| --------------- |
| I love being on the water but hate fishing. |
| I think of everything in terms of monetary value. |
| I never stop smiling. |
| Nothing rattles me; I have a lie for every occasion. |
| I love gold but won't cheat a friend. |
| I enjoy doing things others believe to be impossible. |
| I become wistful when I see the sun rise over the ocean. |
| I am no common criminal; I am a mastermind. |
^smuggler-traits

| Soldier Traits |
| ----- |
| I'm always polite and respectful. |
| I'm haunted by memories of war. I can't get the images of violence out of my mind. |
| I've lost too many friends, and I'm slow to make new ones. |
| I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation. |
| I can stare down a hellhound without flinching. |
| I enjoy being strong and like breaking things. |
| I have a crude sense of humor. |
| I face problems head-on. A simple direct solution is the best path to success. |
^soldier-traits

| Urchin Traits |
| ----- |
| I hide scraps of food and trinkets away in my pockets. |
| I ask a lot of questions. |
| I like to squeeze into small places where no one else can get to me. |
| I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms. |
| I eat like a pig and have bad manners. |
| I think anyone who's nice to me is hiding evil intent. |
| I don't like to bathe. |
| I bluntly say what other people are hinting or hiding. |
^urchin-traits

## Ideals

| Ideals |
| ------ |
| Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful) |
| Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful) |
| Charity. I always try to help those in need, no matter what the personal cost. (Good) |
| Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic) |
| Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful) |
| Aspiration. I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings. (Any) |
| Independence. I am a free spirit--no one tells me what to do. (Chaotic) |
| Fairness. I never target people who can't afford to lose a few coins. (Lawful) |
| Charity. I distribute money I acquire to the people who really need it. (Good) |
| Creativity. I never run the same con twice. (Chaotic) |
| Friendship. Material goods come and go. Bonds of friendship last forever. (Good) |
| Aspiration. I'm determined to make something of myself. (Any) |
| Honor. I don't steal from others in the trade. (Lawful) |
| Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic) |
| Charity. I steal from the wealthy so that I can help people in need. (Good) |
| Greed. I will do whatever it takes to become wealthy. (Evil) |
| People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral) |
| Redemption. There's a spark of good in everyone. (Good) |
| Beauty. When I perform, I make the world better than it was. (Good) |
| Tradition. The stories, legends, and songs of the past must never be forgotten. (Lawful) |
| Creativity. The world is in need of new ideas and bold action. (Chaotic) |
| Greed. I'm only in it for the money and fame. (Evil) |
| People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral) |
| Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any) |
| Respect. People deserve to be treated with dignity and respect. (Good) |
| Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful) |
| Freedom. Tyrants must not be allowed to oppress the people. (Chaotic) |
| Might. If I become strong, I can take what I want--what I deserve. (Evil) |
| Sincerity. There's no good pretending to be something I'm not. (Neutral) |
| Destiny. Nothing and no one can steer me away from my higher calling. (Any) |
| Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful) |
| Generosity. My talents were given to me so that I could use them to benefit the world. (Good) |
| Freedom. Everyone should be free to pursue his or her livelihood. (Chaotic) |
| Greed. I'm only in it for the money. (Evil) |
| People. I'm committed to the people I care about, not to ideals. (Neutral) |
| Aspiration. I work hard to be the best there is at my craft. (Any) |
| Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good) |
| Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful) |
| Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic) |
| Power. Solitude and contemplation are paths toward mystical or magical power. (Evil) |
| Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral) |
| Self-Knowledge. If you know yourself, there're nothing left to know. (Any) |
| Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good) |
| Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful) |
| Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic) |
| Power. If I can attain more power, no one will tell me what to do. (Evil) |
| Family. Blood runs thicker than water. (Any) |
| Noble Obligation. It is my duty to protect and care for the people beneath me. (Good) |
| Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic) |
| Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good) |
| Honor. If I dishonor myself, I dishonor my whole clan. (Lawful) |
| Might. The strongest are meant to rule. (Evil) |
| Nature. The natural world is more important than all the constructs of civilization. (Neutral) |
| Glory. I must earn glory in battle, for myself and my clan. (Any) |
| Knowledge. The path to power and self-improvement is through knowledge. (Neutral) |
| Beauty. What is beautiful points us beyond itself toward what is true. (Good) |
| Logic. Emotions must not cloud our logical thinking. (Lawful) |
| No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic) |
| Power. Knowledge is the path to power and domination. (Evil) |
| Self-improvement. The goal of a life of study is the betterment of oneself. |
| Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good) |
| Fairness. We all do the work, so we all share in the rewards. (Lawful) |
| Freedom. The sea is freedom--the freedom to go anywhere and do anything. (Chaotic) |
| Master. I'm a predator, and the other ships on the sea are my prey. (Evil) |
| People. I'm committed to my crewmates, not to ideals. (Neutral) |
| Aspiration. Someday I'll own my own ship and chart my own destiny. (Any) |
| Greater Good. Our lot is to lay down our lives in defense of others. (Good) |
| Responsibility. I do what I must and obey just authority. (Lawful) |
| Independence. When people follow orders blindly they embrace a kind of tyranny. (Chaotic) |
| Might. In life as in war, the stronger force wins. (Evil) |
| Ideals aren't worth killing for or going to war for. (Neutral) |
| Nation. My city, nation, or people are all that matter. (Any) |
| Respect. All people, rich or poor, deserve respect. (Good) |
| Community. We have to take care of each other, because no one else is going to do it. (Lawful) |
| Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic) |
| Retribution. The rich need to be shown what life and death are like in the gutters. (Evil) |
| People. I help people who help me--that's what keeps us alive. (Neutral) |
| Aspiration. I'm going to prove that I'm worthy of a better life. (Any) |
^ideals

### NPC Ideals

| Good Ideals |
| ------ |
| Beauty |
| Charity |
| Greater good |
| Life |
| Respect |
| Self-sacrifice |
^npc-ideals-good

| Evil Ideals |
| ------ |
| Domination |
| Greed |
| Might |
| Pain |
| Retribution |
| Slaughter |
^npc-ideals-evil

| Lawful Ideals |
| ------ |
| Community |
| Fairness |
| Honor |
| Logic |
| Responsibility |
| Tradition |
^npc-ideals-lawful

| Chaotic Ideals |
| ------ |
| Change |
| Creativity |
| Freedom |
| Independence |
| No limits |
| Whimsy |
^npc-ideals-chaotic

| Neutral Ideals |
| ------ |
| Balance |
| Knowledge |
| Live and let live |
| Moderation |
| Neutrality |
| People |
^npc-ideals-neutral

| Other Ideals |
| ------ |
| Aspiration |
| Discovery |
| Glory |
| Nation |
| Redemption |
| Self-knowledge |
^npc-ideals-other

## Bonds

| Bonds |
| ----- |
| I would die to recover an ancient artifact of my faith that was lost long ago. |
| I will someday get revenge on the corrupt temple hierarchy who branded me a heretic. |
| I owe me life to the priest who took me in when my parents died. |
| Everything I do is for the common people. |
| I will do anything to protect the temple where I served. |
| I seek to preserve a sacred text that my enemies consider heretical and seek to destroy. |
| I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about. |
| I owe everything to my mentor--a horrible person who's probably rotting in jail somewhere. |
| Somewhere out there I have a child who doesn't know me. I'm making the world better for him or her. |
| I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me. |
| A powerful person killed someone I love. Some day soon, I'll have my revenge. |
| I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself. |
| I'm trying to pay off an old debt I owe to a generous benefactor. |
| My ill-gotten gains go to support my family. |
| Something important was taken from me, and I aim to steal it back. |
| I will become the greatest thief that ever lived. |
| I'm guilty of a terrible crime. I hope I can redeem myself for it. |
| Someone I loved died because of a mistake I made. That will never happen again. |
| My instrument is my most treasured possession, and it reminds me of someone I love. |
| Someone stole my precious instrument, and someday I'll get it back. |
| I want to be famous, whatever it takes. |
| I idolize a hero of the old tales and measure my deeds against that person's. |
| I will do anything to prove myself superior to me hated rival. |
| I would do anything for the other members of my old troupe. |
| I have a family, but I have no idea where they are. One day, I hope to see them again. |
| I worked the land, I love the land, and I will protect the land. |
| A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter. |
| My tools are symbols of my past life, and I carry them so that I will never forget my roots. |
| I protect those who cannot protect themselves. |
| I wish my childhood sweetheart had come with me to pursue my destiny. |
| The workshop where I learned my trade is the most important place in the world to me. |
| I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy. |
| I owe my guild a great debt for forging me into the person I am today. |
| I pursue wealth to secure someone's love. |
| One day I will return to my guild and prove that I am the greatest artisan of them all. |
| I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood. |
| Nothing is more important than the other members of my hermitage, order, or association. |
| I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them. |
| I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me. |
| I entered seclusion because I loved someone I could not have. |
| Should my discovery come to light, it could bring ruin to the world. |
| My isolation gave me great insight into a great evil that only I can destroy. |
| I will face any challenge to win the approval of my family. |
| My house's alliance with another noble family must be sustained at all costs. |
| Nothing is more important that the other members of my family. |
| I am in love with the heir of a family that my family despises. |
| My loyalty to my sovereign is unwavering. |
| The common folk must see me as a hero of the people. |
| My family, clan, or tribe is the most important thing in my life, even when they are far from me. |
| An injury to the unspoiled wilderness of my home is an injury to me. |
| I will bring terrible wrath down on the evildoers who destroyed my homeland. |
| I am the last of my tribe, and it is up to me to ensure their names enter legend. |
| I suffer awful visions of a coming disaster and will do anything to prevent it. |
| It is my duty to provide children to sustain my tribe. |
| It is my duty to protect my students. |
| I have an ancient text that holds terrible secrets that must not fall into the wrong hands. |
| I work to preserve a library, university, scriptorium, or monastery. |
| My life's work is a series of tomes related to a specific field of lore. |
| I've been searching my whole life for the answer to a certain question. |
| I sold my soul for knowledge. I hope to do great deeds and win it back. |
| I'm loyal to my captain first, everything else second. |
| The ship is most important--crewmates and captains come and go. |
| I'll always remember my first ship. |
| In a harbor town, I have a paramour whose eyes nearly stole me from the sea. |
| I was cheated of my fair share of the profits, and I want to get my due. |
| Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine. |
| I would lay down my life for the people I served with. |
| Someone saved my life on the battlefield. To this day, I will never leave a friend behind. |
| My honor is my life. |
| I'll never forget the crushing defeat my company suffered or the enemies who dealt it. |
| Those who fight beside me are those worth dying for. |
| I fight for those who cannot fight for themselves. |
| My town or city is my home, and I'll fight to defend it. |
| I sponsor an orphanage to keep others from enduring what I was forced to endure. |
| I owe my survival to another urchin who taught me to live on the streets. |
| I owe a debt I can never repay to the person who took pity on me. |
| I escaped my life of poverty by robbing an important person, and I'm wanted for it. |
| No one else is going to have to endure the hardships I've been through. |
^bonds

### NPC Bonds

| Bond |
|------|
| Dedicated to fulfilling a personal life goal |
| Protective of close family members |
| Protective of colleagues or compatriots |
| Loyal to a benefactor, patron, or employer |
| Captivated by a romantic interest |
| Drawn to a special place |
| Protective of a sentimental keepsake |
| Protective of a valuable possession |
| Out for revenge |
| `dice: [](npc-generator-tables.md#^npc-bonds)`, `dice: [](npc-generator-tables.md#^npc-bonds)`|
^npc-bonds

## Flaws

| Flaws |
| ----- |
| I judge others harshly, and myself even more severely. |
| I put too much trust in those who wield power within my temple's hierarchy. |
| My piety sometimes leads me to blindly trust those that profess faith in my god. |
| I am inflexible in my thinking. |
| I am suspicious of strangers and suspect the worst of them. |
| Once I pick a goal, I become obsessed with it to the detriment of everything else in my life. |
| I can't resist a pretty face. |
| I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in. |
| I'm convinced that no one could ever fool me in the way I fool others. |
| I'm too greedy for my own good. I can't resist taking a risk if there's money involved. |
| I can't resist swindling people who are more powerful than me. |
| I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough. |
| When I see something valuable, I can't think about anything but how to steal it. |
| When faced with a choice between money and my friends, I usually choose the money. |
| If there's a plan, I'll forget it. If I don't forget it, I'll ignore it. |
| I have a 'tell' that reveals when I'm lying. |
| I turn tail and run when things go bad. |
| An innocent person is in prison for a crime that I committed. I'm okay with that. |
| I'll do anything to win fame and renown. |
| I'm a sucker for a pretty face. |
| A scandal prevents me from ever going home again. That kind of trouble seems to follow me around. |
| I once satirized a noble who still wants my head. It was a mistake that I will likely repeat. |
| I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble. |
| Despite my best efforts, I am unreliable to my friends. |
| The tyrant who rules my land will stop at nothing to see me killed. |
| I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure. |
| The people who knew me when I was young know my shameful secret, so I can never go home again. |
| I have a weakness for the vices of the city, especially hard drink. |
| Secretly, I believe that things would be better if I were a tyrant lording over the land. |
| I have trouble trusting in my allies. |
| I'll do anything to get my hands on something rare or priceless. |
| I'm quick to assume that someone is trying to cheat me. |
| No one must ever learn that I once stole money from guild coffers. |
| I'm never satisfied with what I have--I always want more. |
| I would kill to acquire a noble title. |
| I'm horribly jealous of anyone who outshines my handiwork. Everywhere I go, I'm surrounded by rivals. |
| Now that I've returned to the world, I enjoy its delights a little too much. |
| I harbor dark bloodthirsty thoughts that my isolation failed to quell. |
| I am dogmatic in my thoughts and philosophy. |
| I let my need to win arguments overshadow friendships and harmony. |
| I'd risk too much to uncover a lost bit of knowledge. |
| I like keeping secrets and won't share them with anyone. |
| I secretly believe that everyone is beneath me. |
| I hide a truly scandalous secret that could ruin my family forever. |
| I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger. |
| I have an insatiable desire for carnal pleasures. |
| In fact, the world does revolve around me. |
| By my words and actions, I often bring shame to my family. |
| I am too enamored of ale, wine, and other intoxicants. |
| There's no room for caution in a life lived to the fullest. |
| I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me. |
| I am slow to trust members of other races |
| Violence is my answer to almost any challenge. |
| Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish. |
| I am easily distracted by the promise of information. |
| Most people scream and run when they see a demon. I stop and take notes on its anatomy. |
| Unlocking an ancient mystery is worth the price of a civilization. |
| I overlook obvious solutions in favor of complicated ones. |
| I speak without really thinking through my words, invariably insulting others. |
| I can't keep a secret to save my life, or anyone else's. |
| I follow orders, even if I think they're wrong. |
| I'll say anything to avoid having to do extra work. |
| Once someone questions my courage, I never back down no matter how dangerous the situation. |
| Once I start drinking, it's hard for me to stop. |
| I can't help but pocket loose coins and other trinkets I come across. |
| My pride will probably lead to my destruction |
| The monstrous enemy we faced in battle still leaves me quivering with fear. |
| I have little respect for anyone who is not a proven warrior. |
| I made a terrible mistake in battle that cost many lives--and I would do anything to keep that mistake secret. |
| My hatred of my enemies is blind and unreasoning. |
| I obey the law, even if the law causes misery. |
| I'd rather eat my armor than admit when I'm wrong. |
| If I'm outnumbered, I always run away from a fight. |
| Gold seems like a lot of money to me, and I'll do just about anything for more of it. |
| I will never fully trust anyone other than myself. |
| I'd rather kill someone in their sleep than fight fair. |
| It's not stealing if I need it more than someone else. |
| People who don't take care of themselves get what they deserve. |
^flaws

### NPC Flaws and Secrets

| NPC Flaws/Secret |
|------------------|
| Forbidden love or susceptibility to romance |
| Enjoys decadent pleasures |
| Arrogance |
| Envies another creature's possessions or station |
| Overpowering greed |
| Prone to rage |
| Has a powerful enemy |
| Prone to sudden suspicion |
| Shameful or scandalous history |
| Secret crime or misdeed |
| Possession of forbidden lore |
| Foolhardy bravery |
^npc-flaws

## Gender

| dice: d100 | Pronouns                                              | 
| ---------- | ----------------------------------------------------- |
| 1-50       | Female                                                |
| 51-90      | Male                                                  |
| 91-100     | Non-binary `dice: [[npc-generator-tables#^pronouns]]` |
^gender

| dice: 1d4 | Pronouns  |
| --------- | --------- |
| 1         | They/Them |
| 2         | She/Her   |
| 3         | He/Him    |
| 4         | Xe/Xyr    |
^pronouns

## Alignment

| dice: 3d6 | Alignment 1 |
| --------- | ----------- |
| 1-3       | `dice: [](npc-generator-tables.md#^chaotic-neutral-evil)` |
| 4-5       | Lawful evil  |
| 6-8       | Neutral evil |
| 9-12      | Neutral      |
| 13-15     | Neutral good |
| 16-17     | `dice: [](npc-generator-tables.md#^lawful)` |
| 18        | `dice: [](npc-generator-tables.md#^chaotic-neutral-good)` |
^alignment

| Chaotic negative |
|------------------|
| Chaotic evil     |
| Chaotic neutral  |
^chaotic-neutral-evil

| Lawful |
|------------------|
| Lawful good     |
| Lawful neutral  |
^lawful

| Chaotic positive |
|------------------|
| Lawful good     |
| Lawful neutral  |
^chaotic-neutral-good

## Mannerisms

| Mannerisms |
|---------------|
| Prone to singing, whistling, or humming quietly |
| Speaks in rhyme or some other peculiar way |
| Particularly low or high voice |
| Speaks in an unusually formal manner |
| Enunciates overly clearly |
| Speaks loudly |
| Whispers |
| Uses flowery speech or long words |
| Frequently uses the wrong word |
| Uses colorful oaths and exclamations |
| Makes constant jokes or puns |
| Prone to predictions of doom |
| Fidgets |
| Squints |
| Stares into the distance |
| Chews something |
| Paces |
| Taps fingers |
| Bites fingernails |
| Twirls hair or tugs beard |
^mannerisms

## Talents

| Talents |
|---------------|
| Plays a musical instrument |
| Speaks several languages fluently |
| Unbelievably lucky |
| Perfect memory |
| Great with animals |
| Great with children |
| Great at solving puzzles |
| Great at one game |
| Great at impersonations |
| Draws beautifully |
| Paints beautifully |
| Sings beautifully |
| Drinks everyone under the table |
| Expert carpenter |
| Expert cook |
| Expert dart thrower and rock skipper |
| Expert juggler |
| Skilled actor and master of disguise |
| Skilled dancer |
| Knows thieves' cant |
^talents

## Appearance

| Feature                                     |
| ------------------------------------------- |
| Distinctive Jewelry                         |
| Piercings                                   |
| Flamboyant, outlandish clothes              |
| Formal, Clean clothes                       |
| Ragged, dirty clothes                       | 
| Pronounced Scar                             |
| Missing teeth                               |
| Missing fingers                             |
| Unusual eye color (or two different colors) |
| Tattoos                                     |
| Birthmark                                   |
| Unusual skin color                          |
| Bald                                        |
| Braided beard or hair                       |
| Unusual hair color                          |
| Nervous eye twitch                          |
| Distinctive nose                            |
| Distinctive posture                         |
| Exceptionally beautiful                     |
| Exceptionally ugly                          |
^appearance

## Interaction with Others

| d12 | Trait |
|-----|-------|
| 1 | Argumentative |
| 2 | Arrogant |
| 3 | Blustering |
| 4 | Rude |
| 5 | Curious |
| 6 | Friendly |
| 7 | Honest |
| 8 | Hot tempered |
| 9 | Irritable |
| 10 | Ponderous |
| 11 | Quiet |
| 12 | Suspicious |
^interaction