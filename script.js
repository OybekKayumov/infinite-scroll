// dotenv

const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');

    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description)
    img.setAttribute('title', photo.alt_description)

    item.appendChild(img);
    imgContainer.appendChild(item);
  })
}

const count = 10;
const apiKey = 'api-key';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log('photoArray: ', photosArray);

    displayPhotos()
  } catch (error) {
    console.log('oops...: ', error);
  }
}


getPhotos();