const Discord = require("discord.js");
const { Permissions } = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
       if (message.mentions.users.first()) {
        let brt = `warn_${message.guild.id}_${message.mentions.users.first()}`
db.set(`1${brt}`,`None`)
db.set(`2${brt}`,`None`)
db.set(`3${brt}`,`None`)
db.set(`level_${message.guild.id}_${message.mentions.users.first()}`, 0)
message.channel.send(`Cleared Warns For ${args[0]}`)
      } else {message.channel.send(`Mention Someone`)}
}
                module.exports.config = {
                    name: 'resetwarnings',
                    aliases: [],
                };