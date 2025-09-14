// Save cart in localStorage
// Add item to cart
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart! 🛒");
  
    // 🔹 Update the cart counter in the header
    updateCartCount();
  }
  
  
  // Load cart on cart.html
  function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
    let total = 0;
  
    cartTable.innerHTML = ""; // Clear table first
  
    cart.forEach((item, index) => {
      let row = cartTable.insertRow();
      row.insertCell(0).textContent = item.name;
      row.insertCell(1).textContent = item.price;
      let removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.onclick = () => removeFromCart(index);
      row.insertCell(2).appendChild(removeBtn);
      total += item.price;
    });
  
    document.getElementById("total").textContent = "Total: KSh " + total;
  }
  
  // Remove item
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  // Checkout (call)
  function checkout() {
    window.location.href = "tel:+254750210207";
  }
  // Update cart count in header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let countElement = document.getElementById("cart-count");
    if (countElement) {
      countElement.textContent = cart.length;
    }
  }
  
  // Call it when page loads
  document.addEventListener("DOMContentLoaded", updateCartCount);
  
  
