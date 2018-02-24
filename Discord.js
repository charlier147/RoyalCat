const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect: true});

bot.on('ready', () => {
        bot.setStreaming('Principal Academia Club', '', 1);
});
});


bot.on("message", msg => {
  
    if (msg.content.startsWith(prefix + "mpmoi")){
      msg.author.sendMessage("Bonjour Houston !")
      console.log("Command executed : /mpmoi")
    }

});

bot.login(process.env.TOKEN);
