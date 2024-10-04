const imgUrlInp = document.getElementById('image-url');
const addImgButton = document.getElementById('add-image-btn');
const gallery = document.getElementById('gallery');

function createImage(url) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const img = document.createElement('img');
  img.alt = "User added image";
  img.src = url;
  

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => {
    gallery.removeChild(imageContainer);
  });

  imageContainer.appendChild(img);
  imageContainer.appendChild(removeBtn);
  gallery.appendChild(imageContainer);
}

addImgButton.addEventListener('click', () => {
  const imageUrl = imgUrlInp.value.trim();
  if (imageUrl) {
    createImage(imageUrl);
    imgUrlInp.value = ''; 
  } else {
    alert("Invalid Image URL.");
  }
});
