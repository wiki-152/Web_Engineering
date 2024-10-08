const galleryLoadMoreButton = document.getElementById('loadMoreButton');
const gallerySpinner = document.getElementById('spinner');
const galleryNoMoreImages = document.getElementById('noMoreImages');

let currentGalleryImageIndex = 0;
const imagesPerLoad = 10; // Number of images to load each time
let allGalleryImages = [];
let galleryLoadButtonClickCount = 0; // Initialize the click counter for the load more button

// Fetch all images from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        allGalleryImages = data;
        loadGalleryImages(); // Load the initial set of images
    });

function loadGalleryImages() {
    galleryLoadButtonClickCount++; // Increment the button click count each time the function is called

    // Show the spinner and hide the button
    galleryLoadMoreButton.style.display = 'none';
    gallerySpinner.style.display = 'inline-block';

    setTimeout(() => {
        const endIndex = Math.min(currentGalleryImageIndex + imagesPerLoad, allGalleryImages.length);
        for (let i = currentGalleryImageIndex; i < endIndex; i++) {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `
                <img src="${allGalleryImages[i].thumbnailUrl}" alt="${allGalleryImages[i].title}" style="width: 150px; height: 150px; object-fit: cover;">
                <h4>${allGalleryImages[i].title}</h4>
            `;
            document.getElementById('imageGrid').appendChild(imageCard);
        }

        currentGalleryImageIndex += imagesPerLoad;

        // Hide spinner and check if more images are available
        gallerySpinner.style.display = 'none';
        if (currentGalleryImageIndex >= allGalleryImages.length || galleryLoadButtonClickCount >= 2) {
            galleryLoadMoreButton.style.display = 'none';
            galleryNoMoreImages.style.display = 'block';
        } else {
            galleryLoadMoreButton.style.display = 'inline-block';
        }
    }, 1000); // Minimum loading time of 1 second
}

galleryLoadMoreButton.addEventListener('click', loadGalleryImages);
