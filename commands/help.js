const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (client, message) => {
    let p = db.fetch(`prefix_${message.guild}`);
        const embed = new Discord.MessageEmbed().setTitle("Commands")
        .setDescription(`Moderation:${p}ban ${p}kick ${p}purge ${p}nick ${p}addrole ${p}removerole ${p}warn ${p}warnings ${p}resetwarnings ${p}slowmode  ${p}mute ${p}unmute \n Fun: ${p}meme ${p}kiss ${p}hug ${p}punch ${p}slap ${p}pat \n Utility: ${p}ui ${p}server ${p}avatar ${p}snipe ${p}usage ${p}info \n Server Settings: ${p}prefix`)
        message.channel.send({ embeds: [embed] })
} 
                module.exports.config = {
                    name: 'help',
                    aliases: [],
                };