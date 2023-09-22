let cartItems = [];
let totalPrice = 0;

function addToCart() {
    const productName = "Stylish T-Shirt";
    const price = 20.00;
    
    cartItems.push({ productName, price });
    totalPrice += price;

    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    const listItem = document.createElement("li");
    listItem.textContent = `${productName} - $${price}`;
    cartList.appendChild(listItem);
    
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}
