let cart = [];

// Add item
function addToCart() {
  const productData = document.getElementById("product").value;
  const qty = parseInt(document.getElementById("quantity").value);

  if (!productData || qty <= 0) return;

  const [name, price, category] = productData.split("|");

  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      name,
      price: parseInt(price),
      quantity: qty,
      category
    });
  }

  updateCart();
}

// Remove item
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

// Apply discounts
function calculateDiscount(total) {
  let discount = 0;

  // Bulk discount
  cart.forEach(item => {
    if (item.quantity >= 5) {
      discount += item.price * item.quantity * 0.10;
    }
  });

  // Category discount
  cart.forEach(item => {
    if (item.category === "Education") {
      discount += item.price * item.quantity * 0.05;
    }
  });

  // Coupon discount
  const coupon = document.getElementById("coupon").value.toUpperCase();

  if (coupon.startsWith("SAVE10")) {
    discount += total * 0.10;
  }

  if (coupon.includes("EDU")) {
    discount += total * 0.05;
  }

  return discount;
}

// Update cart UI
function updateCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("totalPrice");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartDiv.innerHTML += `
      <div class="cart-item">
        ${item.name} × ${item.quantity} = ₹${itemTotal}
        <span class="remove" onclick="removeItem('${item.name}')">✖</span>
      </div>
    `;
  });

  const discount = calculateDiscount(total);
  const finalTotal = total - discount;

  totalDiv.textContent = `Total: ₹${finalTotal.toFixed(2)}`;
}