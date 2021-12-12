const Discord = require("discord.js");
const { Permissions } = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
try {
    if(!args[0]) return message.channel.send(`Define Number To Set Slowmode As`)
      message.channel.setRateLimitPerUser(args[0])
      message.channel.send(`Set Slowmode To ${args[0]}`)
} catch(e) {message.channel.send(`An Error Occured Make Sure Your Using It Correctly Usage: ${p}slowmode [Number]`)}
}
module.exports.config = {
    name: 'slowmode',
    aliases: [],
};