<template>
  <div>
    <Heading
      :title="category.name"
    />

    <main>
      <Articles :articles="articles || []" />
    </main>
  </div>
</template>

<script setup>
  const props = defineProps({
    global: Object
  })
  
  const { find } = useStrapi4()
  const route = useRoute();

  const matchingCategories = await find('categories', {filters: {slug: route.params.slug}, populate: 'deep'});
  const category = matchingCategories.data[0].attributes;

  const articlesResponse = await find("articles", { filters: {"category": {slug: category.slug}}, populate: 'deep'})
  const articles = articlesResponse.data;

  useHead({
    title: `${category?.name} | ${props?.global.siteName}`,
    meta: [
      { name: 'description', content: category?.description },
      { name: 'og:title', content: category?.name },
      { name: 'og:description', content: category?.description },
    ],
  })
</script>
