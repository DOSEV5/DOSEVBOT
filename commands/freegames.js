module.exports = {
    name: "freegames",
    description: "ping command",
    execute(message, args, Discord) {
      if (message.member.roles.cache.some((r) => r.name === "Member")) {
        message.channel.send({
          embed: {
            color: 0x33FF33,
            title: "Линк за torent Игруха",
            author: {
              name: "DOSEVBOT",
              icon_url:
                "https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png",
              url: "http://www.youtube.com/c/DOSEV",
            },
            description: "Линк за torent Игруха : https://s4.torrents-igruha.org/",
          },
        });
      } else {
        message.channel.send("ne moe");
      }
    },
  };