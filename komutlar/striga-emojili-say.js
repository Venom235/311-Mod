const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["800447499768430613"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "800447074352496641"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:royal_say0:800625606081511424>`,
'1': `<a:royal_say1:800625593473040465>`,
'2': `<a:royal_say2:800625605627871282>`,
'3': `<a:royal_say3:800625604700667944>`,
'4': `<a:royal_say4:800625602997518392>`,                       
'5': `<a:royal_say5:800625601463582750>`,
'6': `<a:royal_say6:800625605900763136>`,
'7': `<a:royal_say7:800625600624066591>`,
'8': `<a:royal_say8:800625600535986216>`,
'9': `<a:royal_say9:800625557095841832>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:royal_say0:800625606081511424>`,
'1': `<a:royal_say1:800625593473040465>`,
'2': `<a:royal_say2:800625605627871282>`,
'3': `<a:royal_say3:800625604700667944>`,
'4': `<a:royal_say4:800625602997518392>`,                       
'5': `<a:royal_say5:800625601463582750>`,
'6': `<a:royal_say6:800625605900763136>`,
'7': `<a:royal_say7:800625600624066591>`,
'8': `<a:royal_say8:800625600535986216>`,
'9': `<a:royal_say9:800625557095841832>`}[d];})}

var taglılar = 0;
let tag = "³¹¹";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:royal_say0:800625606081511424>`,
'1': `<a:royal_say1:800625593473040465>`,
'2': `<a:royal_say2:800625605627871282>`,
'3': `<a:royal_say3:800625604700667944>`,
'4': `<a:royal_say4:800625602997518392>`,                       
'5': `<a:royal_say5:800625601463582750>`,
'6': `<a:royal_say6:800625605900763136>`,
'7': `<a:royal_say7:800625600624066591>`,
'8': `<a:royal_say8:800625600535986216>`,
'9': `<a:royal_say9:800625557095841832>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:royal_say0:800625606081511424>`,
'1': `<a:royal_say1:800625593473040465>`,
'2': `<a:royal_say2:800625605627871282>`,
'3': `<a:royal_say3:800625604700667944>`,
'4': `<a:royal_say4:800625602997518392>`,                       
'5': `<a:royal_say5:800625601463582750>`,
'6': `<a:royal_say6:800625605900763136>`,
'7': `<a:royal_say7:800625600624066591>`,
'8': `<a:royal_say8:800625600535986216>`,
'9': `<a:royal_say9:800625557095841832>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("800646750129225729").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:royal_say0:800625606081511424>`,
'1': `<a:royal_say1:800625593473040465>`,
'2': `<a:royal_say2:800625605627871282>`,
'3': `<a:royal_say3:800625604700667944>`,
'4': `<a:royal_say4:800625602997518392>`,                       
'5': `<a:royal_say5:800625601463582750>`,
'6': `<a:royal_say6:800625605900763136>`,
'7': `<a:royal_say7:800625600624066591>`,
'8': `<a:royal_say8:800625600535986216>`,
'9': `<a:royal_say9:800625557095841832>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}