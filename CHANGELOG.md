# Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/2.0.0/),
dan versioning mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Jadwal otomatis (aktif malam hari, mis. 18.00–06.00) — target v1.2
- Tema preset (AMOLED, Sepia, dsb.) — target v1.2
- Dukungan Firefox (Gecko MV3) — target v1.2

## [1.1.0] - 2026-09-14

### Added

- Cek pembaruan otomatis: `chrome.alarms` sekali sehari + cek saat instalasi/startup service worker; bila versi baru tersedia, muncul notifikasi "Pembaruan tersedia" yang membuka halaman proyek saat diklik (maks. sekali per versi, via `chrome.storage.local`). Options page mendapat toggle "Cek pembaruan otomatis" dan tombol "Cek Pembaruan Sekarang" dengan hasil inline.
- Mode otomatis: dark mode mengikuti tema sistem (`prefers-color-scheme`); selagi aktif, toggle manual di popup dikunci dengan teks status "Mengikuti tema sistem (gelap/terang)".
- Backup & restore pengaturan: ekspor seluruh setelan ke file JSON (folder & nama file dipilih sendiri lewat `showSaveFilePicker`, fallback unduhan otomatis) dan pulihkan kembali dengan validasi minimal; options page juga menampilkan ringkasan setelan saat ini.
- Tombol cepat whitelist situs di popup: mendeteksi domain tab aktif lalu menampilkan "🚫 Kecualikan Situs Ini" atau "↩️ Batalkan Whitelist Situs Ini" (varian warna berbeda) sesuai status daftar pengecualian. Klik menambah/menghapus domain dari `excludedSites` (domain ternormalisasi, anti-duplikat) dan menampilkan toast di dalam popup — bukan `chrome.notifications` — yang hilang otomatis setelah 4 detik. Label tombol reaktif terhadap perubahan storage dari luar (mis. saat domain dihapus lewat options page).

### Changed

- **Default instalasi baru kini OFF**: toggle global `enabled` berubah dari `true` menjadi `false`; `chrome.runtime.onInstalled` menulis default ke storage hanya bila storage masih kosong, jadi setelan lama tidak pernah ditimpa.
- Permissions baru di manifest: `alarms`, `notifications`, dan host permission `https://raw.githubusercontent.com/*` (sumber versi terbaru).

[Unreleased]: https://github.com/annayanami19/nocturne-workspace/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/annayanami19/nocturne-workspace/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/annayanami19/nocturne-workspace/releases/tag/v1.0.0
