import navigation from "../navigation.js"
import { getPostsWithCommentsAndUser } from "../getData.js"
import { create } from "../utils.js"

init()
async function init() {
    navigation()

    let data = await getPostsWithCommentsAndUser()
    // console.log(data)
    create('h2').textContent = 'Posts'
    let ul = create('ul')

    data.forEach(async function (obj) {
        let li = create('li', ul)
        let span = create('span', li)
        let aPost = create('a', li)
        let aUser = create('a', li)

        let title = obj.title
        let name = obj.user.name
        let length = obj.comments.length
        let id = obj.id
        let userId = obj.userId

        span.textContent = `comments: ${length}, `
        aPost.textContent = `${title}`
        aPost.href = `./post.html#${id}`
        aUser.textContent = ` author: ${name}`
        aUser.href = `/users/user.html#${userId}`
    })
}

// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.