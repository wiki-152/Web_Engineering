document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('productSearchButton');
    const searchInputField = document.getElementById('productSearchInputField');
    const productCardContainer = document.getElementById('productCardContainer');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Add event listener for search button
    searchButton.addEventListener('click', function() {
        const searchQuery = searchInputField.value.trim();

        if (searchQuery === "") {
            alert("Please enter a product title to search.");
            return;
        }

        // Clear previous results and hide error message
        productCardContainer.innerHTML = '';
        errorMessage.style.display = 'none';
        loadingMessage.style.display = 'block';

        // Fetch products using native fetch API
        fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                loadingMessage.style.display = 'none';
                if (data.products && data.products.length > 0) {
                    renderProductCards(data.products);
                } else {
                    errorMessage.style.display = 'block';
                }
            })
            .catch(() => {
                loadingMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    });

    // Function to render product cards
    function renderProductCards(products) {
        products.forEach(product => {
            const productCardElement = document.createElement('div');
            productCardElement.classList.add('productCardElement');

            productCardElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="productCardImage">
                <h3 class="productCardTitle">${product.title}</h3>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Rating:</strong> ${product.rating} / 5</p>
            `;

            productCardContainer.appendChild(productCardElement);
        });
    }
});
