const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
   let sEmbed = new Discord.RichEmbed()
  .setColor("#ebde26")
  .setTitle("📃USER📃")
  .setDescription(`**USER NOT FOUNT**`);

   if(!rUser) return   message.channel.send(sEmbed);
        .then(message => {
    message.delete(10000)
  })
    .catch
}
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("┎**Reports**┐")
        .addField("────────────────────────", "  ‍  ")
    .setColor("#eff585")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("────────────────────────", "  ‍  ")
    .addField("Reported By", `${message.author} ID: ${message.author.id}`)
        .addField("────────────────────────", "  ‍  ")
    .addField("Channel", message.channel)
        .addField("────────────────────────", "  ‍  ")
    .addField("Time", message.createdAt)
        .addField("────────────────────────", "  ‍  ")
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
