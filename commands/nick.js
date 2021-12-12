const Discord = require("discord.js");
const { Permissions } = require("discord.js");

module.exports.run = async (client, message, args) => {
    stop = null;
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return message.channel.send("You Dont Have The Manage Nicks Permission");
        let member = message.mentions.members.first(); 
        if(!member) return message.channel.send(`Mention Someone`);
                if(!args[1]) return message.channel.send(`Please Type A Nick To Give ${member.displayName}`);
                member.setNickname(args[1]).catch(error => {message.channel.send("I Dont have the perms to nick that user")}).then(stop = 1)
    if(stop === 0) {
      const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} Has Set ${member.user.username} Nick To ${args[1]}`)
    message.channel.send({embeds: [embed]})}
} 
module.exports.config = {
    name: 'nick',
    aliases: [],
};