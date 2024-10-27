const count = 30;
// const apiKey = `W-xHKl7REP0eiAgN2KD3G08aRebUon6XPF9irhaTFds`;
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const apiUrl = `https://picsum.photos/v2/list`

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let imagesLoaded = 0;
let ready = false;
let listOfPhotos = [];
let totalImages = 0;

function imageLoaded(){
    imagesLoaded++;
    if (imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        imagesLoaded = 0;
    }
}


function displayPhotos(){
    totalImages = listOfPhotos.length;
    listOfPhotos.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.download_url);
        item.setAttribute('target', '_blank');
        
        const img = document.createElement('img');
        img.setAttribute('src', photo.download_url);
        img.setAttribute('alt', photo.author);
        img.setAttribute('title', photo.author);

        img.addEventListener('load', imageLoaded)

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        listOfPhotos = await response.json();
        console.log(listOfPhotos)
        displayPhotos();
    }
    catch (error){

    }
}

// Scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
})


getPhotos();