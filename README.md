<div align="center">

# 🎬 MovieFlix

A modern cross-platform movie discovery application built with **React Native**, **Expo**, **TypeScript**, **NativeWind**, **TMDB API**, and **Appwrite**.

<img src="assets/readme/banner.png" alt="MovieFlix Banner" />

<br/>

<img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native"/>
<img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="NativeWind"/>
<img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite"/>

</div>

---

# 📋 Table of Contents

- [Introduction](#-introduction)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)

---

# 🤖 Introduction

**MovieFlix** is a modern movie discovery application that enables users to browse trending movies, search through thousands of titles, view detailed movie information, and bookmark their favorite movies for future viewing.

The application integrates the **TMDB API** to provide real-time movie data and uses **Appwrite** to store search analytics, enabling a dynamic trending movies section based on user activity. Built using **Expo Router**, **TypeScript**, and **NativeWind**, MovieFlix delivers a fast, responsive, and visually appealing mobile experience for both Android and iOS.

---

# 📱 Screenshots

## 🏠 Home Screen

Browse trending and popular movies with an elegant dark-themed interface.

> **Replace with your screenshot**

<img src="assets/readme/home.png" alt="Home Screen" width="260"/>

---

## 🔍 Search Screen

Search any movie instantly with real-time API integration.

> **Replace with your screenshot**

<img src="assets/readme/search.png" alt="Search Screen" width="260"/>

---

## 🎥 Movie Details Screen

View complete information about a movie including ratings, genres, overview, runtime, budget, revenue, production companies, and bookmark functionality.

> **Replace with your screenshot**

<img src="assets/readme/details.png" alt="Details Screen" width="260"/>

---

# 🔥 Features

### 🎬 Discover Popular Movies

Explore a curated collection of trending and popular movies fetched directly from the TMDB API.

---

### 🔎 Powerful Movie Search

Search thousands of movies instantly with fast, real-time results powered by the TMDB API.

---

### 📈 Trending Movies

MovieFlix tracks user searches using Appwrite and automatically generates a list of trending movies based on search frequency.

---

### 🎥 Detailed Movie Information

Access comprehensive information for every movie, including:

- Movie Overview
- Release Date
- Runtime
- Genres
- Average Rating
- Vote Count
- Budget
- Revenue
- Production Companies

---

### ⭐ Bookmark Favorite Movies

Save your favorite movies locally using AsyncStorage and access them anytime, even after restarting the application.

---

### ⚡ Persistent Local Storage

Bookmarked movies remain available across application launches using AsyncStorage persistence.

---

### 🚀 Fast Navigation

Built with Expo Router for smooth and intuitive navigation between screens.

---

### 🎨 Beautiful Modern UI

- Dark Theme
- Responsive Layout
- High Quality Movie Posters
- Clean Typography
- Smooth Navigation Experience
- Mobile-First Design

---

### 📱 Cross-Platform Compatibility

Developed with React Native and Expo, allowing the same codebase to run on both Android and iOS.

---

### 🏗️ Scalable Architecture

The project follows a clean and maintainable architecture featuring:

- Reusable Components
- Custom Hooks
- Modular Services
- Utility Functions
- TypeScript Interfaces
- Organized Folder Structure
- Separation of UI and Business Logic

---

### ⚙️ Real-Time Data Fetching

Fetches the latest movie information dynamically from TMDB, ensuring up-to-date content.

---

### 💨 Optimized Performance

- Lazy API requests
- Efficient state management
- Lightweight component structure
- Optimized rendering
- Fast screen transitions

---

# ⚙️ Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind
- AsyncStorage
- Appwrite
- TMDB API

---

# 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/<your-github-username>/movieflix.git

cd movieflix
```

Install dependencies.

```bash
npm install
```

or

```bash
yarn
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
EXPO_PUBLIC_MOVIE_API_KEY=

EXPO_PUBLIC_APPWRITE_PROJECT_ID=

EXPO_PUBLIC_APPWRITE_DATABASE_ID=

EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your own credentials.

- **TMDB API Key** – https://www.themoviedb.org/settings/api
- **Appwrite Project** – https://cloud.appwrite.io/

---

# ▶️ Running the Project

Start the Expo development server.

```bash
npx expo start
```

Run on Android.

```bash
npx expo run:android
```

Run on iOS.

```bash
npx expo run:ios
```

Or simply scan the QR code using **Expo Go** on your mobile device.

---

# 📸 Adding Screenshots

Place your screenshots inside the following directory:

```text
assets/
└── readme/
    ├── banner.png
    ├── home.png
    ├── search.png
    └── details.png
```

The README will automatically display them.

---

# 🚀 Future Enhancements

- 🎞️ Watch movie trailers
- 👤 User Authentication
- ❤️ Cloud-based Favorites
- 📝 User Reviews
- ⭐ Rating System
- 🎭 Genre Filtering
- 🌙 Light/Dark Theme Toggle
- 🔔 Movie Release Notifications
- 📺 TV Shows Support
- 🎬 Personalized Recommendations

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin

---

<div align="center">

⭐ If you like this project, consider giving it a star!

Made with ❤️ using React Native, Expo, TypeScript, Appwrite, and TMDB API.

</div>
