<script setup>
import Header from '../components/Header.vue';
import NewsContainer from '../components/NewsContainer.vue';
import { useNews } from '../composables/useNews';

const {news, isLoading, searchQuery, searchNews} = useNews();
</script>

<template>
    <Header v-model="searchQuery" @search="searchNews" />
    <NewsContainer :news="news" :isLoading="isLoading" />
</template>