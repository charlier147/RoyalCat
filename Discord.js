const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('HFC -  STARTING!');

  });
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to HFC CLAN ${member}! :dizzy~1:. Please read #rules-information!`);
});

client.login(process.env.TOKEN);
