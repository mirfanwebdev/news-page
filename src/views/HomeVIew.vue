<script setup>
import Header from '../components/Header.vue';
import NewsGrid from '../components/NewsGridContainer.vue';
import NewsList from '../components/NewsListContainer.vue';
import { useNews } from '../composables/useNews';

const {news, isLoading, isSearch, searchQuery, searchNews} = useNews();
</script>

<template>
    <Header v-model="searchQuery" @search="searchNews" />
    <template v-if="isSearch">
        <NewsList title="Search result:" :news="news" :isLoading="isLoading" />
    </template>
    <template v-else>
        <NewsGrid :news="news" :isLoading="isLoading" />
    </template>
</template>