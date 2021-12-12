const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${db.get(`${message.guild.id}_message`)}`)
    .setFooter(`Sniped By ${message.author.username}`)
    message.channel.send({embeds: [embed]})
} 
                module.exports.config = {
                    name: 'snipe',
                    aliases: [],
                };