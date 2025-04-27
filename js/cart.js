// Load cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render cart items
const renderCart = () => {
    const cartTableBody = document.querySelector("#cart-table tbody");
    cartTableBody.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = `
            <tr>
                <td><img src="${item.image}" alt="${item.title}" width="50"></td>
                <td>${item.title}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
        cartTableBody.innerHTML += row;
    });

    document.getElementById("cart-total").innerText = `Total: $${total}`;
};

// Update quantity
const updateQuantity = (index, quantity) => {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

// Remove item
const removeItem = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

// Initial render
renderCart();
