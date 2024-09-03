export default defineEventHandler(e => {
    const cookies = parseCookies(e)
    console.log(cookies)

    return cookies
})