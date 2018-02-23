const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("im readyyyyy");
  
  client.user.setPresence({ game: { name: "Overwatch", type: 0 } });
});

if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }};
  }

client.login(process.env.TOKEN);
