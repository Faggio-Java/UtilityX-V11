const { Permissions } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["GUILD_MEMBER"] })
const db = require('quick.db')
const fs = require("fs");
const https = require('https');
const moment = require("moment")
require("moment-duration-format")
const ms = require('ms')

function loadGifs(client, message) {
client.on("messageCreate", (message) => {
    let prefix = `${db.fetch(`prefix_${message.guild}`)}`;
    const args = message.content.slice().trim().split(/ +/g);
    const member = message.mentions.users.first();
    var triggers = [`${prefix}kiss`,`${prefix}hug`,`${prefix}punch`,`${prefix}slap`,`${prefix}pat`]
      for (var i = 0; i < triggers.length; i++) {
        if (message.content.includes(triggers[i])) {
      
  if(!member) return message.channel.send("Mention Someone")
  if (member === message.author) return message.channel.send(`You Cant ${message.content.replace(`${p} ${args[0]}`, '')}  Yourself`)
       let kiss = ["https://cdn.weeb.sh/images/ByVQha_w-.gif","https://cdn.weeb.sh/images/ryoW3T_vW.gif","https://cdn.weeb.sh/images/B1yv36_PZ.gif","https://cdn.weeb.sh/images/ryEvhTOwW.gif","https://cdn.weeb.sh/images/SyY0j6Ov-.gif"]
       let hug = ["https://cdn.weeb.sh/images/rkx1dJ25z.gif","https://cdn.weeb.sh/images/Sk-xxs3C-.gif","https://cdn.weeb.sh/images/HJTWcTNCZ.gif","https://cdn.weeb.sh/images/rk_6GyncG.gif","https://cdn.weeb.sh/images/S18oOuQw-.gif"]
       let punch = ["https://cdn.weeb.sh/images/SJAfH5TOz.gif","https://cdn.weeb.sh/images/SyYbP6W-z.gif","https://cdn.weeb.sh/images/rkkZP6Z-G.gif","https://cdn.weeb.sh/images/rJHLDT-Wz.gif","https://cdn.weeb.sh/images/rJRUk2PLz.gif"]
       let slap = ["https://cdn.weeb.sh/images/BkzyEktv-.gif","https://cdn.weeb.sh/images/SkSCyl5yz.gif","https://cdn.weeb.sh/images/ryv3myFDZ.gif","https://cdn.weeb.sh/images/HkA6mJFP-.gif","https://cdn.weeb.sh/images/rJvR71KPb.gif"]
       let pat = ["https://cdn.weeb.sh/images/BJp1lyYD-.gif","https://cdn.weeb.sh/images/B1TQcTNCZ.gif","https://cdn.weeb.sh/images/BJnD9a4Rb.gif","https://cdn.weeb.sh/images/Byd3kktw-.gif","https://cdn.weeb.sh/images/rkBZkRttW.gif"]
  
       let picker = Math.floor(Math.random() * Math.floor(args[0].substring(1).length)) 
  
       const embed=new Discord.MessageEmbed()
       .setTitle(`${message.mentions.users.first().username} Was ${args[0].substring(1)} By ${message.author.username}`)
  
  switch(message.content) {
  case `${prefix}kiss ${args[1]}`:
    embed.setImage(kiss[picker])
  break;
  case `${prefix}hug ${args[1]}`:
    embed.setImage(hug[picker])
  break;
  case `${prefix}punch ${args[1]}`:
    embed.setImage(punch[picker])
  break;
  case `${prefix}slap ${args[1]}`:
    embed.setImage(slap[picker])
  break;
  case `${prefix}pat ${args[1]}`:
    embed.setImage(pat[picker])
  break;
  }
  
  message.channel.send({embeds: [embed]})
  break;
  } }
   }); }

   module.exports = {
    loadGifs
};