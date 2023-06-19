## Missing things

```dataviewjs
const fileMap = {};

function pathToMdLink(path) {
    return `[${path}](${path.replace(/ /g, '%20')})`;
}

// Create a map of the file path to a number
dv.app.vault.getFiles()
    .filter(x => !x.path.endsWith('.md'))
    .filter(x => !x.path.endsWith('.canvas'))
    .filter(x => !x.path.contains('assets/templates'))
    .filter(x => !x.path.contains('assets/customjs'))
    .forEach((f) => {
        fileMap[f.path] = 1;
    });

const files = dv.app.vault.getMarkdownFiles()
        .filter(x => !x.path.contains('assets/templates'))
        .filter(x => !x.path.contains('assets/customjs'))
        .filter(x => x.path.endsWith('.md'))
        .filter(x => x.name != 'missing-things.md');

const promises = files.map(file => dv.app.vault.cachedRead(file).then((txt) => {
    return [file, txt];
}));

const data = await Promise.all(promises);

const leaflet = [];
const rows = [];
data.forEach((d) => {
    if (d[1].contains('```leaflet')) {
        // find all lines matching "image: (path to image)" and extract the image name
        [...d[1].matchAll(/image: (.*)/g)].forEach((x) => {
            const imgName = x[1];
            const file = dv.app.metadataCache.getFirstLinkpathDest(imgName, d[0].path);
            if (file == null) {
                leaflet.push([pathToMdLink(d[0].path), imgName]);
            } else {
                fileMap[file.path] = 0;
            }
        });
    }
    // match all markdown links
    [...d[1].matchAll(/\[.*?\]\((.*?)\)/g)].forEach((x) => {
        const anchorPos = x[1].indexOf('#');
        const target = (anchorPos < 0 ? x[1] : x[1].substring(0, anchorPos)).replace(/%20/g, ' ');
        if (target.startsWith('http')) {
            return;
        }
        const file = dv.app.metadataCache.getFirstLinkpathDest(target, d[0].path);
        if (file == null) {
            rows.push([pathToMdLink(d[0].path), target]);
        } else {
            fileMap[file.path] = 0;
        }
    });
});

console.log(fileMap);

dv.table(['Leaflet Source', 'Missing'], leaflet);
dv.table(['Source', 'Missing'], rows);

dv.header(2, "Unreferenced Things");
dv.list(Object.keys(fileMap)
        .filter(x => fileMap[x] == 1)
        .map(x => pathToMdLink(x)));
```
