let fs = require('fs')
global.DeveloperMode = 'false' //true atau false, true berati iya false berati tidak Moga paham
global.linkGC = ['https://chat.whatsapp.com/IHJ737KyRSgBmV29e04vSl','https://chat.whatsapp.com/L66oWM1CsQEBxXxlb9KyZo','https://chat.whatsapp.com/Btd2lfgUOcYEMt96fozGxU'] // link gc lu
global.channelYT = ['https://youtube.com/channel/UCIzklEsl8mjhm3R-fTniucA'] // link yt lu klo g ad g ush di isi
global.owner = ['6282172166700', '6285783747027'] // masuk in no lu sebagai owner
global.mods = ['6282172166700', '6285783747027'] // masuk in no moderator ny
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // ini buat premium
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikey lu di sini
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker Watermark
global.packname = 'FaIlBotz'
global.author = 'WAGYU'

global.multiplier = 36 // ini butuh berapa xp buat levelup 

global.botwm = ['© FAil'] // watermark bot
global.oname = ['WAGYU'] // nama owner nya

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
