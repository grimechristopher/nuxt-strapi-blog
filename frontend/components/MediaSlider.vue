<template>
  <div>
    <Carousel :items-to-show="1.5">
      <Slide v-for="file in files" :key="file.id">
        <img :src="getStrapiMedia(file.attributes.url)" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  files: {
    type: Array,
    required: true,
  },
});
</script>