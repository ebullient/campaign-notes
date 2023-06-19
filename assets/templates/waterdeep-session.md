---
<%* 
const { Campaign } = window.customJS;
const result = await Campaign.nextSession(tp);
result.next = await tp.system.prompt("Enter session date", result.next);
await tp.file.rename(`${result.next}`);
const span = 'span>'
tR += 'tags:' %>
- timeline
- heist/events/pc
fc-calendar: Heist
---
# Session on <% result.next %>: ...

%%prevnext%%

## Summary

<<% span %> class='ob-timelines' data-class='heist' data-date='1499-Tarsakh-xx-01' data-title="🪕 ..."></<% span %>

---

## Housekeeping


## Recap

<%* tR += `![${result.prev}](${result.lastSession}#Summary)`; %>

## Onward... 
%%
- **Objective** single sentence: what is this session about?
- **Twist** some fact that adds depth/complexity to the objective.
- **Opposition** (who/what, motivation)
%%

### The Party

### NPCs

### Strong start

%% Kick off the session: What is happening? What's the point? What seed will move the story forward? Where is the action? (start as close to the action as you can) %%

### Potential Scenes

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

### Loot

- [ ] 
- [ ] 

## Log / Detail
