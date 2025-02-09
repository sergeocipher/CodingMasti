# 🚀CodingMasti

A web application that allows users to search for coding-related questions from selected websites, save useful links, and manage them in a personal library.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Key Components](#key-components)
- [Usage Guide](#usage-guide)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Deployment](#deployment)

---

## 📝 Overview

This project provides a streamlined interface for developers to quickly find and save coding-related questions from multiple sources. Users can search for specific problems, filter by website, and maintain a personal library of important questions.

---

## 🔑 Key Components

1. **Login Page** – User authentication and access control.
2. **Search Prompt Page** – Search for coding questions with filtering options.
3. **Library Page** – Manage and access saved questions.
4. **Google Custom Search API** – Fetch results from selected coding websites.
5. **Local Storage** – Store user bookmarks for later reference.

---

## 📖 Usage Guide

1. **Login:** Enter your name, email, and date to proceed.
2. **Search Questions:** Use the search bar to find relevant coding questions.
3. **Filter Results:** Choose from specific websites (LeetCode, Codeforces, etc.).
4. **Save Questions:** Click the "Save" button to add questions to your library.
5. **View Library:** Access your saved questions in the Library section.
6. **Manage Library:** Remove individual questions or clear all saved links.
7. **Navigation:** Easily switch between the search page and library.

---

## 📌 Features

- 🔐 **User Authentication** – Login system with input validation.
- 🔍 **Search Prompt** – Enter a coding-related question to get relevant results.
- 🌍 **Filtered Search** – Search results from predefined websites (LeetCode, Codeforces, etc.).
- 📂 **Library Management** – Save, view, and delete bookmarked question links.
- 🔄 **Navigation** – Switch between search and saved questions.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **APIs:** Google Custom Search API
- **Storage:** LocalStorage (for saving bookmarks)

---

## 🚀 Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/projectname.git
   cd projectname
   ```

2. Open `index.html` in your browser to start the project.

---

## 📂 Project Structure

```
/project-root
│── /assets         # Images and other assets (if applicable)
│── /styles         # CSS files
│── /scripts        # JavaScript files
│── index.html      # Login page
│── prompt.html     # Search prompt page
│── library.html    # Saved questions page
│── README.md       # Documentation
```

---

## 📜 File Descriptions

### 1️⃣ **Login Page**
- **Files:** `index.html`, `index.css`, `index.js`
- **Purpose:** User enters name, email, and date to access the app.
- **Validation:** Name (only letters), Email (proper format).
- **Navigation:** Redirects to `prompt.html` upon successful login.

### 2️⃣ **Search Prompt Page**
- **Files:** `prompt.html`, `prompt.css`, `prompt.js`
- **Purpose:** Users can search for coding-related questions from selected websites.
- **API Usage:** Fetches search results using Google Custom Search API.
- **Features:**
  - Search bar with a website filter.
  - "Load More" button for paginated results.
  - "Save" button to add questions to the library.
  - "View Library" button to navigate to `library.html`.

### 3️⃣ **Library (Saved Bookmarks)**
- **Files:** `library.html`, `library.css`, `library.js`
- **Purpose:** Display saved coding questions.
- **Storage:** Uses `localStorage` to store and retrieve bookmarks.
- **Features:**
  - Displays saved links with a remove button.
  - "Remove All" button to clear all saved bookmarks.
  - "Back to Search" button for easy navigation.

---

## 🔗 Deployment

You can deploy this project using GitHub Pages, Netlify, or Vercel.

