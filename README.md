<div align="center">

# 🛒 ShopZone

### A Modern eCommerce Experience Built with React

<br/>

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<br/>

> A fully responsive, production-ready eCommerce web application featuring real-time search, dynamic cart management, and a clean modern UI — built entirely with React and Tailwind CSS.

<br/>

[🌐 Live Demo](https://shopzone.vercel.app) &nbsp;·&nbsp; [📁 Source Code](https://github.com/VIGNESH-T2005/shopzone) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/VIGNESH-T2005/shopzone/issues)

<br/>

---

</div>

<br/>

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages & Routes](#-pages--routes)
- [Architecture](#-architecture)
- [Upcoming Features](#-upcoming-features)
- [Author](#-author)

<br/>

---

## Overview

**ShopZone** is a frontend eCommerce application designed to simulate a real-world shopping experience. Users can browse products, filter by category, search in real time, view detailed product pages, manage their cart, and proceed to checkout — all without a backend, powered entirely by React's Context API for state management.

This project demonstrates core React concepts including component architecture, global state management, dynamic routing, and responsive UI design using Tailwind CSS.

<br/>

---

## Features

<br/>

| Feature | Description | Status |
|---------|-------------|--------|
| 🔍 Real-time Search | Filter products by name as you type | ✅ Live |
| 🗂️ Category Filter | Browse Electronics, Fashion, Accessories | ✅ Live |
| 🛒 Cart Management | Add, remove, increase, decrease items | ✅ Live |
| 💰 Order Summary | Live total price with item count | ✅ Live |
| 📦 Product Detail | Full product view with description & rating | ✅ Live |
| 🔢 Cart Badge | Navbar shows live cart item count | ✅ Live |
| 📱 Responsive Design | Fully optimized for mobile, tablet, desktop | ✅ Live |


<br/>

---

## Tech Stack

<br/>

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18.x | Core UI library |
| [Vite](https://vitejs.dev/) | 5.x | Lightning-fast build tool |
| [Tailwind CSS](https://tailwindcss.com/) | v3 | Utility-first styling |
| [React Router DOM](https://reactrouter.com/) | v6 | Client-side routing |
| Context API | Built-in | Global cart state management |
| Unsplash | CDN | Product images |

<br/>

---

##  Project Structure

```
shopzone/
│
├── public/
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Top navigation with cart badge
│   │   ├── ProductCard.jsx      # Individual product display card
│   │   ├── CartItem.jsx         # Single item row inside cart
│   │   └── Footer.jsx           # Site footer
│   │
│   ├── pages/                   # Route-level page components
│   │   ├── Home.jsx             # Product grid with search & filter
│   │   ├── ProductDetail.jsx    # Single product full view
│   │   └── CartPage.jsx         # Cart items + order summary
│   │
│   ├── context/
│   │   └── CartContext.jsx      # Global cart state via Context API
│   │
│   ├── data/
│   │   └── products.js          # Static product data
│   │
│   ├── App.jsx                  # Root component with routing
│   ├── main.jsx                 # Entry point with providers
│   └── index.css                # Tailwind base imports
│
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

<br/>

---

##  Author

<br/>

<div align="center">

### Vignesh T

*Frontend Developer · React Enthusiast · ECE Final Year*

<br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vignesh-me.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vignesh-t-web-dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VIGNESH-T2005)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/vignesh_webdev)

</div>

<br/>

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

<br/>

*Built with ❤️ by [Vignesh T](https://vignesh-me.vercel.app)*

</div>
