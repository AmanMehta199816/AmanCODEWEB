document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");
    
    // Sample product data (name, price, image URL)
    const products = [
        { name: "Product 1", price: "$19.99", image: "myntra.jpg" },
        { name: "Product 2", price: "$29.99", image: "product2.jpg" },
        { name: "Product 3", price: "$24.99", image: "product3.jpg" },
        // Add more products as needed
    ];
    
    // Create product cards
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productName = document.createElement("h2");
        productName.textContent = product.name;
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        
        const productPrice = document.createElement("p");
        productPrice.textContent = "Price: " + product.price;
        
        productCard.appendChild(productName);
        productCard.appendChild(productImage);
        productCard.appendChild(productPrice);
        
        productsContainer.appendChild(productCard);
    });
});

