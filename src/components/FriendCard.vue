<template>
    <div class="friend-card">
        <p>{{ friend.name }}는 {{ friend.country }} 출신이며 {{ friend.age }}살입니다.</p>
        <button @click="$emit('delete-friend', friend.id)" class="delete-button">Delete</button>
    </div>
</template>

<script>
export default {
    name: "FriendCard",
    props: {
        friend: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.friend-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.delete-button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
.delete-button:hover {
    background-color: #ff1a1a;
}
</style>
