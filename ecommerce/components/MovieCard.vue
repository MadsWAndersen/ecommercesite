<template>
    <div class="h-123 w-64 border flex flex-col text-center">
        <div class="mb-5 bg-yellow-800 inline-block">
            <img :src="imgURL" alt="Movie Poster" class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block">
        </div>

        <div class="text-lg font-bold mb-2">
            {{ movie?.title  }}
        </div>

        <p class="text-m break-words text-wrap truncate overflow-hidden px-2">
            {{ movie?.overview }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PropType } from 'vue'
import { Movie } from '@/types/Movie';

const props = defineProps({
    movie: {
        type: Object as PropType<Movie>
    }
})

const config = useRuntimeConfig();
const imgURL = computed(() => props.movie?.poster_path != null  ? 
`${config.public.imgBaseUrl}/${props.movie?.poster_path}` : 'https://via.placeholder.com/300x450' )



</script>