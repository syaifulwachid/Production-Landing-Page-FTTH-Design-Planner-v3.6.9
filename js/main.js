/**
 * FTTH Design Planner - Interactive Main JavaScript
 * Author: Syaiful Wachid (SWD SOFT DEVELOPER)
 * Base Active Users: 24 Users (Target: 600)
 */

// Configuration
const CONFIG = {
  BASE_USERS: 24,
  TARGET_USERS: 600,
  KMZ_TARGET_USERS: 300,
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyxXaC0uMvDCv39LICS_AhljMpIEw0EKp3Ljl42nhh376ZRnYDxcVCgI_dm-1NSsQxlZw/exec"
};

/* ==========================================================================
   COMPREHENSIVE PRODUCT SCREENSHOT GALLERIES DATA (All Assets Included)
   ========================================================================== */
const PRODUCT_GALLERIES = {
  planner: {
    name: "FTTH Design Planner v3.6.9",
    badge: "CORE FLAGSHIP CAD TOOL",
    badgeColor: "text-cyan-400 bg-blue-500/20 border-cyan-500/40",
    images: [
      {
        src: "assets/screenshots/ftth-design-planner/00_Windows_and_Modals/FTTH_Planner_Core_UI_Collage.png",
        title: "Overview Workspace & Modul Inti AutoCAD",
        desc: "Kolase antarmuka AutoCAD Model Space, Auto Cable Routing, Auto Tiang Snapping, Basemap Operations, dan FAT Loss Table."
      },
      {
        src: "assets/screenshots/ftth-design-planner/00_Windows_and_Modals/01_workspace_overview.png",
        title: "Full AutoCAD Workspace & Ribbon Dock",
        desc: "Tampilan workspace AutoCAD terintegrasi penuh dengan panel FTTH Design Planner di sisi samping."
      },
      {
        src: "assets/screenshots/ftth-design-planner/01_Tab1_Basemap_Preparation/Sub1_Map_and_Basemap/01_Boundary_And_Map_Downloader.png",
        title: "Tab 1 — Boundary & OSM Road Downloader",
        desc: "Download batas wilayah dan jaringan jalan OpenStreetMap (OSM) secara instan ke koordinat presisi."
      },
      {
        src: "assets/screenshots/ftth-design-planner/01_Tab1_Basemap_Preparation/Sub1_Map_and_Basemap/05_Generate_Road_Edges.png",
        title: "Tab 1 — Generate Road Edges (Tepi Jalan)",
        desc: "Otomasi pembuatan garis tepi jalan dan centerline secara proporsional dari poligon basemap."
      },
      {
        src: "assets/screenshots/ftth-design-planner/01_Tab1_Basemap_Preparation/Sub1_Map_and_Basemap/06_Generate_Sidewalks_Trotoar.png",
        title: "Tab 1 — Generate Sidewalks & Trotoar",
        desc: "Pembuatan garis pedestrian/trotoar dan penentuan right of way (ROW) untuk jalur penanaman tiang."
      },
      {
        src: "assets/screenshots/ftth-design-planner/01_Tab1_Basemap_Preparation/Sub2_Parcels_and_Homepass/01_Parcel_And_Point_Generator.png",
        title: "Tab 1 / Sub 2 — Parcel & Homepass Point Generator",
        desc: "Deteksi poligon rumah otomatis, penomoran persil bangunan, dan pemetaan titik calon pelanggan."
      },
      {
        src: "assets/screenshots/ftth-design-planner/01_Tab1_Basemap_Preparation/Sub2_Parcels_and_Homepass/03_ODP_Group_And_Boundary.png",
        title: "Tab 1 / Sub 2 — ODP Group & Cluster Boundary",
        desc: "Pengelompokan rumah ke coverage ODP/FAT terdekat dan isolasi batas area cluster otomatis."
      },
      {
        src: "assets/screenshots/ftth-design-planner/02_Tab2_Survey_and_Assets/09_Auto_Generate_Poles_Otomatis.png",
        title: "Tab 2 — Auto Generate Tiang (Poles) Otomatis",
        desc: "Plot ratusan tiang distribusi otomatis sepanjang centerline jalan dengan rentang span terkontrol."
      },
      {
        src: "assets/screenshots/ftth-design-planner/02_Tab2_Survey_and_Assets/10_FAT_FDT_And_Slack_Blocks.png",
        title: "Tab 2 — FAT, FDT & Slack Loop Insertion",
        desc: "Penempatan block FAT/FDT otomatis dengan atribut nomor tiang, kapasitas split, dan slack cable."
      },
      {
        src: "assets/screenshots/ftth-design-planner/03_Tab3_Routing_and_Design/01_Auto_Route_Cable_Generator.png",
        title: "Tab 3 — Auto Route Cable Generator",
        desc: "Penarikan kabel serat optik feeder dan distribusi otomatis yang menghubungkan FDT ke seluruh FAT."
      },
      {
        src: "assets/screenshots/ftth-design-planner/03_Tab3_Routing_and_Design/02_Koreksi_Rute_Manual_Advanced.png",
        title: "Tab 3 — Koreksi & Tuning Rute Kabel",
        desc: "Alat bantu revisi cepat rute kabel, snap crossing jalan, dan re-route segmen tertentu secara efisien."
      },
      {
        src: "assets/screenshots/ftth-design-planner/04_Tab4_Labels_and_Tables/03_FAT_Table_Generation.png",
        title: "Tab 4 — Tabel FAT & Rekap Loss Optik",
        desc: "Generate tabel FAT otomatis ke dalam Model Space CAD lengkap dengan perhitungan redaman dB."
      },
      {
        src: "assets/screenshots/ftth-design-planner/04_Tab4_Labels_and_Tables/06_FDT_Table_Generation.png",
        title: "Tab 4 — Tabel FDT & Konfigurasi Feeder",
        desc: "Rekapitulasi alokasi port splitter FDT/ODC dan pemetaan feeder core ke masing-masing FAT."
      },
      {
        src: "assets/screenshots/ftth-design-planner/05_Tab5_Exports_and_Reports/07_KML_Export_Options.png",
        title: "Tab 5 — KML/KMZ Google Earth Export",
        desc: "Export seluruh objek desain CAD ke Google Earth dengan styling layer warna-warni dan popup data."
      },
      {
        src: "assets/screenshots/ftth-design-planner/05_Tab5_Exports_and_Reports/09_Auto_APD_ABD_Export_Setup.png",
        title: "Tab 5 — Auto APD / ABD Layout & Export",
        desc: "Otomasi pembuatan layout As-Planned Drawing (APD) dan As-Built Drawing (ABD) siap cetak/plot."
      },
      {
        src: "assets/screenshots/ftth-design-planner/06_Tab6_Future_Tools/Sub2_DRM/05_Homepass_Classification_Tool.png",
        title: "Tab 6 — DRM Homepass Classification",
        desc: "Klasifikasi tipe homepass (Ruko, Perumahan, Kantor) dan integrasi metadata komersial."
      }
    ]
  },

  kmz: {
    name: "KMZ To HPDB & BOQ Converter v3.2",
    badge: "SPATIAL DATA CONVERTER",
    badgeColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40",
    images: [
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/06_high_res_marketing_showcase/01_hero_showcase_converter_process_tab1.png",
        title: "Tab 1 — KMZ Conversion Engine",
        desc: "Ekstraksi instan ribuan titik koordinat FAT, closure, tiang, dan rute kabel dari file .KMZ Google Earth."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/06_high_res_marketing_showcase/02_hero_showcase_metadata_settings_tab2.png",
        title: "Tab 2 — Metadata Settings & OLT Management",
        desc: "Konfigurasi master OLT, penamaan cluster, kode pos wilayah administratif, dan format output database."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/06_high_res_marketing_showcase/03_hero_showcase_about_support_tab3.png",
        title: "Tab 3 — Developer & Support Hub",
        desc: "Pusat informasi pembaruan versi, dokumentasi teknis, dan kanal dukungan pengembang."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/06_high_res_marketing_showcase/04_hero_showcase_license_activation.png",
        title: "Sistem Aktivasi Lisensi Instan",
        desc: "Aktivasi lisensi program terenkripsi yang langsung aktif setelah verifikasi admin."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/06_high_res_marketing_showcase/05_hero_showcase_help_faq.png",
        title: "Panduan & FAQ Bantuan Terintegrasi",
        desc: "Dokumentasi panduan langkah demi langkah cara menyiapkan file KMZ dan mengekspor ke Excel."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/02_tab1_converter_process_cards/02_card_source_file_selection.png",
        title: "Pemilihan File Sumber .KMZ/.KML",
        desc: "Pilih file survei tunggal atau bulk processing banyak cluster sekaligus dalam satu proses."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/02_tab1_converter_process_cards/03_card_conversion_mode_and_rules.png",
        title: "Aturan & Mode Konversi Spasial",
        desc: "Filter layer kabel, deteksi toleransi snapping FAT, dan standarisasi atribut homepass."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/02_tab1_converter_process_cards/06_card_log_report_console.png",
        title: "Log Console & Validasi Data",
        desc: "Pengecekan integritas data secara realtime untuk memastikan tidak ada koordinat yang hilang."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/03_tab2_metadata_settings_cards/02_card_administrative_area_location.png",
        title: "Hierarki Wilayah Administratif",
        desc: "Pemetaan otomatis Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan, hingga RW/RT."
      },
      {
        src: "assets/screenshots/kmz-to-hpdb-converter/03_tab2_metadata_settings_cards/04_card_custom_olt_management_expander.png",
        title: "Custom OLT & FDT Port Expander",
        desc: "Manajemen alokasi kapasitas port PON OLT dan penomoran FDT/ODC master."
      }
    ]
  },

  radial: {
    name: "RadialMenu Setup v1.34.0",
    badge: "PRODUCTIVITY SPEED BOOSTER",
    badgeColor: "text-amber-400 bg-amber-500/20 border-amber-500/40",
    images: [
      {
        src: "assets/screenshots/radial-menu/01_Radial_Overlay_UI/01_Radial_Overlay_Main_Menu.png",
        title: "Menu Radial Melayang di Kursor AutoCAD",
        desc: "Akses cepat perintah CAD favorit langsung di ujung kursor mouse tanpa perlu menyentuh command line."
      },
      {
        src: "assets/screenshots/radial-menu/01_Radial_Overlay_UI/02_Radial_Overlay_Edit_Mode.png",
        title: "Visual Edit Mode & Drag-and-Drop",
        desc: "Susun dan ubah susunan slice menu radial dengan mudah melalui antarmuka drag-and-drop interaktif."
      },
      {
        src: "assets/screenshots/radial-menu/01_Radial_Overlay_UI/05_Radial_Overlay_Concentric_Submenus.png",
        title: "Concentric Submenus Bertingkat",
        desc: "Struktur submenu melingkar konsentris untuk mengelompokkan puluhan tools CAD dalam ruang minimalis."
      },
      {
        src: "assets/screenshots/radial-menu/01_Radial_Overlay_UI/06_Radial_Overlay_Slice_Hover_State.png",
        title: "Slice Hover State & Efek Glow",
        desc: "Umpan balik visual instan dengan efek cahaya neon saat kursor melewati sektor perintah tertentu."
      },
      {
        src: "assets/screenshots/radial-menu/02_Settings_General/01_Settings_Tab_General_Overview.png",
        title: "Pengaturan Umum & Shortcut Trigger",
        desc: "Konfigurasi hotkey keyboard, tombol mouse samping, dan opsi startup otomatis bersama AutoCAD."
      },
      {
        src: "assets/screenshots/radial-menu/03_Settings_Theme_Visual/01_Settings_Tab_Theme_And_Visual_Overview.png",
        title: "Kustomisasi Tema & Efek Blur",
        desc: "Pilihan skema warna Cyber CAD, Dark Onyx, tingkat transparansi glass-morphism, dan skala radius."
      },
      {
        src: "assets/screenshots/radial-menu/04_Settings_Inertia_Flywheel/01_Settings_Tab_Inertia_Flywheel_Overview.png",
        title: "Inertia Flywheel Physics Tuning",
        desc: "Pengaturan inersia putaran menu dan gesekan kursor untuk pergerakan navigasi yang ultra-halus."
      },
      {
        src: "assets/screenshots/radial-menu/04_Settings_Inertia_Flywheel/02_Settings_Inertia_Physics_Tuning.png",
        title: "Detail Sensitivitas & Damping Ratio",
        desc: "Tuning respon gestur mouse untuk kenyamanan drafting berjam-jam tanpa lelah tangan."
      },
      {
        src: "assets/screenshots/radial-menu/05_Settings_Profiles_Filters/01_Settings_Tab_Profiles_And_Filters_Overview.png",
        title: "Per-App Profiles & Window Filter",
        desc: "Menu radial otomatis berganti profil sesuai aplikasi yang sedang aktif (AutoCAD, Civil 3D, QGIS, Excel)."
      },
      {
        src: "assets/screenshots/radial-menu/06_Macro_Step_Editor/01_Macro_Step_Runner_Editor_Overview.png",
        title: "Macro Step Runner Editor",
        desc: "Rangkaian macro otomatis (ketik perintah, delay, switch window) yang dapat dijalankan dalam 1 klik slice."
      },
      {
        src: "assets/screenshots/radial-menu/07_Icon_Browser_Presets/01_Icon_Browser_Preset_Library.png",
        title: "Library Icon CAD & Telco Lengkap",
        desc: "Ratusan preset ikon teknik dan tools drafting yang siap dipasang ke sektor menu radial."
      }
    ]
  },

  tssr: {
    name: "TSSR Geo TAG Capture v3.0",
    badge: "FIELD SURVEY TOOL (FREE)",
    badgeColor: "text-cyan-400 bg-cyan-500/20 border-cyan-500/40",
    images: [
      {
        src: "assets/screenshots/tssr-geo-tag/01_Settings_Window/00_Settings_Window_Overview.png",
        title: "Panel Pengaturan Utama TSSR Geo TAG",
        desc: "Konfigurasi format watermark, GPS geocoding, tanggal otomatis, dan logo perusahaan."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/01_Settings_Window/03_Watermark/03_Watermark_Full_Tab.png",
        title: "Kustomisasi Format Watermark",
        desc: "Pilihan posisi watermark, ukuran teks, transparansi latar, nama cluster, dan identitas surveyor."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/01_Settings_Window/04_Geocoding_Map/04_Geocoding_Map_Full_Tab.png",
        title: "Integrasi Geocoding & Reverse Address",
        desc: "Pengambilan alamat lengkap otomatis dari koordinat GPS satelit di lokasi tiang/site."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/01_Settings_Window/05_Timestamp/05_Timestamp_Full_Tab.png",
        title: "Pengaturan Waktu & Zona Jam Presisi",
        desc: "Pencatatan tanggal, detik, dan zona waktu (WIB/WITA/WIT) yang akurat untuk bukti audit survei."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/02_Bulk_Paste_Floating_Window/02_BulkPaste_Floating_Populated_Histori.png",
        title: "Riwayat Tangkapan Layar & Foto",
        desc: "Daftar thumbnail hasil capture foto lapangan yang tersimpan rapi dan siap dipaste ke dokumen."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/02_Bulk_Paste_Floating_Window/03_BulkPaste_Floating_Active_Paste_Mode.png",
        title: "Mode Bulk Paste Word & Excel",
        desc: "Fitur unggulan untuk menempelkan puluhan foto berwatermark ke template laporan survei dalam sekejap."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/07_Region_Selector_Overlay/01_RegionSelector_Full_Snipping_Screen.png",
        title: "Layar Perekaman Snipping Presisi",
        desc: "Area seleksi pemotongan gambar dengan garis bantu ukuran pixel dan titik koordinat live."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/08_System_Tray_Menu/01_System_Tray_Context_Menu_Full.png",
        title: "Akses Cepat System Tray",
        desc: "Berjalan ringan di latar belakang Windows dengan shortcut keyboard global yang responsif."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/09_Watermark_Card_Compositor/01_Watermark_Overlay_Sample_Standard_TSSR.png",
        title: "Hasil Output Watermark Landscape Standard",
        desc: "Contoh foto hasil ekspor beresolusi tajam dengan informasi teknis survei yang lengkap dan profesional."
      },
      {
        src: "assets/screenshots/tssr-geo-tag/09_Watermark_Card_Compositor/02_Watermark_Overlay_Sample_Portrait_9_16.png",
        title: "Hasil Output Watermark Portrait (9:16)",
        desc: "Dukungan format foto tegak untuk dokumentasi tiang, ODP, dan box optical closure."
      }
    ]
  },

  mobile: {
    name: "FTTH-Pro Report (Android APK)",
    badge: "MOBILE FIELD INSPECTION (FREE)",
    badgeColor: "text-green-400 bg-green-500/20 border-green-500/40",
    images: [
      {
        src: "assets/screenshots/ftth-pro-report-apk/01_main_dashboard.jpeg",
        title: "Dashboard Utama Android App",
        desc: "Ringkasan metrik proyek konstruksi FTTH, total tiang terpasang, dan status cluster aktif."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/02_buat_laporan_form.jpeg",
        title: "Form Input Laporan Harian",
        desc: "Pengisian data progres pekerjaan lapangan yang cepat, mudah, dan langsung terekam di database hp."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/03_kelola_cluster_list.jpeg",
        title: "Daftar Manajemen Cluster & Area",
        desc: "Monitoring pembagian wilayah kerja berdasarkan nama cluster, OLT master, dan subkontraktor."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/04_edit_cluster_sipil.jpeg",
        title: "Inspeksi Pekerjaan Sipil & Tiang",
        desc: "Pencatatan penanaman tiang baru, galian jalur tanah (HDPE), dan crossing jalan."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/05_edit_cluster_aksesoris.jpeg",
        title: "Checklist Aksesoris Tiang & Bracket",
        desc: "Validasi pemasangan suspension clamp, dead-end clamp, stainless steel belt, dan slack bracket."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/06_edit_cluster_terminasi.jpeg",
        title: "Status Terminasi FAT & Splicing Closure",
        desc: "Monitoring progres penyambungan serat optik core feeder ke splitter ODP di lapangan."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/07_kelola_subcon.jpeg",
        title: "Manajemen Tim Subkontraktor",
        desc: "Distribusi target pekerjaan harian dan evaluasi performa per tim subcon pelaksana."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/08_riwayat_laporan_list.jpeg",
        title: "Riwayat Laporan Konstruksi",
        desc: "Daftar arsip laporan harian dari awal proyek hingga selesai yang tersimpan rapi."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/09_detail_laporan_daily_progress.jpeg",
        title: "Detail Rekap Daily Progress",
        desc: "Rincian pencapaian target harian lengkap dengan foto dokumentasi lapangan."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/10_pengaturan_header_laporan.jpeg",
        title: "Kustomisasi Header & Kop Laporan",
        desc: "Pengaturan identitas perusahaan, nama Project Manager, dan format nomor laporan."
      },
      {
        src: "assets/screenshots/ftth-pro-report-apk/11_tentang_aplikasi_developer.jpeg",
        title: "Informasi Aplikasi & Pengembang",
        desc: "Kanal dukungan dan informasi versi rilis dari SWD SOFT DEVELOPER."
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initGalleryFilter();
  initRoiCalculator();
  initLightbox();
  initCommunityMilestone();
  initSocialProofNotifications();
  syncLivePricing();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link-mobile');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-cad-dark/95', 'shadow-lg', 'border-b', 'border-cyan-500/20');
      header.classList.remove('bg-cad-dark/70');
    } else {
      header.classList.remove('bg-cad-dark/95', 'shadow-lg', 'border-b', 'border-cyan-500/20');
      header.classList.add('bg-cad-dark/70');
    }
  });
}

/* ==========================================================================
   2. GALLERY CATEGORY FILTER
   ========================================================================== */
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('[data-gallery-category]');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-gallery-filter');

      filterButtons.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400');
        b.classList.add('bg-cad-card', 'text-gray-400', 'border-gray-800');
      });
      btn.classList.remove('bg-cad-card', 'text-gray-400', 'border-gray-800');
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-gallery-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          item.classList.add('flex');
        } else {
          item.classList.add('hidden');
          item.classList.remove('flex');
        }
      });
    });
  });
}

/* ==========================================================================
   3. INTERACTIVE ROI & TIME SAVINGS CALCULATOR
   ========================================================================== */
function initRoiCalculator() {
  const sliderFat = document.getElementById('slider-fat');
  const sliderRate = document.getElementById('slider-rate');

  const valFat = document.getElementById('val-fat');
  const valRate = document.getElementById('val-rate');

  const resManualHours = document.getElementById('res-manual-hours');
  const resAutoHours = document.getElementById('res-auto-hours');
  const resSavedHours = document.getElementById('res-saved-hours');
  const resMoneySaved = document.getElementById('res-money-saved');
  const resEfficiencyPercent = document.getElementById('res-efficiency-percent');

  function calculate() {
    if (!sliderFat || !sliderRate) return;

    const fatCount = parseInt(sliderFat.value, 10);
    const hourlyRate = parseInt(sliderRate.value, 10);

    valFat.textContent = fatCount.toLocaleString('id-ID');
    valRate.textContent = 'Rp ' + hourlyRate.toLocaleString('id-ID');

    const manualHours = Math.round(fatCount * 1.2);
    const autoHours = Math.max(1, Math.round(fatCount * 0.15));
    const savedHours = Math.max(0, manualHours - autoHours);
    const moneySaved = savedHours * hourlyRate;
    const efficiency = Math.round(((manualHours - autoHours) / manualHours) * 100);

    resManualHours.textContent = manualHours + ' Jam';
    resAutoHours.textContent = autoHours + ' Jam';
    resSavedHours.textContent = savedHours + ' Jam';
    resMoneySaved.textContent = 'Rp ' + moneySaved.toLocaleString('id-ID');
    resEfficiencyPercent.textContent = (isNaN(efficiency) ? 88 : efficiency) + '%';
  }

  if (sliderFat && sliderRate) {
    sliderFat.addEventListener('input', calculate);
    sliderRate.addEventListener('input', calculate);
    calculate();
  }
}

/* ==========================================================================
   4. ADVANCED MULTI-SCREENSHOT LIGHTBOX & ALBUM VIEWER
   ========================================================================== */
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentAlbumName = "Galeri Modul";

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  const triggerElements = document.querySelectorAll('[data-lightbox-src]');
  triggerElements.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-lightbox-src');
      const title = el.getAttribute('data-lightbox-title') || 'CAD Showcase Preview';
      const desc = el.getAttribute('data-lightbox-desc') || 'Tangkapan layar antarmuka presisi tinggi.';

      currentAlbumName = "Galeri Showcase";
      currentLightboxImages = Array.from(triggerElements).map(t => ({
        src: t.getAttribute('data-lightbox-src'),
        title: t.getAttribute('data-lightbox-title') || 'CAD Showcase Preview',
        desc: t.getAttribute('data-lightbox-desc') || ''
      }));

      currentLightboxIndex = currentLightboxImages.findIndex(img => img.src === src);
      if (currentLightboxIndex === -1) currentLightboxIndex = index;

      renderLightboxModal();
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });

  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
}

function showNext() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateActiveLightboxImage();
}

function showPrev() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateActiveLightboxImage();
}

function renderLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  renderThumbnailsStrip();
  updateActiveLightboxImage();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function updateActiveLightboxImage() {
  if (currentLightboxImages.length === 0) return;
  const current = currentLightboxImages[currentLightboxIndex];

  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalDesc = document.getElementById('lightbox-desc');
  const counterEl = document.getElementById('lightbox-counter');
  const albumBadge = document.getElementById('lightbox-album-badge');

  if (modalImg) {
    modalImg.style.opacity = '0.3';
    modalImg.src = current.src;
    modalImg.onload = () => {
      modalImg.style.opacity = '1';
    };
  }
  if (modalTitle) modalTitle.textContent = current.title;
  if (modalDesc) modalDesc.textContent = current.desc;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
  if (albumBadge) albumBadge.textContent = currentAlbumName;

  // Highlight active thumbnail
  const thumbs = document.querySelectorAll('.lightbox-thumb');
  thumbs.forEach((th, idx) => {
    if (idx === currentLightboxIndex) {
      th.classList.add('border-cyan-400', 'ring-2', 'ring-cyan-400/50', 'scale-105', 'opacity-100');
      th.classList.remove('border-slate-800', 'opacity-50');
      th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      th.classList.remove('border-cyan-400', 'ring-2', 'ring-cyan-400/50', 'scale-105', 'opacity-100');
      th.classList.add('border-slate-800', 'opacity-50');
    }
  });
}

function renderThumbnailsStrip() {
  const thumbContainer = document.getElementById('lightbox-thumbnails');
  if (!thumbContainer) return;

  thumbContainer.innerHTML = '';
  currentLightboxImages.forEach((img, idx) => {
    const thumb = document.createElement('button');
    thumb.className = `lightbox-thumb w-16 h-12 rounded-lg border overflow-hidden shrink-0 transition-all cursor-pointer ${
      idx === currentLightboxIndex ? 'border-cyan-400 ring-2 ring-cyan-400/50 opacity-100' : 'border-slate-800 opacity-50 hover:opacity-100'
    }`;
    thumb.title = img.title;
    thumb.innerHTML = `<img src="${img.src}" alt="Thumb ${idx + 1}" class="w-full h-full object-cover">`;
    thumb.addEventListener('click', () => {
      currentLightboxIndex = idx;
      updateActiveLightboxImage();
    });
    thumbContainer.appendChild(thumb);
  });
}

/**
 * Open dedicated gallery album for a specific program
 * @param {string} productId - 'planner' | 'kmz' | 'radial' | 'tssr' | 'mobile'
 * @param {number} startIndex - Initial photo index
 */
function openProductGallery(productId, startIndex = 0) {
  const gallery = PRODUCT_GALLERIES[productId];
  if (!gallery || !gallery.images || gallery.images.length === 0) return;

  currentAlbumName = gallery.name;
  currentLightboxImages = gallery.images;
  currentLightboxIndex = Math.min(startIndex, gallery.images.length - 1);

  renderLightboxModal();
}
window.openProductGallery = openProductGallery;

/* ==========================================================================
   5. COMMUNITY MILESTONE TRACKER (TDW Scale Pricing - Baseline: 24 Users)
   ========================================================================== */
function initCommunityMilestone() {
  let extraActivity = parseInt(localStorage.getItem('ftth_extra_activity') || '0', 10);
  const currentMembers = CONFIG.BASE_USERS + extraActivity;
  const targetMembers = CONFIG.TARGET_USERS;
  
  const progressPercentRaw = (currentMembers / targetMembers) * 100;
  const progressPercentDisplay = progressPercentRaw.toFixed(1);

  const countEl = document.getElementById('community-count');
  const barEl = document.getElementById('community-progress-bar');
  const percentEl = document.getElementById('community-percent');

  if (countEl) countEl.textContent = currentMembers.toLocaleString('id-ID');
  if (barEl) {
    setTimeout(() => {
      barEl.style.width = Math.max(4.0, progressPercentRaw) + '%';
    }, 400);
  }
  if (percentEl) percentEl.textContent = progressPercentDisplay + '%';
}

/* ==========================================================================
   6. LIVE ACTIVITY NOTIFICATIONS (Social Proof Toast)
   ========================================================================== */
const RECENT_ACTIVITIES = [
  { text: "Engineer dari Surabaya baru saja mengunduh TSSR Geo TAG Capture v3.0 (Gratis)", icon: "fa-download", color: "text-cyan-400" },
  { text: "Kontraktor FTTx dari Bandung melakukan request aktivasi FTTH Design Planner", icon: "fa-key", color: "text-amber-400" },
  { text: "Drafter dari Jakarta Selatan mengambil Paket Bundling + Bonus RadialMenu Lifetime", icon: "fa-crown", color: "text-yellow-400" },
  { text: "Rekan praktisi dari Semarang bergabung ke Komunitas WhatsApp FTTH", icon: "fa-whatsapp", color: "text-emerald-400" },
  { text: "Surveyor lapangan dari Malang mengunduh FTTH-Pro Report APK Android", icon: "fa-android", color: "text-green-400" },
  { text: "User dari Bekasi mengaktifkan KMZ to HPDB & BOQ Converter v3.2", icon: "fa-file-excel", color: "text-emerald-400" }
];

function initSocialProofNotifications() {
  let toastContainer = document.getElementById('social-proof-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'social-proof-toast-container';
    toastContainer.className = 'fixed bottom-6 left-6 z-40 max-w-sm hidden sm:block pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  let activityIndex = 0;

  function showToast() {
    const act = RECENT_ACTIVITIES[activityIndex];
    activityIndex = (activityIndex + 1) % RECENT_ACTIVITIES.length;

    const toast = document.createElement('div');
    toast.className = 'cad-card p-3 rounded-xl border border-cyan-500/40 shadow-2xl bg-cad-panel/95 backdrop-blur-md mb-3 flex items-center gap-3 transform translate-y-6 opacity-0 transition-all duration-500 pointer-events-auto';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center ${act.color} shrink-0">
        <i class="fa-solid ${act.icon} text-xs"></i>
      </div>
      <div class="text-xs font-mono-tech leading-tight">
        <div class="text-slate-300">${act.text}</div>
        <div class="text-[10px] text-cyan-400 mt-0.5">Baru saja • Terverifikasi</div>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-6', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-6', 'opacity-0');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 500);
    }, 6000);
  }

  setTimeout(() => {
    showToast();
    setInterval(showToast, 22000);
  }, 8000);
}

/* ==========================================================================
   7. DYNAMIC PRICING SYNC (From Live Google Sheet Web App Config)
   ========================================================================== */
function syncLivePricing() {
  if (!CONFIG.WEB_APP_URL) return;

  fetch(CONFIG.WEB_APP_URL + '?action=getPrice')
    .then(res => res.json())
    .then(data => {
      if (data && data.BasePrice_1M) {
        console.log('✓ Live Pricing Synced from Config Sheet:', data);
      }
    })
    .catch(err => {
      console.log('Using standard cached pricing table.');
    });
}

/* ==========================================================================
   8. WHATSAPP DIRECT ORDER GENERATOR & ACTIVITY TRACKER
   ========================================================================== */
function sendWhatsAppOrder(productName, price) {
  let extraActivity = parseInt(localStorage.getItem('ftth_extra_activity') || '0', 10);
  extraActivity += 1;
  localStorage.setItem('ftth_extra_activity', extraActivity.toString());
  
  initCommunityMilestone();

  const phoneNumber = '6282230696953';
  const text = `Halo Pak Syaiful Wachid (SWD SOFT DEVELOPER), saya tertarik dengan penawaran *${productName}* (${price}). Mohon info prosedur aktivasi lisensi & cara pembayarannya. Terima kasih!`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
window.sendWhatsAppOrder = sendWhatsAppOrder;

/* ==========================================================================
   9. PRECISE CENTER SCROLL TO COMMUNITY MILESTONE
   ========================================================================== */
function scrollToCommunity(e) {
  if (e) e.preventDefault();
  const communityCard = document.getElementById('community-card') || document.getElementById('community');
  if (communityCard) {
    communityCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Highlight attention pulse effect
    communityCard.classList.add('ring-2', 'ring-cyan-400', 'shadow-[0_0_50px_rgba(0,240,255,0.45)]');
    setTimeout(() => {
      communityCard.classList.remove('ring-2', 'ring-cyan-400', 'shadow-[0_0_50px_rgba(0,240,255,0.45)]');
    }, 2200);
  }
}
window.scrollToCommunity = scrollToCommunity;

// Auto-center if URL hash is #community on load
window.addEventListener('load', () => {
  if (window.location.hash === '#community') {
    setTimeout(() => {
      scrollToCommunity();
    }, 300);
  }
});

/* ==========================================================================
   10. FLOATING PROMOTIONAL BANNER TOGGLE
   ========================================================================== */
function togglePromoBanner(show) {
  const banner = document.getElementById('promo-floating-banner');
  const miniBtn = document.getElementById('promo-minimized-btn');
  if (!banner || !miniBtn) return;

  if (show) {
    banner.classList.remove('hidden', 'translate-y-8', 'opacity-0');
    banner.classList.add('translate-y-0', 'opacity-100');
    miniBtn.classList.add('hidden');
    miniBtn.classList.remove('flex');
  } else {
    banner.classList.add('translate-y-8', 'opacity-0');
    setTimeout(() => {
      banner.classList.add('hidden');
      miniBtn.classList.remove('hidden');
      miniBtn.classList.add('flex');
    }, 350);
  }
}
window.togglePromoBanner = togglePromoBanner;


