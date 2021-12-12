const Discord = require("discord.js");
const { Permissions } = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
if(!args[0]) return message.channel.send("Mention The Amount Of Msgs To Purge");
if(args[0] > 101) return message.channel.send("Please Use A Number Under 100");
 message.channel.bulkDelete(args[0]);
} 
module.exports.config = {
    name: 'purge',
    aliases: [],
};