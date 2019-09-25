const Discord = require('discord.js');
const client = new Discord.Client();
console.log("HARDY");
var prefix = "/";
client.on("message", message => {

            if (message.content.startsWith(prefix + "la")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : ONE SHOT CLAN`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ONE SHOT CLAN ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`/bc |ONE SHOT |CLAN`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(process.env.NjI2NTY2NzkzMDM2NTYyNDYy.XYv92g.KSbXkvl7YuCS0PzC6bgo_C3suQk);
