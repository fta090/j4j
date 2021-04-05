//TrSherlock | CrackTurkey.com
//TrSherlock | CrackTurkey.com
const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;""
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();
//TrSherlock | CrackTurkey.com
client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});
//TrSherlock | CrackTurkey.com
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
            await msg.channel.send("https://discord.gg/uZGw2NdDSV")   
          await sleep(1500)
          await msg.channel.send("Gel hemen") //  
      }
      }
    }
  }
})


client.on("guildCreate", devilhouse => {
  sleep(3000);
  if (
    devilhouse.id=== "j4j sunucusunun idsi" || // j4j sunucusunun idsi
    devilhouse.id=== "j4j sunucusunun idsi" || // j4j sunucusunun idsi
    devilhouse.id=== "j4j sunucusunun idsi" || // j4j sunucusunun idsi   
    devilhouse.id=== "j4j sunucusunun idsi" || // j4j sunucusunun idsi
    devilhouse.id=== "j4j sunucusunun idsi" || // j4j sunucusunun idsi
    devilhouse.id=== "j4j sunucusunun idsi"// j4j sunucusunun idsi
  ) {
    
  } else {
    devilhouse.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("j4j kanal id") //j4j kanal id


       a.send("**J4J DM NO BOT**") //j4j kanala yazılacak yazı


      }, 30000); //kanala yazılacak yazının kaç saniye aralığıyla yazılacak kısmı 1000 milisaniye 1 saniyedir
})

client.on("ready", () => {
  setInterval(() => {
   let a = client.channels.get("j4j kanal id") //j4j kanal id


   a.send("**j4j dm no bot**") //j4j kanala yazılacak yazı


  }, 6000); //kanala yazılacak yazının kaç saniye aralığıyla yazılacak kısmı 1000 milisaniye 1 saniyedir
})



client.on("ready", () => {
  setInterval(() => {
   let a = client.channels.get("j4j kanal id") //j4j kanal id


   a.send("**j4j dm no bot**") //j4j kanala yazılacak yazı


  }, 30000); //kanala yazılacak yazının kaç saniye aralığıyla yazılacak kısmı 1000 milisaniye 1 saniyedir
})

client.on("ready", () => {
  setInterval(() => {
   let a = client.channels.get("j4j kanal id") //j4j kanal id


   a.send("**j4j dm no bot**") //j4j kanala yazılacak yazı


  }, 60000); //kanala yazılacak yazının kaç saniye aralığıyla yazılacak kısmı 1000 milisaniye 1 saniyedir
})

client.on("ready", () => {
  setInterval(() => {
   let a = client.channels.get("j4j kanal id") //j4j kanal id


   a.send("**j4j dm no bot**") //j4j kanala yazılacak yazı


  }, 30000); //kanala yazılacak yazının kaç saniye aralığıyla yazılacak kısmı 1000 milisaniye 1 saniyedir
})





client.login("KASACAĞINIZ HESABIN TOKENİ") // user tokeniniz