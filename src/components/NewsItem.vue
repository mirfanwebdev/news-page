<script setup>
import Skeleton from './Skeleton.vue';

</script>

<template>
    <div class="news-item">
        <Skeleton :count="5" />
        <Skeleton showText />
    </div>
</template>

<style scoped>
.news-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>