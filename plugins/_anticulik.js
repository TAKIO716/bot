let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Dana:* 6289616061778
• *Tri:* 6289616061778

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *SUBSCRIBE* https://youtube.com/channel/UCIzklEsl8mjhm3R-fTniucA

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6289616061778', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler
