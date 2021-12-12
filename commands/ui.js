const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;

const embed = new Discord.MessageEmbed()
.setTitle(`${member.displayName}'s User Info`)
.setDescription(`Username: ${user.username} \n Nickname: ${member.displayName} \n ID: ${user.id} \n Created: ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm")} \n Joined: ${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm")}`);
message.channel.send({embeds: [embed]})

} 
                module.exports.config = {
                    name: 'ui',
                    aliases: [],
                };
