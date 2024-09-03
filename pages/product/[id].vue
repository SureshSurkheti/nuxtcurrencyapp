<script setup>
const route = useRoute();
const id = route.params.id;
const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)

if(!product.value) {
    throw createError ({
        statusCode: 404,
        message: 'page not found'
    })
}
</script>

<template>
    <div>
        <!-- <p v-if="error">{{ error }}</p>
        <p v-else>{{ product }}</p> -->
    <h1>{{ product }}</h1>
    </div>
</template>