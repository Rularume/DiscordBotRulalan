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
joueur1=""
joueur2=""

client.on('ready', () => {
  console.log(`Go for launch`)
})



client.on('message',msg => {
    
    if (or(msg.content == `${PREFIX}${"Citation"}`,msg.content == `${PREFIX}${"citation"}`)){
        n=Math.floor(Math.random() * (citation.length))-1
        msg.channel.send("```"+citation[n].citation+'\n\n'+citation[n].auteur+"```")
    } 
    
    if (or(msg.content == `${PREFIX}${Noel}`,msg.content == `${PREFIX}${noel}`)){
        msg.channel.send("Joyeux Noël")
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

    if (or(msg.content == `${PREFIX}${"Jchuis pas pd"}`,msg.content == `${PREFIX}${"jchuis pas pd"}`)){
        msg.member.roles.remove("779842251328192592")
        msg.react("🏳️‍🌈")
        msg.reply("Ben super t'es homophobe ou quoi ??")
        msg.member.roles.add("787746606266843196")
        msg.channel.send("Tu as reçu le rôle d'homophobe")
    }

    if (or(msg.content == `${PREFIX}${"Je t'aime"}`,msg.content == `${PREFIX}${"je t'aime"}`)){
        msg.channel.send('Moi aussi, de tout mon coeur')
        msg.react("❤️")
    }

    if (msg.content.startsWith(`${PREFIX}${"Je t'aime"}`)){
        x=msg.content.slice(`${PREFIX}${"Je t'aime"}`.length)
        id=x.split("<@")
        Source=msg.author.id
        Destinataire=id[1].slice(1,18+1)
        msg.channel.send("<@"+Destinataire+">, sais tu que <@"+Source+"> t\'aime de tout son coeur ?")
        msg.react("❤️")
                
    }

    if (or(msg.content == `${PREFIX}${"Merci cousin"}`,msg.content == `${PREFIX}${"merci cousin"}`)){
        msg.channel.send('Tout le plaisir est pour moi')
        msg.react("🥰")
    }

    if (or(msg.content == `${PREFIX}${"Bon app"}`,msg.content == `${PREFIX}${"bon app"}`)){
        msg.channel.send('Merci toi aussi')
        msg.react("🍴")
    }

    if (or(msg.content == `${PREFIX}${"Teter"}`,msg.content == `${PREFIX}${"teter"}`)){
        msg.channel.send("C'est le plus beau")        
    }

    if (or(msg.content == `${PREFIX}${"Sacoche"}`,msg.content == `${PREFIX}${"sacoche"}`)){
        msg.channel.send("🎵 Le dernier des dinosaures 🎵")    
    }
    
    if (or(msg.content == `${PREFIX}${"Donne moi un A"}`,msg.content == `${PREFIX}${"donne moi un a"}`)){
        msg.channel.send('Je suis un meilleur bot que celui de <@590243058805637152> (C\'est <@787477978077724692>)')
        msg.react("🅰️")
    }

    if (or(msg.content == `${PREFIX}${"help"}`,msg.content == `${PREFIX}${"Help"}`)){
        msg.channel.send(printjson(help))
    }

    if (or(msg.content == `${PREFIX}${"Axel"}`,msg.content == `${PREFIX}${"axel"}`)){
        msg.channel.send("Tu veux dire HAAAAAAAAAAAAAAAAAXL ?") 
        msg.react("🇭")    
        msg.react("🇦")   
        msg.react("🇽")      
        msg.react("🇱")   
    }

    if (or(msg.content == `${PREFIX}${"Admin"}`,msg.content == `${PREFIX}${"admin"}`)){
        msg.member.roles.remove(["779842251328192592","787746606266843196","780586847256182844","779842721308213248","780117263994716180"])
        msg.member.roles.add("788079969744977941")
        msg.delete()
        const channel = client.channels.cache.find(channel => channel.name === "puni")
        const id=msg.author.id
        channel.send("<@"+String(id)+"> Fin t'as vraiment cru que c'était aussi facile ?!")
        channel.send("Allez excuse toi, fais moi un bisou")
        
    }
    if (and(msg.content.startsWith('<@'),msg.content.endsWith('787431460914724905>'))){
        msg.channel.send(printjson(help))
    }

    if (msg.content.startsWith(`${PREFIX}${"morpion"}`)){
        x=msg.content.slice(`${PREFIX}${"morpion"}`.length)
        if (x!=""){
            id=x.split("<@")
            if (id.length==2){
                //msg.channel.send("cas avec 1 nom")
                joueur1=msg.author.id
                joueur2=id[1].slice(1,18+1)
                //msg.channel.send("Joueur 1= <@"+joueur1+">\nJoueur 2= <@"+joueur2+">")
                morpion(msg,joueur1,joueur2)
                
            
            
            }
            else if (id.length==3){
                joueur1=id[1].slice(1,18+1)
                joueur2=id[2].slice(1,18+1)
                //msg.channel.send("Joueur 1= <@"+joueur1+">, Joueur 2= <@"+joueur2+">")
                morpion(msg,joueur1,joueur2)
                
            }
            else{
                msg.channel.send("Mauvais arguments, ressaye avec !morpion @Adversaire")
            }
        }
        else{
            msg.channel.send("Pas d'arguments, ressaye avec !morpion @Adversaire")
        }        
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

function initmorpion (){
    flagj1=false
    return [["none","none","none"],["none","none","none"],["none","none","none"]]
    return ["<:un:788892016070230066><:deux:788897267531907102><:trois:788897547090395137>","🔳🔳🔳","🔳🔳🔳","🔳🔳🔳"]
}

function printmropion(list){
    result=""
    for(let k=0;k<list.length;k++){
        temp=""
        for (let i=0;i<list[0].length;i++){
            if (list[k][i]=="none"){
                temp+="🔳"
            }
            else if (list[k][i]=="x"){
                temp+="❌"
            }
        }
        result+=temp+"\n"
    }
    return result
}

const filterj1 = (reaction,user) => {
    return reaction.emoji.name === 'un' && user.id === joueur1
}

const filterj2 = (reaction,user) => {
	return reaction.emoji.name === 'un' && user.id === joueur2
}
function morpion(msg,j1,j2) {
    grid=initmorpion()
    msg.channel.send(printmropion(grid)).then(sent => {
        sent.react("<:un:788892016070230066>")
        sent.react("<:deux:788897267531907102>")
        sent.react("<:trois:788897547090395137>")
        sent.awaitReactions(filterj1, { max: 1}).then(collected =>{
            flagj1=true
            if (flagj1){
                grid[0][0]="x"
                msg.channel.send(printmropion(grid))
                sent.delete()
                morpion(msg,j1,j2)
            }
            //console.log(collected.size)
        })

        //sent.awaitReactions(filterj2, { max: 1}).then(collected =>{
        //console.log(collected.size)})
        
    })
    

}


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