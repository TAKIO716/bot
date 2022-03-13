let handler = async function (m) {
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": 'persia juliet,',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Clara Cans\nitem1.TEL;waid='6287870514390':'087870514390'\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: m })
        test.reply('Tuh Pacar Ku Jangan Di Spam Kak >_< ku ban nanggis')
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
