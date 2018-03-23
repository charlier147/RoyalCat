exports.run = (client, message, args, tools) => {

  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
 
  message.channel.bulkDelete(args[0])
    .then( messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then( msg => msg.delete({ timeout: 10000 }))) // This sends how many messages they deleted to chat, we also want to delete this message. This deletes the message after 10000 seconds.
         
}
