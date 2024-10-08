const galleryLoadMoreButton = document.getElementById('galleryLoadMoreButton');
const gallerySpinner = document.getElementById('gallerySpinner');
const galleryNoMoreImages = document.getElementById('galleryNoMoreImages');

let currentGalleryImageIndex = 0;
const imagesPerLoad = 10;
let allGalleryImages = [];
let galleryLoadButtonClickCount = 0;

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        allGalleryImages = data;
        loadGalleryImages();
    });

function loadGalleryImages() {
    galleryLoadButtonClickCount++;
    galleryLoadMoreButton.style.display = 'none';
    gallerySpinner.style.display = 'inline-block';

    setTimeout(() => {
        const endIndex = Math.min(currentGalleryImageIndex + imagesPerLoad, allGalleryImages.length);
        for (let i = currentGalleryImageIndex; i < endIndex; i++) {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `
                <img src="${allGalleryImages[i].thumbnailUrl}" alt="${allGalleryImages[i].title}">
                <h4>${allGalleryImages[i].title}</h4>
            `;
            document.getElementById('imageGalleryGrid').appendChild(imageCard);
        }

        currentGalleryImageIndex += imagesPerLoad;
        gallerySpinner.style.display = 'none';

        if (currentGalleryImageIndex >= allGalleryImages.length || galleryLoadButtonClickCount >= 2) {
            galleryLoadMoreButton.style.display = 'none';
            galleryNoMoreImages.style.display = 'block';
        } else {
            galleryLoadMoreButton.style.display = 'inline-block';
        }
    }, 1000);
}

galleryLoadMoreButton.addEventListener('click', loadGalleryImages);
