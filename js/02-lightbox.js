import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

// const galleryItemMarkup = createImageGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImageGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener("click", onImageClick);

function createImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}"">
  <img
    
    class="gallery__image"
    src="${preview}"
    data-source="${original}""
    alt="${description}""
  />
</a>
</div> `;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 0,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "title",
    captionPosition: "bottom",
    captionClass: "",
  });
}
