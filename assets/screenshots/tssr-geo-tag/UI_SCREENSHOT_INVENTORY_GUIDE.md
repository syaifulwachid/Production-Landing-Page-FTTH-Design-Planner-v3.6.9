# 📸 TSSR Geo TAG Capture v3.0 — UI Form & Screenshot Knowledge Base

> **Dokumentasi Terstruktur Antarmuka Pengguna (UI), Tab Menu, Sub-Menu, Kartu (Card), dan Aset Visual**  
> *Dirancang khusus sebagai panduan komprehensif, referensi pemasaran produk, serta basis pengetahuan (Knowledge Catalog) untuk AI Agent, Developer, dan Technical Writer.*

---

## 📌 1. Informasi Umum & Arsitektur Perangkat Lunak

* **Nama Produk**: TSSR Geo TAG Capture
* **Versi**: 3.0 (C# / .NET 9 WPF Windows Native Edition)
* **Kategori**: Screen Capture, Geo-Tagging, Multi-Monitor Virtual Survey Documentation Tool
* **Target Pengguna**: Telecom Site Survey Engineer (TSSR), FTTH Fiber Optic Designer, GIS Surveyor, Google Street View Auditor, Project Documentation Specialist.
* **Fitur Inti**:
  1. *Arsitektur 2-Layer Master Canvas Full HD (1080p)* berbasis SkiaSharp rendering.
  2. *Circular Loupe Magnifier 4x–12x (ShareX Style)* dengan reticle crosshair presisi piksel.
  3. *Sequential Bulk Paste Clipboard Manager* untuk penempelan foto beruntun (Ctrl+V) tanpa merusak teks clipboard.
  4. *Pin Screenshot to Screen* (Jendela gambar melayang / topmost).
  5. *Multi-Monitor Snipping* dengan mode geser instan [Ctrl] dan penggantian rasio aspek dinamis (1–5).

---

## 🗂️ 2. Struktur Hierarki Folder & Inventaris File Screenshot

```text
D:\SWD SOFT DEVELOPER\Product Marketing\assets\screenshots\tssr-geo-tag\
├── 📁 01_Settings_Window\
│   ├── 🖼️ 00_Settings_Window_Overview.png
│   ├── 📁 01_Umum\
│   │   └── 🖼️ 01_Umum_Full_Tab.png
│   ├── 📁 02_Shortcut_Monitor\
│   │   └── 🖼️ 02_Shortcut_Monitor_Full_Tab.png
│   ├── 📁 03_Watermark\
│   │   └── 🖼️ 03_Watermark_Full_Tab.png
│   ├── 📁 04_Geocoding_Map\
│   │   └── 🖼️ 04_Geocoding_Map_Full_Tab.png
│   └── 📁 05_Timestamp\
│       └── 🖼️ 05_Timestamp_Full_Tab.png
│
├── 📁 02_Bulk_Paste_Floating_Window\
│   ├── 🖼️ 01_BulkPaste_Floating_Empty_State.png
│   ├── 🖼️ 02_BulkPaste_Floating_Populated_Histori.png
│   ├── 🖼️ 03_BulkPaste_Floating_Active_Paste_Mode.png
│   └── 🖼️ 10_Overlay_Snipping_PassThrough.png
│
├── 📁 03_Help_Window\
│   ├── 🖼️ 00_Help_Window_Overview.png
│   ├── 📁 01_Mulai_Cepat\
│   │   └── 🖼️ 01_Mulai_Cepat_Full_Tab.png
│   ├── 📁 02_Tombol_Pintas\
│   │   └── 🖼️ 02_Tombol_Pintas_Full_Tab.png
│   ├── 📁 03_Fitur_Unggulan\
│   │   └── 🖼️ 03_Fitur_Unggulan_Full_Tab.png
│   └── 📁 04_Format_Koordinat\
│       └── 🖼️ 04_Format_Koordinat_Full_Tab.png
│
├── 📁 04_Developer_Profile_Window\
│   └── 🖼️ 01_Developer_Profile_Overview.png
│
├── 📁 05_About_Window\
│   └── 🖼️ 01_About_Window_Overview.png
│
├── 📁 06_Pinned_Screenshot_Window\
│   └── 🖼️ 01_Pinned_Screenshot_Window_Overview.png
│
├── 📁 07_Region_Selector_Overlay\
│   └── 🖼️ 01_RegionSelector_Full_Snipping_Screen.png
│
├── 📁 08_System_Tray_Menu\
│   ├── 🖼️ 01_System_Tray_Context_Menu_Full.png
│   ├── 🖼️ 02_Notification_Toast_GPS_Detected.png
│   └── 🖼️ 03_Notification_Toast_Capture_Success.png
│
└── 📁 09_Watermark_Card_Compositor\
    ├── 🖼️ 01_Watermark_Overlay_Sample_Standard_TSSR.png
    └── 🖼️ 02_Watermark_Overlay_Sample_Portrait_9_16.png
```

---

## 🔍 3. Katalog Detail Tiap Form, Tab, Sub-Menu, dan Kartu UI

---

### 📂 KATEGORI 01: JENDELA PENGATURAN (`01_Settings_Window`)

#### 🖼️ `00_Settings_Window_Overview.png`
* **Nama Form**: Jendela Utama Pengaturan (`SettingsWindow.xaml`)
* **Fungsi Visual**: Tampilan keseluruhan dialog konfigurasi saat pertama kali dibuka.
* **Komponen Global**:
  * **Header Bar**:
    * Judul: `⚙️ Pengaturan TSSR Geo TAG Capture`
    * Subjudul: `Konfigurasi preferensi multi-monitor, watermark GPS, hotkey capture, dan API Geocoding`
    * Tombol Akses Cepat: `📖 Panduan`, `ℹ️ Tentang`, `👨‍💻 Profil Dev`
  * **Footer Action Bar**:
    * Label Versi: `TSSR Geo TAG Capture v3.0 • C# .NET 9`
    * Tombol `Batal` (Menutup jendela tanpa menyimpan)
    * Tombol `💾 Simpan Pengaturan` (Menyimpan seluruh konfigurasi ke `config.json` dan memperbarui state aktif runtime)

---

#### 🖼️ `01_Umum/01_Umum_Full_Tab.png`
* **Nama Tab**: Tab 1 — 📁 Umum
* **Fungsi**: Mengatur direktori penyimpanan output file dan perilaku otomatisasi sistem clipboard.
* **Isi & Kartu (Cards)**:
  1. **Kartu Folder Penyimpanan Output**:
     * Input Path (`TxtOutputFolder`): Menentukan lokasi penyimpanan file PNG hasil screenshot (default: folder `output`).
     * Tombol `📂 Telusuri...` (`BtnBrowseFolder`): Membuka dialog FolderBrowserDialog Windows untuk memilih direktori.
  2. **Kartu Opsi Otomatisasi & Clipboard**:
     * CheckBox `ChkAutoSave`: Menyimpan otomatis file screenshot ber-watermark ke disk.
     * CheckBox `ChkSaveClipboard`: Menyalin gambar ber-watermark langsung ke clipboard Windows pada mode capture reguler.
     * CheckBox `ChkMonitorClipboard`: Mendengarkan perubahan clipboard Windows untuk otomatis mem-parsing koordinat GPS saat disalin (Ctrl+C) dari browser/Google Maps.
     * CheckBox `ChkSequentialCoords`: Mengaktifkan parsing sequential koordinat (menangkap Latitude lalu Longitude secara terpisah dalam jeda waktu 5 detik).

---

#### 🖼️ `02_Shortcut_Monitor/02_Shortcut_Monitor_Full_Tab.png`
* **Nama Tab**: Tab 2 — ⌨️ Shortcut & Monitor
* **Fungsi**: Mengatur tombol pintas global (hotkey), rasio aspek tangkapan layar, dan preferensi kaca pembesar multi-monitor.
* **Isi & Kartu (Cards)**:
  1. **Kartu Tombol Pintas Global (Capture Hotkey)**:
     * Tombol Interaktif Hotkey Recorder (`BtnRecordHotkey`): Menampilkan status hotkey aktif (default: `ALT + 1`). Saat diklik, tombol masuk ke mode perekaman mendengarkan tombol keyboard baru apa pun (misal: F9, PrtSc, Ctrl+Shift+C).
     * Tombol `Default (Alt+1)` (`BtnResetDefaultHotkey`): Mengembalikan hotkey ke kombinasi standar `Alt+1`.
  2. **Kartu Rasio Aspek Layar Android**:
     * ComboBox Rasio (`CmbAspectRatio`): Memilih rasio aspek pengunci kotak seleksi (`TSSR Standard 549:707`, `9:16 Android`, `9:18`, `9:19.5`, `9:20`, `Freeform (Bebas)`, `Custom`).
     * Tombol `📐 Ambil Sampel dari Layar...` (`BtnSampleCustomRatio`): Membuka overlay seleksi interaktif untuk mengukur rasio layar perangkat Android/emulator secara langsung.
  3. **Kartu Fitur Snipping Cerdas & Multi-Monitor**:
     * CheckBox `ChkShowMagnifier`: Mengaktifkan Circular Loupe Magnifier 4x saat menggambar seleksi.
     * Kotak Panduan: Menjelaskan penekanan tombol `[Ctrl]` untuk menggeser kotak (Pan) dan tombol angka `1–5` untuk ganti rasio instan.

---

#### 🖼️ `03_Watermark/03_Watermark_Full_Tab.png`
* **Nama Tab**: Tab 3 — 🏷️ Watermark
* **Fungsi**: Menyesuaikan layout, posisi, transparansi, dimensi, dan komponen kartu informasi survey yang di-overlay di atas foto.
* **Isi & Kartu (Cards)**:
  1. **Kartu Aktivasi Overlay**:
     * CheckBox `ChkWatermarkEnabled`: Toggle utama untuk menyalakan/mematikan render watermark SkiaSharp.
  2. **Kartu Posisi Jangkar & Transparansi**:
     * ComboBox Anchor (`CmbWatermarkPos`): `bottom-center`, `bottom-left`, `bottom-right`, `top-left`, `top-right`.
     * Slider Opacity (`SldOpacity`): Mengatur transparansi kartu overlay (40% s/d 100%, default 90%).
  3. **Kartu Penyesuaian Posisi Presisi (Offset)**:
     * Slider Geser Vertikal Y (`SldOffsetY`): Mengatur posisi naik/turun watermark (default 49px).
     * Slider Geser Horizontal X (`SldOffsetX`): Mengatur pergeseran kiri/kanan.
  4. **Kartu Dimensi Kartu Watermark**:
     * Slider Lebar Kartu % (`SldWidthPercent`): Mengatur panjang horizontal kartu (60% s/d 100%, default 87%).
     * Slider Ketebalan Vertikal (`SldPaddingY`): Mengatur padding atas/bawah kartu alamat (default 25px).
  5. **Kartu Komponen Informasi**:
     * CheckBox `ChkShowAddress`: Menampilkan teks alamat lengkap hasil reverse geocoding.
     * CheckBox `ChkShowCoords`: Menampilkan koordinat desimal dan format derajat menit detik (DMS).
     * CheckBox `ChkShowTimestamp`: Menampilkan tanggal dan waktu survey (WIB).
     * CheckBox `ChkShowMap`: Menampilkan thumbnail peta mini OpenStreetMap dengan titik pin merah.
     * CheckBox `ChkShowQrCode`: Menampilkan QR Code yang mengarah ke tautan Google Maps.

---

#### 🖼️ `04_Geocoding_Map/04_Geocoding_Map_Full_Tab.png`
* **Nama Tab**: Tab 4 — 🗺️ Geocoding & Map
* **Fungsi**: Mengonfigurasi engine reverse-geocoding (penerjemah koordinat GPS menjadi nama jalan dan alamat administratif).
* **Isi & Kartu (Cards)**:
  1. **Kartu Provider Geocoding Utama**:
     * RadioButton `RbGoogleMaps`: Menggunakan Google Maps Geocoding API resmi (akurasi tinggi, respons kilat).
     * RadioButton `RbNominatim`: Menggunakan OpenStreetMap Nominatim (gratis & open-source).
  2. **Kartu API Key & Failover**:
     * TextBox API Key (`TxtGoogleApiKey`): Kolom input Google Maps Geocoding API Key milik pengguna.
     * CheckBox `ChkFallbackEnabled`: Otomatis beralih (failover) ke Nominatim jika Google Maps API mengalami error limit/koneksi.
  3. **Kartu Uji Koneksi**:
     * Tombol `🧪 Uji Koneksi Geocoding` (`BtnTestApi`): Melakukan request test langsung ke API.
     * Label Hasil (`TxtApiTestResult`): Menampilkan status koneksi, latensi, dan cuplikan alamat yang diterima.

---

#### 🖼️ `05_Timestamp/05_Timestamp_Full_Tab.png`
* **Nama Tab**: Tab 5 — ⏰ Timestamp
* **Fungsi**: Mengatur penentuan stempel tanggal & waktu pada watermark hasil capture.
* **Isi & Kartu (Cards)**:
  1. **Kartu Mode Penentuan Waktu**:
     * RadioButton `RbTimeCurrent`: Menggunakan jam sistem komputer saat capture diambil secara real-time.
     * RadioButton `RbTimeAuto`: Menambahkan waktu secara otomatis setiap kali capture diambil (simulasi pergerakan rute survey lapangan).
  2. **Kartu Interval Kenaikan Waktu**:
     * TextBox Interval (`TxtTimeIncrement`): Menit penambahan otomatis per foto (default: 5 menit).
     * Info Hint Box: Panduan cara kerja auto-increment untuk pembuatan laporan survey virtual beruntun.

---

### 📂 KATEGORI 02: CAPTURE MODE & HISTORI MELAYANG (`02_Bulk_Paste_Floating_Window`)

#### 🖼️ `01_BulkPaste_Floating_Empty_State.png`
* **Nama Form**: Jendela Floating Bulk Paste — Kondisi Kosong (`BulkPasteFloatingWindow.xaml`)
* **Fungsi**: Tampilan awal jendela floating melayang (Topmost) sebelum ada capture yang diambil.
* **Isi & Kartu**:
  * **Header Card**: Judul `📋 Capture & Bulk Paste`, Badge `0 Foto`, Subjudul panduan, dan tombol tutup `✕`.
  * **Active GPS Status Bar**: Menampilkan status koordinat GPS aktif yang baru saja disalin dari Google Maps.
  * **Action Controls Toolbar**: Tombol `📸 Ambil Capture (Alt+1)`, `🚀 Mulai Bulk Paste`, `📋 Salin Alamat`, `🧹 Bersihkan`, `🔄 Reset`, `📜 Log`.
  * **Empty State Placeholder**: Ilustrasi ikon kamera dan instruksi: *"Salin koordinat di Google Maps (Ctrl+C) lalu tekan Alt+1 untuk mengambil capture."*
  * **Footer Status Bar**: Indikator titik cyan dan teks status antrean.

---

#### 🖼️ `02_BulkPaste_Floating_Populated_Histori.png`
* **Nama Form**: Jendela Floating Bulk Paste — Kondisi Terisi Histori Foto
* **Fungsi**: Menampilkan daftar kartu foto survey yang telah dikumpulkan dalam satu sesi kerja.
* **Isi & Kartu per Item (Item Card Elements)**:
  * **Thumbnail Visual**: Preview foto ukuran 56x56 px dengan sudut melengkung.
  * **Badge Nomor & Koordinat**: Badge urutan `#1`, `#2`, `#3` dan teks desimal latitude/longitude berwarna cyan.
  * **Inline Editable Address Box**: Kotak teks alamat yang dapat diedit langsung oleh pengguna jika ingin menambahkan penamaan tiang / ODP (misal: *"ODP-KND-045/012 Tiang FiberHome"*).
  * **Tombol Aksi per Item**:
    * `🖼️`: Salin gambar foto ini secara manual ke clipboard.
    * `📝`: Salin teks alamat foto ini saja ke clipboard.
    * `🗑️`: Hapus foto ini dari antrean sesi.

---

#### 🖼️ `03_BulkPaste_Floating_Active_Paste_Mode.png`
* **Nama Form**: Jendela Floating Bulk Paste — Mode Bulk Paste Sedang Aktif
* **Fungsi**: Kondisi saat tombol `🚀 Mulai Bulk Paste` diklik.
* **Perubahan Visual**:
  * Tombol berubah warna merah: `⏹️ Selesai / Jeda Paste`.
  * Titik status berubah warna hijau: `⚡ Mode Bulk Paste Aktif (3 foto siap dipaste)`.
  * Kartu item teratas mendapatkan highlight border biru dan badge `📌 SIAP DIPASTE`.
  * Pengguna cukup berpindah ke dokumen Microsoft Word / Excel lalu menekan `Ctrl + V` secara berurutan. Setiap penekanan `Ctrl+V` akan mem-paste gambar aktif dan otomatis memajukan antrean ke gambar berikutnya.

---

#### 🖼️ `10_Overlay_Snipping_PassThrough.png`
* **Nama Form**: Overlay Pass-Through Snipping
* **Fungsi**: Efek peredupan (dimmed) otomatis pada floating window saat pengguna sedang melakukan penarikan kotak screenshot di layar desktop, sehingga tidak mengganggu pandangan dan tidak menghalangi seleksi area.

---

### 📂 KATEGORI 03: JENDELA PANDUAN & BANTUAN (`03_Help_Window`)

#### 🖼️ `00_Help_Window_Overview.png` & `01_Mulai_Cepat/01_Mulai_Cepat_Full_Tab.png`
* **Nama Tab**: Tab 1 — 🚀 Mulai Cepat
* **Fungsi**: Panduan komparasi dua mode kerja utama aplikasi.
* **Isi & Kartu**:
  * **Card 1 (Border Biru)**: *Mode 1: Normal Standar (Single Capture)* — Untuk kebutuhan cepat capture 1 per 1 langsung tempel ke Word/WhatsApp.
  * **Card 2 (Border Amber)**: *Mode 2: Capture Mode (Bulk Paste & Histori Alamat)* — Untuk pengumpulan puluhan titik survey sekaligus tanpa merusak clipboard teks koordinat, lalu ditempel berurutan dengan penekanan Ctrl+V otomatis.

---

#### 🖼️ `02_Tombol_Pintas/02_Tombol_Pintas_Full_Tab.png`
* **Nama Tab**: Tab 2 — ⌨️ Tombol Pintas (Shortcuts)
* **Fungsi**: Matriks panduan lengkap kombinasi keyboard & mouse interaktif:
  * `Alt + 1`: Memicu overlay snipping tangkapan layar.
  * `Tahan [Ctrl] saat Drag`: Menggeser (Pan) posisi kotak seleksi ke monitor mana saja tanpa mengubah ukuran.
  * `Scroll Roda Mouse`: Mengatur perbesaran kaca pembesar Loupe (2.0x – 12.0x).
  * `Shift + Scroll Mouse`: Mengatur diameter lingkaran Loupe (100px – 220px).
  * `Tombol 1 – 5 saat Drag`: Mengunci rasio instan (1: TSSR 549:707, 2: 9:16, 3: 9:18, 4: 9:19.5, 5: 9:20).
  * `Tombol 6 / Spasi`: Mode Freeform (Bebas).
  * `Klik Kanan / ESC`: Membatalkan proses capture.

---

#### 🖼️ `03_Fitur_Unggulan/03_Fitur_Unggulan_Full_Tab.png`
* **Nama Tab**: Tab 3 — ✨ Fitur Unggulan
* **Fungsi**: Menjelaskan keunggulan teknologi native v3.0:
  * *Bulk Paste Queue & Histori Alamat Editable*.
  * *Pin to Screen (Gambar Melayang di Layar)*.
  * *Arsitektur 2-Layer Master Canvas Full HD 1080p*.
  * *Pembersihan Output On-Demand*.

---

#### 🖼️ `04_Format_Koordinat/04_Format_Koordinat_Full_Tab.png`
* **Nama Tab**: Tab 4 — 📍 Format Koordinat
* **Fungsi**: Menampilkan contoh format koordinat GPS yang didukung parser otomatis:
  1. *Format Desimal*: `-7.808547, 112.029527`
  2. *Format Degrees Minutes Seconds (DMS)*: `7°48'30.77"S 112°1'46.30"E`
  3. *Sequential Lat-Lon (Copy Terpisah)*: Salin Latitude lalu Longitude dalam 5 detik.
  4. *Tautan URL Google Maps*: `https://maps.google.com/?q=-7.808547,112.029527`

---

### 📂 KATEGORI 04: PROFIL PENGEMBANG & SAWERIA (`04_Developer_Profile_Window`)

#### 🖼️ `01_Developer_Profile_Overview.png`
* **Nama Form**: Jendela Profil Pengembang & Dukungan (`DeveloperProfileWindow.xaml`)
* **Fungsi**: Kartu portofolio pembuat software, tautan integrasi profesional, daftar karya software engineering lainnya, dan dukungan donasi.
* **Isi & Kartu**:
  1. **Kartu Developer Profile**:
     * Nama: **Syaiful Wachid**
     * Jabatan: **Senior Project Designer at Fiberhome Indonesia**
  2. **Kartu LinkedIn Profile**:
     * URL: `https://www.linkedin.com/in/syaiful-wachid-5373n/` + Tombol `📋 Salin` dan `🌐 Buka`.
  3. **Kartu Temukan Karya Saya yang Lain (5 Project Cards)**:
     * 🎥 *FTTH Design Planner v.3.6.9 Tutorial* (YouTube Playlist).
     * 🌐 *FTTH Design Planner v.3.6.9_r7 Latest Update* (LinkedIn Post).
     * 📦 *KMZ To HPDB & BOQ Converter Installer v3.2* (LinkedIn Post).
     * 🎯 *RadialMenu Setup v1.34.0 Latest Update* (LinkedIn Post).
     * 📱 *FTTH-Pro Report (Android) APK* (LinkedIn Post).
  4. **Kartu Support & Donation**:
     * Platform: **Saweria** (`https://saweria.co/swddeveloper`) + Tombol `📋 Salin` dan `☕ Dukung via Saweria`.

---

### 📂 KATEGORI 05: TENTANG APLIKASI (`05_About_Window`)

#### 🖼️ `01_About_Window_Overview.png`
* **Nama Form**: Jendela Tentang Aplikasi (`AboutWindow.xaml`)
* **Fungsi**: Informasi versi rilis, logo resmi, hak cipta software, dan tombol tautan cepat ke LinkedIn & Saweria.

---

### 📂 KATEGORI 06: PIN SCREENSHOT MELAYANG (`06_Pinned_Screenshot_Window`)

#### 🖼️ `01_Pinned_Screenshot_Window_Overview.png`
* **Nama Form**: Jendela Pin Screenshot (`PinnedScreenshotWindow.xaml`)
* **Fungsi**: Menempelkan gambar hasil capture terakhir agar tetap melayang di atas semua aplikasi desktop (Topmost) untuk referensi perbandingan survey.
* **Fitur & Interaksi**:
  * **Top Compact Toolbar**: Label indikator zoom skala (`• 100%`), tombol `📋 Salin`, `💾 Simpan Sebagai`, `✕ Tutup`.
  * **Menu Klik Kanan (Context Menu)**:
    * Pilihan Skala Ukuran: 150%, 100%, 75%, 50%.
    * Pilihan Transparansi / Opasitas: 100%, 85%, 65%, 45%.
    * Centang *Always on Top*.

---

### 📂 KATEGORI 07: OVERLAY SELEKSI AREA MULTI-MONITOR (`07_Region_Selector_Overlay`)

#### 🖼️ `01_RegionSelector_Full_Snipping_Screen.png`
* **Nama Form**: Overlay Seleksi Layar Penuh (`RegionSelectorWindow.xaml`)
* **Fungsi**: Layar semi-transparan yang membentang di seluruh monitor untuk seleksi area survey.
* **Elemen Interaktif**:
  * **HUD Badge (Heads Up Display)**: Kotak info melayang yang menampilkan dimensi piksel live (`549 × 707 px`), label rasio aktif, indikator mode geser `✋ GESER (CTRL)`, dan hint pintasan tombol.
  * **Circular Loupe Magnifier (ShareX Style)**: Kaca pembesar bulat beresolusi tinggi dengan garis crosshair reticle, titik bidik merah, ring shadow luar, dan badge faktor zoom (`5.0x`).
  * **Selection Border**: Garis batas kotak putih 1px tajam tanpa distorsi glow.

---

### 📂 KATEGORI 08: SYSTEM TRAY MENU & NOTIFIKASI (`08_System_Tray_Menu`)

#### 🖼️ `01_System_Tray_Context_Menu_Full.png`
* **Nama Elemen**: Menu Klik Kanan System Tray Taskbar
* **Daftar 11 Menu Item**:
  1. `📸 Ambil Screenshot (Alt+1)`
  2. `📌 Pin Screenshot Terakhir ke Layar`
  3. `📸 Capture Mode (Bulk Paste)...`
  4. `🔄 Reset Sesi / Antrean`
  5. `🧹 Bersihkan Folder Output`
  6. `📜 Buka File Log Debug...`
  7. *--- Pemisah ---*
  8. `⚙️ Pengaturan...`
  9. `📖 Panduan & Bantuan...`
  10. `ℹ️ Tentang...`
  11. `👨‍💻 Profil Dev & Saweria...`
  12. *--- Pemisah ---*
  13. `❌ Keluar`

#### 🖼️ `02_Notification_Toast_GPS_Detected.png`
* **Nama Elemen**: Windows Toast / Balon Notifikasi Koordinat Terdeteksi
* **Teks**: `📍 GPS Koordinat Terdeteksi` — `-7.808547, 112.029527` | `Jl. Panglima Sudirman No. 45, Kediri`.

#### 🖼️ `03_Notification_Toast_Capture_Success.png`
* **Nama Elemen**: Windows Toast / Balon Notifikasi Sukses Ambil Screenshot
* **Teks**: `📸 Screenshot Berhasil!` — `Disimpan: capture_20260830_100000.png` | `Total foto dalam sesi: 3`.

---

### 📂 KATEGORI 09: HASIL WATERMARK 2-LAYER MASTER CANVAS (`09_Watermark_Card_Compositor`)

#### 🖼️ `01_Watermark_Overlay_Sample_Standard_TSSR.png`
* **Rasio**: TSSR Standard Survey (549:707)
* **Fungsi**: Menunjukkan hasil rendering watermark SkiaSharp pada format standar survey lapangan.
* **Elemen Watermark Terpasang**:
  * Kartu transparan gelap Slate 900 (opacity 90%).
  * Peta Mini OpenStreetMap dengan titik pin merah.
  * QR Code Google Maps beresolusi tinggi.
  * Teks Alamat Multi-baris tajam anti-buram.
  * Titik peluru Cyan + Koordinat Desimal Latitude & Longitude.
  * Titik peluru Putih + Koordinat DMS.
  * Titik peluru Abu-abu + Tanggal & Waktu Survey (WIB).

#### 🖼️ `02_Watermark_Overlay_Sample_Portrait_9_16.png`
* **Rasio**: Portrait Android (9:16)
* **Fungsi**: Menunjukkan hasil komposit watermark pada tangkapan rasio layar smartphone Android modern.

---

## 🤖 4. Panduan Instruksi Penggunaan untuk AI Agent / LLM Lain

Bagi model AI atau agen otomatisasi yang membaca file ini:
1. **Navigasi Gambar**: Gunakan path relatif dari tabel di Bagian 2 untuk merujuk gambar UI yang tepat ke pengguna.
2. **Konteks Masalah**: Jika pengguna bertanya tentang alur penempelan foto beruntun di Excel/Word, rujuk ke form `02_Bulk_Paste_Floating_Window` dan panduan `01_Mulai_Cepat_Full_Tab.png`.
3. **Kustomisasi Layout**: Jika pengguna ingin mengubah letak atau lebar kartu watermark, rujuk ke `01_Settings_Window/03_Watermark/03_Watermark_Full_Tab.png`.
4. **Masalah API Key**: Jika reverse geocoding tidak menampilkan nama jalan, rujuk ke `01_Settings_Window/04_Geocoding_Map/04_Geocoding_Map_Full_Tab.png` untuk memeriksa Google Maps API Key dan fitur failover Nominatim.

---
*© 2026 TSSR Engineering Team • Created by Syaiful Wachid*