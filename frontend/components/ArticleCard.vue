<template>
  <nuxt-link 
    :key="article.id" 
    :to="{ name: 'articles-slug', params: { slug: article.attributes.slug } }"
    class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
  >
    <img :src="getStrapiMedia(article.attributes.cover.data.attributes.url)" height="100" />
    <div class="px-4 py-4">
      <p v-if="article.attributes.category" class="font-bold text-neutral-700 uppercase">
        {{ article.attributes.category.data.attributes.name }}
      </p>
      <div >
        <h2 id="title" class="text-xl font-bold text-neutral-700">{{ article.attributes.title }}</h2>
        <p class="line-clamp-2 mt-2 text-neutral-500">
          {{ article.attributes.description }}
        </p>
      </div>
      <div class="flex mt-2">
        <img :src="getStrapiMedia(article.attributes.author.data.attributes.avatar.data.attributes.url)"
          style="border-radius: 50%; object-fit: cover" width="40" height="40" :alt="article.attributes.title" />
        <span class="px-2 self-center text-neutral-700">{{ article.attributes.author.data.attributes.name }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from "../utils/media";
export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>