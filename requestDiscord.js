require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

let user;

client.once("ready", async () => {
  console.log("Bot is online");
  const guild = client.guilds.cache.get("923210019632201808");
  user = await guild.members.fetch("581048093412425750"); // 600242679380574228
  //   user.send("w");
});

const embed = new EmbedBuilder().setColor("#2f3136").setTimestamp();

function sendEmbed(data) {
  embed.setDescription(
    `Message from **${
      data.name ? data.name : "Unknown"
    }**,\n\nProject Budget: **${data.budget}
    **\nEmail: **${data.email}**\n\n${data.message}`
  );
  user.send({ embeds: [embed] });
}

client.login(process.env.token);
module.exports = {
  sendEmbed,
};
