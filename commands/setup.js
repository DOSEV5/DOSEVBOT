module.exports = {
  name: "setup",
  description: "setup command",
  execute(message, args, Discord, client) {
    if (message.member.roles.cache.some((r) => r.name === "Member")) {
      message.channel.send('https://cdn.discordapp.com/attachments/770750289275518996/894167934371516467/IMG_20211003_131608.jpg');
      message.channel.send("**Setup :**");
      message.channel.send("**Мишка** : Hama uRAGE Reaper 500");
      message.channel.send("**Клавиатура** : Trust GXT 856 Torac");
      message.channel.send("**Микрофон** : Trust GXT 232 Mantis + стойка, за микрофон, от Gplay.bg");
      message.channel.send("**Слушалки** : Canyon CND-SGHS5A");
      message.channel.send("**Компютър** :");
      message.channel.send("Процесор - AMD Ryzen 5 1600 6-Core 3.2GHz");
      message.channel.send("Рам памет - 2x8 GB Kingston FURY Beast DDR4");
      message.channel.send("Видеокарта - GTX 1060 3gb");
      message.channel.send("Захранване - Deepcool DN650 650W");
      message.channel.send("Кутия - AeroCool Bolt RGB");
      message.channel.send("Дискове - SSD Kingston 120GB , 1 Хард диск 1 терабайт , 1 харддиск 300 гб");
      message.channel.send(
        "**2-та Монитора** : 1 Монитор - Acer Nitro VG240Ybmiix ; 2 Монитор - Philips");
    } else {
      message.channel.send("ne moe");
    }
  },
};
