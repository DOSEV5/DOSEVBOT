Memberule.exports = {
name: 'setup',
description: "ping command",
execute(message, args, Discord, client) {
    if(message.member.roles.cache.some(r => r.name === "Member")){
        
        message.channel.send('**Setup :**');
        message.channel.send('**Мишка** : Hama uRAGE Reaper 500')
        message.channel.send('**Клавиатура** : Trust GXT 856 Torac');
        message.channel.send('**Микофон** : Trust GXT 232 Mantis + стойка, за микрофон, от Gplay.bg')
        message.channel.send('**Слушалки** : Canyon CND-SGHS5A')
        message.channel.send('**Компютър** :')
        message.channel.send('Процесор - Intel Xeon X5650')
        message.channel.send('Рам памет - 14 GB')
        message.channel.send('Видеокарта - GTX 1060 3gb')
        message.channel.send('Захранване - 500 Вата')
        message.channel.send('Хард дискове - 1 диск 1 терабайт, а другия е 300 гб')
        message.channel.send('**2-та Монитора** : 1 Монитор - Телевизор SANG ; 2 Монитор - Philips')
    } else {
        message.channel.send('ne moe')
    }


   
    
    
    





}
};