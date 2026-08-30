# 📘 KMZ to HPDB & BoQ Converter System (V3.2) - UI Screenshot Catalog & Feature Guide

> **Tujuan Dokumen:**  
> Dokumen ini adalah panduan referensi terstruktur mengenai seluruh antarmuka (UI), tab, kartu formulir, kontrol interaktif, serta alur kerja aplikasi **KMZ to HPDB & BoQ Converter System V3.2 (WPF C#)**. Dokumen ini dirancang agar dapat dibaca dan dipahami oleh AI maupun pengguna untuk menyusun materi promosi, copywriting postingan LinkedIn, poster fitur, serta dokumentasi teknis.

---

## 🏢 Informasi Aplikasi & Pengembang

- **Nama Perangkat Lunak:** KMZ to HPDB & BoQ Converter System (Modern Single-Pass Generator V3.2)
- **Framework & Bahasa:** WPF (Windows Presentation Foundation), C# (.NET 9.0), ClosedXML, Native Win32 / WGS84 Geodesic Engine
- **Pengembang:** Syaiful Wachid (Senior Project Designer at Fiberhome Indonesia)
- **LinkedIn Pengembang:** [https://www.linkedin.com/in/syaiful-wachid-5373n/](https://www.linkedin.com/in/syaiful-wachid-5373n/)
- **Fungsi Utama:** Otomasi konversi berkas peta desain jaringan fiber optik (KML/KMZ Google Earth) langsung menjadi format lembar kerja database **HPDB (Homepass Database)** dan estimasi pengadaan material **BoQ (Bill of Quantity)** FTTH Cluster/Feeder standar industri telekomunikasi dalam sekali klik (*single-pass*).

---

## 🗂️ Peta Struktur Folder & Aset Screenshot

Direktori Root Aset:  
`D:\SWD SOFT DEVELOPER\Product Marketing\assets\screenshots\kmz-to-hpdb-converter\`

```text
kmz-to-hpdb-converter/
├── 📁 01_main_tabs/
│   ├── 🖼️ 01_tab1_converter_process_overview.png
│   ├── 🖼️ 02_tab2_metadata_settings_hpdb_overview.png
│   └── 🖼️ 03_tab3_about_and_support_overview.png
├── 📁 02_tab1_converter_process_cards/
│   ├── 🖼️ 01_header_title_bar.png
│   ├── 🖼️ 02_card_source_file_selection.png
│   ├── 🖼️ 03_card_conversion_mode_and_rules.png
│   ├── 🖼️ 04_card_output_folder_and_completion_options.png
│   ├── 🖼️ 05_card_progress_and_start_action.png
│   └── 🖼️ 06_card_log_report_console.png
├── 📁 03_tab2_metadata_settings_cards/
│   ├── 🖼️ 01_card_auto_sync_metadata_toolbar.png
│   ├── 🖼️ 02_card_administrative_area_location.png
│   ├── 🖼️ 03_card_cluster_address_olt_metadata.png
│   ├── 🖼️ 04_card_custom_olt_management_expander.png
│   └── 🖼️ 05_card_bottom_actions_load_save.png
├── 📁 04_tab3_about_support_cards/
│   ├── 🖼️ 01_card_developer_profile.png
│   ├── 🖼️ 02_card_support_saweria_donation.png
│   └── 🖼️ 03_footer_status_bar.png
├── 📁 05_dialogs_and_windows/
│   ├── 🖼️ 01_window_faq_help_panduan.png
│   └── 🖼️ 02_window_license_activation_qris.png
└── 📁 06_high_res_marketing_showcase/
    ├── 🖼️ 01_hero_showcase_converter_process_tab1.png
    ├── 🖼️ 02_hero_showcase_metadata_settings_tab2.png
    ├── 🖼️ 03_hero_showcase_about_support_tab3.png
    ├── 🖼️ 04_hero_showcase_license_activation.png
    └── 🖼️ 05_hero_showcase_help_faq.png
```

---

## 📑 Rincian Detail Setiap Gambar & Fungsi UI

---

### KELOMPOK 1: TAB UTAMA (MAIN TABS OVERVIEW)

#### 1. `01_main_tabs/01_tab1_converter_process_overview.png`
- **Kategori:** Tampilan Layar Penuh (Overview)
- **Nama Tab:** `Converter Process`
- **Tujuan & Kegunaan:** Menampilkan antarmuka operasional utama yang digunakan pengguna setiap hari untuk mengeksekusi konversi data KML/KMZ menjadi BoQ & HPDB Excel.
- **Elemen yang Terlihat:**
  - Header aplikasi dengan tema *Modern Dark Slate* (`#0F172A`).
  - Input path file sumber (`MLG001044 Validator_Valid_CL 1 FDT.kmz`).
  - Dropdown Mode `CLUSTER` & Checkbox proteksi `Force Allow >16 HPs per FAT`.
  - Input path folder tujuan ekspor beserta opsi otomasi pasca-konversi.
  - Progress bar dengan status penyelesaian 100%.
  - Console log real-time dengan sintaks teks berwarna (*color-coded telemetry*).
- **Materi Copywriting LinkedIn:** *“Single-Pass FTTH Converter: Ubah desain KML/KMZ menjadi BoQ & HPDB Excel otomatis dalam hitungan detik tanpa ribet formula manual.”*

---

#### 2. `01_main_tabs/02_tab2_metadata_settings_hpdb_overview.png`
- **Kategori:** Tampilan Layar Penuh (Overview)
- **Nama Tab:** `Metadata Settings (HPDB)`
- **Tujuan & Kegunaan:** Mengatur data identitas administratif wilayah, penamaan klaster jaringan, serta data perangkat transmisi/OLT yang akan otomatis diinjeksikan ke dalam baris-baris HPDB.
- **Elemen yang Terlihat:**
  - Bar status sinkronisasi otomatis (`Auto-Sync Metadata from KMZ`).
  - Indikator status berwarna hijau (`🟢`) untuk setiap data yang berhasil tersinkronisasi.
  - Form isian: Province, Regency, District, Subdistrict, Postal Code, Cluster Name, Commercial Name, RW, Street, OLT Code, dan OLT Hostname.
  - Expander untuk penambahan OLT kustom.
  - Tombol aksi `Load Defaults` dan `Save Settings`.
- **Materi Copywriting LinkedIn:** *“Smart Metadata Injection: Sinkronisasi otomatis informasi wilayah & OLT dari berkas KMZ langsung ke struktur baku HPDB tanpa typo.”*

---

#### 3. `01_main_tabs/03_tab3_about_and_support_overview.png`
- **Kategori:** Tampilan Layar Penuh (Overview)
- **Nama Tab:** `About & Support`
- **Tujuan & Kegunaan:** Menampilkan profil profesional pengembang aplikasi serta kanal donasi/dukungan komunitas untuk pengembangan fitur berkelanjutan.
- **Elemen yang Terlihat:**
  - Kartu Profil Pengembang (*Senior Project Designer Fiberhome Indonesia*).
  - Tautan profil LinkedIn pengembang.
  - Kartu Donasi Saweria untuk mendukung pengembangan aplikasi.
  - Footer status bar versi aplikasi.
- **Materi Copywriting LinkedIn:** *“Developed by Industry Practitioner: Dirancang langsung oleh Senior Project Designer Fiberhome untuk menjawab kendala nyata di lapangan.”*

---

### KELOMPOK 2: KARTU & KOMPONEN TAB 1 (CONVERTER PROCESS)

#### 4. `02_tab1_converter_process_cards/01_header_title_bar.png`
- **Nama Komponen:** Header Title Bar & Quick Controls
- **Fungsi:**
  - Menampilkan branding resmi software `BOQ & HPDB CONVERTER SYSTEM` dan penanda versi `Modern Single-Pass Generator V3.2`.
  - Checkbox `Always on Top`: Memastikan jendela aplikasi selalu berada di lapisan paling depan di layar komputer pengguna saat membuka Google Earth atau Excel.
  - Tombol `❓ FAQ & Help`: Membuka jendela panduan teknis dan FAQ interaktif.

---

#### 5. `02_tab1_converter_process_cards/02_card_source_file_selection.png`
- **Nama Komponen:** Kartu Pemilihan Berkas Sumber (Source File Selection Card)
- **Fungsi:**
  - Input field `txtSourcePath`: Menampilkan path absolut file `.kml` atau `.kmz` yang dipilih.
  - Tombol `Browse`: Membuka dialog pemilih file dengan filter otomatis untuk berkas KML/KMZ hasil export Google Earth atau software survey lapangan.
  - Fitur Pintar: Begitu file dipilih, sistem akan otomatis mengisi folder output secara default ke lokasi folder file sumber tersebut dan memicu pembacaan metadata otomatis.

---

#### 6. `02_tab1_converter_process_cards/03_card_conversion_mode_and_rules.png`
- **Nama Komponen:** Kartu Mode Konversi & Aturan Teknis (Conversion Mode & Rules Card)
- **Fungsi:**
  - Dropdown `Conversion Mode`:
    - `CLUSTER`: Digunakan untuk area distribusi perumahan/pelanggan yang memiliki tiang, FAT, FDT, dan Homepass. Menghasilkan 2 output: `2.BOQ_CLUSTER.xlsx` dan `2.HPDB_FINAL.xlsx`.
    - `FEEDER`: Digunakan untuk segmen kabel rute utama/feeder tanpa homepass. Menghasilkan `2.BOQ_FEEDER.xlsx`.
  - Checkbox `Force Allow >16 HPs per FAT`: Opsi pengaman aturan teknik. Standar arsitektur FTTH membatasi maksimal 16 Homepass per FAT. Jika dicentang, sistem mengizinkan penulisan data lebih dari 16 Homepass untuk keperluan investigasi khusus.

---

#### 7. `02_tab1_converter_process_cards/04_card_output_folder_and_completion_options.png`
- **Nama Komponen:** Kartu Pengaturan Output & Otomasi Lanjutan
- **Fungsi:**
  - Input `txtOutputPath` & Tombol `Browse`: Menentukan lokasi penyimpanan file Excel hasil generate.
  - Checkbox `Open Output File(s) After Conversion`: Otomatis membuka file Excel begitu proses selesai.
  - Checkbox `Open Output Folder After Conversion`: Otomatis membuka Windows Explorer pada folder tujuan.
  - Checkbox `Auto-Fetch FAT Addresses from Internet (Free OpenStreetMap API)`: Fitur integrasi API cerdas yang melakukan reverse-geocoding koordinat Latitude/Longitude tiap FAT untuk mendapatkan nama jalan dan kelurahan resmi secara otomatis tanpa biaya API key.

---

#### 8. `02_tab1_converter_process_cards/05_card_progress_and_start_action.png`
- **Nama Komponen:** Panel Progress Bar & Tombol Eksekusi Utama
- **Fungsi:**
  - `ProgressBar`: Menampilkan persentase eksekusi secara visual dengan animasi halus (*smooth transition*).
  - `txtProgressStatus`: Label dinamis yang mengabarkan tahapan aktif (misal: *Parsing KML*, *Calculating Pole Distances*, *Generating Excel Sheets*, *Completed 100%*).
  - Tombol `START PROCESS`: Tombol aksi primer dengan warna ungu aksen (`#A78BFA`) untuk mengeksekusi konversi secara multi-threaded dan non-blocking (UI tidak hang).

---

#### 9. `02_tab1_converter_process_cards/06_card_log_report_console.png`
- **Nama Komponen:** Real-time Telemetry & Log Report Console
- **Fungsi:**
  - Kotak terminal berbasis `RichTextBox` dengan tema gelap modern (`#090D16`) dan font `Consolas`.
  - Menampilkan timestamp real-time untuk setiap kejadian.
  - Penandaan warna kategori log:
    - **Cyan (`[INFO]`):** Pembacaan placemark, mode, dan koordinat.
    - **Hijau (`[SUCCESS]`):** Berhasil membuat file Excel, penulisan sheet, dan reverse geocoding.
    - **Kuning (`[WARNING]`):** Peringatan tiang melebihi jarak batas (*check pole*).
    - **Merah (`[ERROR]`):** Indikasi file corrupt atau sheet terkunci.

---

### KELOMPOK 3: KARTU & SEKSI TAB 2 (METADATA SETTINGS HPDB)

#### 10. `03_tab2_metadata_settings_cards/01_card_auto_sync_metadata_toolbar.png`
- **Nama Komponen:** Toolbar Auto-Sync Metadata
- **Fungsi:**
  - Checkbox `Auto-Sync Metadata from KMZ`: Mengaktifkan fitur ekstraksi otomatis struktur penamaan folder KMZ menjadi komponen metadata wilayah.
  - Tombol `Sync/Retrieve Now`: Memaksa sistem membaca ulang dan menyegarkan parameter form metadata.
  - Status Text `txtSyncStatus`: Memberikan kepastian visual apakah data form sudah sesuai dengan berkas KMZ yang dimuat.

---

#### 11. `03_tab2_metadata_settings_cards/02_card_administrative_area_location.png`
- **Nama Komponen:** Seksi Wilayah Administratif (Administrative Area Section)
- **Fungsi:**
  - Input 5 Parameter Wilayah Baku Telkom/Fiberhome:
    1. **Province:** Nama provinsi (contoh: `JATIM`).
    2. **Regency/City:** Nama kota/kabupaten (contoh: `MALANG`).
    3. **District:** Nama kecamatan (contoh: `SUKUN`).
    4. **Subdistrict:** Nama kelurahan/desa (contoh: `BAKALANKRAJAN`).
    5. **Postal Code:** Kode pos area (contoh: `65157`).
  - Indikator Status (🔴/🟢): Menunjukkan apakah data berasal dari default lokal manual (merah) atau berhasil tersinkron otomatis dari KMZ (hijau).

---

#### 12. `03_tab2_metadata_settings_cards/03_card_cluster_address_olt_metadata.png`
- **Nama Komponen:** Seksi Klaster, Alamat Detail & Identitas OLT
- **Fungsi:**
  - **Cluster Name:** Kode/Nama klaster perancangan jaringan.
  - **Commercial Name:** Nama komersial klaster untuk tim sales & marketing (contoh: `BAKALANKRAJAN RW 05 SUKUN`).
  - **RW:** Nomor Rukun Warga area desain.
  - **Street (Type + Name):** Tipe jalan (`JALAN`, `GANG`, `JL`) dan nama jalan (`RAYA BAKALANKRAJAN`).
  - **OLT Code & Auto-Complete Popup:** Input kode perangkat Optical Line Terminal (`MLG.100.1001`) yang dilengkapi pencarian otomatis berbasis database internal.
  - **OLT Hostname:** Nama hostname OLT yang terpasang di Central Office / STO.

---

#### 13. `03_tab2_metadata_settings_cards/04_card_custom_olt_management_expander.png`
- **Nama Komponen:** Expander Manajemen Custom OLT
- **Fungsi:**
  - Memungkinkan perancang jaringan menambahkan data OLT baru ke dalam database lokal aplikasi tanpa harus mengubah kode program.
  - Input `New OLT Code:` & `New OLT Name:`.
  - Tombol `Add to OLT List`: Menyimpan OLT baru ke file `config.json` lokal.

---

#### 14. `03_tab2_metadata_settings_cards/05_card_bottom_actions_load_save.png`
- **Nama Komponen:** Panel Tombol Simpan & Muat Nilai Default
- **Fungsi:**
  - Tombol `Load Defaults`: Mengembalikan seluruh isian form ke nilai default bawaan proyek.
  - Tombol `Save Settings`: Menyimpan konfigurasi metadata saat ini ke penyimpanan persisten komputer sehingga tidak hilang saat aplikasi ditutup.

---

### KELOMPOK 4: KARTU TAB 3 (ABOUT & SUPPORT)

#### 15. `04_tab3_about_support_cards/01_card_developer_profile.png`
- **Nama Komponen:** Kartu Profil Pengembang (Developer Profile Card)
- **Fungsi:**
  - Menampilkan kredibilitas dan keahlian di balik pembuatan software.
  - Menampilkan nama: **Syaiful Wachid** dan jabatan: **Senior Project Designer at Fiberhome Indonesia**.
  - Tautan interaktif yang dapat diklik langsung membuka browser menuju profil LinkedIn resmi.

---

#### 16. `04_tab3_about_support_cards/02_card_support_saweria_donation.png`
- **Nama Komponen:** Kartu Dukungan Komunitas & Donasi Saweria
- **Fungsi:**
  - Memberikan wadah bagi pengguna yang merasa terbantu untuk memberikan donasi apresiasi kopi melalui tautan platform Saweria (`https://saweria.co/swddeveloper`).

---

#### 17. `04_tab3_about_support_cards/03_footer_status_bar.png`
- **Nama Komponen:** Status Bar Footer Aplikasi
- **Fungsi:**
  - Menampilkan info versi aplikasi, engine manipulasi Excel (`ClosedXML`), dan informasi hak cipta pengembang.

---

### KELOMPOK 5: JENDELA DIALOG & UTILITAS (MODAL DIALOGS)

#### 18. `05_dialogs_and_windows/01_window_faq_help_panduan.png`
- **Nama Window:** Jendela FAQ & Panduan Penggunaan Aplikasi (`HelpWindow.xaml`)
- **Fungsi & Konten:**
  1. **Langkah Penggunaan Program:** Panduan 5 tahap mulai dari pemilihan berkas KMZ, penentuan output, mode konversi, kelengkapan metadata, hingga eksekusi konversi.
  2. **Penjelasan Khusus Status *"Check Pole"*:** Penjelasan algoritma geospasial di mana sistem mencari tiang terdekat dari FAT dalam radius toleransi **7 meter**. Memberikan solusi jika gambar tiang di Google Earth terlalu jauh dari FAT.
  3. **FAQ Terkini:** Penjelasan mengenai fitur offline mode, proteksi penimpaan file (*file overwrite*), dan dukungan otomatis penamaan tiang 9m baru (misal `9-4` atau `9-5`) menggunakan dynamic regex engine.

---

#### 19. `05_dialogs_and_windows/02_window_license_activation_qris.png`
- **Nama Window:** Jendela Aktivasi Lisensi & Pembayaran QRIS (`LicenseWindow.xaml`)
- **Fungsi & Konten:**
  1. **Kartu Machine ID:** Menampilkan kode identifikasi unik perangkat keras komputer (`txtMachineId`) + Tombol `Copy Machine ID` + Tombol `Request Serial Key Auto` yang otomatis terintegrasi dengan Bot Telegram.
  2. **Kartu Pembayaran QRIS Otomatis:** Menampilkan barcode resmi QRIS (EMVCo SpeedCash) untuk pembayaran lisensi cepat melalui m-Banking / E-Wallet (BCA, Mandiri, BRI, GoPay, OVO, Dana, ShopeePay) serta kontak admin Telegram (`@Syaiful_Wachid`).
  3. **Input Serial Key:** Kolom validasi kode serial lisensi untuk membuka akses penuh ke aplikasi.

---

### KELOMPOK 6: HIGH-RES MARKETING SHOWCASE (HERO IMAGES)

Gambar-gambar pada folder `06_high_res_marketing_showcase\` merupakan tangkapan layar beresolusi penuh dalam kondisi data simulasi realistis (*ready-for-production showcase*) yang siap langsung diunggah sebagai slide dokumen PDF Carousel LinkedIn atau materi banner poster promosi:

1. `01_hero_showcase_converter_process_tab1.png`: Tampilan Tab 1 saat proses konversi selesai 100% dengan log sukses.
2. `02_hero_showcase_metadata_settings_tab2.png`: Tampilan Tab 2 dengan seluruh lampu indikator hijau tersinkronisasi.
3. `03_hero_showcase_about_support_tab3.png`: Tampilan Tab 3 profil pengembang dan donasi.
4. `04_hero_showcase_license_activation.png`: Tampilan modal dialog aktivasi lisensi dengan QRIS aktif.
5. `05_hero_showcase_help_faq.png`: Tampilan modal dialog panduan teknis dan solusi kendala survey OSP.

---

## 💡 Panduan Prompting untuk Pembuatan Konten AI

Jika Anda ingin meminta AI (ChatGPT, Claude, Gemini, dll.) membuat postingan LinkedIn atau desain poster berdasarkan gambar-gambar ini, Anda cukup memberikan instruksi seperti contoh berikut:

```markdown
Gunakan dokumen "SCREENSHOT_CATALOG_AND_FEATURE_GUIDE.md" sebagai referensi fitur.
Buatkan draft postingan LinkedIn yang menarik (lengkap dengan hook, problem statement perancangan FTTH OSP, solusi otomasi yang ditawarkan aplikasi, list fitur unggulan, dan call-to-action).
Sertakan rekomendasi penempatan gambar screenshot dari folder 01_main_tabs dan 02_tab1_converter_process_cards untuk setiap slide carousel!
```

---
*Dokumen ini dibuat secara otomatis oleh Antigravity untuk SWD SOFT DEVELOPER.*
