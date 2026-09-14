# Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/2.0.0/),
dan versioning mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Jadwal otomatis (aktif malam hari, mis. 18.00–06.00) — target v1.4
- Tema preset (AMOLED, Sepia, dsb.) — target v1.4
- Dukungan Firefox (Gecko MV3) — target v1.4

## [1.3.0] - 2026-09-14

### Added

- **Logo bulan beranimasi** di popup & halaman pengaturan: bulan mengambang naik-turun sambil bergoyang, berputar penuh, dan berpendar cahaya yang berdenyut — ditemani tiga bintang kecil yang berkelip bergantian. Murni hiasan; tidak mengubah cara kerja ekstensi. Animasi otomatis dimatikan bila sistem kamu diatur untuk mengurangi gerakan.
- **Mode gelap per-situs yang benar-benar mandiri.** Tombol **"Situs Ini"** di popup kini bisa menyalakan mode gelap untuk **satu situs saja** tanpa mengubah situs lain — termasuk saat tombol global sedang nonaktif. Popup juga menampilkan petunjuk saat mode global nonaktif, dan memberi tahu bila situs tersebut diblokir oleh daftar situs.
- **Pintasan `Alt+Shift+S`** kini menjelaskan alasannya bila situs sedang diblokir daftar, bukan gagal tanpa pesan.

### Fixed

- Pesan pada tombol cepat daftar situs tidak lagi menyebut "perlu muat ulang halaman" — perubahan berlaku seketika.
- Klik notifikasi "situs diblokir daftar" tidak lagi membuka halaman proyek.

## [1.2.0] - 2026-09-14

### Added

- **Notifikasi aksi (toast)** di popup & halaman pengaturan: setiap aksi kini memberi umpan balik **berhasil**, **gagal/error**, atau **informasi** — toggle global & per-situs, slider kecerahan/kontras/kehangatan, tombol cepat whitelist, tambah/hapus situs, Mode Otomatis, Cek Pembaruan Otomatis, reset ke default, cek pembaruan manual, serta backup/restore. Notifikasi hilang sendiri setelah 4 detik dan bisa ditutup manual. Bila penyimpanan setelan gagal, muncul pesan error yang jelas (sebelumnya kegagalan senyap).
- **Undo (Batalkan) di notifikasi**: tombol "Batalkan" di dalam notifikasi mengembalikan perubahan terakhir — hapus/tambah situs, reset ke default, seluruh toggle, dan toggle per-situs di popup.
- **Mode daftar: Kecualikan / Hanya izinkan**: pilihan baru di pengaturan. "Kecualikan" (default) = mode gelap aktif di semua situs kecuali yang terdaftar; "Hanya izinkan" = mode gelap hanya di situs yang terdaftar. Label tombol di popup dan judul daftar ikut menyesuaikan.
- **Pencarian daftar domain** di pengaturan (muncul bila daftar lebih dari 5 situs) lengkap dengan penghitung jumlah.
- **Pintasan baru `Alt+Shift+S`** — aktif/nonaktifkan mode gelap hanya untuk situs yang sedang dibuka, tanpa mengubah daftar pengguna.
- **Perbaikan gambar latar**: foto latar (background-image) kini tampil berwarna normal, tidak lagi terlihat negatif saat mode gelap aktif. Bisa dimatikan lewat toggle "Perbaiki gambar latar" di pengaturan bila ada situs yang tampil aneh.

### Changed

- Backup/restore mengenali dua kunci setelan baru (`filterMode`, `reinvertBackgrounds`) saat memulihkan file JSON.

## [1.1.0] - 2026-09-14

### Added

- Cek pembaruan otomatis: `chrome.alarms` sekali sehari + cek saat instalasi/startup service worker; bila versi baru tersedia, muncul notifikasi "Pembaruan tersedia" yang membuka halaman proyek saat diklik (maks. sekali per versi, via `chrome.storage.local`). Options page mendapat toggle "Cek pembaruan otomatis" dan tombol "Cek Pembaruan Sekarang" dengan hasil inline.
- Mode otomatis: dark mode mengikuti tema sistem (`prefers-color-scheme`); selagi aktif, toggle manual di popup dikunci dengan teks status "Mengikuti tema sistem (gelap/terang)".
- Backup & restore pengaturan: ekspor seluruh setelan ke file JSON (folder & nama file dipilih sendiri lewat `showSaveFilePicker`, fallback unduhan otomatis) dan pulihkan kembali dengan validasi minimal; options page juga menampilkan ringkasan setelan saat ini.
- Tombol cepat whitelist situs di popup: mendeteksi domain tab aktif lalu menampilkan "🚫 Kecualikan Situs Ini" atau "↩️ Batalkan Whitelist Situs Ini" (varian warna berbeda) sesuai status daftar pengecualian. Klik menambah/menghapus domain dari `excludedSites` (domain ternormalisasi, anti-duplikat) dan menampilkan toast di dalam popup — bukan `chrome.notifications` — yang hilang otomatis setelah 4 detik. Label tombol reaktif terhadap perubahan storage dari luar (mis. saat domain dihapus lewat options page).

### Changed

- **Default instalasi baru kini OFF**: toggle global `enabled` berubah dari `true` menjadi `false`; `chrome.runtime.onInstalled` menulis default ke storage hanya bila storage masih kosong, jadi setelan lama tidak pernah ditimpa.
- Permissions baru di manifest: `alarms`, `notifications`, dan host permission `https://raw.githubusercontent.com/*` (sumber versi terbaru).

[Unreleased]: https://github.com/annayanami19/nocturne-workspace/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/annayanami19/nocturne-workspace/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/annayanami19/nocturne-workspace/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/annayanami19/nocturne-workspace/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/annayanami19/nocturne-workspace/releases/tag/v1.0.0
