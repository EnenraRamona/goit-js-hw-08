// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryContainer = document.querySelector(`.gallery`);
galleryContainer.style.listStyle = 'none';

galleryItems.forEach(item => {
    const liEl = document.createElement(`li`);
    liEl.classList.add(`gallery__item`);


    const linkEl = document.createElement(`a`);
    linkEl.classList.add(`gallery__link`);
    linkEl.href = item.original;


    const imgEl = document.createElement(`img`);
    imgEl.classList.add(`gallery__image`);
    imgEl.src = item.preview;
    imgEl.alt = item.description;
   

    linkEl.append(imgEl);
    liEl.append(linkEl);
    galleryContainer.append(liEl);
})

document.addEventListener(`DOMContentLoaded`, function () {
    new SimpleLightbox('.gallery a', {
        captionsData: `alt`,
        captionDelay: 250,
      });
})
console.log(galleryItems);