/**
 * Base Ori By Siputzx Production 
 * Created On 22/2/2024
 * Contact Me on https://siputzx.github.io
 * Supported By Gpt Assistant 
*/

require("./config.js")
const fs = require("fs")
const axios = require("axios")
const { exec, spawn, execSync } = require("child_process")
const fetch = require("node-fetch")

const { 
getGroupAdmins,
jsonformat, 
generateProfilePicture,
getBuffer
} = require("./lib/myfunc")

module.exports = async (ptz, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (ptz.user.id.split(':')[0]+'@s.whatsapp.net' || ptz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await ptz.decodeJid(ptz.user.id)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const qmsg = (quoted.m || quoted)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;

const groupMetadata = m.isGroup ? await ptz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

if (isCmd) console.log("~> [CMD]", command, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');

const getShortenedUrl = async (url) => {
let { data } = await axios.post("https://shorturl.ptz.fund", { url });
return data.data.shortUrl;
};


switch (command) {
case "menu":{
const tek = `ʜᴀʟᴏ @${m.sender.split('@')[0]}\nɪɴɪ ᴀᴅᴀʟᴀʜ ʙᴀꜱᴇ ꜱᴄʀɪᴘᴛ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ

> _*Owner Menu*_
┌ ◦ ${prefix}leave
│ ◦ ${prefix}join
│ ◦ ${prefix}block
│ ◦ ${prefix}unblock
│ ◦ ${prefix}setppbot
│ ◦ $
│ ◦ =>
└ ◦ >

> _*Sticker Menu*_
┌ ◦ ${prefix}sticker
└ ◦ ${prefix}smeme

> _*Tools Menu*_
┌ ◦ ${prefix}remini
└ ◦ ${prefix}get

> _*Ai Menu*_
┌ ◦ ${prefix}ai
│ ◦ ${prefix}gemini
│ ◦ ${prefix}gemini-img
└ ◦ ${prefix}naw

> _*Downloader Menu*_
┌ ◦ ${prefix}tiktok
│ ◦ ${prefix}ytmp3
│ ◦ ${prefix}ytmp4
└ ◦ ${prefix}igdl

> _*Search Menu*_
┌ ◦ ${prefix}play
└ ◦ ${prefix}meme

> _*Voice Menu*_
┌ ◦ ${prefix}bass
│ ◦ ${prefix}blown
│ ◦ ${prefix}deep
│ ◦ ${prefix}earrape
│ ◦ ${prefix}fast
│ ◦ ${prefix}fat
│ ◦ ${prefix}nightcore
│ ◦ ${prefix}reverse
│ ◦ ${prefix}robot
│ ◦ ${prefix}slow
│ ◦ ${prefix}smooth
│ ◦ ${prefix}tupai
└ ◦ ${prefix}smooth

> _*Group Menu*_
┌ ◦ ${prefix}kick
│ ◦ ${prefix}add
│ ◦ ${prefix}promote
│ ◦ ${prefix}demote
│ ◦ ${prefix}setsubject
│ ◦ ${prefix}setdesk
│ ◦ ${prefix}setppgc
│ ◦ ${prefix}tagall
│ ◦ ${prefix}hidetag
└ ◦ ${prefix}totag

> _*Photooxy Menu*_
┌ ◦ ${prefix}sweet-candy
│ ◦ ${prefix}illuminated-metallic
│ ◦ ${prefix}carved-wood
│ ◦ ${prefix}night-sky
│ ◦ ${prefix}butterfly
│ ◦ ${prefix}coffee-cup
│ ◦ ${prefix}picture-of-love
│ ◦ ${prefix}flower-typography
│ ◦ ${prefix}harry-potter
│ ◦ ${prefix}under-grass
│ ◦ ${prefix}metallic
│ ◦ ${prefix}naruto
│ ◦ ${prefix}pubg
│ ◦ ${prefix}shadow-sky
└ ◦ ${prefix}flaming
`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
jpegThumbnail: { url: global.thumb },
fileName: global.author,
fileLength: 99999999999999,
pageCount: "100",
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
caption: tek,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
mediaUrl: '',
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: global.thumb,
thumbnailUrl: global.thumb,
title: global.foter1,
body: global.foter2,
},
forwardingScore: 10,
isForwarded: true,
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: botNumber
},
forwardedNewsletterMessageInfo: {
newsletterJid: global.idcennel,
serverMessageId: null,
newsletterName: global.foter3
}
}
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break;
//=================================================//
case "meme":{
let {data} = await require('axios').get("https://lahelu.ptz.fund/random-foto", { responseType: 'arraybuffer' })
ptz.sendMessage(m.chat, { image: data, mimetype: 'image/jpeg' })
}
break;
//=================================================//
case 'tiktok':{
if (!text) return m.reply(`Example: ${prefix + command} https://vm.tiktok.com/ZSFQvFKbJ/`)
m.reply(mess.wait)
try {
const {data} = await axios.get("https://downloader.ptz.fund/api/tiktok?url="+text)
const filteredUrls = data.data.medias.filter(media => media.extension === 'mp3' || media.quality === 'hd').map(media => media.url); 
ptz.sendMessage(m.chat, { caption: data.data.title, video: { url: filteredUrls[0] }, mimetype: 'video/mp4', fileName: `${data.data.title}.mp4`})
ptz.sendMessage(m.chat, { audio: { url: filteredUrls[1] }, mimetype: 'audio/mpeg', fileName: `${data.data.title}.mp3` })
} catch (e) {
m.reply("maaf eror mungkin bukan url video tiktok")
}
}
break;
//=================================================//
case 'igdl':{
if (!text) return m.reply(`Example: ${prefix + command} https://www.instagram.com/reel/C4_fLdhSbr8/?igsh=MWt6cGFoaDcyaDB3cg==`)
m.reply(mess.wait)
const {data} = await axios.get("https://downloader.ptz.fund/api/instagram?url="+text)
ptz.sendFile(m.chat, data.media[0], 'file', mess.success, m)
}
break;
//=================================================//
case 'ytmp4':{
if (!text) return m.reply(`Example: ${prefix + command} link`)
m.reply(mess.wait)
let {data} = await axios.get("https://ytdl-core-pro.vercel.app/?input="+text)
let anunya = "*Title:* "+data.title
anunya += "\n*Views:* "+data.views
anunya += "\n*Channel:* "+data.channel
ptz.sendFile(m.chat, data.mp4.url, 'file', anunya, m)
}
break;
//=================================================//
case 'smeme': {
let respond = `Kirim/m.reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m.reply(respond)
if (!text) return m.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break;
//=================================================//
case 'play':
case 'ytmp3':{
if (!text) return m.reply(`Example: ${prefix + command} link/teks`)
m.reply(mess.wait)
let {data} = await axios.get("https://ytdl-core-pro.vercel.app/?input="+text)
let anunya = "*Title:* "+data.title
anunya += "\n*Views:* "+data.views
anunya += "\n*Channel:* "+data.channel
await ptz.sendMessage(m.chat, {
audio: {url: data.mp3.url},
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: {
externalAdReply: {
title: data.title,
body: data.mp3.size,
thumbnail: await getBuffer(data.thumb),
mediaType: 2,
mediaUrl: "",
}
},
}, {
quoted: m
})
}
break;
//=================================================//
case 'setppbot': case 'setbotpp': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await ptz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await ptz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await ptz.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
break;
//=================================================//
case 'join': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Contoh ${prefix+command} linkgc`)
if (!args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ptz.groupAcceptInvite(result).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'block': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.updateBlockStatus(users, 'block').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ptz.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'setname':
case 'setsubject': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
if (!text) return 'Text ?'
await ptz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'setdesc':
case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
if (!text) return 'Text ?'
await ptz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;
//=================================================//
case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var mediz = await ptz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await ptz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
m.reply(mess.success)
} else {
var memeg = await ptz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(mess.success)
}
}
break;
//=================================================//
case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
let teks = `*👥 Tag All By Admin*
 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
ptz.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})

}
break;
//=================================================//
case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) m.reply(mess.admin)
if (!isBotAdmins) m.reply(mess.botAdmin)
ptz.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break;
//=================================================//
case 'totag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) m.reply(mess.botAdmin)
if (!isAdmins) m.reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
ptz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break;
//=================================================//
case "sweet-candy":
case "illuminated-metallic":
case "carved-wood":
case "night-sky":
case "butterfly":
case "coffee-cup":
case "picture-of-love":
case "flower-typography":
case "harry-potter":
case "under-grass":
case "metallic":
case "naruto":
case "shadow-sky":
case "flaming":{
if (!text) return m.reply(`Ex : ${prefix + command} Siputzx`)
ptz.sendMessage(m.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "gemini-img":
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply("hanya support gambar");
if (!text) return m.reply("mau nanya apa sama gambar itu?")
try {
let bufferData = await quoted.download();
let base64Data = bufferData.toString('base64');
let { data } = await axios.post('https://gemini.ptz.fund/api/img', {
prompt: text,
base64Data: base64Data
});
m.reply(data.text);
} catch (e) { 
m.reply(e);
}
break;
//=================================================//
case "gemini":{
if (!text) return m.reply("mau nanya apa sama gemini")
let { data } = await axios.get("https://gemini.ptz.fund/api/ask?text=" + text)
m.reply(data.text)
}
break
//=================================================//
case "naw":{
if (!text) return m.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gemini.ptz.fund/api/naw?text=" + text)
m.reply(data.text)
}
break;
//=================================================//
case "ai":{
if (!q) return m.reply("mau nanya apa sama ai")
const { data } = await axios.post("https://chat.bot.ai.ptz.fund/", { text: q });
m.reply(data)
}
break;
//=================================================//
case 'remini': {
if (!quoted) return m.reply(`Reply to an image with caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply("Only supports images");
let media = await quoted.download();
const remini = require('./lib/remini');
const enhancedImage = await remini(media, "enhance");
ptz.sendFile(m.chat, enhancedImage, "", mess.success, m);
}
break;
//=================================================//
case 'sticker':
case 'stiker':
case 's': {
if (!quoted) return m.reply(`Reply to Video/Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
await fs.unlinkSync(encmedia)
} else if ((m.mtype == 'videoMessage') || /video/.test(mime)) {
if ((quoted.m || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break;
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("m.reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = `${Math.floor(Math.random() * 10000)}.mp3`
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await getShortenedUrl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
m.reply(`Content-Length: ${res.headers.get('content-length')}`)
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © PutuOfc`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m.reply(txt.slice(0, 65536) + '')
}
}
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require('util').format(err));
}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
