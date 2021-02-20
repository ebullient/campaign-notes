---
obsidianUIMode: preview
aliases: ["Encounters"]
---
# encounters

```dataviewjs
var elements = dv.pages('"rowen"')
  .where(p => p.type == "encounter")
  .sort(p => p.file.name, 'asc')
  .map(k => {
    var link = `[${k.file.aliases[0] ? k.file.aliases[0] : k.file.name}](/${k.file.path})`;
    var where = 'region';
    var affiliation = [];

    if ( k.tags) {
      k.tags.forEach((tag) => {
        if (tag.startsWith('place/')) {
            where = tag.substring(6).replace(/(town|settlement|landmark)\//, '');
        } else if (where == 'region' && tag.startsWith('region/')) {
            where = tag.substring(7);
        } else if (tag.startsWith('group/') ) {
            affiliation.push(tag.replace('group/', '').replace('faction/', ''));
        }
      });
    }

    return [link, k.status, where, affiliation.sort().join(", ")]
  });
console.log(elements);

dv.table(["Name", "Status", "Where", "Affiliation"], elements.filter(k => k[1] === 'active'))
dv.table(["Name", "Status", "Where", "Affiliation"], elements.filter(k => k[1] === 'new'))

dv.table(["Name", "Status", "Where", "Affiliation"], elements.filter(k => k[1] !== 'new' && k[1] !== 'active'))
```
