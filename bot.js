require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials:["MESSAGE"]
})
const PREFIX = '!'
const pdrole = "pd"

client.on('ready', () => {
  console.log(`Our bot is ready to go!!!!`)
})

client.on('message',msg => {
    if (msg.content === `${pdrole}`){
        msg.member.roles.add("779842251328192592")
        msg.reply('Bienvenue dans le rôle de pd')
        //msg.channel.send('Bienvenue dans le rôle de pd')
    }
    
    if (msg.content === `"Pd"`){
        msg.member.roles.add("779842251328192592")
        msg.reply('Bienvenue dans le rôle de pd')
        //msg.channel.send('Bienvenue dans le rôle de pd')
    }

    if (msg.content === "Je t'aime"){
        msg.channel.send('Moi aussi, de tout mon coeur')
        msg.react("❤️")
    }

    if (msg.content === "Merci cousin"){
        msg.channel.send('Tout le plaisir est pour moi')
        msg.react("🥰")
    }

    if (msg.content === "Bon app"){
        msg.channel.send('Merci toi aussi')
        msg.react("🍴")
    }

    if (msg.content === "Donne moi un A"){
        msg.channel.send('Je suis un meilleur bot')
        msg.react("🅰️")
    }

    if (msg.content === `${"Je suis "}${"Alex"}`){
        if (msg.content === 'Alex'){
            msg.channel.send('Salut le Boug')
        }
        if (msg.content === 'Marius'){
            msg.channel.send('Salut le bg')
        }
        msg.channel.send('Default')
    }
}) 

client.on('messageDelete',msg => {
    //msg.reply("Gros pd")
    //msg.channel.send("Un message a été supprimé, la police est là pour s'en charger")
})


client.login(process.env.BOT_TOKEN)