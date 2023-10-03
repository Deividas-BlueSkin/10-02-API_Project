import navigation from "../navigation.js"
import { getPostWithUserAndComments } from "../getData.js"
import { create } from "../utils.js";


init()
async function init() {
    navigation()

    const container = create('div')
    let id = location.href.split("#").pop();
    create('h2', container).textContent = `Id: ${id}, Post page`
    let dataList = create('ul', container)

    let data = await getPostWithUserAndComments(id)
    // console.log(data)

    create('li',dataList).textContent = `Title: ${data.title}`
    let author = create('li',dataList)
    let authorLink = create('a',author)
    authorLink.textContent = `Author: ${data.user.name}`
    authorLink.href = `/users/user.html#${data.user.id}`
    create('li',dataList).textContent = `Content: ${data.body}`

    create('h3',container).textContent = 'Comments' 
    let commentList = create('ul',container)
    data.comments.forEach(function(obj){
        create('h4',commentList).textContent = `Comment Id: ${obj.id}`
        let comment = create('ul',commentList)
        create('li',comment).textContent = `Name: ${obj.name}`
        create('li',comment).textContent = `Content: ${obj.body}`
        create('li',comment).textContent = `Email: ${obj.email}`
    })

    let postsLink = create('a',container)
    postsLink.textContent = `Other Author's Posts`
    postsLink.href = `/users/user.html#${data.user.id}`

}


// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
//   7.1. Įrašo (post) pavadinimą.
//   7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
//   7.3. Įrašo turinį.
//   7.4. Įrašo komentarus. Kiekvienas komentaras turi:
//     7.4.1. Komentaro pavadinimą.
//     7.4.2. Komentaro turinį - pastraipą.
//     7.4.3. Komentarą parašiusio asmens el. pašto adresą.
//   7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į puslapį posts.html. Jame vėliau bus atvaizduojami visi šio vartotojo įrašai.