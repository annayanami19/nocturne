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

1. **Extract** dulu file `Nocturne-v1.0.0.zip` ke sebuah folder
2. Ikuti langkah yang sama seperti Cara 1, pilih folder hasil extract

---

## Panduan Penggunaan

### 🌙 Toggle Dark Mode
Klik ikon Nocturne di toolbar → nyalakan/matikan tombol utama. Halaman aktif langsung berubah tanpa reload.

> 📸 *[Placeholder screenshot popup]*

### 🌐 Toggle Per-Situs
Di popup ada tombol khusus untuk situs yang sedang dibuka. Matikan untuk satu situs saja tanpa mematikan mode global.

### 🎚️ Slider Tampilan
Geser **Brightness**, **Contrast**, atau **Warmth** — perubahan langsung terlihat di semua tab terbuka (live sync).

- **Brightness**: 0.3 – 1.3 (default 1.0)
- **Contrast**: 0.7 – 1.3 (default 0.9)
- **Warmth**: 0 – 1 (default 0)

### ⌨️ Keyboard Shortcut
Tekan `Alt+Shift+D` di halaman mana pun untuk toggle cepat. Bisa diganti di `chrome://extensions/shortcuts`.

### 🚫 Situs Pengecualian
Klik tombol **Pengaturan** di popup → options page → tambahkan/hapus domain dari daftar pengecualian. Domain di daftar itu tidak akan pernah digelapkan meskipun mode global aktif.

> ℹ️ Domain `localhost` dan `127.0.0.1` sudah dikecualikan sejak awal agar tidak mengganggu development lokal.

### ☁️ Penyimpanan Setelan
Semua setelan tersimpan otomatis di profil browser dan tetap bertahan setelah browser ditutup.

