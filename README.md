# 🎬 Serenova: Static Streaming Platform

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![TMDB API](https://img.shields.io/badge/TMDB-01B4E4?style=flat&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![react-youtube](https://img.shields.io/badge/react--youtube-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.npmjs.com/package/react-youtube)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

A visually engaging Netflix UI clone built using React. It fetches real-time data from The Movie Database (TMDB) API, displays trending content by categories, and plays trailers using the YouTube player API.

## 🚀 Features

- 📺 Responsive Netflix-like UI

- 🔄 Dynamic movie categories (Trending, Action, Comedy, etc.)

- 🎞️ Trailer playback via YouTube (click poster to play)

- 🌐 Axios integration for API calls

- 🎲 Random featured banner from Netflix Originals

- 🚀 Deployed on Firebase

## 🛠️ Tech Stack

Frontend: React, HTML5, CSS3

API: TMDB (The Movie Database)

Utilities: Axios, movie-trailer, react-youtube

Deployment: Firebase Hosting

## 📦 Installation

### ✅ Prerequisites

- Node.js (v14+ recommended)

- npm (v6+)

- Firebase CLI (for deployment)


## 📥 Setup Steps
1️⃣ Clone the repository:

```bash
git clone https://github.com/ayushak394/netflix-reactjs.git
cd netflix-reactjs
```
2️⃣ Install dependencies:

```bash
npm install
```
3️⃣ Start the development server:

```bash
npm start
```
4️⃣ Visit the app at:

```bash
http://localhost:3000
```

## 🔐 API Key Setup

This project uses TMDB's API to fetch movie data. Create an account at TMDB. Navigate to your API settings and generate an API key. Replace the hardcoded key in requests.js:

```bash
const API_KEY = "your_tmdb_api_key";
```
Note: For production apps, store keys securely using environment variables.

## 🌐 Live Demo

[Click here to view Serenova Live](https://serenova.netlify.app/)

## 📜 License
This project is created for learning and educational purposes. Contributions and improvements are welcome!




