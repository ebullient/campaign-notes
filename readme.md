# Index
> [!note]
> This is an incomplete version of my vault for example purposes. 
> 
> ### Dataview and Tags
> 
> - Dataview is used in sections below to list files found in the `faerûn` directly by their `type` attribute.
> - Documents in the `faerûn` folder have types, and often use dataview to find related documents by tag, e.g. [Path of Crumbs](faerûn/places/waterdeep/path-of-crumbs.md) has the following tags: 
>   ```
>   - type/location/shop/bakery
>   - group/waterdeep/guild/bakers-guild
>   - place/waterdeep/trollskull-alley/path-of-crumbs
>   - region/sword-coast-north/waterdeep/city-ward/north
>   ```
>   Other documents use dataview queries based on those tags, see [North Ward](faerûn/places/waterdeep/north-ward.md) and [Guilds of Waterdeep](faerûn/groups/guilds-of-waterdeep.md) as examples.
> 
> ### In game days: weather and moods
> 
> In game days have a document, like [1499-03-29-ches](rowen/days/1499-03-29-ches.md), created from a template, [folder-days](🗄-assets/templates/folder-days.md). This template uses CustomJS, in [campaign](🗄-assets/customjs/campaign.js), to invoke the dice-roller plugin to resolve values from various random tables when the document is created.
> 
> ### Session notes
> 
> Session notes, in [sessions](rowen/sessions) also come from a template, [folder-session](🗄-assets/templates/folder-session.md), which includes links to previous session notes, and some variations on templates from [Sly Flourish](https://slyflourish.com/rotldm_template.html) and [Nicole van der Hoven](https://nicolevanderhoeven.com/blog/20210930-non-lazy-dms-use-obsidian-for-dnd/).
> 
