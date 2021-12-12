const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
.setTitle(`Bot Info`)
.setDescription(`Uptime: ${moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")} \n Creator: ShadowKills \n Server Amount: ${client.guilds.cache.size}`)
message.channel.send({embeds: [embed]})
} 
module.exports.config = {
    name: 'info',
    aliases: [],
};