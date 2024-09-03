<script setup>
// const coutner = ref(1)
const coutner = useCounter();

//the same logic can we do by using the useState hook
// const coutner = useState(() => 1)

//using the shared state method that share the every filw with each other
//the counter used in the every screen will be increase at the similar time
// const coutner = useState('counterSate', () => 1)
</script>

<template>
    <div>
        <h1>coutner: {{ coutner }}</h1>
        <button @click="coutner++">Increment Counter</button>
    </div>
</template>