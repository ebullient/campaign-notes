---
<%*  
const { Campaign } = window.customJS;
const result = await Campaign.lastFile(tp); 
const suffix = result.replaceAll(/^.*(\d+).*$/g, "$1");
const next = parseInt(suffix) + 1;
await tp.file.rename('session-' + `${next}`.padStart(3, '0'));
tR += 'tags:' %>
- timeline
- witchlight/events/pc
---
# Session <% next %>

%%prevnext%%

## Summary


---

## Housekeeping


## Recap

<%* tR += `![${result}](${result}#Summary)`; %>

## Onward... 
%%
- **Objective** single sentence: what is this session about?
- **Twist** some fact that adds depth/complexity to the objective.
- **Opposition** (who/what, motivation)
%%

### NPCs

### The Party
- [Alister Fulminis](../../witchlight/characters/alister-fulminis.md)
- [Barry the Bunny Boxer](../../witchlight/characters/barry-bunny-boxer.md)
- [Gael Twinblade](../../witchlight/characters/gael-twinblade.md)
- [Volca Emberrune](../../witchlight/characters/volca-emberrune.md)
- [Vorbis Foonbirack](../../witchlight/characters/vorbis-foonbirack.md)

## Potential Scenes
- [ ] .
    ```ad-scene
    collapse: closed
    ```
- [ ] .
    ```ad-scene
    collapse: closed
    ```
- [ ] .
    ```ad-scene
    collapse: closed
    ```
## Secrets and Clues

- [ ] 

## Loot

- [ ] 
- [ ] 

## Log / Detail
