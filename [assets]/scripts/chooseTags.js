module.exports = chooseTags;
async function chooseTags(tp, prefix, value) {
  let values = [];
  const filter = '#' + prefix;
  console.log("%o", app.metadataCache.getTags());
  for (const itItem of Object.keys(app.metadataCache.getTags())) {
    console.log("%o", itItem);
    if ( itItem.startsWith(filter) ) {
      values.push(itItem.substring(1));
    }
  }
  values.sort();
  values.unshift('--');
  const choice = await tp.system.suggester(values, values);
  if (!choice) {
    console.log(`No choice selected. Using ${value}`);
    return value;
  }
  return choice;
}
