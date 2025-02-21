<script setup>
import NewsItem from './NewsItem.vue';
</script>

<template>
    <div class="news-container">
        <div class="big-container">
            <NewsItem/>
        </div>
        <div class="small-container">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        <div class="small-container">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        <div class="big-container">
            <NewsItem/>
        </div>
    </div>
</template>

<style scoped>
.news-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.25rem;
    margin: 4rem 0;
}
.big-container {
    grid-column: span 2;
}
.small-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
}
</style>