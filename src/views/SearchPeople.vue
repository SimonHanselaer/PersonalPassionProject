<template>
  <div class="searchpeople contentContainer">
    <h1 class="header-2">Search friends</h1>
    <ul class="userContainer">
      <li v-for="user in computedUsers" :key="user.id" class="userTile">
        <h2 class="userName">{{user.name}}</h2>
        <img :src="user.image" alt width="50" class="userImage" v-if="user.image" />
        <img src="assets/icon/user.svg" alt width="60" class="userImage" v-else />
        <button
          v-if="!computedUser.friends.includes(user.id)"
          @click="addFriend(user.id)"
          class="userAdd"
        >Add friend</button>
        <p class="userAdd textInputField" v-else>Already friends</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "searchPeople",
  data() {
    return {};
  },
  created() {
    store.dispatch("getUser");
    store.dispatch("getUsers");
  },
  methods: {
    addFriend(id) {
      store.dispatch("addFriend", id);
    }
  },
  computed: {
    computedUser() {
      return store.state.user;
    },
    computedUsers() {
      return store.state.users;
    }
  }
};
</script>
