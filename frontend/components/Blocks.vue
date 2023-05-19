<template>
  <div v-for="block in blocks">
    <div 
      v-if="block.__component === 'shared.rich-text'"
      class="prose max-w-4xl mx-auto py-8 px-3"    
    >
      <div
        v-html="mdRenderer.render(block.body)"
      />
    </div>
    <div 
      v-else-if="block.__component === 'shared.media'" 
      class="py-8"
    >
      <img :src="getStrapiMedia(block.file.data.attributes.url)" class="w-screen"/>
    </div>
    <div v-else-if="block.__component === 'shared.quote'" class="px-3 py-6">
      <blockquote class="container max-w-xl border-l-4 border-neutral-700 py-2 pl-6 text-neutral-700">
        <p class="text-5xl font-medium italic">{{block.body}}</p>
        <cite class="mt-4 block font-bold uppercase not-italic">
          {{block.title}}
        </cite>
      </blockquote>
    </div>
    <div v-else-if="block.__component === 'shared.slider'">
      <MediaSlider 
        :files="block.files.data"
      />
    </div>
    <div v-else>{{block}}</div>

  </div>
</template>

<script setup>
import md from "markdown-it";
const mdRenderer = md();
const props = defineProps({
  blocks: {
    type: Array,
    required: true,
  },
});
</script>