const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_NICKNAMES"))
return message.channel.send(
`:x: Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
);
let member = message.mentions.members.first();
let isim = args.slice(1).join(" ");
let yas = args.slice(1).join(" ");
if (!member) return message.channel.send(":x: Bir Üye Etiketle!**");
if (!isim) return message.channel.send(":x:**Bir İsim ve Yaş Yaz!**");
member.setNickname(`♦ ${isim}`);
member.removeRole('744878131743293532')
member.addRole('744876974006075393')
const embed = new Discord.RichEmbed()


.addField(`müdür Kayıt Sistemi`,
`\nKayıt Edilen Kullanıcı: ${member.user} \nKayıt Eden Yetkili: \`${message.author.username}\``)
client.channels.get('744879442169561161').send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['k'],
permLevel: 0
};
exports.help = {
name: "kayıt",
description: "𝓑𝓸𝓽 𝓓𝓮𝓼𝓽𝓮𝓴 𝓼𝓾𝓷𝓾𝓬𝓾𝓼𝓾 Kayıt Sistemi",
usage: "𝓑𝓸𝓽 𝓓𝓮𝓼𝓽𝓮𝓴 𝓼𝓾𝓷𝓾𝓬𝓾𝓼𝓾 Kayıt"
};