const images = [];

// Preload images
function preloadImages() {
    for (let i = 1; i <= 149; i++) {
        const img = new Image();
        img.src = `D:\\MyPortfolio\\Code\\Photography\\img\\image-${i}.jpg`;
        images.push(img);
    }
}

function displayInitialImages() {
    const gallery = document.getElementById('image-gallery');

    // Display the first set of images without grayscale
    for (let i = 0; i < 10; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = images[i].src;
        imgElement.alt = `Photograph ${i + 1}`;
        imgElement.classList.add('img-fluid');
        imgElement.style.width = 'calc(20% - 20px)';
        imgElement.style.margin = '10px';
        gallery.appendChild(imgElement);
    }
}

function changeImagesAfterDelay() {
    const gallery = document.getElementById('image-gallery');
    let index = 10;

    setInterval(() => {
        gallery.innerHTML = ''; // Clear the gallery

        // Display the next set of 10 preloaded images without grayscale
        for (let i = index; i < index + 10; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = images[i % images.length].src;
            imgElement.alt = `Photograph ${i + 1}`;
            imgElement.classList.add('img-fluid');
            imgElement.style.width = 'calc(20% - 20px)';
            imgElement.style.margin = '10px';
            gallery.appendChild(imgElement);
        }

        index = (index + 10) % images.length;
    }, 4000); // Change images every 3 seconds
}

window.onload = function () {
    preloadImages();
    displayInitialImages();
    changeImagesAfterDelay();
};
