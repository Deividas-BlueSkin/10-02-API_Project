import { create } from "./utils.js";

export default function navigation() {
    let container = create('header', null, null, null, true)

    let home = createLink('Home', '/index.html', container)
    let users = createLink('Users', '/users/users.html', container)
    let posts = createLink('Posts', '/posts/posts.html', container)
    let albums = createLink('Albums', '/albums/albums.html', container)



}

function createLink(text, href, parent) {
    let link = create('a', parent, 'navLink')
    link.textContent = text
    link.href = href

    let file = location.href.split("/").slice(-1);
    // file = '/' + file
    if (href.includes(file)) {
        link.style = `
        font-weight: bold;
        color: darkred;`
    } else {
        link.style = null
    }
}