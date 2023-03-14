// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
}
new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
