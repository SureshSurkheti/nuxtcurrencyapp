<script setup>
const todos = useState('tods', () => {
    return []
})

const newTodo = useState(() => '')

const addTodo = () => {
    todos.value.push(newTodo.value)
    newTodo.value = ''
}

const removeTodo = (todo) => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index, 1)
}
</script>
<template>
    <div>
        <h1>Todo List</h1>
        <input v-model="newTodo" placeholder="Add a new todo" /><br><br>
        <button @click="addTodo">Add Todo</button>
        <ul>
            <li v-for="todo in todos" :key="todo">
                {{ todo }}
                <button @click="removeTodo(todo)">Remove</button>
            </li>
        </ul>
    </div>
</template>