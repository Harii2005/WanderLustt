# 🌍 WanderLust

**WanderLust** is a comprehensive travel accommodation booking platform inspired by Airbnb. It enables users to **discover, list, and book unique stays** around the world.

---

## 📁 Project Structure
Wanderlust/
├── Models/              # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── Controller/          # Route controllers
│   ├── listings.js
│   └── users.js
├── routes/              # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/              # Static files
│   ├── css/
│   ├── js/
│   └── assets/
├── views/               # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── init/                # Initialization scripts
│   └── data.js
├── utils/               # Utility functions
├── app.js               # Main application file
├── Schema.js            # Validation schemas
└── README.md            # Project documentation

---

## 🚀 Features

- 🔐 **User Authentication** – Secure signup/login via `Passport.js`
- 🏡 **Property Listings** – Browse and view property details with images
- 🗺️ **Interactive Maps** – Location search with `Mapbox GL JS`
- 📅 **Booking System** – Select and reserve available dates
- 🌟 **Reviews & Ratings** – Leave feedback for properties
- ✏️ **Property Management** – Hosts can add/edit/manage listings
- 📱 **Responsive Design** – Works on desktop, tablet, and mobile
- ⚡ **Flash Notifications** – Real-time feedback via `connect-flash`

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **EJS** – Templating engine
- **Bootstrap 5** – UI framework
- **Mapbox GL JS** – Interactive maps

### 🔹 Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Passport.js** – Authentication

### 🔹 Additional Tools
- `Multer` – File uploads
- `Cloudinary` – Image hosting
- `Connect-Flash` – Flash messaging
- `Express-Session` – Session management
- `Method-Override` – PUT & DELETE support
- `Dotenv` – Environment variables

---

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust

2. **Install dependencies:**
    ```bash
     npm install

3.	**Configure environment variables:**

4.	**Start the development server:**
    ```bash
     node app.js

5. Visit:  **http://localhost:8080** in your browser.