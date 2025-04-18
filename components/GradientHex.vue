<script setup>
// const props = defineProps({ scale: String });
const translateNum = 110.855;
const transformVal = ref(`rotate(90 90 90) translate(${translateNum}, ${translateNum}) translate(-${translateNum}, -${translateNum})`);
</script>

<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-18.48 -18.48 221.71 221.71" xml:space="preserve" stroke="#ffffff">
            <defs>
                <!-- Linear Gradient Definition -->
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="var(--primary-color)" />
                    <stop offset="100%" stop-color="var(--secondary-color)" />
                </linearGradient>
            </defs>
            <g fill="url(#linearGradient)" :transform="transformVal">
                <path d="M 0,92.375 l 46.188 -80 h 92.378 l 46.185,80 l -46.185,80 H 46.188 L 0,92.375 z"></path>
            </g>
        </svg>
    </div>
</template>
