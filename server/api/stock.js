export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {api} = config
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=${api}`

    const data = await $fetch(url)
    return data
})