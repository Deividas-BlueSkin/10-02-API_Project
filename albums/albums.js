import navigation from "../navigation.js"
import { getAlbumsWithUserAndPhotos } from "../getData.js"
import { create } from "../utils.js"

init()
async function init() {
    navigation()

    let data = await getAlbumsWithUserAndPhotos()
    // console.log(data)
    create('h2').textContent = 'Albums'
    let ul = create('ul')

    data.forEach(async function (obj) {
        let li = create('li', ul)
        let a = create('a', li)
        let img = create('img', li)

        let title = obj.title
        let author = obj.user.name
        let length = obj.photos.length
        let id = obj.id

        a.textContent = `${title}, Author: ${author}, Photos: ${length}`
        a.href = `./album.html#${id}`

        img.src = obj.photos[Math.trunc(Math.random() * length)].url
    })
}

// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.