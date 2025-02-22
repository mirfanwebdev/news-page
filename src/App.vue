<script setup>
import Header from './components/Header.vue';
import NewsContainer from './components/NewsContainer.vue';
import { onMounted } from 'vue';
// import { fetchNews } from './utils/api';

onMounted(() => {
  // console.log(fetchNews({ endpoint: '/top-headlines' }));
});
</script>

<template>
  <Header />
  <NewsContainer />
</template>



<style scoped>
</style>
