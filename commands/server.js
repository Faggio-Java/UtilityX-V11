const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.run = async (client, message, args) => {
    let owner = message.guild.members.fetch(message.guild.ownerID)
    const embed = new Discord.MessageEmbed()
                .setTitle(`${message.guild}'s Info`)
            .setDescription(`Owner: ${await client.users.fetch(message.guild.ownerId)} \n Member Amount: ${message.guild.memberCount} \n Emoji Amount: ${message.guild.emojis.cache.size} \n Roles Amount: ${message.guild.roles.cache.size} \n Created: ${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm")}`)
            message.channel.send({embeds: [embed]})
} 
module.exports.config = {
    name: 'server',
    aliases: [],
};