exports.run = async (client, message) => {
  const user = message.mentions.users.first();
  const amount = parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[1]) : parseInt(message.content.split(" ")[2]);
  if (!amount) return message.reply("Must specify an amount to delete!");
  if (!amount && !user) return message.reply("Must specify a user and amount, or just an amount, of messages to purge!");
  if(amount > 100 || amount < 2) return message.channel.send("Values must be greater than 2 but less than or equal to 100.");
  await message.channel.messages.fetch({
    limit: amount,
  }).then(async (messages) => {
    if (user) {
      const filterBy = user ? user.id : client.user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    await message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  });

  await client.wait(4000);
  message.channel.send(`${amount} messages have been deleted` ).then(message => message.delete({timeout: 10000}));
};


exports.help = {
  name: "clear",
  description: "clear messages",
  usage: "clear <amount>",
  category: "Moderation"
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["c"],
  permLevel: "Moderator"
};