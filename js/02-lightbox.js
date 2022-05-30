import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('ul.gallery');


const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
   <a class="gallery__item" 
   href="${original}">
   <img class="gallery__image" 
   src="${preview}" 
   alt="${description}" />
</a>` 
}).join('');


galleryListRef.insertAdjacentHTML("afterbegin", galleryMarkup);


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });