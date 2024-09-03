export default defineEventHandler(() => {
    const posts = [
        {id: 3, title: 'Post messi'},
        {id: 6, title: 'my name is suresh'}
    ]
    posts.splice(0, 1)
    return posts
})