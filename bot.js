require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials:["MESSAGE"]
})
PREFIX = '!'
const pdrole = "pd"
const Noel="noel"
const noel="Noël"

const citation=require('./citations.json')
const help=require('./help.json')


client.on('ready', () => {
  console.log(`Go for launch`)
})



client.on('message',msg => {
    
    if (or(msg.content == `${PREFIX}${"Citation"}`,msg.content == `${PREFIX}${"citation"}`)){
        //msg.channel.send("test sucessfull")
        n=Math.floor(Math.random() * citation.length)
        msg.channel.send("```"+citation[n].citation+'\n\n'+citation[n].auteur+"```")
    } 
    
    if (or(msg.content == `${PREFIX}${Noel}`,msg.content == `${PREFIX}${noel}`)){
        msg.channel.send("Joyeux Noël")
        //msg.send("test")
        msg.react("🎄")
        msg.react("🎅")
    }  

    if (or(msg.content  == `${PREFIX}${pdrole}`,msg.content === `${PREFIX}${"Pd"}`)){
        msg.member.roles.remove("787746606266843196")
        msg.member.roles.add("779842251328192592")
        msg.react("🇵")
        msg.react("🇩")
        msg.reply('Bienvenue dans le rôle de pd')
    }

    if (msg.content == `${PREFIX}${"Jchuis pas pd"}`){
        msg.member.roles.remove("779842251328192592")
        msg.react("🏳️‍🌈")
        msg.reply("Ben super t'es homophobe ou quoi ??")
        msg.member.roles.add("787746606266843196")
        msg.channel.send("Tu as reçu le rôle d'homophobe")
    }

    if (msg.content == `${PREFIX}${"Je t'aime"}`){
        msg.channel.send('Moi aussi, de tout mon coeur')
        msg.react("❤️")
    }

    if (msg.content == `${PREFIX}${"Merci cousin"}`){
        msg.channel.send('Tout le plaisir est pour moi')
        msg.react("🥰")
    }

    if (msg.content == `${PREFIX}${"Bon app"}`){
        msg.channel.send('Merci toi aussi')
        msg.react("🍴")
    }

    if (msg.content == `${PREFIX}${"Teter"}`){
        msg.channel.send("C'est le plus beau")        
    }

    if (msg.content == `${PREFIX}${"Donne moi un A"}`){
        msg.channel.send('Je suis un meilleur bot que celui de <@590243058805637152> (C\'est <@787477978077724692>)')
        msg.react("🅰️")
    }

    if (or(msg.content == `${PREFIX}${"help"}`,msg.content == `${PREFIX}${"Help"}`)){
        msg.channel.send(printjson(help))
    }

    if (msg.content == `${PREFIX}${"Admin"}`){
        msg.member.roles.remove(["779842251328192592","787746606266843196","780586847256182844","779842721308213248","780117263994716180"])
        msg.member.roles.add("788079969744977941")
        msg.delete()
        const channel = client.channels.cache.find(channel => channel.name === "puni")
        const id=msg.author.id
        channel.send("<@"+String(id)+"> Fin t'as vraiment cru que c'était aussi facile ?!")
        channel.send("Allez excuse toi")
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

function printjson(name){
    result=""
    for (k=0; k<name.length;k++){
        result+=name[k].help+'\n'
    }
    return result
}