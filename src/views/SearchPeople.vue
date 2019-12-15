<template>
  <div class="searchpeople contentContainer">
    <h1 class="header-2">Search friends</h1>
    <input
      class="searchFriendsInput"
      type="text"
      placeholder="Search your friends..."
      v-model="inputQueryFriends"
      @keyup="handleChangeInput"
    />
    <ul class="userContainer" v-if="computedFilteredUsers.length > 0">
      <li v-for="user in computedFilteredUsers" :key="user.id" class="userTile">
        <h2 class="userName">{{user.name}}</h2>
        <img :src="user.image" alt width="50" class="userImage" v-if="user.image" />
        <img src="assets/icon/user.svg" alt width="60" class="userImage" v-else />
        <button
          v-if="!computedUser.friends.includes(user.id)"
          @click="addFriend(user.id)"
          class="userAdd textInputField"
        >Add friend</button>
        <p class="userAdd userAddPositive textInputField" v-else>Already friends</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "searchPeople",
  data() {
    return {
      inputQueryFriends: ""
    };
  },
  created() {
    store.dispatch("getUser");
    store.dispatch("getUsers");
  },
  methods: {
    addFriend(id) {
      store.dispatch("addFriend", id);
    },
    handleChangeInput() {
      let self = this;

      store.dispatch("searchFriends", self.inputQueryFriends);
    }
  },
  computed: {
    computedUser() {
      return store.state.user;
    },
    computedUsers() {
      return store.state.users;
    },
    computedFilteredUsers() {
      return store.state.filteredUsers;
    }
  }
};
</script>
