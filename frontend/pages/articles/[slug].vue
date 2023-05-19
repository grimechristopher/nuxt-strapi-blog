<template>
  <div>
    <Heading
      :title="article.title"
      :description="article.description"
    />
    <div class="px-4 py-4 flex mt-2">
      <img :src="getStrapiMedia(article.author.data.attributes.avatar.data.attributes.url)"
        style="border-radius: 50%; object-fit: cover" width="40" height="40" :alt="article.title" />
        <div>
          <span class="px-2 self-center text-neutral-700">{{ article.author.data.attributes.name }}</span>
          <div v-if="article.publishedAt" class="px-2 self-center text-neutral-700">
            {{ new Date(article.publishedAt).toLocaleDateString() }}
          </div>
        </div>
    </div>
    <img v-if="article.cover" class="mt-6 w-screen" :src="getStrapiMedia(article.cover.data.attributes.url)" />

    <main class="mt-8">
      <Blocks 
        v-if="article.blocks"
        :blocks="article.blocks"
      />
    </main>
  </div>
</template>

<script setup> 
  import Heading from "~~/components/Heading.vue"
  import Blocks from "~~/components/Blocks.vue"
  const { find } = useStrapi4()
  const route = useRoute();
  const matchingArticle = await find("articles", {filters: {slug: route.params.slug}, populate: 'deep'})
  const article = matchingArticle.data[0].attributes;

  useHead({
    title: article?.title,
    meta: [
      { name: 'description', content: article?.description },
      { name: 'og:title', content: article?.title },
      { name: 'og:description', content: article?.description },
      { name: 'og:image', content: getStrapiMedia(article?.cover?.data?.attributes?.url)},
    ],
  })
</script>