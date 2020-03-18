/*
============================== Instalações ==============================
1° - Instale a Dependencia do DiscordJS: npm install discord.js --save
2° - Instale a 2° Dependencia: npm init -y
*/

const Discord = require('discord.js')//Puxar a dependencia do DiscordJS, que você instalou!
const client = Discord.Client()//Definir um nome para seu Bot!
const config = require('./config.js')//Puxar os dados do bot!

client.on('ready', () => { console.log('Bot Online') });//Anúnciar quando o Bot estiver ligado! " Ready ", server para outras funções também!

client.log(config.token)//Fazer o Login do Bot. Ligar o Bot