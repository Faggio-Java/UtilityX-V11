const Discord = require("discord.js");
const { Permissions } = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("You Dont Have The Administrator Permission");
let member = message.mentions.users.first() || message.author;

          let embed = new Discord.MessageEmbed()
          .setTitle(`${member.username} Warnings`)
          .setDescription(`1: ${db.get(`1warn_${message.guild.id}_${message.mentions.users.first()}`)} \n 2: ${db.get(`2warn_${message.guild.id}_${message.mentions.users.first()}`)} \n 3: ${db.get(`3warn_${message.guild.id}_${message.mentions.users.first()}`)}`)
          .setFooter(`Cmd Executed By ${message.author.username}`)
          message.channel.send({embeds: [embed]})
}
                module.exports.config = {
                    name: 'warnings',
                    aliases: [],
                };