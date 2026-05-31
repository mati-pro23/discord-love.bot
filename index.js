const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

function randomMember(guild) {
  const members = guild.members.cache.filter(m => !m.user.bot);
  return members.random();
}

client.once("ready", async () => {
  console.log("💖 Bot online");

setInterval(async () => {
  const guild = client.guilds.cache.first();
  await guild.members.fetch();
  const user = randomMember(guild);
  const channel = guild.channels.cache.get(CHANNEL_ID);
  if (!channel) return;
  channel.send(`💖 ${user} got some love!`);
}, 2 * 60 * 60 * 1000);
});
const http = require('http');
http.createServer((req, res) => res.end('ok')).listen(process.env.PORT || 3000);
client.login(TOKEN);
