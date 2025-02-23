<script setup>
import Skeleton from './Skeleton.vue';
import { formatDate } from '../utils/format';
import { saveNews } from '../utils/local';

defineProps({
    news: {
        type: Array,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: true
    }
});

</script>

<template>
    <div class="news-container">
        <template v-if="isLoading" v-for="n in 10" :key="n">
            <div class="news-item">
                <div class="news-image"><Skeleton /></div>
                <Skeleton showText :count="3" />
            </div>
        </template>

        <template v-else>
            <div class="news-item" v-for="article in news" :key="article.url">
                <div class="news-image">
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="article.title" class="news-image">
                    <img v-else src="https://placehold.co/600x400?text=No+Image" alt="no-image" class="news-image">
                </div>
                <div class="news-content">
                    <h2 class="limited">{{ article.title }}</h2>
                <p class="author">{{ article.source.name }} | <span>{{ article.author }}</span></p>
                <p class="date">{{ formatDate(article.publishedAt) }}</p>
                <p class="limited">{{ article.description }}</p>
                <a :href="article.url" target="_blank" @click="saveNews(article)" >Read more</a>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
.news-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;
    margin: 4rem;
}

.news-item {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

}

.news-item:first-child,
.news-item:nth-child(8) {
    grid-column: span 3;
    grid-row: span 2;
}

.news-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.news-image {
    width: 100%;
    min-height: 100px;
    flex: 1 1 0;
}

.limited {
  display: -webkit-box; 
  line-clamp: 2;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  overflow: hidden; 
}

.author {
    font-weight: bold;
    color: orange;
}

.author,
.date {
    font-size: 0.8rem;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>