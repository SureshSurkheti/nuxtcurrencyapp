export default defineEventHandler(async(event) => {
    const posts = [
        {id: 3, title: 'Post messi'},
    ]
    const body = await readBody(event)
    posts[0].title = body.title
    return posts
})