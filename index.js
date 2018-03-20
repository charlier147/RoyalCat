const Discord = require("discord.js");
const bot = new Discord.Client();
const Config = require("./config.json");

require("./eventloader/loader.js").run(bot);

bot.login(process.env.TOKEN);
