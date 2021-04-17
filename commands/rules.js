module.exports = {
  name: "rules",
  description: "ping command",
  execute(message, args, Discord) {
    if (message.member.roles.cache.some((r) => r.name === "Member")) {
      message.channel.send({
        embed: {
          color: 0xcc6633,
          title: "Правила на дискорд сървъра, които трябва да се спазват!",
          url: "http://www.youtube.com/c/DOSEV",
          author: {
            name: "DOSEVBOT",
            icon_url:
              "https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png",
            url: "http://www.youtube.com/c/DOSEV",
          },
          description:
            "0)Бъдете сигурни, че сте прочели discord guidelines : https://discordapp.com/guidelines.\n1)Забавлявайте се в нашият сървър.\n2)Не спамете и не пускайте NSFW, освен в обозначеният, за това канал. \n3)Забранено е рекламирането на сайтове или дискорди (освен, в обозначеният, за това канал).\n4)Забранени са псуването и просташкото поведение.\n5)Използвайте каналите по предназначение.\n6)Забранени са заплахите към другите потребители и екипа.\n7)Забранено е тагването на роли или потребители на сървъра без причина.\n8)Без DM реклами (наказва се с бан).\n**При нарушаване на правилата, моля съобщете на Staff-a и Support-a.** ",
          inline: true,

          timestamp: new Date(),
          footer: {
            text: "©DOSEVBOT",
          },
        },
      });
    } else {
      message.channel.send("ne moe");
    }
  },
};
