
const { Permissions } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] })
const db = require('quick.db')
const fs = require("fs");
const got = require('got');
const moment = require("moment"); 
require("moment-duration-format")
const fetch = require("node-fetch");
const Canvas = require('canvas')
const ms = require('ms')

client.on('ready', (message) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: '&help For List Of Cmds' }, status: 'online' });
});

client.on('error', (err) => {
  console.log(err.message)
   });

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if(db.fetch(`prefix_${message.guild}`) === null) return db.set(`prefix_${message.guild}`, `&`);
let p = `${db.fetch(`prefix_${message.guild}`)}`;
  const args = message.content.slice().trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(cmd === `${p}help`){
    const embed = new Discord.MessageEmbed().setTitle("Commands")
    .setDescription(`Moderation:${p}ban ${p}kick ${p}purge ${p}nick ${p}addrole ${p}removerole ${p}warn ${p}warnings ${p}resetwarnings ${p}slowmode  ${p}mute ${p}unmute \n Fun: ${p}meme ${p}kiss ${p}hug ${p}punch ${p}slap ${p}pat \n Utility: ${p}ui ${p}server ${p}avatar ${p}snipe ${p}usage ${p}info \n Server Settings: ${p}prefix`)
    message.channel.send({ embeds: [embed] })
  } else if(cmd === `${p}prefix`) {
    db.fetch(`prefix_${message.guild}`)
    if(!args[0]) return message.channel.send(`Cant Set Prefix As Nothing`);
    db.set(`prefix_${message.guild}`, `${args[0]}`)
    message.channel.send(`Set Prefix To ${args[0]}`)
} else if(cmd === `${p}mute`) {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                const embed = new Discord.MessageEmbed()
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Mention Someone')
            let rolerz = db.get(`autorole_${message.guild.id}`);
            if(rolerz === null) {rolerz = 0} else if(mainrole = null) {mainrole = 0}
            let mainrole = db.get(`autoroler_${message.member.guild.id}`)
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
if(!message.guild.roles.cache.find(role => role.name === "Muted")) {
message.guild.roles.create({ data: {
                          name: 'Muted',
                           color: '#ff0000',
                            permissions: {
                              SEND_MESSAGES: false
                          } } }).catch(console.log);
}
            let time = args[1];
            if (!time) {
                return message.reply("Didnt specify a time");
            }

            if(mainrole) {member.roles.remove(mainrole)}
            member.roles.add(role);

            embed.setDescription(`${member.user.username} Was Muted By ${message.author.username} for ${ms(ms(time))}`) 
            message.channel.send({embeds: [embed]})

            setTimeout( function () {
                    if(message.member.roles.cache.find(r => r.name === "Members")) {} else {
                if(mainrole === db.get(`autoroler_${message.member.guild.id}`)) {member.roles.add(mainrole)}
                member.roles.remove(role);
                embed.setDescription(`${member.user.username} has been unmuted`) 
                message.channel.send({embeds: [embed]})}
            }, ms(time));

        } else {
            return embed.setDescription('You dont have perms') 
            message.channel.send({embeds: [embed]})
        } 
} else if (cmd === `${p}unmute`) {
                const embed = new Discord.MessageEmbed()
                        if(message.member.roles.cache.find(r => r.name === "Members")) {message.channel.send(`${member.user.username} isnt muted`)} else {
                var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.channel.send('Mention Someone')
                            
            let rolerz = db.get(`autorole_${message.guild.id}`);
            if(rolerz === null) {rolerz = 0} else if(mainrole === 0) {mainrole = null} 
            let mainrole = db.get(`autoroler_${message.member.guild.id}`)

                if(mainrole) {member.roles.add(mainrole)}
                member.roles.remove(message.guild.roles.cache.find(role => role.name === "Muted"));
                embed.setDescription(`${member.user.username} has been unmuted`)
message.channel.send({embeds: [embed]}) }
} else if (cmd === `${p}avatar`) {
            let member = message.mentions.users.first()
        if(member){
            const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL())
            message.channel.send({embeds: [emb]})
        }else{
            const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL())
            message.channel.send({embeds: [emb]})
        }
  } else if (cmd === `${p}ui`) {
     let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;

const embed = new Discord.MessageEmbed()
.setTitle(`${member.displayName}'s User Info`)
.setDescription(`Username: ${user.username} \n Nickname: ${member.displayName} \n ID: ${user.id} \n Created: ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm")} \n Joined: ${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm")}`);
message.channel.send({embeds: [embed]})
  } else if (cmd === `${p}info`) {
 const embed = new Discord.MessageEmbed()
  .setTitle(`Bot Info`)
  .setDescription(`Uptime: ${moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")} \n Creator: ShadowKills#3319 \n Server Amount: ${client.guilds.cache.size}`)
  message.channel.send({embeds: [embed]})
} else if (cmd === `${p}usage`) {
  const embed = new Discord.MessageEmbed()
  if(args[0] === "themes") { embed.setDescription(`${p}themes [Number 1-5]`) .setFooter(`Note: ${p}themes Show All Themes`)
  } else if(args[0] === "ban") { embed.setDescription(`${p}ban [@user]`)
  } else if(args[0] === "kick") { embed.setDescription(`${p}kick [@user]`)
  } else if(args[0] === "purge") { embed.setDescription(`${p}purge [Number 1-100]`)
  } else if(args[0] === "nick") { embed.setDescription(`${p}nick [@user] [Nickname]`)
  } else if(args[0] === "addrole") { embed.setDescription(`${p}addrole [@user] [role_name]`)
  } else if(args[0] === "removerole") { embed.setDescription(`${p}removerole [@user] [role_name]`)
  } else if(args[0] === "warn") { embed.setDescription(`${p}warn [@user] [reason]`)
  } else if(args[0] === "warnings") { embed.setDescription(`${p}warnings [@user]`)
  } else if(args[0] === "resetwarnings") { embed.setDescription(`${p}resetwarnings [@user]`)
  } else if(args[0] === "slowmode") { embed.setDescription(`${p}slowmode [Number To Set Slowmode As]`)
  } else if(args[0] === "meme") { embed.setDescription(`${p}meme`)
  } else if(args[0] === "kiss") { embed.setDescription(`${p}kiss [@user]`)
  } else if(args[0] === "hug") { embed.setDescription(`${p}hug [@user]`)
  } else if(args[0] === "punch") { embed.setDescription(`${p}punch [@user]`)
  } else if(args[0] === "slap") { embed.setDescription(`${p}slap [@user]`)
  } else if(args[0] === "pat") { embed.setDescription(`${p}pat [@user]`)
  } else if(args[0] === "ui") { embed.setDescription(`${p}ui [@user]`)
  } else if(args[0] === "server") { embed.setDescription(`${p}server`)
  } else if(args[0] === "avatar") { embed.setDescription(`${p}avatar [@user/Nothing]`)
  } else if(args[0] === "snipe") { embed.setDescription(`${p}snipe`)
  } else if(args[0] === "prefix") { embed.setDescription(`${p}prefix [Digit To Set Prefix As]`)
  } else if(args[0] === "autorole") {  embed.setDescription(`${p}autorole [On/Off] [Role_Name]`)
  } else {embed.setDescription(`Define Command Name`)}
  message.channel.send({embeds: [embed]})
} else if (cmd === `${p}info`) {
  const embed = new Discord.MessageEmbed()
  .setTitle(`UtilityX Bot Info`)
  .setDescription("**Creator:** ShadowKills#3319 Creation Date: November/23/2020")
  message.channel.send({embeds: [embed]})
} else if (cmd === `${p}warn`) {
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
} else if(cmd === `${p}resetwarnings`) {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
       if (message.mentions.users.first()) {
        let brt = `warn_${message.guild.id}_${message.mentions.users.first()}`
db.set(`1${brt}`,`None`)
db.set(`2${brt}`,`None`)
db.set(`3${brt}`,`None`)
db.set(`level_${message.guild.id}_${message.mentions.users.first()}`, 0)
message.channel.send(`Cleared Warns For ${args[0]}`)
      } else {message.channel.send(`Mention Someone`)}
} else if(cmd === `${p}warnings`) {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
  let member = message.mentions.users.first() || message.author;
 
            let embed = new Discord.MessageEmbed()
            .setTitle(`${member.username} Warnings`)
            .setDescription(`1: ${db.get(`1warn_${message.guild.id}_${message.mentions.users.first()}`)} \n 2: ${db.get(`2warn_${message.guild.id}_${message.mentions.users.first()}`)} \n 3: ${db.get(`3warn_${message.guild.id}_${message.mentions.users.first()}`)}`)
            .setFooter(`Cmd Executed By ${message.author.username}`)
            message.channel.send({embeds: [embed]})
  } else if (cmd === `${p}server`) {
    let owner = message.guild.members.fetch(message.guild.ownerID)
    const embed = new Discord.MessageEmbed()
                .setTitle(`${message.guild}'s Info`)
            .setDescription(`Owner: ${await client.users.fetch(message.guild.ownerId)} \n Member Amount: ${message.guild.memberCount} \n Emoji Amount: ${message.guild.emojis.cache.size} \n Roles Amount: ${message.guild.roles.cache.size} \n Created: ${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm")}`)
            message.channel.send({embeds: [embed]})
  } else if (cmd === `${p}meme`) {
          const embed = new Discord.MessageEmbed();
    got("https://www.reddit.com/r/memes/random/.json").then(response => {
    let url = `https://reddit.com${JSON.parse(response.body)[0].data.children[0].data.url}`;
    embed.setTitle(JSON.parse(response.body)[0].data.children[0].data.title);
    embed.setImage(`${JSON.parse(response.body)[0].data.children[0].data.url}`);
    message.channel.send({embeds: [embed]}) })

  } else if (cmd === `${p}addrole`) {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return message.channel.send("You Dont Have The Manage Roles Permission");
stop = 0;
   let member = message.mentions.members.first();

    if(!member) return message.channel.send("Mention Someone");

    if(!args[1]) return message.channel.send("Mention a Role");
    let role = message.guild.roles.cache.find(r => r.name === message.content.replace(`${p}addrole ${args[0]} `, ""))
await member.roles.add(role).catch(error => {message.channel.send(`Role doesnt exist or is elevated over me`)}).then(stop = 1)
if(stop === 0) {
const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Added Role ${message.content.replace(`${p}addrole ${args[0]} `, "")} To ${args[0]}`)
message.channel.send({embeds: [embed]})}
} else if (cmd === `${p}removerole`) {
stop = 0;
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES))  return message.channel.send("You Dont Have The Manage Roles Permission");
let member = message.mentions.members.first();
    if(!member) return message.channel.send("Mention Someone");
    if(!args[1]) return message.channel.send("Mention a Role");
    let role = message.guild.roles.cache.find(r => r.name === message.content.replace(`${p}removerole ${args[0]} `, ""))
await member.roles.remove(role).catch(error => {message.channel.send(`Role Doesnt Exist or is elevated over me`)}).then(stop = 1)
if(stop === 0) {
const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Removed Role ${message.content.replace(`${p}removerole ${args[0]} `, "")} To ${args[0]}`)
message.channel.send({embeds: [embed]})}
} else if (cmd === `${p}avatar`) {
const user = message.mentions.users.first() || message.author;
const embed = new Discord.MessageEmbed()
 .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);
 message.channel.send({embeds: [embed]})

  } else if (cmd === `${p}ban`) {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("You Dont Have The Ban Members Permission");
    let member = message.mentions.members.first()

    if(!member) return message.channel.send("Mention Someone");
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('Cant Ban Admins');

    await member.ban()
         const Ban = new Discord.MessageEmbed()
      .setDescription(`${member.displayName} Was Banned By ${message.author.username}`)
      message.channel.send({embeds: [Ban]})
  } else if (cmd === `${p}slowmode`) {
    try {
    if(!args[0]) return message.channel.send(`Define Number To Set Slowmode As`)
      message.channel.setRateLimitPerUser(args[0])
      message.channel.send(`Set Slowmode To ${args[0]}`)
} catch(e) {message.channel.send(`An Error Occured Make Sure Your Using It Correctly Usage: ${p}slowmode [Number]`)}

   } else if (cmd === `${p}kick`) {
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send("You don't have enough permissions to use this command")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!member) return message.channel.send("Mention Someone");
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send('Cant Kick Admins'); 

    await member.kick()
         const Kick = new Discord.MessageEmbed()
      .setDescription(`${member.displayName} Was Kicked By ${message.author.username}`)
      message.channel.send({embeds: [Kick]})
  } else if (cmd === `${p}purge`) {
   if(!args[0]) return message.channel.send("Mention The Amount Of Msgs To Purge");
   if(args[0] > 101) return message.channel.send("Please Use A Number Under 100");
    message.channel.bulkDelete(args[0]);
  } else if (cmd === `${p}snipe`) {
const embed = new Discord.MessageEmbed()
.setDescription(`${db.get(`${message.guild.id}_author`, `${message.author.username}`)} Said ${db.get(`${message.guild.id}_message`, `${message.content}`)}`)
.setFooter(`Sniped By ${message.author.username}`)
message.channel.send({embeds: [embed]})
  } else if (cmd === `${p}nick`) {
stop = null;
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return message.channel.send("You Dont Have The Manage Nicks Permission");
        let mem = message.mentions.members.first(); 
        if(!mem) return message.channel.send(`Mention Someone`);
                if(!args[1]) return message.channel.send(`Please Type A Nick To Give ${mem.displayName}`);
      mem.setNickname(args[1]).catch(error => {message.channel.send("I Dont have the perms to nick that user")}).then(stop = 1)
    if(stop === 0) {
      const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} Has Set ${mem.user.username} Nick To ${args[1]}`)
    message.channel.send({embeds: [embed]})}
  }
});

client.on("messageCreate", (message) => {
  let p = `${db.fetch(`prefix_${message.guild}`)}`;
   if(message.author.bot) return;
   if(!message.content.startsWith(p)) return;
  const args = message.content.slice().trim().split(/ +/g);
  const member = message.mentions.users.first();
  var triggers = [`${p}kiss`,`${p}hug`,`${p}punch`,`${p}slap`,`${p}pat`]
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
case `${p}kiss ${args[1]}`:
  embed.setImage(kiss[picker])
break;
case `${p}hug ${args[1]}`:
  embed.setImage(hug[picker])
break;
case `${p}punch ${args[1]}`:
  embed.setImage(punch[picker])
break;
case `${p}slap ${args[1]}`:
  embed.setImage(slap[picker])
break;
case `${p}pat ${args[1]}`:
  embed.setImage(pat[picker])
break;
}

message.channel.send({embeds: [embed]})
break;
} }
 });

client.on('messageDelete', message => {
if(message.author.bot) return;
  db.set(`${message.guild.id}_author`, `${message.author.username}`)
  db.set(`${message.guild.id}_message`, `${message.content}`) 
})

client.login("Token")
