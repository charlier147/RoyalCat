const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect: true});

bot.on('ready', () => {

  bot.user.setStatus("dnd"); //dnd , online , ldle
  bot.user.setGame("with your mom!");
  console.log("Houston ! Le bot est en ligne");
});


bot.on("message", msg => {
  
    if (msg.content.startsWith(prefix + "mpmoi")){
      msg.author.sendMessage("Bonjour Houston !")
      console.log("Command executed : /mpmoi")
    }

});

bot.login(process.env.TOKEN);
