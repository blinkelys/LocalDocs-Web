<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Docs</h1>

        <div class="w-full md:w-3/4 h-fit p-8 my-10 bg-gray-800 flex flex-col items-start justify-start text-white">
            <div v-for="doc in docs" :key="doc.created_at" class="mb-6">
                <h2 class="text-2xl font-semibold">{{ doc.title }}</h2>
                <p class="text-lg">{{ doc.description }}</p>
                <div class="mt-2">{{ doc.content }}</div>
                <div class="mt-2">
                    <span v-for="tag in doc.tags" :key="tag" class="bg-gray-600 text-white rounded-full px-2 py-1 text-sm mr-2">{{ tag }}</span>
                </div>
                <p class="text-sm text-gray-400">Created at: {{ doc.createdAt }} | Updated at: {{ doc.updatedAt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                docs: []
            };
        },
        mounted() {
            axios.get('http://localhost:5000/docs')
            .then(response => {
                this.docs = response.data;
            });
        }
    }
</script>