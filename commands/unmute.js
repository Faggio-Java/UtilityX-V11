const Discord = require("discord.js");
const { Permissions } = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
    if(!message.member.roles.cache.find(role => role.name === 'Muted')) return message.channel.send(`${member.user.username} isnt muted`)
var member = message.mentions.users.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send('Mention Someone')

member.roles.remove(message.guild.roles.cache.find(role => role.name === "Muted"));
embed.setDescription(`${member.user.username} has been unmuted`)
message.channel.send({embeds: [embed]})
} 
                module.exports.config = {
                    name: 'unmute',
                    aliases: [],
                };