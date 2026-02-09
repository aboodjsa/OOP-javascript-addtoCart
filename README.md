# OOP JavaScript Shopping Cart

## Overview
A responsive shopping cart implemented using **Object-Oriented JavaScript (OOP)**.  
Users can add/remove products, adjust quantities, like items, and see the total price update in real-time.

---

## Features
- Add or remove products from the cart
- Increase/decrease product quantities
- Dynamic total price calculation
- Like products with heart toggle
- Responsive design using **Bootstrap 5** and **flexbox**

---

## OOP Structure
- **Product** – stores id, name, price  
- **ShoppingCartItem** – stores product + quantity, calculates total price  
- **ShoppingCart** – manages cart items, provides methods:
  - `addItem()`
  - `decreaseItem()`
  - `removeItem()`
  - `getTotal()`
  - `updateTotal()`

---

## Usage
1. Open `index.html` in a browser  
2. Click **+** to add or **-** to reduce quantity  
3. Click **trash** to remove an item  
4. Click **heart** to like a product  
5. Total price updates automatically

---

## File Structure
index.html
style.css
script.js
Assets/


---

## Author
**Abood Jamal** | Front-End Developer
