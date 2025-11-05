# Vue TMDB - Movie App

A modern web application built with Vue 3 + TypeScript + Vite for browsing movie information from The Movie Database (TMDB).

## 🎬 Demo

**GitHub Pages:** [https://thoson-demo.github.io/vue_tmdb/](https://thoson-demo.github.io/vue_tmdb/)

## 🎨 Design

Design based on Figma template: [Movie App UI Design](https://www.figma.com/community/file/1351311179805670990)

## ✨ Features

- **🏠 Home Page:**
  - Display popular movies list
  - Search movies by title
  - Browse movies by genres

- **🎞️ Movie Detail:**
  - Detailed movie information (synopsis, ratings, release year)
  - Trailers and images
  - Cast and crew information

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **TMDB API** - Movie data source

## 📋 Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0 or yarn >= 1.22.0

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/thoson-demo/vue_tmdb.git
cd vue_tmdb
```

### 2. Install dependencies

```bash
npm install
```

or using yarn:

```bash
yarn install
```

### 3. Configure API Key

Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

_Note: You can get a free API key by registering at [TMDB](https://www.themoviedb.org/settings/api)_

### 4. Run the application

#### Development mode:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

#### Build for production:

```bash
npm run build
```

#### Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
vue_tmdb/
├── src/
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # Vue components
│   │   ├── ui/          # Reusable UI components (buttons, inputs, etc.)
│   │   ├── layout/      # Layout components (header, footer, sidebar)
│   │   └── movie/       # Movie-specific components
│   ├── views/           # Page components/views
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores (state management)
│   ├── services/        # API services and HTTP clients
│   ├── composables/     # Vue 3 composables (reusable logic)
│   ├── types/           # TypeScript interfaces and types
│   ├── constants/       # App constants and configuration
│   ├── utils/           # Utility functions and helpers
│   └── styles/          # Global styles and CSS variables
├── public/              # Static assets
└── dist/                # Build output
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Contact

- **Author:** thoson-demo
- **Repository:** [https://github.com/thoson-demo/vue_tmdb](https://github.com/thoson-demo/vue_tmdb)

---

⭐ If you find this project useful, please give it a star!
