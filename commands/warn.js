const Discord = require("discord.js");
const { Permissions } = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
    let p = db.fetch(`prefix_${message.guild}`);
    let level = db.get(`level_${message.guild.id}_${message.mentions.users.first()}`)
    let srt = `level_${message.guild.id}_${message.mentions.users.first()}`
    let brt = `warn_${message.guild.id}_${message.mentions.users.first()}`
    let reason = `${message.content.replace(`${p}warn ${args[0]}`,``)}`
if(level === null) {db.set(srt,0)}
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
         if (message.mentions.users.first()) {
  if(!args[1]) return message.channel.send(`Please Define A Reason To Warn ${args[0]}`);
if(level === 0) { db.set(`1${brt}`,`${message.author.tag} Warned ${args[0]} Reason: ${reason}`) 
db.set(srt, 1)}  
if(level === 1) { db.set(`2${brt}`,`${message.author.tag} Warned ${args[0]} Reason: ${reason}`) 
db.set(srt, 2)}  
if(level === 2) { db.set(`3${brt}`,`${message.author.tag} Warned ${args[0]} Reason: ${reason}`) 
db.set(srt, 3)}  
if(level === 3) {message.channel.send(`User has reached the warn limit`)} else { 
message.channel.send(`Successfully Warned ${args[0]}`)} } else {message.channel.send(`Mention Someone`)}
}
                module.exports.config = {
                    name: 'warn',
                    aliases: [],
                };