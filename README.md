[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ItzLighting9332/nayla)

## EDIT SEMUA (NOTE : SEBELUM EDIT FORK/GARPU DULU)

* [`CHANGE CONFIG`](https://github.com/Squateditz/bot/edit/master/config.js)
* [`CHANGE LINK GC`](https://github.com/Squateditz/bot/edit/master/plugins/gcbot.js)
* [`CHANGE LINK YT`](https://github.com/Squatedutz/bot/edit/master/plugins/youtubeowner.js)

## DONATE

* [`SAWERIA`](https://saweria.co/Squateditz)

## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Squateditz/bot
cd bot
npm install
npm update
Npm start
```

---------

## UNTUK PENGGUNA TERMUX

* untuk pengguna termux hapus semua file yang menggunakan canvas

```bash
git clone https://github.com/Squateditz/bot
cd bot
npm install
npm update
Npm start
```

---------

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git

---------

## Arguments `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```
