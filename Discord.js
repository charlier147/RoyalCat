const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("im readyyyyy");
     client.user.setStatus("idle");

  // type: 0 = Playing, 1 = Streaming, 2 = Watching, 3 = Listening
  client.user.setPresence({ game: { name: "@P.A.C/Channels", type: 2 } });
});

// All new users, who join the Discord, will be given the "Member" role upon joining.
client.on("guildMemberAdd", member =>{ 
  member.addRole(member.guild.roles.find("name", "Member"));
});

// Prefix
var prefix = ".r "

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  

  if (command === "ping") {
    msg.channel.send("Pong...").then((msg) => {
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    });
  }

  if (command === "commands") {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You do not have permission to perform this command.")
    msg.channel.send("**Current commands available**: `welcome`, `rules`, `ping` and `commands`. \n**Command usage example**: `.r <command>`")
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    msg.delete().catch(O_o=>{}); 
    msg.channel.send(sayMessage)
    .then(msg => {
    msg.delete(60)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
  }
 
  if (command === "welcome") {
    msg.delete();
    if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You do not have permission to perform this command.")
    const embed = {
      "description": "*Welcome to @P.A.C.* \n*Make sure to follow our rules and check out the news.* \n ",
      "url": "",
      "color": 0x6ed6ed,
      "footer": {
        "text": "#P.A.C | Administration"
      },
      "author": {
        "name": "P.A.C | Administration",
        "url": "",
        "icon_url": ""
      },
      "fields": [
        {
          "name": "SPAM",
          "value": "Do not spam or flood the chat with message. \nNot following this rule will result as a Mute (**30 minute mute**), kick or Ban. "
        },
        {
          "name": "FLAME WARS",
          "value": "**Do not start flame wars**. \nDummy dictonary *:* A lengthy exchange of angry or abusive messages between users of an online forum or other discussion area."
        },
        {
          "name": "BULLY, HARRASMENT, RACISM, ETC.",
          "value": "Bullying, harassment, racism, sexism or any sort of discrimination will not be tolerated. It will be conducted as a ban!"
        },
        {
          "name": "ADVERTISING",
          "value": "Do not advertise. No posting other servers **Links**, **Forums**, etc."
          },        
        {
          "name": "CHANNELS",
          "value": "Keep all Conversations in the channel they are suppose too!"
          },
        {
          "name": "CATFISHING",
          "value": "Catfishing isn't allowed! If you're found catfishing proof will be asked!"
           },
        {
          "name": "NUISANCE",
          "value": "Do not cause a nuisance in the community, repeated complaints from several members will lead to administrative action."
           },
        {
          "name": "DDOS, DOX AND HACK THREATS",
          "value": "No DDOS, DOX and HACK Threats, this will result as an instant ban!"
           },
        {
          "name": "RESPECT",
          "value": "Respect all players, this rule is also stand for players privacy. \nExposing other players privacy will result a perm mute or ban."
        }
      ]
    };
    msg.channel.send({ embed });
  }
  

  if (command === "rules") {
    msg.delete();
    if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send({ embed: noperm })
    const embed = {
      "description": "Everything in this message are the official rules of the RaidCentral Discord server. If you fail to follow these regulations, you may be banned, muted or kicked. The official server rules for the RaidCentral server can be found [**here**](https://raidcentral.com/rules).",
      "url": "https://raidcentral.com",
      "color": 0xCDA5E4,
      "footer": {
        "text": "The most recent change to these rules occurred on December 25th, 2017."
      // },
      // "thumbnail": {
      //   "url": "https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-05-29/190381481751_db77f5e7bb6c6967597b_132.jpg"
      },
      "author": {
        "name": "RaidCentral Administration",
        "url": "https://raidcentral.com",
        "icon_url": "https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-05-29/190381481751_db77f5e7bb6c6967597b_132.jpg"
      },
      "fields": [
        {
          "name": "DISCRIMINATION",
          "value": "Anyone is welcome to play on RaidCentral, any and all types of discrimination will result in punishment. This includes, but is not limited to, discrimination against race, ethnicity, religion, and culture. Everybody should feel able to play on the server, no matter where they come from or how they look, there is, absolutely, no reason to insult someone on those grounds. An example of this is the use of a racial slur."
        },
        {
          "name": "SPAM AND CHAT FLOOD",
          "value": "Keeping the chat clean is something we strive for, a more fun and enjoyable conversation ability and environment makes the server look even better and attracts, even more, players to the server! Of course, this rule will not be so strict, but still punishable. The rule, also, allows our staff member to see questions easier, better support and gaming experience for everyone on the server."
        },
        {
          "name": "DDOS, DOX AND HACK THREATS",
          "value": "As aforementioned, all players should feel safe on the RaidCentral server. Threatening to execute a DDoS, Dox or hack attack is strictly prohibited, and we have a zero tolerance for any illegal activities that occur on our server. Even if you are attempting to perform this action as a joke, you will still be punished, and this discomforts the player that it is directed to and is, certainly, nothing we would like to condone on a server like RaidCentral. Sending, so called, IP Loggers falls under this rule, as well."
        },
        {
          "name": "SHARING PERSONAL INFORMATION",
          "value": "All users must have an appropriate nickname and must pertain to their username. Impersonating as someone else is foreseen as a punishable offense and will result in a tempban from the server."
        },
        {
          "name": "RESPECT ALL PLAYERS",
          "value": "Everybody has their right to their privacy, wish means that personal information that they want to stay private cannot be shared. Everything ranging from social media accounts, such as Instagram, Twitter, Facebook, to last names. As mentioned multiple times on here, everyone should feel safe, safe enough to be able to play without getting their private information, that is meant to be confidential between specific people, leaked to the public."
        },
        {
          "name": "INAPPROPRIATE LINKS",
          "value": "Inappropriate links and other similar offensive content are prohibited on RaidCentral. For example, if a player would send a URL in the chat that links to a so-called screamer, they would get punished. The rule also regards any adult content, such horror-based sites and pornography, posted in the chat, this is highly inappropriate and would only discomfort the players on the server."
        }
      ]
    };
    msg.channel.send({ embed });
  }

});
client.login(process.env.TOKEN);
