exports.run = (client, msg, args) => {
  if(!parseInt(args[0], 10)) {
    return msg.edit(`Please provide a number of messages to clean reactions from!`).then(setTimeout(msg.delete.bind(msg), 1000));
  }
  if(!msg.guild.members.me.hasPermission("MANAGE_MESSAGES")) {
    return msg.edit(`No Permission`).then(setTimeout(msg.delete.bind(msg), 1000));
  }
  msg.channel.messages.fetch({limit: parseInt(args[0], 10)}).then(msglog => {
    msg.edit(`Clearing Reactions from this channel for ${args[0]} messages...`).then(setTimeout(msg.delete.bind(msg), 2000));
    msglog.forEach(message => {
      message.clearReactions();
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'cr',
  description: 'Clears all reactions from given number of messages.',
  usage: 'cr [message count]'
};
