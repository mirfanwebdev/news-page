<script setup>
import Header from '../components/Header.vue';
import NewsList from '../components/NewsListContainer.vue';
import { getSavedNews } from '../utils/local';

const news = getSavedNews();
</script>

<template>
    <div class="save-view">
        <Header />
        <NewsList title="Saved news" :news="news" />
    </div>
    </template>

<style scoped>
 .save-view {
     height: 100vh;
 }
</style>