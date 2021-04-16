module.exports = {
    name: 'youtube',
    description: "ping command",
    execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "MOD")){

    message.channel.send({embed: {
    color: 0xCC0000,
    title: "Моят YouTube канал!",
    description: "Линк : https://www.youtube.com/c/DOSEV"
    }});

    
    } else {
        message.channel.send('ne moe')
    }


  },
}