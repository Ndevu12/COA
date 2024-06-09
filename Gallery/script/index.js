document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.getElementById('overlay');
    const fullImage = document.getElementById('full-image');
    const overlayDescription = document.getElementById('overlay-description');
    const closeButton = document.getElementById('close-button');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imgSrc = thumbnail.querySelector('img').src;
            const title = thumbnail.getAttribute('data-title');
            const description = thumbnail.getAttribute('data-description');
            fullImage.src = imgSrc;
            overlayDescription.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
            overlay.classList.add('show');
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target === closeButton) {
            overlay.classList.remove('show');
        }
    });
});
