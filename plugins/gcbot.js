let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
https://chat.whatsapp.com/IHJ737KyRSgBmV29e04vSl
*GROUP 2*
https://chat.whatsapp.com/L66oWM1CsQEBxXxlb9KyZo
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
