<template>
    <div id="app">
        <PageLayout />
    </div>
</template>

<script>
import PageLayout from "./components/PageLayout.vue";

export default {
    name: "App",
    components: {
        PageLayout,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
