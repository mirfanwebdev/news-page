<script setup>
defineProps({
    count: {
        type: Number,
        default: 3
    },
    showText: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div v-if="showText" class="skeleton-container">
        <div v-for="n in count" :key="n" class="skeleton-item">
            <div class="skeleton-text"></div>
        </div>
    </div>
    <div v-else class="skeleton-item skeleton-rect"></div>
</template>

<style scoped>
.skeleton-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
}

.skeleton-item {
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #eee;
    border-radius: 4px;
    width: 100%;
    position: relative;
}

.skeleton-rect {
    width: 100%;
    height: 100%;
    background-color: #ddd;
}

.skeleton-text {
    width: 100%;
    height: 16px;
    background-color: #ddd;
}

/* Animation */
.skeleton-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right,
        #eee,
        #f5f5f5,
        #eee
    );
    animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>