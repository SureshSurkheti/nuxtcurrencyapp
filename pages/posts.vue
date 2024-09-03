<script setup>
const result = ref(null);

const getPosts = async () => {
    const {data} = await useFetch('/api/posts');
    result.value = data;
}

const addPosts = async () => {
    const  {data} = await useFetch('/api/posts',
        {
            method: 'post',
            body: {
                newPost: {
                    id: 3,
                    title: 'this is new post',
                }
            }
        });
        result.value = data
}

const editPosts = async () => {
        const {data} = await useFetch('/api/posts',
        {
            method: 'put',
            body: {
                    title: 'this is updated post',
                }
        })
        result.value = data;
    }

    const deletePosts = async () => {
        const {data} = await useFetch('/api/posts',
        {
            method: 'delete',
        })
        result.value = data;
    }
</script>

<template>
    <div>
        <button @click="getPosts">Get posts</button>
        <button @click="addPosts">Add posts</button>
        <button @click="editPosts">Edit posts</button>
        <button @click="deletePosts">Delete posts</button>
        <h1>{{ result }}</h1>
    </div>
</template>