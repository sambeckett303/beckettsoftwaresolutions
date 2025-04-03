<script setup>
const props = defineProps({ buttonText: String });
</script>

<template>
    <div class="buttonContainer">
        <a class="buttonText">{{ buttonText }}</a> 
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
        box-shadow: 1px 1px 1px 1px #7a5b9e;
        background-color: #b475ff;
        color: #FFFFFF;
        text-decoration: none;
        padding: 20px;
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }
</style>