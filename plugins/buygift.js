let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│ 
│ > Keterangan :
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya habis!
│
│ > Harga :
│• 10K / Minggu (7 Hari)
│• 25K / Bulan (4 Minggu)
│• 200K / tahun (Permanen)
│• 40k pertama 30k/bulan prem and jadi bot
│• 60k pertama 40k/bulan jadibot and owner
│ > Pembayaran :
│• Dana : 629616061778
│• Tri : 6289616061778
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
