exports.run = (client) => { 
    console.log(`Logado em ${Number(client.guilds.cache.size).toLocaleString()} servidores, com ${Number(client.users.cache.size).toLocaleString()} membros.`)
    
        client.user.setPresence({
            status: 'online', // dnd, idle 
            game: { // Presence Game do bot.
                name:`github.com/D.B.H`, 
                type: 'PLAYING'
            }
        });    
    }