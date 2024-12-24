<template>
    <div class="w-full h-fit py-6 bg-white text-black absolute top-0 flex flex-row items-center z-50">
        <h1 class="text-2xl font-bold px-10">LocalDocs</h1>
        <div class="space-x-10 text-xl font-bold tracking-wide flex items-center justify-center absolute w-full">
            <RouterLink to="/">Home</RouterLink>
            <span>|</span>
            <RouterLink to="/docs">Docs</RouterLink>
        </div>
            <div class="space-x-2 md:absolute md:right-10 flex items-center">
                <RouterLink to="/create" class="font-semibold border-4 px-6 py-2 border-blue-500 text-xl hover:bg-blue-500 transition">Create Doc</RouterLink>
            </div>
    </div>
</template>