<script setup>
defineProps(['error'])

const handleError = () => {
    clearError({
        redirect: '/'
    })
}
</script>

<template>
    <div>
        <h1>Errrrroe fuck {{ error.statusCode }}</h1>
        <h1>{{ error.message }}</h1>
        <button @click="handleError">clear the error</button>
    </div>
</template>
