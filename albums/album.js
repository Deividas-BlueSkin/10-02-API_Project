import navigation from "../navigation.js"
import { getAlbumWithUserAndPhotos } from "../getData.js"
import { create } from "../utils.js";


import PhotoSwipeLightbox from '/photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();


init()
async function init() {
    navigation()

    const container = create('div')
    let id = location.href.split("#").pop();
    create('h2', container).textContent = `Id: ${id}, Album page`
    let dataList = create('ul', container)

    let data = await getAlbumWithUserAndPhotos(id)
    // console.log(data)

    create('li', dataList).textContent = `Title: ${data.title}`

    let author = create('li', dataList)
    let authorLink = create('a', author)
    authorLink.textContent = `Author: ${data.user.name}`
    authorLink.href = `/users/user.html#${data.user.id}`

    let imgContainer = create('div', container)
    data.photos.forEach(function (obj) {
        let img = create('img', imgContainer,'pswp_bg')
        img.src = obj.url
    })

    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
    // library
    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

    //     <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
    //     data-pswp-width="1669" 
    //     data-pswp-height="2500" 
    //     target="_blank">
    //     <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
    //     </a>


    lightbox.on('beforeOpen', () => {
        const pswp = lightbox.pswp;

        // go to slide by index
        pswp.goTo(3);
        // go to next slide
        pswp.next();

        // go to previous slide
        pswp.prev();

        // close the PhotoSwipe (with animation, if enabled)
        // PhotoSwipe will automatically destroy after it's closed
        pswp.close();

        // instantly close and destroy the PhotoSwipe
        pswp.destroy();

        // zoom slide to
        pswp.currSlide.zoomTo(
            1, // slide zoom level, 1 - original image size
            { x: 0, y: 0 }, // zoom center point
            2000, // transition duration, can be 0
            false // wether pan/zoom bounds should be ignored
        );

        // pan slide to
        pswp.currSlide.panTo(
            100, // x position
            100, // y position
        );
    });

}


// 8. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   8.1. Albumo pavadinimą.
//   8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     8.3.1. https://photoswipe.com/
//     8.3.2. https://nanogallery2.nanostudio.org/
//     8.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     8.3.4. Arba bet kurią kitą.