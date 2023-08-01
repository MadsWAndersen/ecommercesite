<template>
    <div class="flex flex-col py-10">
        <div>
            <input type="text" v-model="searchTerm" placeholder="Search">
        </div>

        <div class="">
            <div v-for="movie in data?.results">
            {{ movie.title }}
            </div>
        </div>
        
    </div>
</template>
  

<script setup lang="ts">



import { APIRespons } from '@/types/APIRespons';

const searchTerm = ref('')

const url = computed(() => {
    return `api/movies/search?query=${searchTerm.value}`
    
})

const { data } = await useFetch<APIRespons>(url);

</script>