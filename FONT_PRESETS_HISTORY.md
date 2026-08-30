# 🔤 Riwayat & Katalog Pilihan Font (Typography Presets History)

Dokumen ini mencatat seluruh riwayat versi tipografi (*font pairing*) pada website **FTTH Design Planner**. Setiap perubahan akan dicatat secara berurutan sehingga Anda dapat kembali ke versi mana pun kapan saja hanya dengan menyebutkan nomor perubahannya (misal: *"kembali ke sebelum perubahan 1"* atau *"pakai perubahan 2"*).

---

## 📌 Katalog Presets & Riwayat Versi

| No. Versi | Nama Preset / Gaya | Heading Font | Body Font | Code / Tech Font | Karakter & Kesan Visual | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Versi 0 (Baseline)** | *Modern Tech Benchmark* | `Montserrat` | `Inter` | `JetBrains Mono` | Tegas, modern, standar baku produk SaaS & UI Telco global. | *Tersedia (Arsip)* |
| **Perubahan 1** | *Cyber Engineering & Sharp CAD* | `Rajdhani` | `Plus Jakarta Sans` | `Fira Code` | Sangat futuristis, tajam, bernuansa blueprint CAD berkecepatan tinggi. | *Tersedia (Arsip)* |
| **Perubahan 2** | *Precision Minimalist Architecture* | `Space Grotesk` | `DM Sans` | `Space Mono` | Estetika arsitektural bersih, kontemporer, dan elegan. | *Tersedia (Arsip)* |
| **Perubahan 3** | *Enterprise Telco Corporate* | `Outfit` | `Plus Jakarta Sans` | `Roboto Mono` | Berbobot, kokoh, formal, sangat meyakinkan untuk kontraktor B2B. | 🏆 **TERPILIH (PILIHAN FINAL)** |
| **Perubahan 4** | *Technical Aerospace Blueprint* | `Saira` | `Exo 2` | `Share Tech Mono` | Tipografi condensed berenergi tinggi, maskulin, dan bertenaga. | *Tersedia (Arsip)* |

---

## 📝 Catatan Konfigurasi CSS per Versi

### 🔹 Versi 0 (Baseline / Awal - Yang Sedang Aktif):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

h1, h2, h3, h4, .font-heading { font-family: 'Montserrat', sans-serif; }
body { font-family: 'Inter', sans-serif; }
.font-mono-tech { font-family: 'JetBrains Mono', monospace; }
```

### 🔹 Perubahan 1 (Cyber Engineering & Sharp CAD):
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Rajdhani:wght@600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

h1, h2, h3, h4, .font-heading { font-family: 'Rajdhani', sans-serif; letter-spacing: 0.5px; }
body { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-mono-tech { font-family: 'Fira Code', monospace; }
```

### 🔹 Perubahan 2 (Precision Minimalist Architecture):
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@600;700&family=Space+Mono:wght@400;700&display=swap');

h1, h2, h3, h4, .font-heading { font-family: 'Space Grotesk', sans-serif; }
body { font-family: 'DM Sans', sans-serif; }
.font-mono-tech { font-family: 'Space Mono', monospace; }
```

### 🔹 Perubahan 3 (Enterprise Telco Corporate):
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap');

h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
body { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-mono-tech { font-family: 'Roboto Mono', monospace; }
```

### 🔹 Perubahan 4 (Technical Aerospace Blueprint):
```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Saira:wght@600;700;800&family=Share+Tech+Mono&display=swap');

h1, h2, h3, h4, .font-heading { font-family: 'Saira', sans-serif; }
body { font-family: 'Exo 2', sans-serif; }
.font-mono-tech { font-family: 'Share Tech Mono', monospace; }
```
