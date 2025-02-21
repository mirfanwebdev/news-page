<script setup>
import Skeleton from './Skeleton.vue';
</script>

<template>
    <div class="news-container">
        <template v-for="n in 10" :key="n">
            <div class="news-item">
                <div class="news-image"><Skeleton /></div>
                <Skeleton showText :count="3" />
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

.news-image {
    width: 100%;
    min-height: 100px;
    flex: 1 1 0;
}

</style>