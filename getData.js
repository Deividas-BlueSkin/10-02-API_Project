export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50&_start=5&_expand=user')
    const data = await res.json()

    return data
}

export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    return data
}

export async function getUsersWithPosts() {
    //
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    const data = await res.json()

    return data
}

export async function getPostsWithCommentsAndUser() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=50&_start=5&_expand=user&_embed=comments`)
    const data = await res.json()

    return data
}

export async function getAlbumsWithUserAndPhotos() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos`)
    const data = await res.json()

    return data
}

export async function getUserWithPostsAndAlbums(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/?_embed=posts&_embed=albums`)
    const data = await res.json()

    return data
}

export async function getPostWithUserAndComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/?_expand=user&_embed=comments`)
    const data = await res.json()

    return data
}
export async function getAlbumWithUserAndPhotos(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/?_expand=user&_embed=photos`)
    const data = await res.json()

    return data
}