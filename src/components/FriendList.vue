<template>
    <div class="container">
        <div class="friend-list">
            <h2>Friend</h2>
            <div v-for="friend in friends" :key="friend.id">
                <FriendCard :friend="friend" @delete-friend="deleteFriend" />
            </div>
            <div class="input-group">
                <input v-model="newFriend.name" placeholder="이름 추가" class="input-box" />
                <input v-model="newFriend.age" placeholder="나이 추가" class="input-box" />
                <select v-model="newFriend.country" class="input-box">
                    <option value="한국">한국</option>
                    <option value="중국">중국</option>
                    <option value="일본">일본</option>
                </select>
                <button @click="addFriend" class="add-button">Add Friend</button>
            </div>
        </div>
    </div>
</template>

<script>
import FriendCard from "./FriendCard.vue";

export default {
    name: "FriendList",
    components: {
        FriendCard,
    },
    data() {
        return {
            newFriend: {
                id: null,
                name: "",
                age: "",
                country: "한국",
            },
            friends: [],
        };
    },
    methods: {
        addFriend() {
            if (this.newFriend.name && this.newFriend.age && this.newFriend.country) {
                const newFriend = { ...this.newFriend, id: Date.now() };
                this.friends.push(newFriend);
                this.newFriend.name = "";
                this.newFriend.age = "";
                this.newFriend.country = "한국";
            }
        },
        deleteFriend(friendId) {
            this.friends = this.friends.filter((friend) => friend.id !== friendId);
        },
    },
};
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

.container {
    display: flex;
    justify-content: center;

    align-items: center;
    height: 100%;
}

.friend-list {
    max-width: 600px;
    padding: 20px;
    /* background-color: #f0f0f0; */
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.input-box {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.add-button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #45a049;
}
</style>
