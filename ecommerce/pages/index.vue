<template>
    <div class="flex flex-col py-10">

        <h2 class="text-2xl font-bold text-center">Movies!</h2>

        <div class="flex justify-center items-center h-32">
            <input class="border py-1 px-2 border-gray-800 rounded-md min-w-64" type="text" v-model="searchTerm" placeholder="Search">
        </div>

        <div class="grid grid-cols-5 gap-y-10 gap-x-10 mb-10 self-center">
            <div class="text-center" v-for="movie in data?.results">
            <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>

        <div v-if="data?.results.length" class="flex justify-center">
            <button v-if="!disabledPrevious" @click="page--"> Prev</button>
            <div class="px-4 py-2 text-m border rounded-lg"> {{ page }}</div>
            <button v-if="!disabledNext" @click="page++">Next</button>
        </div>
        
    </div>
</template>
  

<script setup lang="ts">


import { computed, ref } from 'vue';
import { refDebounced } from '@vueuse/core';
import { APIRespons } from '@/types/APIRespons';


const searchTerm = ref('');

const page=ref(1);

const disabledPrevious = computed(() => {
    return page.value === 1;
})

const disabledNext = computed(() => {
    return page.value === data?.total_pages;
})


const debounchedSearchTerm = refDebounced(searchTerm, 500)

const url = computed(() => {
   return `api/movies/search?query=${debounchedSearchTerm.value}&page=${page.value}`
    
})



const { data } = await useFetch<APIRespons>(url);

</script>