import navigation from "../navigation.js"
import { getUserWithPostsAndAlbums } from "../getData.js";
import { create } from "../utils.js"

init()
async function init() {
    navigation()

    const container = create('div')
    let id = location.href.split("#").pop();
    create('h2',container).textContent = `Id: ${id}, User page`
    let dataList = create('ul',container)

    let data = await getUserWithPostsAndAlbums(id)
    // console.log(data)

    create('li',dataList).textContent = `Name: ${data.name}`
    create('li',dataList).textContent = `Username: ${data.username}`
    create('li',dataList).textContent = `Email: ${data.email}`
    let address = create('li',dataList)
    address.textContent = `Address: ${data.address.street}; ${data.address.suite}; ${data.address.city}; ${data.address.zipcode} `
    let mapLink = create('a',address)
    mapLink.textContent = 'GoogleMaps'
    mapLink.href = `http://maps.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}`
    create('li',dataList).textContent = `Phone: ${data.phone}`
    let website = create('li',dataList)
    website.textContent = `Website: ${data.website}`
    create('li',dataList).textContent = `Company: ${data.company.name}`

    //posts
    create('h3',container).textContent = 'Posts' 
    let postList = create('ul',container)
    data.posts.forEach(function(obj){
        let li = create('li',postList)
        let link = create('a',li)
        link.textContent= obj.title
        link.href = `/posts/post.html#${data.id}`
    })

    //albums
    create('h3',container).textContent = 'Albums' 
    let albumList = create('ul',container)
    data.albums.forEach(function(obj){
        let li = create('li',albumList)
        let link = create('a',li)
        link.textContent= obj.title
        link.href = `/albums/album.html#${obj.id}`
    })

}

// 5. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   5.1. Pilnas vardas.
//   5.2. Vartotojo vardas / nick'as.
//   5.3. El. paštas.
//   5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   5.5. Telefono numeris.
//   5.6. Internetinio puslapio adresas.
//   5.7. Įmonės, kurioje dirba, pavadinimas.

 

// 6. Šiame puslapyje (user.html) turi būti atvaizduojama:
//   6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//   6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.