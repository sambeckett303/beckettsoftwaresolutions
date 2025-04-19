<script setup>
const translateNum = 110.855;
// const translateNum = 95;
const transformVal = ref(`rotate(90 90 90) translate(${translateNum}, ${translateNum}) scale(1.4) translate(-${translateNum}, -${translateNum}) translate(9)`);
</script>

<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-35.48 -35.48 264.71 264.71" xml:space="preserve">
            <g fill="#FFF" stroke="var(--primary-color)" stroke-width="3" :transform="transformVal">
                <path d="M 0,92.375 l 46.188 -80 h 92.378 l 46.185,80 l -46.185,80 H 46.188 L 0,92.375 z"></path>
            </g>
        </svg>
    </div>
</template>
