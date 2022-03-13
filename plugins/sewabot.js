let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 10k / Minggu
│• 25k / Bulan
│• 200K / tahun
│
│ > Pembayaran :
│• DANA : 089616061778
│• TRI : 089616061778
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
