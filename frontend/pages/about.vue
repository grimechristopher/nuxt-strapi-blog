<template>
  <div>
    <Heading
      :title="about.title"
      :description="about.description"
    />

    <Blocks 
      v-if="about.blocks"
      :blocks="about.blocks"
    />
  </div>
</template>

<script setup>
  const { find } = useStrapi4();
  const aboutResponse = await find('about', {
    populate: 'deep',
  });
  let about = aboutResponse.data.attributes;

  useHead({
    title: about?.title,
    meta: [
      { name: 'description', content: about?.description },
      { name: 'og:title', content: about?.title },
      { name: 'og:description', content: about?.description },
    ],
  })
</script>