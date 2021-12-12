const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
/*} else if (cmd === `${p}meme`) {
    const embed = new Discord.MessageEmbed();
got("https://www.reddit.com/r/memes/random/.json").then(response => {
let url = `https://reddit.com${JSON.parse(response.body)[0].data.children[0].data.url}`;
embed.setTitle(JSON.parse(response.body)[0].data.children[0].data.title);
embed.setImage(`${JSON.parse(response.body)[0].data.children[0].data.url}`);
message.channel.send({embeds: [embed]}) })
*/ // command above is broke as got no longer supports require(), i will replace with https method soon 
}
                module.exports.config = {
                    name: 'meme',
                    aliases: [],
                };