<script setup>
</script>

<template>
    <header>
        <div>
            <input type="text" name="search" id="search" placeholder="Search">
        </div>
        <p>Simpan</p>
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    align-items: center;
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
</style>