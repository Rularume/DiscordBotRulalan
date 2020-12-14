require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials:["MESSAGE"]
})
PREFIX = '!'
const pdrole = "pd"
const Noel="noel"
const noel="noël"

client.on('ready', () => {
  console.log(`Our bot is ready to go!!!!`)
})



client.on('message',msg => {
    if (or(msg.content === `${pdrole}`,msg.content === `"Pd"`)){
        
        msg.member.roles.remove("787746606266843196")
        msg.member.roles.add("779842251328192592")
        msg.react("🇵")
        msg.react("🇩")
        msg.reply('Bienvenue dans le rôle de pd')
        //msg.channel.send('Bienvenue dans le rôle de pd')
        
        
    }
    if (or(msg.content == `${PREFIX}${Noel}`,msg.content == `${PREFIX}${noel}`)){
        msg.channel.send("joyeux noel")
        //msg.send("test")
        msg.react("🎄")
        msg.react("🎅")
    }

    if (msg.content == `${PREFIX}${"test25+645413"}`){
        //msg.reply("test sucessfull")
        PREFIX = "-"
        msg.reply(PREFIX)
    }

    if (msg.content == `${PREFIX}${"prefix"}`){
        msg.channel.send("test sucessfull")
        PREFIX = "-"
        msg.reply(PREFIX)
    }

    

    if (msg.content == "Jchuis pas pd"){
        msg.member.roles.remove("779842251328192592")
        msg.react("🏳️‍🌈")
        msg.reply("Ben super t'es homophobe ou quoi ??")
        msg.member.roles.add("787746606266843196")
        msg.channel.send("Tu as reçu le rôle d'homophobe")
    }

    if (msg.content === "Je t'aime"){
        msg.channel.send('Moi aussi, de tout mon coeur')
        msg.react("❤️")
    }

    if (msg.content === "123"){
        msg.channel.send('pd')
    }

    if (msg.content === "Merci cousin"){
        msg.channel.send('Tout le plaisir est pour moi')
        msg.react("🥰")
    }

    if (msg.content === "Bon app"){
        msg.channel.send('Merci toi aussi')
        msg.react("🍴")
    }

    if (msg.content === "Teter"){
        msg.channel.send("C'est le plus beau")        
    }

    if (msg.content === "Donne moi un A"){
        msg.channel.send('Je suis un meilleur bot')
        msg.react("🅰️")
    }

    
}) 

client.on('messageDelete',msg => {
    if (msg.content == "pd"){
        msg.channel.send("Ya un homophobe dans la salle qui supprime les pd")
    }
    //msg.reply("Gros pd")
    //msg.channel.send("Un message a été supprimé, la police est là pour s'en charger")
})


client.login(process.env.BOT_TOKEN)

function and(a, b) {
    if (a) {
      if (b) {
        return 1;
      }
    }
    return 0;
  }

function or(a, b) {
    if (a) { return 1; }
    if (b) { return 1; }
    return 0;
  }