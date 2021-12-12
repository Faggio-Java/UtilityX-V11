const Discord = require("discord.js");
const { Permissions } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send("You don't have enough permissions to use this command")
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!member) return message.channel.send("Mention Someone");
if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send('Cant Kick Admins'); 

await member.kick()
     const Kick = new Discord.MessageEmbed()
  .setDescription(`${member.displayName} Was Kicked By ${message.author.username}`)
  message.channel.send({embeds: [Kick]})
}

      module.exports.config = {
        name: 'kick',
        aliases: [],
    };