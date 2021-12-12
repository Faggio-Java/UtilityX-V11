const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()

    let p = db.fetch(`prefix_${message.guild}`);
    function sed() {
        embed.setDescription(`${p}${args[0]} [@user]`)
        message.channel.send({embeds: [embed]})
    }
switch(message.content) {
  case `${p}usage ban`: sed()
  break;
  case `${p}usage ui`: sed() 
  break;
  case `${p}usage avatar`: sed() 
  break;
  case `${p}usage kick`: sed() 
  break;
  case `${p}usage warnings`: sed() 
  break;
  case `${p}usage resetwarnings`: sed() 
  break;
  case `${p}usage kiss`: sed() 
  break;
  case `${p}usage hug`: sed() 
  break;
  case `${p}usage slap`: sed() 
  break;
  case `${p}usage punch`: sed() 
  break;
  case `${p}usage pat`: sed() 
  break;
  case `${p}usage snipe`,`${p}usage meme`,`${p}usage server`: embed.setDescription(`${p}${args[0]}`)
  break;
  case `${p}usage addrole`,`${p}usage removerole`: embed.setDescription(`${p}${args[0]} [@user] [@role]`)
  break;
  case `${p}usage purge`,`${p}usage slowmode`: embed.setDescription(`${p}${args[0]} [@user] [Number]`)
  break;
  case `${p}usage nick`: embed.setDescription(`${p}nick [@user] [Nickname]`)
  break;
  case `${p}usage warn`: embed.setDescription(`${p}warn [@user] [reason]`)
  break;
  case `${p}usage prefix`: embed.setDescription(`${p}prefix [Digit To Set Prefix As]`)
  break; }
  message.channel.send({embeds: [embed]})
} 
module.exports.config = {
    name: 'usage',
    aliases: [],
};