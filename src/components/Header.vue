<script setup>
</script>

<template>
    <header>
        <h1>NewsToday</h1>
        <div class="menu">
            <div>
            <input type="text" name="search" id="search" placeholder="Search">
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