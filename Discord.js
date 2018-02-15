const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('HFC -  STARTING!');
});
client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.login(process.env.TOKEN);
