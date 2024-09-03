<script setup>
const rank = useState('rank', () => {
    return shallowRef({
        num: 5
    })
})

const incrementRank = () => {
    rank.value.num = 40
        console.log(rank.value.num) // Outputs: 40
        //shollowref mean already change the value without the rendering withou t clicking on the button 
}
</script>
<template>
    <div>
        <h1>Rank: {{ rank }}</h1>
        <button @click="incrementRank">change the value</button>
    </div>
</template>