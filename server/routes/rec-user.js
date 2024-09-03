// export default defineEventHandler(async(event) => {
    // const body = await readBody(event);
    // const name = body.name
    export default defineEventHandler((event) => {

    const body = getQuery(event);
    const name = body.name

    return name
})