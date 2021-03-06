const { exec, execSync, spawn } = require("child_process");
const { WAConnection, Functions } = require("./lib/functions.js");
const Command = require("./lib/command.js");

global.baileys = require("@adiwajshing/baileys");
global.botinfo = require("./src/json/botInfo.json");
global.userDb = require("./src/json/user.json");
global.groupDb = require("./src/json/group.json");
global.functions = new Functions();
global.client = new WAConnection();
global.cmd = new Command(client, botinfo, functions);
global.logo = {
  buffer: functions.fs.readFileSync("./src/images/20210929_225016.png"),
};
global.clients = [];
global.used_logo = 0;

try {
  functions.run(client);
} catch (e) {
  console.log(e);
  client.sendMessage(
    botinfo.ownerNumber[0] + `@s.whatsapp.net`,
    "Info Error!",
    "conversation"
  );
  client.sendMessage(
    botinfo.ownerNumber[0] + `@s.whatsapp.net`,
    functions.util.format(e),
    "conversation"
  );
  return 1;
}
