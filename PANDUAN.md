# 📖 Nocturne — Panduan & Instalasi

> Panduan memasang dan memakai ekstensi Nocturne untuk pengguna.
> Folder ini adalah **paket distribusi final** — ekstensi sudah siap pakai, tidak perlu menginstal alat tambahan apa pun.

---

## Daftar Isi

- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Panduan Penggunaan](#panduan-penggunaan)

---

## Prasyarat

Cukup satu hal: browser berbasis Chromium versi **110 atau lebih baru**, misalnya:

- Google Chrome
- Microsoft Edge
- Brave

---

## Instalasi

### Cara 1 — Dari folder ini

1. Buka `chrome://extensions` di browser (atau `edge://extensions` di Edge)
2. Aktifkan **Developer mode** (kanan atas)
3. Klik **Load unpacked** → pilih **folder paket ini** (yang berisi `manifest.json`)
4. Pin ekstensi **Nocturne** ke toolbar — selesai! 🎉

### Cara 2 — Dari file ZIP

1. **Extract** dulu file `Nocturne-v1.1.0.zip` ke sebuah folder
2. Ikuti langkah yang sama seperti Cara 1, pilih folder hasil extract

---

## Panduan Penggunaan

### 🌙 Toggle Dark Mode
Klik ikon Nocturne di toolbar → nyalakan/matikan tombol utama. Halaman aktif langsung berubah tanpa reload.

> ⚠️ Sejak v1.1.0, **dark mode dalam keadaan OFF saat baru dipasang** — tidak ada situs yang terpengaruh sampai kamu menyalakannya sendiri dari popup.

> 📸 *[Placeholder screenshot popup]*

### 🤖 Mode Otomatis (ikuti tema sistem) *(baru v1.1)*
Ada di pengaturan (popup → **Pengaturan** → bagian **Perilaku**). Saat **Mode Otomatis** aktif:

- Dark mode menyala **otomatis mengikuti tema gelap/terang sistem**: sistem gelap → halaman gelap, sistem terang → halaman normal.
- Aturan per-domain tetap berlaku: situs di daftar pengecualian tetap tidak pernah digelapkan.
- Toggle manual di popup **terkunci** dan menampilkan status "Mengikuti tema sistem (gelap/terang)". Untuk kontrol manual lagi, matikan dulu Mode Otomatis.

Tidak suka otomatis? Biarkan Mode Otomatis nonaktif dan nyalakan dark mode secara manual kapan saja.

### 🔎 Cek Pembaruan *(baru v1.1)*
Nocturne memeriksa versi terbaru **otomatis sekali sehari** dan saat browser baru dinyalakan. Bila ada versi lebih baru:

- Muncul **notifikasi** "Pembaruan tersedia" — klik untuk membuka [halaman proyek](https://github.com/annayanami19/nocturne).
- Notifikasi muncul **maksimal sekali per versi** — tidak mengganggu berulang.

Tidak ingin cek otomatis? Matikan lewat toggle "Cek pembaruan otomatis" di pengaturan, atau gunakan tombol **Cek Pembaruan Sekarang** untuk memeriksa manual kapan pun.

### 📦 Backup & Restore Pengaturan *(baru v1.1)*
Ada di pengaturan → bagian **Backup & Restore** (di atasnya tampil ringkasan setelan saat ini).

- **Backup Pengaturan**: simpan seluruh setelan ke file JSON — **kamu memilih sendiri folder dan nama filenya** (saran nama: `nocturne-backup-v1.1.0.json`). Cocok untuk memindahkan setelan ke komputer lain atau sekadar jaga-jaga.
- **Pulihkan Backup**: pilih file JSON hasil backup → setelan langsung ditulis kembali. File yang bukan backup Nocturne tidak akan merusak setelan.

### 🌐 Toggle Per-Situs
Di popup ada tombol khusus untuk situs yang sedang dibuka. Matikan untuk satu situs saja tanpa mematikan mode global.

### 🚫 Tombol Cepat Whitelist Situs Ini *(baru v1.1)*
Di popup, tepat di bawah toggle per-situs, ada tombol pintar yang mengenali situs yang sedang dibuka dan bekerja dua arah:

- **Situs belum dikecualikan** → tombol tampil **"🚫 Kecualikan Situs Ini"**. Klik untuk memasukkan domain ke daftar pengecualian; muncul notifikasi: *"✅ {domain} ditambahkan ke pengecualian — perubahan diterapkan setelah halaman dimuat ulang"*.
- **Situs sudah dikecualikan** → tombol otomatis berubah jadi **"↩️ Batalkan Whitelist Situs Ini"**. Klik untuk mengeluarkan domain dari daftar; notifikasi: *"↩️ {domain} dihapus dari pengecualian — perubahan diterapkan setelah halaman dimuat ulang"*.

Notifikasi menghilang sendiri setelah ±4 detik. Muat ulang halaman bila perubahan belum terlihat pada halaman yang sedang terbuka.

> ℹ️ Bedanya dengan toggle per-situs: toggle per-situs hanya menimpa status sementara untuk satu situs, sedangkan tombol ini mengelola **daftar pengecualian permanen** yang sama dengan di halaman pengaturan — tanpa perlu mengetik domain manual.

### 🎚️ Slider Tampilan
Geser **Brightness**, **Contrast**, atau **Warmth** — perubahan langsung terlihat di semua tab terbuka (live sync).

- **Brightness**: 0.3 – 1.3 (default 1.0)
- **Contrast**: 0.7 – 1.3 (default 0.9)
- **Warmth**: 0 – 1 (default 0)

### ⌨️ Keyboard Shortcut
Tekan `Alt+Shift+D` di halaman mana pun untuk toggle cepat. Bisa diganti di `chrome://extensions/shortcuts`.

### 🚫 Situs Pengecualian
Klik tombol **Pengaturan** di popup → tambahkan/hapus domain dari daftar pengecualian. Domain di daftar itu tidak akan pernah digelapkan meskipun mode global aktif.

> ℹ️ Domain `localhost` dan `127.0.0.1` sudah dikecualikan sejak awal agar tidak mengganggu development lokal.

### ☁️ Penyimpanan Setelan
Semua setelan tersimpan otomatis di profil browser, ikut tersinkron antar perangkat yang login akun sama, dan tetap bertahan setelah browser ditutup.
