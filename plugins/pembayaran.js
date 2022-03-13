let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *PULSA*: 089616061778
║│➸ *DANA*: 089616061778
║│➸ *saweria*:https://saweria.co/SquatEditz
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY NATHAN*_
║ _*RECODING BY SQUATEDITZ*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥PEMBAYARAN🔥*', 'status@broadcast')
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^pembayaran$/i

module.exports = handler
 
