const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("im readyyyyy");
  
  client.user.setPresence({ game: { name: "Overwatch", type: 0 } });
});

var prefix = "++"

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  if (command === "ping") {
    msg.delete();
    msg.channel.send("Pong...").then((msg) => {
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    });
  }

client.login(process.env.TOKEN);
