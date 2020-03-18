module.exports.run = (client, message, args ) => {  
    const Discord = require('discord.js');
  
    message.channel.send(`**:ping_pong: Pong! ${client.ping}**`)
   
    }
    module.exports.config = {   
      name: 'ping', 
      aliases: ['latencia' , 'pin']
    }