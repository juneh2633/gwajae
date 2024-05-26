<template>
    <div id="app-container">
        <div class="leftMenu">
            <PageLeft />
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import PageLeft from "./PageLeft.vue";

export default {
    name: "PageLayout",
    components: {
        PageLeft,
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

#app-container {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    top: -100px;
}

.content {
    padding: 20px;
    width: 84%;
    display: flex;
    flex-direction: column;
}

.leftMenu {
    height: 100vh;
    width: 15%;
    background-color: #f0f0f0;
    text-align: left;
    padding: 20px;
}
</style>
