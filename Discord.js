const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('HFC -  STARTING!');

 });

var prefix = "!"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;



	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	}
	
	client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome ${member.user.username} to the server!`);
});
});

client.login(process.env.TOKEN);
