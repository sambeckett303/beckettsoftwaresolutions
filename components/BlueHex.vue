<script setup>
const props = defineProps({ scale: String });
const translateNum = 110.855;
const transformVal = ref(`rotate(90 90 90) translate(${translateNum}, ${translateNum}) scale(${props.scale}) translate(-${translateNum}, -${translateNum})`);
</script>

<template>
    <div>
        <svg fill="#87CEEB" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-18.48 -18.48 221.71 221.71" xml:space="preserve" stroke="#ffffff">
            <g id="SVGRepo_iconCarrier" :transform="transformVal">
                <path d="M 0,92.375 l 46.188 -80 h 92.378 l 46.185,80 l -46.185,80 H 46.188 L 0,92.375 z"></path>
            </g>
        </svg>
    </div>
</template>

<style lang="scss">

</style>