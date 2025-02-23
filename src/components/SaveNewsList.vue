<script setup>
import { formatDate } from '../utils/format';
import { getSavedNews } from '../utils/local';

const news = getSavedNews();
</script>

<template>
    <div class="news-section">
        <h2>Berita Tersimpan</h2>
        <div class="news-container">
            <div class="news-item" v-for="article in news" :key="article.url">
                <div class="news-image">
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="article.title" class="news-image">
                    <img v-else src="https://placehold.co/600x400?text=No+Image" alt="no-image" class="news-image">
                </div>
                <div class="news-content">
                    <h3>{{ article.title }}</h3>
                    <a :href="article.url" target="_blank" >Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.news-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin: 3rem 1rem;
}

.news-section h2 {
    font-size: 1.85rem;
    font-weight: 600;
}

.news-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.news-item {
    display: flex;
    gap: 1rem;
}

.news-image {
    width: 200px;
    min-height: 100px;
    /* flex: 1 1 0; */
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
}

</style>