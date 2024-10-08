$(document).ready(function() {
    // Event listener for the search button
    $('#searchButton').click(function() {
        const query = $('#searchInput').val().trim(); // Get the value from the search input

        // Check if the input is empty
        if (query === "") {
            alert("Please enter a product title to search.");
            return;
        }

        // Clear previous products and hide error messages before new search
        $('#productCard').empty();
        $('#error').hide();
        $('#loading').show(); // Show loading spinner

        // AJAX request to fetch product data
        $.ajax({
            url: `https://dummyjson.com/products/search?q=${query}`,
            method: 'GET',
            success: function(response) {
                $('#loading').hide(); // Hide loading spinner
                if (response.products && response.products.length > 0) {
                    displayProducts(response.products); // Display multiple products
                } else {
                    $('#error').show().text('No products found.'); // Show error message if no products are found
                }
            },
            error: function() {
                $('#loading').hide();
                $('#error').show().text('An error occurred while fetching product details.'); // Error handling
            }
        });
    });

    // Function to display multiple products
    function displayProducts(products) {
        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p><strong>Rating:</strong> ${product.rating} / 5</p>
                </div>
            `;
            $('#productCard').append(productCard); // Append each product card to the container
        });
    }
});
