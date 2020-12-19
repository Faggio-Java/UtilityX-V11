const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone'});
const db = require('quick.db')
const fs = require("fs");
const got = require('got');
const moment = require("moment");
const fetch = require("node-fetch");
const Canvas = require('canvas')


//Bots On Discord.js V11 Cause i just prefer it 
client.once('ready', (message) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: '&help For List Of Cmds' }, status: 'online' });
});

client.on('error', (err) => {
  console.log(err.message)
if (err.message.code === 'ETIMEDOUT') { console.log('ETIMEOUT', util.inspect(err, { showHidden: true, depth: 2 })); }
   });

client.on("message", async (message) => {
  if (message.author.bot) return;

let p = "&";
  const args = message.content.slice().trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(cmd === `${p}help`){
    const embed = new Discord.RichEmbed()
    .setTitle("Commands")
    .setDescription("Moderation: &ban &kick &unban &purge &nick &addrole &removerole \n Fun: &kiss &hug &punch &slap &pat \n Utility: &ui &server &avatar &snipe \n Server Settings: &welcomer &themes")
    message.channel.send(embed);
  } else if (cmd === `${p}ui`) {
     let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;

const embed = new Discord.RichEmbed()
.setTitle(`${member.displayName}'s User Info`)
.setDescription(`Username: ${user.username} \n Nickname: ${member.displayName} \n ID: ${user.id} \n Created: ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm")} \n Joined: ${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm")}`);
message.channel.send(embed)
  } else if (cmd === `${p}server`) {
    const embed = new Discord.RichEmbed()
                .setTitle(`${message.guild}'s Info`)
            .setDescription(`Owner: ${message.guild.owner.displayName} \n Member Amount: ${message.guild.memberCount} \n Emoji Amount: ${message.guild.emojis.size} \n Roles Amount: ${message.guild.roles.size} \n Created: ${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm")}`)
            message.channel.send(embed)
  } else if (cmd === `${p}meme`) {
          const embed = new Discord.RichEmbed();
    got("https://www.reddit.com/r/memes/random/.json").then(response => {
    let url = `https://reddit.com${JSON.parse(response.body)[0].data.children[0].data.url}`;
    embed.setTitle(JSON.parse(response.body)[0].data.children[0].data.title);
    embed.setImage(`${JSON.parse(response.body)[0].data.children[0].data.url}`);
      message.channel.send(embed); })
  } else if (cmd === `${p}kiss`) {
       if (message.mentions.users.first()) {
   let kisses = ["https://cdn.weeb.sh/images/ByVQha_w-.gif","https://cdn.weeb.sh/images/ryoW3T_vW.gif","https://cdn.weeb.sh/images/B1yv36_PZ.gif","https://cdn.weeb.sh/images/ryEvhTOwW.gif","https://cdn.weeb.sh/images/SyY0j6Ov-.gif"]
  let kisser = Math.floor(Math.random() * Math.floor(kisses.length)); 
const kissed = new Discord.RichEmbed()
.setTitle(`${message.mentions.users.first().username} Was Kissed By ${message.author.username}`)
.setImage(kisses[kisser])
message.channel.send(kissed)
if (usr === message.author) return message.channel.send("You Cant Kiss Yourself")
  message.channel.send(embed)
} else {message.channel.send("Mention Someone")}
  } else if (cmd === `${p}hug`) {
       if (message.mentions.users.first()) {
   let hugs = ["https://cdn.weeb.sh/images/rkx1dJ25z.gif","https://cdn.weeb.sh/images/Sk-xxs3C-.gif","https://cdn.weeb.sh/images/HJTWcTNCZ.gif","https://cdn.weeb.sh/images/rk_6GyncG.gif","https://cdn.weeb.sh/images/S18oOuQw-.gif"]
  let hugger = Math.floor(Math.random() * Math.floor(hugs.length)); 
const hugged = new Discord.RichEmbed()
.setTitle(`${message.mentions.users.first().username} Was Hugged By ${message.author.username}`)
.setImage(hugs[hugger])
if (usr === message.author) return message.channel.send("You Cant Hug Yourself")
  message.channel.send(hugged)
} else {message.channel.send("Mention Someone")}
  } else if (cmd === `${p}punch`) {
       if (message.mentions.users.first()) {
   let punchs = ["https://cdn.weeb.sh/images/SJAfH5TOz.gif","https://cdn.weeb.sh/images/SyYbP6W-z.gif","https://cdn.weeb.sh/images/rkkZP6Z-G.gif","https://cdn.weeb.sh/images/rJHLDT-Wz.gif","https://cdn.weeb.sh/images/rJRUk2PLz.gif"]
  let puncher = Math.floor(Math.random() * Math.floor(punchs.length)); 
const punchsed = new Discord.RichEmbed()
.setTitle(`${message.mentions.users.first().username} Was Punched By ${message.author.username}`)
.setImage(punchs[puncher])
if (usr === message.author) return message.channel.send("You Cant Punch Yourself")
  message.channel.send(punchsed)
} else {message.channel.send("Mention Someone")}
  } else if (cmd === `${p}slap`) {
       if (message.mentions.users.first()) {
   let slaps = ["https://cdn.weeb.sh/images/BkzyEktv-.gif","https://cdn.weeb.sh/images/SkSCyl5yz.gif","https://cdn.weeb.sh/images/ryv3myFDZ.gif","https://cdn.weeb.sh/images/HkA6mJFP-.gif","https://cdn.weeb.sh/images/rJvR71KPb.gif"]
  let slapper = Math.floor(Math.random() * Math.floor(slaps.length)); 
const slapped = new Discord.RichEmbed()
.setTitle(`${message.mentions.users.first().username} Was Slapped By ${message.author.username}`)
.setImage(slaps[slapper])
if (usr === message.author) return message.channel.send("You Cant Slap Yourself")
  message.channel.send(slapped)
} else {message.channel.send("Mention Someone")}
  } else if (cmd === `${p}pat`) {
       if (message.mentions.users.first()) {
   let pats = ["https://cdn.weeb.sh/images/BJp1lyYD-.gif","https://cdn.weeb.sh/images/B1TQcTNCZ.gif","https://cdn.weeb.sh/images/BJnD9a4Rb.gif","https://cdn.weeb.sh/images/Byd3kktw-.gif","https://cdn.weeb.sh/images/rkBZkRttW.gif"]
  let patter = Math.floor(Math.random() * Math.floor(pats.length)); 
const patted = new Discord.RichEmbed()
.setTitle(`${message.mentions.users.first().username} Was Patted By ${message.author.username}`)
.setImage(pats[patter])
if (message.mentions.users.first() === message.author) return message.channel.send("You Cant Pat Yourself")
  message.channel.send(patted)
} else {message.channel.send("Mention Someone")}
  } else if (cmd === `${p}addrole`) {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You Dont Have The Manage Roles Permission");
    try {
    let member = message.mentions.members.first();
    if(!member) return message.channel.send("Mention Someone");
    if(!args[1]) return message.channel.send("Mention a Role");
    let role = message.guild.roles.find(r => r.name === message.content.replace(`&addrole ${args[0]} `, ""))
await member.addRole(role)
const embed = new Discord.RichEmbed()
.setDescription(`${message.author.username} Added Role ${args[1]} To ${args[0]}`)
message.channel.send(embed)
} catch(e) {message.channel.send("An Error Occurred Maby You Mentioned The Role? Or My Roles Under That Role Try Typing The Name Example &addrole @user Role") }
} else if (cmd === `${p}removerole`) {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You Dont Have The Manage Roles Permission");
    try {
let member = message.mentions.members.first();
    if(!member) return message.channel.send("Mention Someone");
    if(!args[1]) return message.channel.send("Mention a Role");
    let role = message.guild.roles.find(r => r.name === message.content.replace(`&removerole ${args[0]} `, ""))
await member.removeRole(role)
const embed = new Discord.RichEmbed()
.setDescription(`${message.author.username} Removed Role ${args[1]} To ${args[0]}`)
message.channel.send(embed)
} catch(e) {message.channel.send("An Error Occurred Maby You Mentioned The Role? Or My Roles Under That Role Try Typing The Name Example &removerole @user Role")} 
} else if (cmd === `${p}avatar`) {
const embed = new Discord.RichEmbed()
.setImage(message.mentions.users.first().avatarURL || message.author.avatarURL)
message.channel.send(embed)
  } else if (cmd === `${p}ban`) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You Dont Have The Ban Members Permission");
    let member = message.mentions.members.first()

    if(!member) return message.channel.send("Mention Someone");
    if (member.hasPermission('BAN_MEMBERS')) return message.channel.send('Cant Ban Admins');

    await member.ban()
         const Ban = new Discord.RichEmbed()
      .setDescription(`${member.displayName} Was Banned By ${message.author.username}`)
 message.channel.send(Ban)
   } else if (cmd === `${p}unban`) {
        if (message.member.hasPermission('BAN_MEMBERS')) {

    let member = await client.fetchUser(args[0])
        if(!member) return message.channel.send("Please provide a user id to unban someone!")

 try { message.guild.unban(member)
             const Ban = new Discord.RichEmbed()
      .setDescription(`${member} Was Unbanned By ${message.author.username}`)
 message.channel.send(Ban)} catch(e) {}
  } else { message.channel.send("You Dont Have The Ban Members Permission")} 

   } else if (cmd === `${p}kick`) {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You don't have enough permissions to use this command")
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!member) return message.channel.send("Mention Someone");
    if (member.hasPermission('KICK_MEMBERS')) return message.channel.send('Cant Kick Admins'); 

    await member.kick()
         const Kick = new Discord.RichEmbed()
      .setDescription(`${member.displayName} Was Kicked By ${message.author.username}`)
 message.channel.send(Kick)
  } else if (cmd === `${p}purge`) {
    if(!args[0]) return message.channel.send("Mention The Amount Of Msgs To Purge");
    message.channel.bulkDelete(args[0]);
  } else if (cmd === `${p}snipe`) {
const embed = new Discord.RichEmbed()
.setDescription(`${db.get(`${message.guild.id}_author`, `${message.author.username}`)} Said ${db.get(`${message.guild.id}_message`, `${message.content}`)}`)
.setFooter(`Sniped By ${message.author.username}`)
message.channel.send(embed)
  } else if (cmd === `${p}nick`) {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You Dont Have The Manage Nicks Permission");
        let mem = message.mentions.members.first(); 
        if(!mem) return message.channel.send(`Mention Someone`);
                if(!args[1]) return message.channel.send(`Please Type A Nick To Give ${mem.displayName}`);
        mem.setNickname(args[1])
    const embed = new Discord.RichEmbed()
    .setDescription(`${message.author.username} Has Set ${mem.user.username} Nick To ${args[1]}`)
    message.channel.send(embed);
  } else if (cmd === `${p}welcomer`) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Dont Have The ADMINISTRATOR Permission");
    let joiner = db.get(`joinz_${message.guild.id}`)
    if(joiner === null) joiner = 0;
    const embed = new Discord.RichEmbed()
  if(args[0] === "on") {
    if(joiner >= 1) return embed.setDescription('Welcomer Already On');
    db.add(`joinz_${message.guild.id}`, 1)
  message.guild.createChannel('welcome', 'text')
  embed.setDescription("Welcomer Was Turned On Use &themes And Pick A Theme To Activate It")
   } else if(args[0] === "off") {
 if(joiner == 0) return embed.setDescription('Welcomer Already On');
  db.subtract(`joinz_${message.guild.id}`, 1)
embed.setDescription("Welcomer Was Turned Off")
   } else {embed.setDescription("Usage: &welcomer on/off")}
   message.channel.send(embed)
  } else if (cmd === `${p}themes`) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Dont Have The ADMINISTRATOR Permission");
    let thone = db.fetch(`onef_${message.guild.id}`)
    let thtwo = db.fetch(`twof_${message.guild.id}`)
    let ththree = db.fetch(`threef_${message.guild.id}`)
    let thfour = db.fetch(`fourf_${message.guild.id}`)
    let thfive = db.fetch(`fivef_${message.guild.id}`)

if(thone === null) thone = 0;
if(thtwo === null) thtwo = 0;
if(ththree === null) ththree = 0;
if(thfour === null) thfour = 0;
if(thfive === null) thfive = 0;

if(args[0] === "1") {
db.add(`onef_${message.guild.id}`, 1)
message.channel.send(`Theme-${args[0]} Was Turned On`) 
    } else if(args[0] === "2") {
db.add(`twof_${message.guild.id}`, 1)
message.channel.send(`Theme-${args[0]} Was Turned On`) 
    } else if(args[0] === "3") {
db.add(`threef_${message.guild.id}`, 1)
message.channel.send(`Theme-${args[0]} Was Turned On`) 
    } else if(args[0] === "4") {
db.add(`fourf_${message.guild.id}`, 1)
message.channel.send(`Theme-${args[0]} Was Turned On`) 
    } else if(args[0] === "5") {
db.add(`fivef_${message.guild.id}`, 1)
message.channel.send(`Theme-${args[0]} Was Turned On`) 
} else if(args[0] === "5" && args[0] === "4" && args[0] === "3" && args[0] === "2" && args[0] === "1") {
if(thone >= 1) return db.subtract(`onef_${message.guild.id}`, 1)
if(thtwo >= 1) return db.subtract(`twof_${message.guild.id}`, 1)
if(ththree >= 1) return db.subtract(`threef_${message.guild.id}`, 1)
if(thfour >= 1) return db.subtract(`fourf_${message.guild.id}`, 1)
if(thfive >= 1) return db.subtract(`fivef_${message.guild.id}`, 1)
} else {
      const embed = new Discord.RichEmbed()
      .setDescription(`1: Theme 1 [Preview](https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) \n 2: Theme 2 [Preview](https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)  \n 3: Theme 3 [Preview](https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) \n 4: Theme 4 [Preview](https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) \n 5: Theme 5 [Preview](https://images.pexels.com/photos/1933320/pexels-photo-1933320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`)
    message.channel.send(embed)
    } 
  }
});

const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let size = 70;
    do { ctx.font = `${size -= 10}px sans-serif`; } while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
};

client.on("guildMemberAdd", async (member) => {
    const joiner = db.get(`joinz_${member.guild.id}`)

    let thone = db.get(`onef_${member.guild.id}`)
    let thtwo = db.get(`twof_${member.guild.id}`)
    let ththree = db.get(`threef_${member.guild.id}`)
    let thfour = db.get(`fourf_${member.guild.id}`)
    let thfive = db.get(`fivef_${member.guild.id}`)
if(thone === null) thone = 0;
if(thtwo === null) thtwo = 0;
if(ththree === null) ththree = 0;
if(thfour === null) thfour = 0;
if(thfive === null) thfive = 0;

    if(joiner >= 1) {
      if(thone === 0 && thtwo === 0 && ththree === 0 && thfour === 0 && thfive === 0) {} else {
    const chn = member.guild.channels.find(ch => ch.name === 'welcome');
    if(!chn) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    let background = "";
if(thone >= 1) {let background = await Canvas.loadImage('./Theme-1.jpg');}
if(thtwo >= 1) {let background = await Canvas.loadImage('./Theme-2.jpg');}
if(ththree >= 1) {let background = await Canvas.loadImage('./Theme-3.jpg');} 
if(thfour >= 1) {let background = await Canvas.loadImage('./Theme-4.jpg');}
if(thfive >= 1) {let background = await Canvas.loadImage('./Theme-5.jpg');}
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Welcome to ${member.guild}`, canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    chn.send(attachment) } }
});

client.on("guildMemberRemove", async (member) => {
      const joiner = db.get(`joinz_${member.guild.id}`)

    let thone = db.get(`onef_${member.guild.id}`)
    let thtwo = db.get(`twof_${member.guild.id}`)
    let ththree = db.get(`threef_${member.guild.id}`)
    let thfour = db.get(`fourf_${member.guild.id}`)
    let thfive = db.get(`fivef_${member.guild.id}`)
    
if(thone === null) thone = 0;
if(thtwo === null) thtwo = 0;
if(ththree === null) ththree = 0;
if(thfour === null) thfour = 0;
if(thfive === null) thfive = 0;

      if(joiner >= 1) {
      if(thone === 0 && thtwo === 0 && ththree === 0 && thfour === 0 && thfive === 0) {} else {
    const chn = member.guild.channels.find(ch => ch.name === 'welcome');
    if(!chn) return;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
let background = "";
if(thone >= 1) {let background = await Canvas.loadImage('./Theme-1.jpg');}
if(thtwo >= 1) {let background = await Canvas.loadImage('./Theme-2.jpg');}
if(ththree >= 1) {let background = await Canvas.loadImage('./Theme-3.jpg');} 
if(thfour >= 1) {let background = await Canvas.loadImage('./Theme-4.jpg');}
if(thfive >= 1) {let background = await Canvas.loadImage('./Theme-5.jpg');}

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName} Left ${member.guild}`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'leave-image.png');

    chn.send(attachment) } }
});

client.on('messageDelete', message => {
if(message.author.bot) return;
  db.set(`${message.guild.id}_author`, `${message.author.username}`)
  db.set(`${message.guild.id}_message`, `${message.content}`) 
})

client.login("Token")
