const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = "MTUwOTk4NTAxNzMxOTkxNTU3MQ.GEM5Jr.V85sBV8Kj52Lg_js_AWVtN1L6w-dfHANT5Wf1k";
const CHANNEL_ID = "1446531671179526155";

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

client.login(TOKEN);