export default defineEventHandler(event => {
    const config = useRuntimeConfig(event)
    const {api} = config
    console.log(api)
})