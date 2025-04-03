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
    background: #605eff;
    background: linear-gradient(90deg, #605eff 0%, #b675ff 45%, #54e1f2 100%);
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