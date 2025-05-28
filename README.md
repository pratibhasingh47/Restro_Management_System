# Restaurant Management System (RMS) Portal

A modern, customizable Restaurant Management System portal built with React, TypeScript, Redux, and Material-UI. This project streamlines restaurant operations for Admins, Staff, and other roles, featuring modules for menu, orders, stock, staff management, and much more.

---

## 🚀 Features

- **Home Page:** Stylish landing with menu exploration and category selection
- **Menu Management:** Dynamic menu loading, accordion-based item details, add-to-order functionality
- **Order Management:** Real-time order status (Pending, Processing, Ready, Delivered, Cancelled), editable by staff
- **Stock Management:** Track raw materials with status (In Stock, Low, Out of Stock, Ordered), color-coded, editable
- **My Account:** Detailed admin account panel with profile, contact, address, and password change
- **Footer:** Responsive, detailed site footer with quick links, contact info, and “Designed by Pratibha” branding
- **Role-based Views:** Components tailored for Admin and Staff roles
- **Responsive UI:** Mobile-friendly and desktop-optimized using Material-UI and Tailwind CSS classes
- **Redux Integration:** Robust state management for menu items and future scalability

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Redux Toolkit, Material-UI, Tailwind CSS
- **State Management:** Redux Toolkit
- **Styling:** Material-UI, Tailwind CSS
- **Date Handling:** Day.js

---

## 📂 Project Structure

```
src/
  components/
    Footer.tsx
    StockManagement.tsx
    MyAccountAdmin.tsx
    OrderStatusStaff.tsx
    ...
  pages/
    Home.tsx
    my-account.tsx
    order-status-staff.tsx
    stock-management.tsx
    ...
  redux/
    reducers/
    store/
  assets/
    images/
  ...
public/
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

## ✨ Main Components

- **Home:** Welcome screen, menu preview, and category navigation
- **Menu:** Accordion-based listing, item details, add-to-order button
- **OrderStatusStaff:** Staff can view, update, and manage order statuses easily
- **StockManagement:** Complete inventory view with add/edit, status, and remarks
- **MyAccountAdmin:** Admin’s profile page with editable personal and address details
- **Footer:** Informational footer with quick links, contact, and credits

---

## 🧑‍💻 Customization

- **Change Branding:** Edit `Footer.tsx` and `Home.tsx` for restaurant name and designer credit.
- **Update Menu:** Modify menu fetching logic in Redux and backend API.
- **Role Management:** Expand user authentication and access control as needed.

---

## 📸 Screenshots

> Coming soon! (Add screenshots/gifs here for Home, Orders, Stock, My Account, etc.)

---

## 📬 Contact

**Designed & Developed by [Pratibha Singh](https://github.com/pratibhasingh47)**  
Email: admin@rms.com

---

## ❤️ License

This project is open-source and free to use for educational or non-commercial purposes.
