const Discord = require("discord.js");
const { Permissions } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("You Dont Have The Ban Members Permission");
    let member = message.mentions.members.first()

    if(!member) return message.channel.send("Mention Someone");
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('Cant Ban Admins');

    await member.ban()
         const Ban = new Discord.MessageEmbed()
      .setDescription(`${member.displayName} Was Banned By ${message.author.username}`)
      message.channel.send({embeds: [Ban]}) }

      module.exports.config = {
        name: 'ban',
        aliases: [],
    };