const Discord = require("discord.js");
const { Permissions } = require("discord.js");
const ms = require('ms')

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return message.channel.send("You Dont Have The Manage Nicks Permission");
    const embed = new Discord.MessageEmbed()
    const member = message.mentions.members.first();
    let role = message.guild.roles.cache.find(role => role.name === 'Muted')
    
    if (!member) return message.reply('Mention Someone');
    if (!args[1]) return message.reply('Define Mute Duration');
    
    if (member.id === message.author.id) return message.reply('You cant mute your self!')
    if (member.id === client.id) return message.reply('You cant mute me!')
    
    if (!role) {message.reply(`Can't find "Muted" Role`)}
    
    if (member.roles.cache.has(role)) return message.reply('Cant mute a muted person')
    if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('Cant mute moderators')
    
    await member.roles.add(message.guild.roles.cache.find(role => role.name === 'Muted'))
    embed.setDescription(`${member.user.username} has been muted for ${ms(ms(args[1]))}`)
    message.channel.send({embeds: [embed]})
    setTimeout(() => {
        member.roles.remove(message.guild.roles.cache.find(role => role.name === 'Muted'))
    embed.setDescription(`${member.user.username} has been unmuted`)
    message.channel.send({embeds: [embed]})
    }, ms(args[1]))
    
} 
                module.exports.config = {
                    name: 'mute',
                    aliases: [],
                };