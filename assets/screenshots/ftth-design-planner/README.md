# 📚 Dokumentasi & Katalog Aset UI: FTTH Design Planner v3.6.9

Dokumen ini berisi panduan lengkap, katalog nama file, struktur folder, serta penjelasan rinci fungsi teknis dan tujuan bisnis dari setiap tangkapan layar (**screenshot asset**) antarmuka pengguna (**UI Form & Cards**) software **FTTH Design Planner v3.6.9**.

Dokumen ini dirancang agar dapat dibaca dan dipahami secara langsung oleh **Agen AI (LLM)**, tim teknis, maupun tim pemasaran untuk penyusunan *Copywriting*, *Carousel LinkedIn*, *Banner Iklan*, *Pitch Deck*, *User Manual*, dan *Promosi Video*.

---

## 🗂️ Ringkasan Struktur Folder Aset

```text
ftth-design-planner/
├── 📂 00_Windows_and_Modals/          <- Jendela Dialog Pop-up & Form Modal Independen
├── 📂 01_Tab1_Basemap_Preparation/    <- Modul Persiapan Basemap, Citra Satelit & Homepass
│   ├── 📂 Sub1_Map_and_Basemap/
│   └── 📂 Sub2_Parcels_and_Homepass/
├── 📂 02_Tab2_Survey_and_Assets/      <- Modul Kalibrasi Koordinat, StreetView & Penempatan Tiang/FAT
├── 📂 03_Tab3_Routing_and_Design/     <- Modul Auto-Routing Kabel, Clustering & Desain Otomatis
├── 📂 04_Tab4_Labels_and_Tables/      <- Modul Pelabelan Otomatis (Tiang, FAT, FDT, Kabel) & Link Budget
├── 📂 05_Tab5_Exports_and_Reports/    <- Modul Summary BOQ, Validasi QA & Export KML/KMZ/GeoJSON
└── 📂 06_Tab6_Future_Tools/           <- Modul Utilitas Tambahan (DRM, Publishing Layout, Geofencing)
    ├── 📂 Sub1_Isolation_Manager/
    ├── 📂 Sub2_DRM/
    ├── 📂 Sub3_Publishing/
    └── 📂 Sub4_Draw_Cable_and_Wire/
```

---

## 1. 📂 `00_Windows_and_Modals/` (Jendela Dialog & Modal Pop-up)

| Nama File | Nama Modul / Form | Fungsi & Deskripsi Teknis untuk AI / Marketing |
| :--- | :--- | :--- |
| **`UI_Win_01_Activation_License.png`** | **Aktivasi Lisensi Software & QRIS Dinamis** | Jendela aktivasi otomatis berbasis QRIS dinamis real-time (SWD Soft Developer), pemilihan paket durasi langganan (Trial 1 Bulan s/d 12 Bulan), integrasi verifikasi WhatsApp/Telegram, serta aktivasi manual via Serial Key. |
| **`UI_Win_02_Fdt_Line_Manager.png`** | **FDT & Cable Line Hierarchy Manager** | Form manajemen hierarki jaringan: mengatur urutan FDT (FDT 1, 2...), custom kode FDT (misal `PDA6.051`), menata dan menukar alokasi Line Kabel (`Line A`, `Line B`, dst.) dengan drag/picker interaktif di DWG, serta integrasi filter Area Isolasi. |
| **`UI_Win_03_Isolation_Manager.png`** | **Processing Isolation Area (Geofencing)** | Form pengelolaan poligon area isolasi pemrosesan tertutup (geofencing) pada drawing DWG untuk membatasi ruang lingkup kalkulasi, pelabelan, dan ekspor KMZ per kluster/blok. |
| **`UI_Win_04_Import_Selection.png`** | **Import Selection (KML/KMZ/PDF)** | Jendela seleksi hierarki objek yang akan diimpor dari file KML/KMZ atau layer PDF. Mendukung pemetaan otomatis marker titik survei menjadi blok tiang CAD (`NP 7 4\"`, `EXT TEL`, `FAT Table`, dll) dan snapping jalan. |
| **`UI_Win_06_About_Developer.png`** | **Developer Info (About Software)** | Jendela informasi pembuat software (Syaiful Wachid / Senior Project Designer Fiberhome Indonesia) dan tautan profil profesional LinkedIn. |
| **`UI_Footer_Status_And_Reports.png`** | **Status & Realtime Execution Log** | Bar status bawah yang menampilkan progres persentase eksekusi algoritma AutoCAD, notifikasi status lisensi, dan log event sistem. |

---

## 2. 📂 `01_Tab1_Basemap_Preparation/` (Persiapan Basemap & Homepass)

### 🔹 Sub 1: `Sub1_Map_and_Basemap/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Map_And_Basemap.png`** | **Tampilan Penuh Subtab Map & Basemap** | Screenshot keseluruhan panel persiapan peta dan as jalan. |
| **`01_Boundary_And_Map_Downloader.png`** | **Boundary & Map Downloader** | Pengunduh citra satelit otomatis beresolusi tinggi (Google Satellite, Bing, ESRI) yang dipotong presisi mengikuti poligon boundary area proyek. |
| **`02_Smart_And_Smooth_Polyline.png`** | **Smart & Smooth Polyline** | Generator polyline as jalan pintar dengan segmentasi teratur dan algoritma penghalusan sudut tikungan (*Chaikin Smoothing Algorithm*), serta pembuat garis percil rumah (*Home Percil*). |
| **`03_Centerline_Connection_Check.png`** | **Centerline Connection Check** | Alat pemeriksa integritas topologi as jalan. Mendeteksi celah (*gap*) atau tumpang tindih (*overshoot*), menandai lingkaran merah, dan fitur *Auto-Fix Gaps*. |
| **`04_Basemap_Operations.png`** | **Basemap Operations** | Kontrol utama pembuatan basemap: penentuan lebar jalan (*Assign Street Width*), generate basemap serentak, dan pembersihan otomatis persimpangan (*Clean Intersections*). |
| **`05_Generate_Road_Edges.png`** | **Generate Road Edges (Tepi Jalan)** | Parameter lebar jalan dan radius lengkung fillet persimpangan untuk menghasilkan layer tepi jalan (*FTTH-ROAD-EDGE*). |
| **`06_Generate_Sidewalks_Trotoar.png`** | **Generate Sidewalks (Trotoar)** | Parameter lebar trotoar dan lengkung sudut untuk membuat layer trotoar (*FTTH-TROTOAR*). |
| **`07_Generate_Right_Of_Way_ROW.png`** | **Generate Right-Of-Way (ROW)** | Parameter batas ruang milik jalan (*FTTH-ROW*) sebagai koridor penempatan tiang utilitas fiber optik. |
| **`08_Road_Labeling.png`** | **Road Labeling (Auto Road Naming)** | Penamaan nama jalan otomatis dari sumber data global (*Overpass OSM, Nominatim, Google Maps API*) atau file lokal (*GPKG, SHP, GeoJSON*), penataan offset, rotasi paralel, dan interval perulangan teks. |

### 🔹 Sub 2: `Sub2_Parcels_and_Homepass/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Parcels_And_Homepass.png`**| **Tampilan Penuh Subtab Parcels & Homepass**| Screenshot keseluruhan panel pembuatan kavling dan tagging nomor rumah. |
| **`01_Parcel_And_Point_Generator.png`** | **Parcel & Point Generator** | Generator partisi poligon kavling rumah (*house parcels*) dan titik sentroid referensi dari batas ROW. |
| **`02_Master_Placer_And_Labeling.png`** | **Master Placer & Labeling** | Penomoran rumah otomatis dan berurutan (*sequential labeling*) di dalam batas kavling dengan rotasi sudut sejajar jalan. |
| **`03_ODP_Group_And_Boundary.png`** | **ODP Group & Boundary** | Pengelompokan rumah calon pelanggan (maksimal 16 HP per FAT/ODP) dan pembuatan batas wilayah cakupan ODP (*ODP Boundary*). |
| **`04_Core_Homepass_Types.png`** | **Core Homepass Types (Tagging Cepat)** | Tombol klasifikasi cepat kondisi bangunan: **TK** (Tanah Kosong), **RR** (Rumah Rusak), **RK** (Rumah Kosong), **UH** (Unpotential Homepass) dengan warna standar. |
| **`05_Facilities_And_Public_Utilities.png`**| **Facilities & Public Utilities** | Tagging fasilitas umum penting: Masjid, Gereja, Minimarket, Sekolah, Makam, Pabrik, Kantor Kelurahan, Pos Ronda, dll. |
| **`06_TK_Extraction.png`** | **TK Extraction** | Ekstraksi dan pengalokasian nomor cadangan untuk tanah kosong. |
| **`07_Backup_And_Restore.png`** | **Backup & Restore** | Fitur pengembalian nama, layer, dan properti teks asli sebelum proses tagging diubah. |
| **`08_Keterangan_Singkatan.png`** | **Keterangan Singkatan** | Glosarium referensi singkatan status survei bangunan. |

---

## 3. 📂 `02_Tab2_Survey_and_Assets/` (Survei Lapangan & Penempatan Tiang)

| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Survey_And_Assets.png`** | **Tampilan Penuh Tab Survey & Assets** | Screenshot menyeluruh modul survei, floating StreetView, dan katalog tiang. |
| **`01_Coordinate_Calibration.png`** | **Coordinate Calibration** | Kalibrasi koordinat real-world (Latitude/Longitude WGS84) terhadap sistem koordinat lokal AutoCAD model space dengan kalkulasi pergeseran delta (*Shift ΔLat/ΔLon*). |
| **`02_Pole_Type_Active.png`** | **Pole Type (Active Selector)** | Selektor tipe tiang aktif: Tiang Existing Telkom (`EXT TEL`, `EXT 7 2.5\" - 4\"`, `EXT 9 4\"`) dan Tiang Baru (`NP 7 2.5\" - 4\"`, `NP 9 4\"`). |
| **`03_Offsets_And_Snapping.png`** | **Offsets & Snapping** | Pengaturan jarak offset tiang dari tepi as jalan dan radius toleransi snapping otomatis. |
| **`04_Accessories_At_Insertion_Point.png`**| **Accessories (Aksesoris Tiang)** | Opsi penambahan otomatis aksesoris tiang saat penempatan: *Slack Cable*, *FAT/ODP*, *FDT 48C/72C*, dan *Closure*. |
| **`05_Helper_Options.png`** | **Helper Options** | Garis pemandu visual (*Visual Helper Line*) dan penempatan tiang interaktif via klik kanan/tengah di panorama 360° StreetView. |
| **`06_Actions.png`** | **Actions (Tool Operasional)** | Tombol aksi cepat: *Place Direct in CAD*, sinkronisasi klik CAD ke StreetView (*Locate in StreetView*), Undo, dan pencarian koordinat input manual. |
| **`07_StreetView_Cam_Metadata.png`** | **StreetView Cam Metadata** | Tampilan koordinat kamera StreetView terkini, sudut hadap (*Heading / Pitch*), dan status proyeksi terakhir. |
| **`08_Place_Poles_Tiang_Manual.png`** | **Place Poles (Tiang Manual)** | Penempatan beruntun tiang Existing dan Baru langsung di model AutoCAD. |
| **`09_Auto_Generate_Poles_Otomatis.png`** | **Auto-Generate Poles (Tiang Otomatis)** | Generator tiang otomatis di sepanjang koridor jalan dengan penentuan interval span (misal 35m), jarak hindar tiang existing (*avoid radius*), dan pemilihan sisi jalan (Kiri/Kanan). |
| **`10_FAT_FDT_And_Slack_Blocks.png`** | **FAT, FDT & Slack Blocks** | Parameter alokasi core skematik FAT (Prefix line, counter index, kode FDT induk, skala), serta penempatan blok FDT 48/72, Slack Hanger, dan Closure (24/48/144 core). |
| **`11_Drawing_Templates_And_Sections.png`**| **Drawing Templates & Sections** | Penempatan template etiket gambar (*Frame SnD Kasar*), kop gambar, dan diagram potongan melintang jalan. |

---

## 4. 📂 `03_Tab3_Routing_and_Design/` (Routing Kabel & Desain Otomatis)

| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Routing_And_Design.png`** | **Tampilan Penuh Tab Routing & Design** | Screenshot modul kecerdasan buatan desain rute kabel optik. |
| **`01_Auto_Route_Cable_Generator.png`** | **Auto Route Cable Generator (BETA)** | Mesin optimasi desain FTTH otomatis: pengelompokan pelanggan (*Clustering Sub/FAT* min 8 max 16), penentuan titik tiang FAT terbaik, kalkulasi jarak drop wire, pemilihan rute kabel terpendek dari FDT (Multi-FDT support), dan *1-Click Complete Auto Design*. |
| **`02_Koreksi_Rute_Manual_Advanced.png`** | **Koreksi Rute Manual (Advanced)** | Alat koreksi arah rute kabel: koreksi jalur penuh dari FDT atau koreksi parsial menyambung dari tiang tertentu dengan target jumlah line kabel. |
| **`03_Scale_Tools.png`** | **Scale Tools** | Pengubah skala objek blok/teks di tempat (*Scale In Place*) tanpa mengubah titik koordinat insersi, pembatalan skala (*Revert Scale*), dan penyelarasan skala (*Match Scale*). |

---

## 5. 📂 `04_Tab4_Labels_and_Tables/` (Pelabelan Otomatis & Link Budget Loss)

| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Labels_And_Tables.png`** | **Tampilan Penuh Tab Labels & Tables** | Screenshot modul pembuatan label teknis dan kalkulasi tabel. |
| **`01_Pole_Label_Settings.png`** | **Pole Label Settings** | Pembuatan label nama tiang otomatis mendukung 4 skenario penomoran: *Konstan (P000)*, *Seri Berurutan*, *Hierarki Kabel & Urutan FDT (Line A/B...)*, dan *Manual Selektif*. |
| **`02_FAT_ODP_Label_Settings.png`** | **FAT/ODP Label Settings** | Generator teks identitas FAT (Prefix FDT Code + Index nomor FAT) pada layer standar. |
| **`03_FAT_Table_Generation.png`** | **FAT Table Generation & Link Budget** | Kalkulasi redaman optik otomatis (Optical Power OLT, Fiber Attenuation dB/km, Insertion Loss Splitter 1:4 / 1:8, Splice & Connector Loss, Slack kabel) dan pencetakan tabel ringkasan langsung ke DWG. |
| **`04_OLT_Reference_Settings.png`** | **OLT Reference Settings** | Manajemen kode referensi OLT induk (pencarian, pemilihan, dan konfigurasi master OLT). |
| **`05_FDT_ODC_Labeling.png`** | **FDT/ODC Labeling** | Pelabelan identitas FDT/ODC utama dan tautan cepat ke *FDT Line Manager*. |
| **`06_FDT_Table_Generation.png`** | **FDT Table Generation** | Pencetakan tabel informasi FDT lengkap beserta alokasi kapasitas line kabel ke drawing. |
| **`07_Cable_Label_Settings.png`** | **Cable Label Settings** | Pelabelan bentang kabel serat optik: Skenario 1 (Standar Nama Kabel) & Skenario 2 (KMZ OTDR Report dengan perhitungan toleransi tarikan dan slack per line). |

---

## 6. 📂 `05_Tab5_Exports_and_Reports/` (Summary BOQ & Ekspor Multi-Format)

| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Tab_Exports_And_Reports.png`** | **Tampilan Penuh Tab Exports & Reports** | Screenshot panel rekapitulasi data, audit BOQ, dan ekspor. |
| **`01_Summary_Configuration.png`** | **Summary Configuration** | Konfigurasi informasi proyek (Nama Kluster, Alamat) dan skenario perhitungan panjang kabel (panjang murni vs toleransi + slack). |
| **`02_Detailed_Summary_Report.png`** | **Detailed Summary Report** | Kotak audit teknis rinci rekapitulasi total material (panjang kabel per kapasitas, jumlah tiang baru/existing, FAT, FDT, Closure). |
| **`03_Project_Management.png`** | **Project Management** | Simpan (*Save Proj*) dan Buka (*Load Proj*) status seleksi data ekspor APD/ABD dalam format file proyek. |
| **`04_1_Set_FDT.png`** | **1. Set FDT** | Pemilihan FDT aktif untuk pengurutan manual hierarki APD. |
| **`05_2_Current_Line.png`** | **2. Current Line** | Pemilihan jalur line kabel aktif (`LINE A` s/d `LINE E`). |
| **`06_3_Add_Objects_To_Line.png`** | **3. Add Objects to Line** | Seleksi berurutan objek fisik DWG ke dalam line: Boundary FAT, Node FAT, Homepass Cover, Tiang, Kabel Distribusi, Slack Hanger, Sling Wire, Closure, Handhole & Trenching. |
| **`07_KML_Export_Options.png`** | **KML Export Options** | Opsi ekspor Google Earth: *Cluster Mode* vs *Subfeeder Mode*, *Hide Empty Folders*, *Pengurutan Alfanumerik Homepass (1, 2, 3A...)*, dan radius pencarian label. |
| **`08_Selection_Status.png`** | **Selection Status & Export Output** | Struktur pohon hierarki APD (*TreeView*), tombol validasi integritas (*QA Check*), serta ekspor multi-format ke **KML/KMZ**, **GeoJSON**, dan **BOM Excel/CSV**. |
| **`09_Auto_APD_ABD_Export_Setup.png`** | **Auto APD/ABD Export Setup** | Mesin ekspor otomatis 1-klik yang memindai seluruh rute kabel, tiang, closure, dan FAT tanpa perlu seleksi manual satu per satu. Dilengkapi fitur *Draw Helper Arrow*. |
| **`10_Auto_Export_Status_Log.png`** | **Auto Export Status Log** | Terminal monitor log pemrosesan parsing entitas CAD saat proses ekspor KMZ berlangsung. |
| **`11_KML_Snd_Kasar_Export.png`** | **KML Snd Kasar Export** | Ekspor cepat seluruh layer survei dasar (Homepass, Road Edge, Trotoar, ROW, Percil, Tiang) ke KML dengan ikon circle marker berwarna sesuai warna CAD. |
| **`12_SnD_Kasar_Summary.png`** | **SnD Kasar Summary** | Penghitung cepat total panjang rute as jalan, total nomor rumah tersurvei, dan ringkasan tiang pada tahap awal desain kasar. |

---

## 7. 📂 `06_Tab6_Future_Tools/` (Peralatan Lanjutan, DRM & Publishing)

### 🔹 Sub 1: `Sub1_Isolation_Manager/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Subtab_Isolation_Manager.png`** | **Tampilan Penuh Subtab Isolation Manager** | Screenshot panel isolasi geofencing. |
| **`01_Processing_Isolation_Area.png`** | **Processing Isolation Area (Geofencing)** | Tombol peluncur cepat jendela pengelola batas isolasi area desain. |

### 🔹 Sub 2: `Sub2_DRM/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Subtab_DRM.png`** | **Tampilan Penuh Subtab DRM** | Screenshot kumpulan peralatan manipulasi cepat teks dan tiang. |
| **`01_Text_Value_Copy_Tool_CPYVAL.png`** | **Text Value Copy Tool (CPYVAL)** | Menyalin nilai teks dari satu objek Text/MText ke objek lain secara instan dengan opsi otomatis menghapus teks sumber (*Erase Source*). |
| **`02_Pole_Replacement_Tool.png`** | **Pole Replacement Tool** | Penggantian tipe tiang massal atau selektif (berdasarkan tipe sumber, window selection, atau radius jarak centerline). |
| **`03_Rotate_Text_Block_Tool_RTEXT.png`** | **Rotate Text/Block Tool (RTEXT)** | Merotasi objek Text, MText, atau Block Reference secara interaktif mengikuti sudut 2 titik acuan. |
| **`04_Replace_Text_Tool_REPTEXT.png`** | **Replace Text Tool (REPTEXT)** | Mengganti isi teks/atribut secara massal (mode Single atau Bulk Window). |
| **`05_Homepass_Classification_Tool.png`**| **Homepass Classification Tool** | Klasifikasi manual status pelanggan menjadi *Uncover / Eliminate* (`FTTH-UNCOVER-HOME`) atau *Cover / Restore* (`FTTH-NOMOR-RUMAH`). |

### 🔹 Sub 3: `Sub3_Publishing/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Subtab_Publishing.png`** | **Tampilan Penuh Subtab Publishing** | Screenshot peralatan persiapan pencetakan lembar layout gambar kerja. |
| **`01_Smart_Layout_Duplicator.png`** | **Smart Layout Duplicator** | Duplikasi layout sheet AutoCAD secara otomatis (misal Schematics, Mancore, FDT Info) dengan penamaan berurutan (Prefix, Suffix, Alfanumerik A-Z, hitungan jumlah copy). |
| **`02_Smart_Layout_Viewport_Aligner.png`** | **Smart Layout Viewport Aligner** | Menyelaraskan (*align*) posisi viewport layout secara presisi ke koordinat frame keymap model space berdasarkan identifikasi nama blok atau tag atribut nomor sheet. |
| **`03_Page_Numbering_Tool.png`** | **Page Numbering Tool (NOMORHALAMAN)** | Penomoran halaman lembar layout berurutan (*Hal- 1, Hal- 2...*) secara interaktif per klik atau seleksi bulk. |

### 🔹 Sub 4: `Sub4_Draw_Cable_and_Wire/`
| Nama File | Nama Kartu / Fitur | Fungsi & Deskripsi Teknis |
| :--- | :--- | :--- |
| **`00_Full_Subtab_Draw_Cable_And_Wire.png`**| **Tampilan Penuh Subtab Draw Cable & Wire** | Screenshot modul penggambaran kabel manual dan bentang kabel. |
| **`01_Draw_Cable_And_Wire.png`** | **Draw Cable & Wire** | Menggambar polyline kabel optik pada layer dan warna standar (Kabel 24C Hijau, 36C Coklat, 48C Ungu, 96C Cyan, 144C Merah, 288C Kuning), Auto-Route Cable antartiang, dan Sling Wire (tebal 0.30 mm). |
| **`02_Cable_Span_Labels.png`** | **Cable Span Labels** | Pembuatan teks label panjang bentang kabel antar tiang (*Cable Span Length*) secara otomatis. |

---

## 🎯 Panduan Penggunaan untuk AI Copywriter / Marketer

1. **Membuat Banner Promosi Fitur Utama:**
   - Gunakan `01_Auto_Route_Cable_Generator.png` (Tab 3) + `00_Full_Tab_Routing_And_Design.png` untuk mengiklankan fitur **"Auto Routing & Complete FTTH Design 1-Klik"**.
   - Gunakan `UI_Win_01_Activation_License.png` untuk materi kampanye **"Aktivasi Instan dengan QRIS Otomatis & Trial 1 Bulan"**.
   - Gunakan `03_FAT_Table_Generation.png` untuk menonjolkan fitur **"Perhitungan Link Budget Loss & Redaman Optik Otomatis di AutoCAD"**.
   - Gunakan `08_Selection_Status.png` dan `09_Auto_APD_ABD_Export_Setup.png` untuk materi promosi **"Ekspor Otomatis ke Google Earth KMZ, GeoJSON, & BOQ Excel"**.

2. **Membuat Carousel Tutorial LinkedIn / Instagram:**
   - **Slide 1:** `01_Boundary_And_Map_Downloader.png` (Download Citra Satelit)
   - **Slide 2:** `04_Basemap_Operations.png` (Generate Basemap Jalan)
   - **Slide 3:** `02_Master_Placer_And_Labeling.png` (Penomoran Rumah)
   - **Slide 4:** `09_Auto_Generate_Poles_Otomatis.png` (Auto Tiang)
   - **Slide 5:** `01_Auto_Route_Cable_Generator.png` (Auto Route Kabel)
   - **Slide 6:** `09_Auto_APD_ABD_Export_Setup.png` (Ekspor KMZ Google Earth)
