---
<%* 
const { Campaign } = window.customJS;
const result = await Campaign.nextSession(tp);
console.log("%o", result);
const title = await tp.system.prompt("Enter name for session");
const lower = Campaign.lowerKebab(title);
//const tag = result.folder.contains('owen') ? 'rowen' : 'uvms';
const tag = 'rowen';
console.log(`${result.next}-${lower}`);
await tp.file.rename(`${result.next}-${lower}`);
tR += 'tags:' %>
- timeline
- events/pc/<% tag %>
---
# Session on <% result.next %>: <% title %>

## Summary
%%span class='ob-timelines' data-class='<% tag %>' data-date='1499-xx-xx-00' data-title="<% tag %> NEXT"></span%%

---

## Housekeeping


## Recap of Last Session

<%*  tR += `![](${result.lastSession}#Summary)`; %>

## Create a strong start
%%
- **Objective** single sentence: what is this session about?
- **Twist** some fact that adds depth/complexity to the objective.
- **Opposition** (who/what, motivation)
%%

### NPCs

### The Party

### The Day


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

## Log / Details
