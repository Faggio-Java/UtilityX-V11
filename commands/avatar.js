const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let member = message.mentions.users.first() || message.author
    
                const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL())
                message.channel.send({embeds: [emb]}) } 
                module.exports.config = {
                    name: 'avatar',
                    aliases: [],
                };