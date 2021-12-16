const { Permissions } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["GUILD_MEMBER"] })
const db = require('quick.db')
const fs = require("fs");
const https = require('https');
const moment = require("moment")
require("moment-duration-format")
const ms = require('ms')

client.on('ready', (message) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('&help For List Of Cmds');
});
  const { loadGifs } = require('./events/gifs')
  const { loadCommands } = require('./events/Handler');
  
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  loadCommands(client);
  loadGifs(client);

  client.on('messageCreate', message => {
      if (message.author.bot) return;
  
      const messageArray = message.content.split(/\s+/);
      const cmd = messageArray[0];
      const args = messageArray.slice(1);
      
      const prefix = db.fetch(`prefix_${message.guild}`)
  
      if (!message.content.startsWith(db.fetch(`prefix_${message.guild}`))) return;

      const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
      try {
        commandfile.run(client, message, args)
        } catch(err) {}

  });

client.on('messageDelete', message => {
if(message.author.bot) return;
  db.set(`${message.guild.id}_message`, `${message.author.username} Said ${message.content}`)
})

client.login("Token")
