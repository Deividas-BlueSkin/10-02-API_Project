import navigation from "../navigation.js"
import { getUsersWithPosts } from "../getData.js"
import { create } from "../utils.js"

init()
async function init() {
    navigation()

    let data = await getUsersWithPosts()
    // console.log(data)
    create('h2').textContent = 'Users'
    let ul = create('ul')

    data.forEach(async function (obj) {
        let li = create('li', ul)
        let a = create('a', li)

        let name = obj.name
        let id = obj.id
        let length = obj.posts.length

        a.textContent = `${name}, posts: ${length}`
        a.href = `./user.html#${id}`
    })
}

// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.
