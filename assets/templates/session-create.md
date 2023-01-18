---
<%* 
const { Campaign } = window.customJS;
const result = await Campaign.nextSession(tp);
result.next = await tp.system.prompt("Enter file name", result.next);
const title = await tp.system.prompt("Enter title for session");
const filename = Campaign.toFileName(title);
const span = 'span>'
await tp.file.rename(`${result.next}-${filename}`);
tR += 'tags:' %>
- timeline
- <% result.tag %>/events/pc
fc-calendar: Rowen-Heist
---
# Session on <% result.next %>: <% title %>

## Summary
<<% span %> class='ob-timelines' data-class='<% result.tag %>' data-date='1499-xx-xx-00' data-title="<% title %>"></<% span %>

---

## Housekeeping


## Recap

<%*  tR += `![](${result.lastSession}#Summary)`; %>

## Onward... 

- **Objective** single sentence: what is this session about?
- **Twist** some fact that adds depth/complexity to the objective.
- **Opposition** (who/what, motivation)

### The Party

### NPCs

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
