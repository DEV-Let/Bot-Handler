/*
============================== Instalações ==============================
1° - Instale a Dependencia do DiscordJS: npm install discord.js --save
2° - Instale a 2° Dependencia: npm init -y
*/

const Discord = require('discord.js')
const client = Discord.Client()
const config = require('./config.js')
const fs = require('fs')

client.commands  = new Discord.Collection(); //- Comandos
client.aliases   = new Discord.Collection(); //- Aliases

// [- Eventos -]
fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(`Ocorreu um erro nos eventos: \n${err}`); 
    files.forEach(file => {        
        let eventFunction = require(`./eventos/${file}`); 
        let eventName = file.split(".")[0];         
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

// [- Comandos -]
fs.readdir("./comandos/", (err, files)=> { 
    if(err) return console.log(`Ocorreu um erro nos comandos: \n${err}`);   
    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) return console.log('Nenhum comando encontrado!')        
    jsfile.forEach((f, i) => {        
        let pull = require(`./comandos/${f}`); 
        client.commands.set(pull.config.name, pull); 
        pull.config.aliases.forEach(alias => { 
            client.aliases.set(alias, pull.config.name) 
        });

        });
    });

// [- Iníciamento do bot -]
client.login(config.token).then(() => {
    console.log(`Ativo com sucesso! `) 
}).catch(e => {
    console.log(`Erro encontrado: \n${e}`)
})