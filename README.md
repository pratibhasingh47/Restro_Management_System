# Restaurant Management System (RMS) Portal

A modern, customizable Restaurant Management System portal built with React, TypeScript, Redux, and Material-UI. This project streamlines restaurant operations for Admins, Staff, and other roles, featuring modules for menu, orders, stock, staff management, and much more.

---

## 🚀 Features

- **Home Page:** Stylish landing with immersive visuals, easy menu exploration, and intuitive category selection.
- **Menu Management:** Dynamic menu loading, organized by categories, with expandable item details and one-click order addition.
- **Order Management:** Real-time order status (Pending, Processing, Ready, Delivered, Cancelled), updateable by staff with detailed tracking and remarks.
- **Stock Management:** Track raw materials/ingredients with color-coded status indicators (In Stock, Low, Out of Stock, Ordered), quantity editing, and remarks.
- **My Account:** Comprehensive admin account panel with editable profile, contact, address, and secure password management.
- **Footer:** Responsive, visually rich footer with quick navigation links, contact info, and prominent “Designed by Pratibha” branding and heart icon.
- **Role-based Views:** Components and dashboards tailored for Admin and Staff roles.
- **Responsive UI:** Fully mobile-friendly and desktop-optimized using Material-UI and Tailwind CSS.
- **Redux Integration:** Robust state management for menu items, orders, users, and more.
- **Backend API Integration:** Seamless sync with backend for real-time data updates (orders, menu, inventory, etc.).

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React
- **Language:** TypeScript
- **UI Library:** Material-UI
- **Styling:** Tailwind CSS, MUI ThemeProvider
- **State Management:** Redux Toolkit
- **Date Handling:** Day.js

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **API:** RESTful endpoints for menu, orders, stock, user management
- **Other:** CORS, dotenv, bcrypt for password hashing

---

## 📂 Project Structure

```
rms-portal/
├── backend/
│   ├── controllers/         # Express route controllers for all endpoints
│   ├── models/              # Mongoose models (User, Order, Menu, Stock, etc.)
│   ├── routes/              # Express route definitions
│   ├── middleware/          # Authentication, error handling, etc.
│   ├── config/              # Database and environment configuration
│   ├── server.js            # Entry point for backend
│   └── ...                  # Additional backend utilities
├── src/
│   ├── assets/
│   │   └── images/          # Static images and media
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── StockManagement.tsx
│   │   ├── MyAccountAdmin.tsx
│   │   ├── OrderStatusStaff.tsx
│   │   └── ...              # Other UI components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── my-account.tsx
│   │   ├── order-status-staff.tsx
│   │   ├── stock-management.tsx
│   │   └── ...              # Other page-level components
│   ├── redux/
│   │   ├── reducers/        # Redux slices for menu, orders, stock, user, etc.
│   │   └── store/           # Redux store configuration
│   ├── App.tsx
│   ├── index.tsx
│   └── ...                  # Other utility files
├── public/                  # Static public assets
├── package.json
├── README.md
└── ...
```

---


## 🖥️ Setup & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pratibhasingh47/rms-portal.git
   cd rms-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---
<!-- 
## ✨ Main Components

- **Home:** Welcome screen, menu preview, and category navigation
- **Menu:** Accordion-based listing, item details, add-to-order button
- **OrderStatusStaff:** Staff can view, update, and manage order statuses easily
- **StockManagement:** Complete inventory view with add/edit, status, and remarks
- **MyAccountAdmin:** Admin’s profile page with editable personal and address details
- **Footer:** Informational footer with quick links, contact, and credits -->



<!-- ## 🧑‍💻 Customization

- **Change Branding:** Edit `Footer.tsx` and `Home.tsx` for restaurant name and designer credit.
- **Update Menu:** Modify menu fetching logic in Redux and backend API.
- **Role Management:** Expand user authentication and access control as needed. -->


<!-- ## 📸 Screenshots

> Coming soon! (Add screenshots/gifs here for Home, Orders, Stock, My Account, etc.) -->



## 📬 Contact

**Designed & Developed by [Pratibha Singh](https://github.com/pratibhasingh47)**  
Email: pratibhasingh1624@gmail.com

---

### ❤️ License

This project is open-source and free to use for educational or non-commercial purposes.
