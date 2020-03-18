const config = require('../config.js'); 

module.exports.run = (client, message) => {  
    
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return; 

    let prefix = config.prefix; 
   if([`<@${client.user.id}>`, `<@!${client.user.id}>`].includes(message.content)) {
    message.channel.send(`**Olá ${message.author.username}, meu prefixo ativo é  \`${config.prefix}\`** `);
};

    if(message.content.indexOf(prefix) !== 0) return; 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()
    
    const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (commandFile) commandFile.run(client, message, args)
    
}