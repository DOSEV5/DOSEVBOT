const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";

client.on("ready", async () => {
  channel = client.channels.cache.get('860233583011954708');
  channel.send('Ботът е включен');

  //status
  client.user.setPresence({
    status: "online",
    activity: {
      name: ".help",
      type: "STREAMING",
      url: "https://www.twitch.tv/dosev5",
    },
  });
});

//command handler
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //commands
  if (command === "ping") {
    client.commands.get("ping").execute(message, args, Discord);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args, Discord);
  } else if (command === "twitch") {
    client.commands.get("twitch").execute(message, args, Discord);
  } else if (command === "youtube") {
    client.commands.get("youtube").execute(message, args, Discord);
  } else if (command === "rules") {
    client.commands.get("rules").execute(message, args, Discord);
  } else if (command === "setup") {
    client.commands.get("setup").execute(message, args, Discord);
  } else if (command === "invite") {
    client.commands.get("invite").execute(message, args, Discord);
  } else if (command === "youtube2") {
    client.commands.get("youtube2").execute(message, args, Discord);
  } else if (command === "freegames") {
    client.commands.get("freegames").execute(message, args, Discord);
  }
});

client.login(process.env.token);
