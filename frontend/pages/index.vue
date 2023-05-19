
<template>
  <div>
    <Heading
      :title="props.global.siteName"
      :description="props.global.siteDescription"
    />
    <main>
      <Articles :articles="articles" />
    </main>
  </div>
</template>

<script setup>
  const props = defineProps({
    global: Object
  })

  const { find } = useStrapi4();
  const articlesResponse = await find('articles', {
    populate: 'deep',

  });
  let articles = articlesResponse.data;
</script>

<style>
body {
  margin: 0;
}
</style>