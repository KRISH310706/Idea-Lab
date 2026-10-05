# GramUdyam (ग्रामउद्यम) — Rural Entrepreneurship Learning Platform

> **College Mini-Project**  
> **Theme:** Rural Entrepreneurship  
> **Focus:** Multilingual digital learning (English, Marathi, Hindi)  
> **Target Audience:** Rural youth, women's self-help groups (Bachat Gat), and aspiring small entrepreneurs.

---

## 📌 Problem Statement

> *"Digital content and training materials relevant to rural entrepreneurship are often not available or easily understandable in local languages and dialects prevalent across Maharashtra's diverse rural communities."*

## 💡 Solution Overview

**GramUdyam** is a lightweight, zero-dependency, static educational website built to make foundational entrepreneurship concepts intuitive and accessible to rural communities. 

### Key Features
1. **Three Language Support (English, मराठी, हिंदी)**: Seamless one-click switching across all navigation, content cards, guidelines, and schemes with authentic, natural local phrasing.
2. **5 Core Entrepreneurship Lessons**:
   - Business Idea identification from local resources
   - Practical village market research (Bazaars & Haats)
   - Finance, budgeting, and pricing calculation
   - Digital marketing via WhatsApp Business, Google Maps, and UPI
   - Step-by-step business initiation & registration
3. **6 Viable Rural Business Ideas**:
   - Food Processing (Pickles, papad, flour, spices)
   - Dairy Products (Milk, paneer, curd, bilona ghee)
   - Handmade Products (Cloth bags, bamboo craft, pottery)
   - Organic Farming (Vermicompost, direct-to-consumer vegetable boxes)
   - Poultry Farming (Desi & Kadaknath country poultry)
   - Local Grocery / Retail (Daily staples & farming inputs)
4. **Verified Government Schemes**:
   - **PMEGP**: Direct link to the official KVIC portal for credit-linked subsidies.
   - **MUDRA**: Direct link to the official Pradhan Mantri MUDRA portal.
   - **SVEP**: Direct link to the National Rural Livelihoods Mission (NRLM) portal.
5. **Text-to-Speech (TTS) Voice Accessibility**:
   - Uses the browser's native **Web Speech API** (`window.speechSynthesis`).
   - Listen to topic details spoken aloud in the selected language (English, Marathi, Hindi) with one click.
   - No external paid APIs, no API keys, and no server required.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, accessible landmarks, and ARIA dialog controls.
- **CSS3**: Custom properties (CSS variables), responsive grid/flexbox, card elevation, and green rural palette.
- **Vanilla JavaScript (ES6+)**: Fast client-side state management, multilingual translation dictionary, and dynamic DOM rendering.
- **Web Speech API**: Browser-native voice synthesis for audible learning.
- **Self-contained SVG Graphics**: Crisp vector illustrations that work 100% offline without external image CDNs.

---

## 📁 Folder Structure

```text
GramUdyam/
├── index.html              # Main HTML markup and structure
├── style.css               # Clean styling, responsive layout & themes
├── script.js               # Translations dictionary, modal logic & TTS engine
├── README.md               # Project documentation and deployment guide
└── assets/
    └── images/
        └── hero-illustration.svg # Vector artwork for rural entrepreneurship
```

---

## 🚀 How to Run Locally

Because this project is built using pure HTML, CSS, and Vanilla JavaScript with **no backend or database**, running it is extremely simple:

### Option 1: Direct File Open (Easiest)
1. Navigate to the project folder `d:\Krish\Idea lab\`.
2. Double-click **`index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge / Mozilla Firefox**.
3. That's it! The website and all its features (including language switching and modals) work immediately.

### Option 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The website will open at `http://127.0.0.1:5500`.

### Option 3: Using Python Built-in HTTP Server
If you prefer a terminal server:
```bash
# Open PowerShell or Command Prompt in the project folder
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Deploy on GitHub Pages (Free)

You can publish this static website to the internet for free using GitHub Pages in under 2 minutes:

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of GramUdyam college mini-project"
   ```
2. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and click **New repository**.
   - Name it `gram-udyam` and keep it **Public**.
   - Do not initialize with a README (you already have one).
3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/gram-udyam.git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub (**Settings** tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
5. **Live URL**:
   - Within 1–2 minutes, your website will be live at:
     `https://<YOUR-USERNAME>.github.io/gram-udyam/`

---

## 🛡️ Academic Note

This project is strictly developed as an undergraduate academic mini-project demonstrating lightweight front-end engineering, accessible UX design, and local language inclusion for rural development.
