# Standard Operating Procedure (SOP): Product Release & Website Update

Dokumen ini adalah pedoman standar (Runbook) untuk mengupdate versi, link download, dan changelog produk pada landing page dan manifest rilis. 
Gunakan panduan ini agar setiap rilis versi baru dapat dilakukan secara instan, akurat, dan tanpa perlu analisa ulang dari awal.

---

## 1. Lokasi Repositori & Live URL
- **Folder Lokal**: `D:\SWD SOFT DEVELOPER\Product Marketing\outputs\landing-page`
- **GitHub Remote**: `https://github.com/syaifulwachid/Production-Landing-Page-FTTH-Design-Planner-v3.6.9.git` (Branch: `main`)
- **Live Landing Page**: `https://syaifulwachid.github.io/Production-Landing-Page-FTTH-Design-Planner-v3.6.9/`
- **Live JSON Manifest**: `https://syaifulwachid.github.io/Production-Landing-Page-FTTH-Design-Planner-v3.6.9/releases.json`

---

## 2. Peta Kunci Produk (Product Keys) di `releases.json`

| Product Key | Nama Produk | File Proyek / Lokasi Build |
| :--- | :--- | :--- |
| `ftth_design_planner` | FTTH Design Planner | Proyek AutoCAD Plugin (.NET 4.8 & .NET 8) |
| `kmz_converter` | KMZ To HPDB And BOQ Converter | Proyek Converter V4.0 |
| `radial_menu` | RadialMenu Setup | `D:\14914FroltSoftware.RadialMenu_1.29.1.0_x64__v5vt3srnrv4et\radial_menu_tauri` |
| `ontop_highlighter` | OnTop Highlighter | Proyek Desktop Tool |
| `tssr_geo_tag` | TSSR Geo TAG Capture | Proyek Survei Lapangan |
| `ftth_pro_report` | FTTH-Pro Report (APK) | Proyek Android APK |

---

## 3. Checklist Langkah Update Saat Versi Baru Rilis

### Langkah 1: Update `releases.json` (Single Source of Truth)
Edit berkas `releases.json`:
1. Ubah `"last_updated"` ke timestamp ISO saat ini (contoh: `"2026-09-14T11:55:00.000Z"`).
2. Temukan kunci produk terkait (misal: `"radial_menu"`).
3. Perbarui:
   - `"latest_version"`: Format 4 digit (misal: `"1.35.0.0"`).
   - `"display_version"`: Teks tampilan (misal: `"v1.35.0"`).
   - `"release_date"`: Tanggal rilis `YYYY-MM-DD`.
   - `"download_url"`: Link Google Drive baru.
   - `"changelog"`: Array string poin-poin fitur/perbaikan baru.

### Langkah 2: Sinkronisasi Statis di `index.html` (Fallback & SEO)
Meskipun `js/main.js` mengupdate teks versi secara dinamis dari `releases.json`, perbarui juga teks statis di `index.html` untuk konsistensi:
- Card pilar produk (Judul, tombol Download `href`, dan badge).
- Tabel perbandingan / paket harga (Bundling bonus & Standalone card).
- Teks link footer produk.

### Langkah 3: Sinkronisasi Modal Galeri di `js/main.js`
Jika produk memiliki entri galeri foto di `PRODUCT_GALLERIES` (seperti `radial`), perbarui nama versinya:
```javascript
radial: {
  name: "RadialMenu Setup v1.35.0",
  ...
}
```

### Langkah 4: Git Commit & Push ke GitHub Pages
Jalankan perintah berikut di terminal:
```powershell
# 1. Pastikan repo sinkron dengan remote
git -C "D:\SWD SOFT DEVELOPER\Product Marketing\outputs\landing-page" pull --rebase origin main

# 2. Stage semua file yang diubah
git -C "D:\SWD SOFT DEVELOPER\Product Marketing\outputs\landing-page" add releases.json index.html js/main.js assets/screenshots/README.md

# 3. Commit dengan format pesan jelas
git -C "D:\SWD SOFT DEVELOPER\Product Marketing\outputs\landing-page" commit -m "chore: update [NamaProduk] to vX.Y.Z with latest download URL and changelog"

# 4. Push ke origin main
git -C "D:\SWD SOFT DEVELOPER\Product Marketing\outputs\landing-page" push origin main
```

---

## 4. Verifikasi Akhir
Setelah push berhasil, tunggu 30-60 detik untuk build GitHub Pages, lalu verifikasi:
1. Buka `https://syaifulwachid.github.io/Production-Landing-Page-FTTH-Design-Planner-v3.6.9/releases.json` di browser untuk memastikan JSON telah terupdate.
2. Buka Landing Page dan pastikan tombol download produk mengarah ke URL terbaru.
