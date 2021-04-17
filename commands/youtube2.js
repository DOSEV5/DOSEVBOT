module.exports = {
  name: "youtube2",
  description: "ping command",
  execute(message, args, Discord) {
    if (message.member.roles.cache.some((r) => r.name === "Member")) {
      message.channel.send({
        embed: {
          color: 0xffff00,
          title: "Моят втори YouTube канал!",
          author: {
            name: "DOSEVBOT",
            icon_url:
              "https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png",
            url: "https://www.youtube.com/channel/UC3S1xxkbexb_AZgNTusJ9yw",
          },
          description: "Линк : https://www.youtube.com/c/DOSEV",
        },
      });
    } else {
      message.channel.send("ne moe");
    }
  },
};
