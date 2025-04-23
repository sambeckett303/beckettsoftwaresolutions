<script setup>
const props = defineProps({ buttonText: String });
</script>

<template>
    <div class="buttonContainer">
        <button class="buttonText">{{ buttonText }}</button> 
    </div>
</template>

<style>
    .buttonContainer {
        margin-top: 30px;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
    }

    .buttonText {
        box-shadow: 1px 1px 1px 1px var(--secondary-color);
        background-color: var(--third-color);
        color: #FFFFFF;
        text-decoration: none;
        padding: 20px;
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        display: block;
        cursor: pointer;
    }
</style>