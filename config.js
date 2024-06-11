/**
 * Base Ori By Siputzx Production 
 * Created On 22/2/2024
 * Contact Me on https://siputzx.github.io
 * Supported By Gpt Assistant 
*/

const fs = require("fs")

global.owner = ["6289630567696"]

//watermark 
global.packname = 'Di Buat Oleh'
global.author = 'Miku -MD'
global.foter1 = 'Simpel Bot Case'
global.foter2 = 'Created By Vallxyz'
global.foter3 = 'Vallxyz'
global.foter4 = 'Vallxyz'
global.idcennel = '120363230204107751@newsletter'
global.thumb = 'https://telegra.ph/file/c78394112c198d4b946b0.jpg'

global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
