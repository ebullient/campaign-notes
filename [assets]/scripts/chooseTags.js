module.exports = chooseTags;
async function chooseTags(tp, prefix, value) {
  let values = [];
  const filter = '#' + prefix;
  for (const itItem of app.plugins.plugins.dataview.index.etags.invMap.keys()) {
    if ( itItem.startsWith(filter) ) {
      values.push(itItem.substring(1));
    }
  }
  values.sort();
  const choice = await tp.system.suggester(values, values);
  if (!choice) {
    warn(`No choice selected. Using ${value}`);
    return value;
  }
  return choice;
}
