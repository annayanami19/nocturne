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

1. **Extract** dulu file `Nocturne-v1.2.0.zip` ke sebuah folder
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

- **Backup Pengaturan**: simpan seluruh setelan ke file JSON — **kamu memilih sendiri folder dan nama filenya** (saran nama: `nocturne-backup-v1.2.0.json`). Cocok untuk memindahkan setelan ke komputer lain atau sekadar jaga-jaga.
- **Pulihkan Backup**: pilih file JSON hasil backup → setelan langsung ditulis kembali. File yang bukan backup Nocturne tidak akan merusak setelan.

### 🌐 Toggle Per-Situs
Di popup ada tombol khusus untuk situs yang sedang dibuka. Matikan untuk satu situs saja tanpa mematikan mode global.

### 🚫 Tombol Cepat Whitelist Situs Ini *(baru v1.1)*
Di popup, tepat di bawah toggle per-situs, ada tombol pintar yang mengenali situs yang sedang dibuka dan bekerja dua arah. Labelnya menyesuaikan **Cara kerja daftar situs** yang kamu pilih:

**Pada mode Kecualikan** (default):
- **Situs belum dikecualikan** → tombol tampil **"🚫 Kecualikan Situs Ini"**. Klik untuk memasukkan domain ke daftar pengecualian.
- **Situs sudah dikecualikan** → tombol berubah jadi **"↩️ Batalkan Whitelist Situs Ini"**. Klik untuk mengeluarkan domain dari daftar.

**Pada mode Hanya izinkan:**
- **Situs belum terdaftar** → tombol tampil **"✅ Izinkan Mode Gelap di Situs Ini"**.
- **Situs sudah terdaftar** → tombol berubah jadi **"↩️ Hapus dari Daftar Izinkan"**.

Setiap klik memunculkan notifikasi yang menghilang sendiri setelah ±4 detik. Muat ulang halaman bila perubahan belum terlihat pada halaman yang sedang terbuka.

> ℹ️ Bedanya dengan toggle per-situs: toggle per-situs hanya menimpa status sementara untuk satu situs, sedangkan tombol ini mengelola **daftar permanen** yang sama dengan di halaman pengaturan — tanpa perlu mengetik domain manual.

### 🔔 Notifikasi Aksi & Undo *(baru v1.2)*
Setiap aksi di popup maupun halaman pengaturan kini memberi umpan balik berupa **notifikasi kecil di bawah layar**:

- ✅ **Berhasil** — mis. "Mode gelap global diaktifkan." atau "example.com ditambahkan ke daftar."
- ⚠️ **Gagal/error** — mis. domain tidak valid, atau setelan gagal disimpan.
- ℹ️ **Informasi** — mis. saat backup dibatalkan.

Notifikasi hilang sendiri setelah **±4 detik**, dan bisa ditutup manual lewat tombol **✕**.

**Tombol "Batalkan"** muncul pada aksi yang mengubah data — menghapus/menambah situs, reset ke default, atau mengganti toggle. Salah klik? Tekan **Batalkan** pada notifikasi untuk mengembalikan kondisi sebelumnya.

> 💡 Aksi berulang (mis. menggeser slider) tidak menumpuk notifikasi — pesan yang sama cukup diperbarui.

### 🗂️ Mode Daftar: Kecualikan / Hanya Izinkan *(baru v1.2)*
Di pengaturan → bagian **Perilaku** → **Cara kerja daftar situs**. Ada dua pilihan:

- **Kecualikan** *(default)* — mode gelap aktif di **semua situs**, kecuali situs yang ada di daftar.
- **Hanya izinkan** — mode gelap aktif **hanya di situs yang ada di daftar**; situs lain dibiarkan normal.

Isi daftarnya sama di kedua mode — yang berubah hanya cara Nocturne memperlakukannya. Judul dan penjelasan di halaman pengaturan, label tombol cepat di popup, serta status per-situs semuanya menyesuaikan mode yang aktif.

> 💡 Mode **Hanya izinkan** cocok kalau kamu hanya ingin menggelapkan beberapa situs favorit, bukan seluruh web.

### 🔍 Mencari Situs di Daftar *(baru v1.2)*
Bila daftar situsmu sudah lebih dari 5 entri, kotak **"Cari domain…"** muncul di atas daftar. Ketik sebagian nama domain untuk menyaring, dan penghitung **"N dari M"** menunjukkan berapa yang cocok.

### 🖼️ Perbaikan Gambar Latar *(baru v1.2)*
Sebelumnya, foto yang dipasang sebagai latar (background-image) ikut terbalik warnanya sehingga tampak seperti film negatif. Sejak v1.2, gambar latar dikembalikan ke warna aslinya secara otomatis.

- Ada di pengaturan → bagian **Perilaku** → **Perbaiki gambar latar** (default: aktif).
- Elemen yang punya gambar latar tampil seperti aslinya (tidak ikut digelapkan) — ini disengaja agar foto dan teks di atasnya tetap terbaca.
- **Matikan** toggle ini bila ada situs yang jadi tampak terang atau aneh.

### 🎚️ Slider Tampilan
Geser **Brightness**, **Contrast**, atau **Warmth** — perubahan langsung terlihat di semua tab terbuka (live sync).

- **Brightness**: 0.3 – 1.3 (default 1.0)
- **Contrast**: 0.7 – 1.3 (default 0.9)
- **Warmth**: 0 – 1 (default 0)

### ⌨️ Keyboard Shortcut
Dua pintasan siap pakai (bisa diganti di `chrome://extensions/shortcuts`):

- **`Alt+Shift+D`** — toggle mode gelap **global** (semua situs).
- **`Alt+Shift+S`** *(baru v1.2)* — toggle mode gelap **hanya untuk situs yang sedang dibuka**, tanpa mengubah daftar situsmu.

> 💡 `Alt+Shift+S` praktis saat menemukan satu situs yang tampil kurang nyaman — cukup satu tombol, situs itu saja yang berubah. Tekan lagi untuk mengembalikannya.

### 🚫 Situs Pengecualian
Klik tombol **Pengaturan** di popup → tambahkan/hapus domain dari daftar. Arti daftar tergantung mode yang dipilih (lihat [Mode Daftar](#️-mode-daftar-kecualikan--hanya-izinkan-baru-v12)):

- Mode **Kecualikan** — domain di daftar tidak akan pernah digelapkan meskipun mode global aktif.
- Mode **Hanya izinkan** — hanya domain di daftar yang digelapkan.

> ℹ️ Domain `localhost` dan `127.0.0.1` sudah ada di daftar sejak awal agar tidak mengganggu development lokal. Pada mode "Hanya izinkan", keduanya otomatis termasuk situs yang diizinkan — keluarkan dari daftar bila tidak diinginkan.

### ☁️ Penyimpanan Setelan
Semua setelan tersimpan otomatis di profil browser, ikut tersinkron antar perangkat yang login akun sama, dan tetap bertahan setelah browser ditutup.
