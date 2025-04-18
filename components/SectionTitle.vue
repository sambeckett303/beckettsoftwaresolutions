<script setup>
const props = defineProps({ title: String });
</script>

<template>
    <div class="sectionTitle">
        <h2>{{ title }}</h2>
    </div>
</template>

<style>
.sectionTitle {
    background: var(--primary-color);
    background: linear-gradient(90deg, var(--primary-color), var(--third-color) 80%, var(--secondary-color) 100%);
    color: #FFFFFF;
    padding: 15px 30px;
    font-size: 25px;
    border-bottom: 4px solid #535353;
    width: 50%;
    margin: 0 auto;
    border-radius: 15px;

    h2 {
        color: #FFFFFF
    }
}
@media only screen and (max-width: 1135px) {
    .sectionTitle {
        width: 75%;
    }
}
</style>