import { galleryItems } from './gallery-items.js';


// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку 
// модального окна с изображением из примеров библиотеки basicLightbox.

const galleryListRef = document.querySelector('div.gallery')
let modal;

const addGalaryList = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
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


galleryListRef.insertAdjacentHTML('afterbegin', addGalaryList);

galleryListRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  
  const currentEl = e.target;
  
    if (currentEl.nodeName !== 'IMG') {
        return;
    }
  
    openModal(currentEl);
}

function openModal(currentEl) {
  modal = basicLightbox.create(
    `
    <div class="modal">
    <img width="1100" height="700" src="${currentEl.dataset.source}">
    </div>
    `);

  onOpenModal(modal);
}

function onOpenModal(modal) {
  window.addEventListener('keydown', onEscKeyPress);
  modal.show()
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress)
  modal.close();
}



function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  if (e.code === ESC_KEY_CODE) {
      onCloseModal()
  }

}

