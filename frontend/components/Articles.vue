<template>
    <div class="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
</template>

<script>
import ArticleCard from "./ArticleCard";
export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>