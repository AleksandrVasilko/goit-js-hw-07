import { galleryItems } from './gallery-items.js';

// Change code below this line

/*console.log(galleryItems);*/

let openOriginalImage;

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.addEventListener('keydown', onPressEscToCloseImage);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

console.log(createGalleryCardMarkup(galleryItems));

function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
             <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
  }).join('');
}

galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openOriginalImage = basicLightbox.create(`
		<img src="${event.target.dataset.source}" width="1280" height="900">
	`)
        openOriginalImage.show()
});

function onPressEscToCloseImage(event) {
  if (event.code !== 'Escape') {
      return;
    }
    openOriginalImage.close();
}