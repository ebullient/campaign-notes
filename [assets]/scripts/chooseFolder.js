module.exports = chooseFolder;
async function chooseFolder(tp) {
  const folders = [
    "compendium",
    "compendium/axeholm",
    "compendium/leilon",
    "compendium/neverwinter-wood",
    "compendium/phandalin",
  ]
  const choice = await tp.system.suggester(folders, folders);
  if (!choice) {
    warn("No choice selected. Using 'compendium'");
    return 'compendium';
  }
  return choice;
}
