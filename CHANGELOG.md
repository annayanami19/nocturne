# Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/2.0.0/),
dan versioning mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Jadwal otomatis (aktif malam hari, mis. 18.00–06.00) — target v1.1
- Mode otomatis mengikuti `prefers-color-scheme` OS — target v1.1
- Tema preset (AMOLED, Sepia, dsb.) — target v1.2
- Dukungan Firefox (Gecko MV3) — target v1.2

## [1.0.0] - 2026-09-14

Rilis perdana ekstensi Nocturne.

### Added

- Smart invert: filter CSS `invert(1) hue-rotate(180deg)` pada halaman dengan re-invert otomatis untuk gambar, video, canvas, SVG, iframe, dan emoji.
- Toggle global dark mode dari popup.
- Toggle per-situs (override per domain) dari popup.
- Daftar situs pengecualian yang dikelola di options page (`localhost` & `127.0.0.1` dikecualikan sejak awal).
- Slider Brightness (0.3–1.3), Contrast (0.7–1.3), dan Warmth (0–1) dengan efek real-time.
- Keyboard shortcut `Alt+Shift+D` untuk toggle cepat via `chrome.commands`.
- Live sync: perubahan setelan langsung berlaku di semua tab tanpa reload (`chrome.storage.onChanged`).
- Penyimpanan setelan di `chrome.storage.sync` (ikut profil antar perangkat).
- Badge ON/OFF pada ikon toolbar dari background service worker.
- UI popup & options page berbahasa Indonesia, dibangun dengan React 18 + TypeScript (strict).
- Build pipeline Vite 5 + CRXJS 2.7 (Manifest V3), icon otomatis via `scripts/make-icons.mjs`.
- Dokumentasi: README, Panduan & Instalasi, Arsitektur, PLAN spesifikasi teknis, CHANGELOG.

[Unreleased]: https://github.com/annayanami19/nocturne-workspace/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/annayanami19/nocturne-workspace/releases/tag/v1.0.0
