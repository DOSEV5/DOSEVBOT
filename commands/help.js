
module.exports = {
    name: 'help',
    description: "help",
    execute(message, args, Discord){
      
      if(message.member.roles.cache.some(r => r.name === "MOD")){

        const exampleEmbed = {
          color: 0xCC6633,
          title: 'Помощни команди и информация',
          url: 'http://www.youtube.com/c/DOSEV',
          author: {
            name: 'DOSEVBOT',
            icon_url: 'https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png',
            url: 'http://www.youtube.com/c/DOSEV',
          },
          description: 'Абонирайте се за моят канал. Също ако ви трябва помощ DOSEV#1278"',
          thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png',
          },
          fields: [
            {
              name: "PREFIX",
              value: "."
            },
            {
              name: "Команда .youtube",
              value: "Тя ще ви даде линк за моят ютюб канал."
            },
            {
              name: "Команда .invite",
              value: "Ще ви даде линк за [дискорд сървърът ми](https://discord.gg/T9qYz3G)."
            },
            {
              name: "Команда .help",
              value: "Прави това, което виждаш в момента!"
            },
            {
              name: "Команда .twitch",
              value: "Дава линк за twitch!"
            },
            {
              name: "Команда .rules",
              value: "Показва правилата"
            },
            {
              name: "Команда .setup",
              value: "Тя ще ви даде информация, за моят setup."
            },
          ],
         
          timestamp: new Date(),
          footer: {
            text: '©DOSEVBOT',
            icon_url: 'https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png',
          },
        };
        message.channel.send({ embed: exampleEmbed });
        

    } else {
        message.channel.send('Нямаш нужната роля, за да използваш тази команда')
    
      }
    }
  }