// ================= PRODUCT CLASS =================
class Product {
  constructor(id, name, price) {
    this.id = id;       // Unique product ID
    this.name = name;   // Product name
    this.price = price; // Price as number
  }
}

// ================= SHOPPING CART ITEM CLASS =================
class ShoppingCartItem {
  constructor(product, quantity = 0) {
    this.product = product; // The product object
    this.quantity = quantity; // Number of this product in cart
  }

  // Calculate total price for this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ================= SHOPPING CART CLASS =================
class ShoppingCart {
  constructor() {
    this.items = []; // Array of ShoppingCartItem
    this.totalElement = document.querySelector(".total"); // Total price element in DOM
  }

  // Add item to cart
  addItem(product, quantityElement) {
    // Check if product already exists in cart
    let existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
      quantityElement.textContent = existingItem.quantity;
    } else {
      let newItem = new ShoppingCartItem(product, 1);
      this.items.push(newItem);
      quantityElement.textContent = 1;
    }

    this.updateTotal();
  }

  // Decrease item quantity
  decreaseItem(product, quantityElement) {
    let existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
      quantityElement.textContent = existingItem.quantity;

      // If quantity reaches 0, remove from cart
      if (existingItem.quantity === 0) {
        this.items = this.items.filter(item => item.product.id !== product.id);
      }
    }

    this.updateTotal();
  }

  // Remove item completely
  removeItem(productId, cardElement) {
    this.items = this.items.filter(item => item.product.id !== productId);
    cardElement.remove();
    this.updateTotal();
  }

  // Calculate total price of all items in cart
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
  }

  // Update the total price displayed in DOM
  updateTotal() {
    this.totalElement.textContent = this.getTotal() + " $";
  }
}

// ================= CREATE PRODUCTS FROM DOM =================
let cart = new ShoppingCart();
let cards = document.querySelectorAll(".card-body"); // Each product card
let products = [];

cards.forEach((card, index) => {
  // Get product name
  let name = card.querySelector(".card-title").textContent;

  // Get product price and fix NaN issue
  let priceText = card.querySelector(".unit-price").textContent;
  let price = parseFloat(priceText.replace("$", "").trim());

  // Quantity element in the DOM
  let quantityElement = card.querySelector(".quantity");

  // Create Product object
  let product = new Product(index + 1, name, price);
  products.push(product);

  // Buttons
  let plusBtn = card.querySelector(".fa-plus-circle");
  let minusBtn = card.querySelector(".fa-minus-circle");
  let trashBtn = card.querySelector(".fa-trash-alt");
  let heartBtn = card.querySelector(".fa-heart");

  // Event listeners
  plusBtn.addEventListener("click", () => cart.addItem(product, quantityElement));
  minusBtn.addEventListener("click", () => cart.decreaseItem(product, quantityElement));
  trashBtn.addEventListener("click", () => cart.removeItem(product.id, card));
  heartBtn.addEventListener("click", () => heartBtn.classList.toggle("liked"));
});

// ================= TESTING IN CONSOLE =================
console.log("Products:", products);
console.log("Shopping Cart:", cart);
