// Example product data (can be dynamic in the future)
const product = {
    id: 1,
    title: "Nike Air",
    description: "A premium-quality shoe for every occasion.",
    price: 120,
    image: "img/product/shoes1.png",
};

// Display product details
document.getElementById("product-title").innerText = product.title;
document.getElementById("product-description").innerText = product.description;
document.getElementById("product-price").innerText = `$${product.price}`;
document.getElementById("product-image").src = product.image;

// Add to Cart functionality
document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} has been added to your cart!`);
});
