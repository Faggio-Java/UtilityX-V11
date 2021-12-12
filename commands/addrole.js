 const Discord = require("discord.js");
 const { Permissions } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return message.channel.send("You Dont Have The Manage Roles Permission");

    let member = message.mentions.members.first();
    let role = message.mentions.roles.first()
     if(!member) return message.channel.send("Mention Someone");
     if(!role) return message.channel.send("Mention a Role");
 
 await member.roles.add(role).catch(error => {message.channel.send(`Role doesnt exist or is elevated over me`)}).then()
 
 const embed = new Discord.MessageEmbed()
 .setDescription(`${message.author.username} Gave Role ${role} to ${member}`)
 message.channel.send({embeds: [embed]})} 
                module.exports.config = {
                    name: 'addrole',
                    aliases: [],
                };