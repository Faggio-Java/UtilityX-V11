const Discord = require("discord.js");
const db = require('quick.db')
const { Permissions } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
db.fetch(`prefix_${message.guild}`)
if(!args[0]) return message.channel.send(`Cant Set Prefix As Nothing`);
db.set(`prefix_${message.guild}`, `${args[0]}`)
message.channel.send(`Set Prefix To ${args[0]}`)
} 
                module.exports.config = {
                    name: 'prefix',
                    aliases: [],
                };