import navigation from "../navigation.js"
import { getAlbumWithUserAndPhotos } from "../getData.js"
import { create } from "../utils.js";


init()
async function init() {
    navigation()

    const container = create('div')
    let id = location.href.split("#").pop();
    create('h2', container).textContent = `Id: ${id}, Album page`
    let dataList = create('ul', container)

    let data = await getAlbumWithUserAndPhotos(id)
    // console.log(data)

    create('li',dataList).textContent = `Title: ${data.title}`

    let author = create('li',dataList)
    let authorLink = create('a',author)
    authorLink.textContent = `Author: ${data.user.name}`
    authorLink.href = `/users/user.html#${data.user.id}`

    let imgContainer = create('div',container)
    data.photos.forEach(function(obj){
        let img = create('img',imgContainer)
        img.src = obj.url
    })

}


// 8. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   8.1. Albumo pavadinimą.
//   8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     8.3.1. https://photoswipe.com/
//     8.3.2. https://nanogallery2.nanostudio.org/
//     8.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     8.3.4. Arba bet kurią kitą.