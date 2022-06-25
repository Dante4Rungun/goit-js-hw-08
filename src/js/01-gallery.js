// Add imports above this line
import { galleryItems } from './gallery-items';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';
// Change code below this line
//console.log(galleryItems);
const gallery = document.querySelector(".gallery")



function createGallery() {
    const items = []

    for(const element of galleryItems){
        const item = document.createElement("div")
        item.classList.add("gallery__item")

        const link = document.createElement("a")
        link.classList.add("gallery__link")
        link.href = element.original

        const img = document.createElement("img")
        img.src = element.preview
        img.alt = element.description
        img.classList.add("gallery__image")
        img.setAttribute("data-source",element.original)

        link.append(img)
        item.append(link)
        items.push(item)
        //console.log(items)
    }
    console.log(items)
    gallery.append(...items)
}

createGallery()

gallery.addEventListener("click",(event) => {
    event.preventDefault()
    let gallery = new simpleLightbox('.gallery a', {})
    gallery.options.captionsData = 'alt'
    gallery.options.captionDelay = '250ms'

})