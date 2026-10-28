# 📄 QuickCV — Modern Professional CV Builder

> A fast, interactive, and privacy-focused CV Builder web application built with React 19, Vite, Framer Motion, and @dnd-kit.

---

## ✨ Features

- 📝 **Live Two-Way Form** — Type in your details and watch your CV document update instantly in real time.
- 🎨 **Multiple Professional Templates** — Switch effortlessly between **ATS Plain** (single-column, machine-readable), **Modern** (bold dark header), and **Minimal** (structured sidebar).
- 📊 **Real-Time CV Completeness Meter** — Dynamic 0–100% score with status tiers (*Basic*, *Good*, *Strong*, *All-Star*) and smart actionable suggestions to optimize your resume.
- 📱 **Mobile-First Responsive Design** — Fully optimized for mobile and tablet with a floating drawer toggle for seamless switching between form editing and live preview.
- 🗂️ **Interactive Drag & Drop Reordering** — Reorder your Work Experience and Education timelines with fluid drag-and-drop powered by `@dnd-kit`.
- 🏷️ **Skill Badge Generator** — Automatically formats comma-separated skills into clean, responsive visual badges.
- ❓ **Animated FAQ Accordion** — Interactive FAQ on the landing page featuring smooth ease and micro-slide animations via Framer Motion.
- 🎨 **Theme & Accent Customization** — Sleek *Royal Deep Blue* dark interface (`#081b33`), customizable CV accent swatches, and high-contrast *Snow White* resume paper.
- 📥 **One-Click Vector PDF Export** — Utilizes browser-native `@media print` styling to export real selectable, searchable text—100% ATS scanner friendly.
- 🔒 **100% Private & Client-Side** — Zero database, zero telemetry. All CV information is saved exclusively in your browser's `localStorage`.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| -------- | ---------- | ------- |
| **Language** | JavaScript (ES6+) | Core programming language |
| **Library** | React 19 | UI components & reactive state management |
| **Routing** | React Router 7 | Client-side Single Page Application (SPA) routing |
| **Animation** | Framer Motion | Smooth layout transitions, FAQ accordion, & route animations |
| **Drag & Drop** | @dnd-kit | Accessible drag-and-drop for timeline entries |
| **Icons** | Lucide React | Unified, lightweight SVG icon system |
| **Build Tool** | Vite 8 | Ultra-fast dev server with HMR & optimized production bundling |
| **Styling** | Vanilla CSS | Custom design tokens, `:root` variables, & `@media print` |
| **Storage** | localStorage | Persistent client-side data storage |
| **Deployment** | Vercel | Production hosting with live SPA redirects |

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your machine:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- A modern web browser (Chrome, Edge, Firefox, Safari)

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Vizzly-nM09/CV-Builder.git

# 2. Navigate to project directory
cd CV-Builder

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open `http://localhost:5173` in your browser to start building your CV.

---

## 📚 What I Learned

This project was built from the ground up to master modern React and frontend engineering practices:

### React Core & Architecture
- **JSX & Reusable Components** — Modular architecture with separation of concerns between form controllers, template renderers, and landing page sections.
- **Custom Hooks (`useCVData`)** — Centralized business logic, schema defaults, validation, and `localStorage` synchronization.
- **Context API (`useCVContext`)** — Global broadcast state eliminating prop-drilling across multi-step wizard forms and preview components.
- **Performance & Hooks** — Leveraged `useMemo` for parsing skills, `useRef` for DOM handles, and `React.memo` to eliminate unnecessary re-renders.

### Modern UI & Animation
- **Framer Motion Micro-Interactions** — `<AnimatePresence>` for accordion height collapse/expansion, synchronized SVG chevron rotation, and route transitions.
- **Accessible Drag & Drop (`@dnd-kit`)** — Sortable contexts, pointer sensors, and keyboard-accessible reordering.
- **Responsive Layout Architecture** — Media queries, touch-friendly hit areas (≥44px), and collapsible drawer states for mobile viewports.
- **Print Optimization (`@media print`)** — CSS rules that hide UI controls, remove backgrounds, and ensure exact A4 vector PDF pagination.

### Professional Git Workflow
- **Branching & Pull Requests** — Feature branch development (`git checkout -b feature/name`), atomic commits, and GitHub CLI (`gh`) PR lifecycles.

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Multi-step wizard form with step validation
- [x] Multiple work experience & education entries
- [x] Drag & Drop entry reordering (`@dnd-kit`)
- [x] Instant client-side auto-save (`localStorage`)
- [x] Dynamic app themes & CV accent color picker
- [x] Real-time CV completeness score meter with tips
- [x] Mobile-first responsive layout & drawer toggle
- [x] Unified Lucide icon system
- [x] Landing page with animated FAQ accordion & modern footer
- [x] Vercel live deployment with SPA routing

### ⏳ In Progress & Upcoming
- [ ] Profile photo upload engine (client-side `FileReader` -> Base64 -> `localStorage`)
- [ ] International template redesigns (Michael Harris ATS & Usman Ali Minimal)
- [ ] Document font family selector (Sans-Serif vs Serif toggle)
- [ ] Custom sections system (Projects, Certifications, Awards)
- [ ] Multi-CV profiles manager (store and switch between 2–3 CV slots)
