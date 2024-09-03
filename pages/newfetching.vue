<script setup>
const toDo = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
//whe we use the $fetch function using the doller sign it call the data twince in the server side and in the client side
</script>

<template>
    <div>
    {{ toDo }}
    <br><br>
    </div>
</template>