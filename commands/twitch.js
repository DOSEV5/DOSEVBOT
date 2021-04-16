Memberule.exports = {
    name: 'twitch',
    description: "ping command",
    execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "Member")){

    message.channel.send({embed: {
        color: 0x996699,
        title: "Линк за twitch!",
        description: "Линк : https://www.twitch.tv/dosev5"
    }});


    
    } else {
        message.channel.send('ne moe')
    }


  },
}