export default defineEventHandler((event) => {
    const name = event.context.params.lists
    return name
})