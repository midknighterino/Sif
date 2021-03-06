const moment = require("moment");
exports.run = async (client, message, args) => {
  let member = message.mentions.members.first();
  if(!member) return message.reply("Error: Please specify a member.");
  if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("Error: You may not do that, check the role hierarchy.");
  if(!member.kickable) return message.channel.send("Error: This member isn't warnable, please check my perms (I require the kick perm).");

  let reason = args.slice(1).join(" ");
  if(!reason) reason = "No comment given";

  let modLogChannel = message.guild.channels.find(c => c.name === message.settings.modLogChannel);
  if(!modLogChannel) return message.channel.send(`Error: Please set up a moderation log by using \`${message.settings.prefix}set edit modLogChannel #channel-name\``);

  let embed = await client.generateModEmbed(member, "Warn", message.member, reason);
  if(!embed) return message.channel.send("Error: An unexpected error has occured... exiting.");

  modLogChannel.send(embed);
  
  client.warns.ensure(`${message.guild.id}-${member.user.id}`, []);

  client.warns.push(`${message.guild.id}-${member.user.id}`, {
    reason: reason,
    actingMod: message.author.tag,
    timeOfIncident: moment().format("MM DD YYYY HH MM SS") 
  });

  message.channel.send(embed);
};

exports.help = {
  name: "warn",
  description: "warn a user in your server.",
  usage: "warn <member> <reason>",
  category: "Moderation"
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};
