<script setup>
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
            <div class="search">
                <input
                :value="modelValue"
                @input="updateQuery"
                @keyup.enter="searchNews"
                type="text"
                >
                <button @click="searchNews">Search</button>
            </div>
            <div>simpan</div>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75vw;
}
.search {
    display: flex;
    gap: 0.5rem;
}
input {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
}
input:focus,
input:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

.menu {
    display: flex;
    flex-direction: row-reverse;
    gap: 4rem;
}
</style>