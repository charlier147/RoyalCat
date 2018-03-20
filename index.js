const Discord = require("discord.js");
const Client = new Discord.Client();
const Config = require("./config.json");

require("./eventloader/loader.js").run(Client);


Client.login(process.env.TOKEN);
