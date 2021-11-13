import { galleryItems } from './gallery-items.js';
// Change code below this line

/*console.log(galleryItems);*/

const galleryConainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryConainer.insertAdjacentHTML('beforeend', cardsMarkup);




console.log(createGalleryCardMarkup(galleryItems));

function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `<a class = "gallery__item" href="${original}"><img src = "${preview}" class = "gallery__image"></a>`
  }).join('');
}
