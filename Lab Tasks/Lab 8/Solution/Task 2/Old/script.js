document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value;
    
    if (!searchInput.trim()) {
      displayError('Please enter a product title');
      return;
    }
    
    fetchProduct(searchInput);
  });
  
  function fetchProduct(searchTitle) {
    const loadingElement = document.getElementById('loading');
    const productCard = document.getElementById('productCard');
    const errorElement = document.getElementById('error');
  
    productCard.style.display = 'none';
    errorElement.style.display = 'none';
    loadingElement.style.display = 'block';
  
    const apiUrl = `https://dummyjson.com/products/search?q=${searchTitle}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        loadingElement.style.display = 'none';
  
        if (data.products && data.products.length > 0) {
          displayProduct(data.products[0]); // Displaying the first product that matches
        } else {
          displayError('No products found');
        }
      })
      .catch(() => {
        loadingElement.style.display = 'none';
        displayError('An error occurred while fetching product details');
      });
  }
  
  function displayProduct(product) {
    const productCard = document.getElementById('productCard');
    productCard.style.display = 'block';
  
    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Ratings:</strong></p>
      <ul>
        <li>Average Rating: ${product.rating}</li>
        <li>Brand: ${product.brand}</li>
        <li>Stock: ${product.stock}</li>
      </ul>
    `;
  }
  
  function displayError(message) {
    const errorElement = document.getElementById('error');
    errorElement.style.display = 'block';
    errorElement.textContent = message;
  }
  