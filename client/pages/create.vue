<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Create</h1>
        <div class="w-full px-10 md:w-2/4 h-fit py-8 mt-8 bg-gray-800">
            <form @submit.prevent="handleSubmit">
                <label class="text-white font-bold" for="title">Title:</label>
                <input type="text" name="title" id="title" class="w-full bg-gray-700 py-2 mb-4 text-gray-100">
                <label class="text-white font-bold" for="description">Desescription:</label>
                <input type="text" name="description" id="description" class="w-full bg-gray-700 py-2 mb-4 text-gray-100">
                <label class="text-white font-bold" for="content">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10" class="w-full bg-gray-700 py-2 mb-4 text-gray-100"></textarea>
                <label class="text-white font-bold" for="tags">Tags:</label>
                <input type="text" name="tags" id="tags" class="w-full bg-gray-700 py-2 mb-4 text-gray-100">
                <button type="submit" class="w-full bg-white text-black hover:underline mb-8 py-4">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        handleSubmit() {
            axios.post('http://localhost:5000/create', {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                content: document.getElementById('content').value,
                tags: document.getElementById('tags').value
            })
        }
    }
}
</script>