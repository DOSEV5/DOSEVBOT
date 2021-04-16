module.exports = {
    name: 'invite',
    description: "ping command",
    execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "Member")){

            message.channel.send({embed: {
                color: 0x6666CC,
                title: "Линк за моят дискорд сървър",
                author: {
                    name: 'DOSEVBOT',
                    icon_url: 'https://cdn.discordapp.com/attachments/771376321207992360/832649679988326531/icon_2.png',
                    url: 'http://www.youtube.com/c/DOSEV',
                  },
                description: "Линк : https://discord.gg/WEPe7Dt"
                
                
              }});
             

    
    } else {
        message.channel.send('ne moe')
    }


  },
}