<template>
    <div>
        {{ stocke }}
        <h1>{{ data.name }}</h1>
        <h1>{{ data.age }}</h1>
        <h1>{{ data.city }}</h1>
        <NuxtLink to="/currency">Currency Converter</NuxtLink><br><br>
        <NuxtLink to="/todos">todos page</NuxtLink>
        <h1 v-if="name">this is my first name name: {{ name }}</h1>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/hello')

let userName
if(process.client){
    userName = prompt('what is your user name?')
}

const {data: name} = await useFetch('/users/rec-user', 
{
    server: false,
    method: 'POST',
    body: {
        name: userName
    }
})

const config = useRuntimeConfig();
console.log(config.public.publicKey)
console.log(config.secretKey)


const {data: stocke} = await useFetch('/api/stock')

</script>
