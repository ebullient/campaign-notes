<%* const { Campaign } = window.customJS;
const title = await tp.system.prompt("Enter Name");
const lower = Campaign.toFileName(title);
const folder = await Campaign.chooseFolder(tp, tp.file.folder(true));
console.log("%o, %o, %o", title, lower, folder);
await tp.file.move(`${folder}/${lower}`);
-%>