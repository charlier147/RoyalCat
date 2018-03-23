const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    await message.channel.send("Pinging...").then(m => {

        var lat_ms = (m.createdTimestamp - message.createdTimestamp);
        var api_ms = (Math.round(client.ping));
  
        m.delete().catch(console.error);
  
        const embed = new Discord.MessageEmbed()
            .setColor('#16CDC7')
            .addField(`📥     \`Latency\``, `       \`${lat_ms}ms\``, true)
            .addField(`📤     \`API\``, `       \`${api_ms}ms\``, true)
        message.channel.send(embed);
    }).catch(console.error);
} 
