<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Docs</h1>

        <div class="w-full md: w-3/4 h-fit p-8 my-10 bg-gray-800 flex flex-col items-center justify-center text-white">
            
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            axios.get('http://localhost:5000/docs')
            .then(response => {
                console.log(response.data)
            })
        }
    }
</script>