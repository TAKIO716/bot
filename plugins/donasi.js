let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Tri:* [089616061778]
┣➥ *Dana:* [089616061778]
┣➥ *Saweria:* [https://saweria.co/SquatEditz]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289616061778*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
