📘 Project Documentation
🚀 Overview

This project is a SpaceX Launch Explorer built with React, TypeScript, Tailwind CSS, and React Query.
It provides:

Live launch data from the SpaceX API

Search by mission name

Status filtering (all, success, upcoming, failure)

Infinite scroll for paginated results

Launch detail accordion

Light/Dark theme toggle

Favorite launches saved in localStorage

Responsive design with mobile bottom navigation

📦 Installation

Follow the steps below to set up and run the project locally.

📥 1. Clone the repository

git clone <your-repo-url>
cd <your-project-folder>

📦 2. Install dependencies

Using npm: npm install
Or using pnpm: pnpm install

🏃 4. Start the development server

npm run dev

🏗 5. Build for production

npm run build

This outputs the optimized production build into: dist/

npm run preview

📁 Project Structure

src/
 ├─ components/
 │   ├─ LaunchCard/
 │   ├─ SearchBar/
 │   ├─ StatusSelector/
 │   └─ icons/
 │
 ├─ pages/
 │   ├─ LaunchesPage.tsx
 │   ├─ FavoritePage.tsx
 │
 ├─ context/
 │   └─ FavoritesContext.tsx
 │
 ├─ hooks/
 │   ├─ useFavorites.ts
 │   ├─ useDebounce.ts
 │   └─ useLocalStorage.ts
 │
 ├─ services/
 │   └─ spacex.ts (API calls)
 │
 ├─ styles/
 │   └─ index.css (Tailwind & CSS variables)
 │
 └─ App.tsx

