<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    modelValue: {
        type: String,
    }
});

const emit = defineEmits(['update:modelValue', 'search']);

const updateQuery = (event) => {
    emit('update:modelValue', event.target.value);
}
const searchNews = () => {
    emit('search');
};

</script>

<template>
    <header>
        <h1>NewsDaily</h1>
        <div class="menu">
            <label for="search">
                <input
                :value="modelValue"
                @input="updateQuery"
                @keyup.enter="searchNews"
                type="text"
                id="search"
                placeholder="Cari berita"
                />
                <span><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></span>
            </label>
            <RouterLink to="/save">
                <div class="bookmark">
                    <font-awesome-icon :icon="['fas', 'bookmark']" />
                    <span>Tersimpan</span>
                </div>
            </RouterLink>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 75vw;
    padding: 0 1rem;
}

label {
    position: relative;
}

label span {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    transform: translateY(-25%);
}

input {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0.5rem;
}

input:focus,
input:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

.menu {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 4rem;
}

.bookmark {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
}

.bookmark span {
    font-size: 0.75rem;
}
</style>