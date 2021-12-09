import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

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

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }

  const modalWindow = basicLightbox.create(`
      <div class="modal">
          <img src="${event.target.dataset.source}" width ="800" height = "600">
      </div>
  `);
  modalWindow.show();

  document.addEventListener("keydown", onEscapeClick);

  function onEscapeClick(event) {
    if (event.code === "Escape") {
      modalWindow.close();
      document.removeEventListener("keydown", onEscapeClick);
    }
  }
}
