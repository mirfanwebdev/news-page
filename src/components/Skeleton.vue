<script setup>
defineProps({
    count: {
        type: Number,
        default: 1
    },
    shape: {
        type: String,
        default: 'rect'
    },
    showText: {
        type: Boolean,
        default: false
    },
});
</script>

<template>
    <div class="skeleton-container">
        <div v-for="n in count" :key="n" class="skeleton-item">
            <div v-if="shape === 'circle'" class="skeleton-circle"></div>
            <div v-else class="skeleton-rect"></div>
            <div v-if="showText" class="skeleton-text"></div>
        </div>
    </div>
</template>

<style scoped>
.skeleton-contaier {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

.skeleton-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 10px;
}

.skeleton-rect {
    width: 100%;
    height: 20px;
    background-color: #ddd;
}

.skeleton-text {
    width: 100%;
    height: 16px;
    background-color: #ddd;
    margin-left: 10px;
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