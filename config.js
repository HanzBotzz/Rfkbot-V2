// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau'
gc2 = 'https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN'
gc3 = 'https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn'
global.linkGC = ['https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau', ''] // ganti jadi group lu
global.owner = ['6285779150501','6289512630591'] // Put your number here //owner eval
global.kontak = ['6289612698583','6289512630591'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285779150501','6289505165400','089512630591'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'mursid.st'
namagithub = 'Botwa021'
kasihcaption = `Instagram.com/mursid.st`
namakontak1 = 'Hanz 𝙱𝙾𝚃'
namakontak2 = 'Hanz'

//kasihcaption = `Instagram.com/rangga_botz.st`

// Sticker WM
global.packname = 'Rangga_Official' // ganti aja
global.author = 'Hanz' // ganti aja

//yyy
bc = 'мυяѕι∂' //мυяѕι∂ Broadcast
footer = `\n© _*HanzBot*_`
namabot = `WhatsApp Bot`
namalu = 'RanggaGanteng'


// 
wait = '_*Loading...*_'
global.wait = '_*Loading...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error kak*_'

global.image = "https://telegra.ph/file/31701c03ffd465963a2cf.jpg"

// Ubah saja SC dari MursidXzy
global.image = 'https://telegra.ph/file/31701c03ffd465963a2cf.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
