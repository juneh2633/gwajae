<template>
    <div>
        <h2>안녕하세요<br />홍길동입니다.</h2>
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Info</li>
            <li>Contact Me</li>
            <li>Friend</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PageLeft",
};
</script>

<style scoped>
h2 {
    padding-top: 60px;
}
ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px 0;
}
</style>
