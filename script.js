// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

// Create a popup for viewing photos
const lightbox = document.createElement("div");

lightbox.classList.add("lightbox");

lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-image" src="" alt="Expanded photo">
`;

document.body.appendChild(lightbox);

// Get the popup image and close button
const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeButton = lightbox.querySelector(".lightbox-close");

// When a gallery photo is clicked
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});

// Close the popup when clicking the background
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

// Close when clicking the X
closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Close when pressing Escape
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});
