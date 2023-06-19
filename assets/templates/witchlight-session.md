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
- **Strong start?** What is happening? What is the point? What seed will move the story forward?
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

### Secrets and Clues

%% 10! single sentence containing previously unknown information that matters to PCs. Discovery will be improvised. Not all will be. Secrets are only real once they are shared. %%

1. [ ]   
2. [ ]   
3. [ ]   
4. [ ]   
5. [ ]   
6. [ ]   
7. [ ]   
8. [ ]   
9. [ ]   
10. [ ]   

## Loot

- [ ] 
- [ ] 

## Log / Detail
