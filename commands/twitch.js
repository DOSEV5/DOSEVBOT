module.exports = {
  name: "twitch",
  description: "ping command",
  execute(message, args, Discord) {
    if (message.member.roles.cache.some((r) => r.name === "Member")) {
      message.channel.send({
        embed: {
          color: 0x996699,
          title: "Линк за twitch!",
          author: {
            name: "DOSEVBOT",
            icon_url:
              "https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png",
            url: "http://www.youtube.com/c/DOSEV",
          },
          description: "Линк : https://www.twitch.tv/dosev5",
        },
      });
    } else {
      message.channel.send("ne moe");
    }
  },
};
