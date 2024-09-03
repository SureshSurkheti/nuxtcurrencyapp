export default defineEventHandler(async(event) => {
    const posts = [
        {id: 4, title: 'Post 1suresh'},
        
    ]
    const body = await readBody(event)
    posts.push(body.newPost)
    return posts
})