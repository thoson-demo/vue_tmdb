# Vue IMDb Clone

A modern IMDb website clone built with Vue 3 + TypeScript + Vite, featuring movie browsing, search, and detailed information from The Movie Database (TMDB).

**🌐 Cloning:** [https://www.imdb.com/](https://www.imdb.com/)

## 🎬 Demo

**GitHub Pages:** [https://thoson-demo.github.io/vue_tmdb/](https://thoson-demo.github.io/vue_tmdb/)

## 🎯 Project Overview

This project is a comprehensive clone of IMDb with 2 main screens:

- **Home Page**: Movie list with filtering, search, and categories
- **Movie Detail Page**: Detailed information about selected movie

## ✨ Features

- **🏠 Home Page:**
  - Hero banner with featured movie
  - Display trending, popular, and top-rated movies
  - Search movies by title
  - Browse movies by genres
  - Filter and sort functionality

- **🎞️ Movie Detail:**
  - Detailed movie information (synopsis, ratings, release date)
  - Cast and crew information
  - Trailers and videos
  - Photo gallery
  - Reviews and ratings
  - Similar movies recommendations

## ✅ Implementation Progress

### Core Concepts

- [x] **Component** - Create reusable components (MovieCard, Header, Footer)
- [x] **Props** - Pass data from parent to child component
- [x] **Emits** - Emit events from child to parent component
- [x] **Reactive Data** - `ref()` and `reactive()` to create reactive data
- [x] **Computed Properties** - Compute dependent data (filter movies, sorting)
- [x] **Methods** - Functions to handle logic (fetch data, handle click)
- [x] **Lifecycle Hooks** - `onMounted()`, `onBeforeMount()` to fetch data

### Routing

- [x] **Vue Router** - Navigate between pages
- [ ] **Router-link** - Navigate without page reload
- [x] **Route Params** - Get movie ID from URL (`/movie/:id`)
- [x] **Router Navigation** - `$router.push()`, `$router.back()`
- [x] **Named Routes** - Name routes for easier management

### Data Fetching

- [x] **Axios / Fetch API** - Call API to fetch movie data
- [x] **Async/Await** - Handle asynchronous operations
- [ ] **Loading State** - Display loading status
- [ ] **Error Handling** - Handle errors when fetching API

### Styling & UI

- [ ] **Scoped CSS** - CSS only applies to current component
- [ ] **Dynamic Class Binding** - `:class` to bind classes dynamically
- [ ] **Dynamic Style Binding** - `:style` to bind styles dynamically
- [ ] **Conditional Rendering** - `v-if`, `v-else`, `v-show`
- [ ] **List Rendering** - `v-for` to render movie lists

### State Management

- [x] **Pinia** - Manage global state (auth store)
- [ ] **Composables** - Create reusable logic

## 🎨 UI Components

### Layout Components

- [x] **AppBar** - Header with logo, menu, search bar, watchlist, user info
- [ ] **AppFooter** - Footer with links, copyright, social, get app
- [ ] **MainLayout** - Layout wrapper for entire app

### Home Page Components

- [x] **HeroBanner** - Large banner with featured movie
- [x] **MovieSection** - Section wrapper for movie lists
- [x] **MovieCard** - Card displaying basic info (poster, title, rating)
- [ ] **FilterBar** - Filter bar for movies (genre, year, rating)
- [ ] **SearchBar** - Movie search input
- [ ] **LoadingSpinner** - Display while loading data
- [ ] **Pagination** - Pagination for movie list

### Movie Detail Page Components

- [ ] **MovieHero** - Banner with backdrop image and main info
- [ ] **MovieInfo** - Detailed info (title, rating, genres, release date)
- [ ] **MoviePoster** - Large movie poster
- [ ] **RatingSection** - Rating display with stars/score
- [ ] **OverviewSection** - Description/synopsis section
- [ ] **CastList** - Cast list with avatars
- [ ] **CastCard** - Card for each cast member
- [ ] **TrailerSection** - Embedded trailer video
- [ ] **PhotoGallery** - Photo gallery from movie
- [ ] **ReviewsList** - List of reviews
- [ ] **ReviewCard** - Card for each review
- [ ] **SimilarMovies** - Similar movies section
- [ ] **MovieMeta** - Metadata (director, writer, budget, revenue)
- [ ] **WatchlistButton** - Button to add to watchlist

### Shared UI Components

- [x] **Logo** - IMDb logo component
- [x] **TextButton** - Text button with optional icon
- [x] **ThemeButton** - Dark/Light theme toggle
- [x] **UserInfo** - User avatar and name display
- [ ] **StarRating** - Component to display rating with stars
- [ ] **Badge** - Badge for genre, rating label
- [ ] **Button** - Button component with variants
- [ ] **Modal** - Modal for trailer or login
- [ ] **Breadcrumb** - Navigation breadcrumb
- [ ] **ErrorMessage** - Display error messages
- [ ] **EmptyState** - Display when no data available

## 🔧 Technical Features

### Functionality

- [ ] **Responsive Design** - Optimize for mobile, tablet, desktop
- [ ] **Lazy Loading** - Load images on scroll
- [ ] **Infinite Scroll** - Auto-load more movies on scroll
- [ ] **Search Functionality** - Real-time movie search
- [ ] **Filter & Sort** - Filter and sort movies
- [ ] **Route Transitions** - Animation on page navigation
- [ ] **Image Optimization** - Placeholder, fallback images
- [ ] **SEO Meta Tags** - Dynamic meta tags for each page

### Data & API

- [x] **Movie Model** - Data structure for movies
- [x] **API Integration** - Integrate with TMDB API
- [x] **Axios Interceptors** - Token management and refresh
- [x] **Service Layer** - Separated API services
- [ ] **Error Boundaries** - Handle errors gracefully

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript Framework with Composition API
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool and dev server
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management for Vue 3
- **Axios** - Promise-based HTTP client
- **HeroIcons** - Beautiful hand-crafted SVG icons
- **TMDB API** - The Movie Database API for movie data

## 📋 API Resources

### The Movie Database (TMDB) API

- **Website:** [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- **Documentation:** [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)
- **Provides:**
  - Movie information (title, overview, ratings, release dates)
  - Cast & crew details
  - Reviews & ratings
  - Trailers & videos
  - Images & posters
  - Trending, popular, and top-rated movies

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

Create a `.env` file in the root directory and add your TMDB credentials:

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_API_READ_ACCESS_TOKEN=your_read_access_token_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

_Note: You can get a free API key and read access token by registering at [TMDB](https://www.themoviedb.org/settings/api)_

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
│   ├── assets/              # Images, icons, fonts
│   │   └── logo.svg        # IMDb logo
│   ├── components/          # Vue components
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Logo.vue
│   │   │   ├── TextButton.vue
│   │   │   ├── ThemeButton.vue
│   │   │   └── UserInfo.vue
│   │   ├── layout/         # Layout components
│   │   │   ├── AppBar.vue
│   │   │   └── AppFooter.vue
│   │   ├── movie/          # Movie-specific components
│   │   │   ├── MovieCard.vue
│   │   │   └── MovieSection.vue
│   │   └── home/           # Home page components
│   │       └── HeroBanner.vue
│   ├── views/              # Page components/views
│   │   ├── HomePage.vue
│   │   └── MoviePage.vue
│   ├── router/             # Vue Router configuration
│   │   └── index.ts
│   ├── stores/             # Pinia stores (state management)
│   │   └── auth.store.ts
│   ├── services/           # API services and HTTP clients
│   │   ├── api/
│   │   │   ├── axios.ts       # Axios instance with interceptors
│   │   │   ├── endpoints.ts   # API endpoints
│   │   │   └── index.ts
│   │   ├── auth/
│   │   │   ├── auth.service.ts
│   │   │   └── token.service.ts
│   │   └── tmdb/
│   │       ├── movie.service.ts
│   │       └── tv.service.ts
│   ├── composables/        # Vue 3 composables (reusable logic)
│   │   └── useApi.ts
│   ├── types/              # TypeScript interfaces and types
│   │   ├── movie.ts
│   │   ├── auth.ts
│   │   ├── api.ts
│   │   └── index.ts
│   ├── constants/          # App constants and configuration
│   ├── utils/              # Utility functions and helpers
│   ├── styles/             # Global styles and CSS variables
│   │   ├── variables.css   # Material Design 3 color tokens
│   │   └── utilities.css
│   ├── App.vue             # Root component
│   ├── main.ts             # Application entry point
│   ├── style.css           # Global styles
│   └── env.d.ts            # TypeScript environment declarations
├── public/                 # Static assets
├── dist/                   # Build output
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── README_CHECKLIST.md     # Implementation checklist
```

## 💡 Implementation Tips

1. **Start with routing** - Set up Vue Router first with basic routes
2. **API integration early** - Connect to TMDB API and test data fetching
3. **Component-first approach** - Build small reusable components
4. **Mobile-first design** - Design for mobile, then scale up
5. **Use TypeScript** - For better type safety and autocomplete
6. **State management** - Add Pinia only when needed for complex state
7. **Service layer** - Separate API calls from components
8. **Material Design 3** - Follow Material Design guidelines for UI

## ✨ Bonus Features (Advanced)

- [ ] User authentication (login/register)
- [ ] Personal watchlist with local storage/backend
- [x] Dark/Light theme toggle
- [ ] Multiple language support (i18n)
- [ ] Advanced filters (actors, directors, studios)
- [ ] Movie comparison feature
- [ ] Social sharing buttons
- [ ] Comments/Discussion section
- [ ] Watch providers integration
- [ ] Keyboard shortcuts

## 📚 Learning Resources

### Vue Documentation

- **Vue 3 Official Docs:** [https://vuejs.org/](https://vuejs.org/)
- **Vue Router:** [https://router.vuejs.org/](https://router.vuejs.org/)
- **Pinia (State Management):** [https://pinia.vuejs.org/](https://pinia.vuejs.org/)

### Material Design

- **Material Design 3:** [https://m3.material.io/](https://m3.material.io/)
- **Material Theme Builder:** [https://m3.material.io/theme-builder](https://m3.material.io/theme-builder)

### API

- **TMDB API Docs:** [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)

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
