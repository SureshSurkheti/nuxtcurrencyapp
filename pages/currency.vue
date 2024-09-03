<template>
    <div>
        <h1>Currency Converter</h1>
        <br>
        <select v-model="fromCurrency">
            <option value="USD">American Doller</option>
            <option value="Pound">British Pound</option>
            <option value="Euro">European Euro</option>
            <option value="Rupees">Indian Rupess</option>
            <option value="Yen">Japanese Yen</option>
        </select>

        <select v-model="toCurrency">
            <option value="USD">American Doller</option>
            <option value="Pound">British Pound</option>
            <option value="Euro">European Euro</option>
            <option value="Rupees">Indian Rupess</option>
            <option value="Yen">Japanese Yen</option>
        </select>
        <br>
        <input type="number" v-model="amount" placeholder="enter the amoutn">

        <div v-if="conversionRate && amount">
            <h1>{{ amount }} {{ fromCurrency }} equals {{ amount * conversionRate }} {{ toCurrency }}</h1>
        </div>

        <br><br>
        <button @click="execute">Convert</button>
    </div>
</template>
<script setup>
const fromCurrency = ref("USD")
const toCurrency = ref("Pound")
const conversionRate = ref(null)
const amount = ref("")
const apiKey = "UTDKR5LIB41XNUE3"
const {data, execute} = await useFetch(() => {
    return `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency.value}&to_currency=${toCurrency.value}&apikey=${apiKey}`
},{
    immediate: true,
    transform: data => {
        conversionRate.value = Number(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
    }
})
</script>