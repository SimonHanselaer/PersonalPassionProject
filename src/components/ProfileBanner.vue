<template>
  <div class="profilebanner" v-if="computedUser && !computedLoading">
    <h2 class="profileName header-8">{{computedUser.name}}</h2>
    <img :src="computedProfileImage" alt width="150" class="profilePic" />
    <p class="profileFriends" v-if="computedUser.friends">{{computedUser.friends.length}} Friends</p>
    <button @click="addFriends" class="profileAddFriends">Add friends</button>

    <article class="profileMovies" v-if="computedUser.watched">
      <h3 v-if="computedUser.watched.length === 1">Movie watched</h3>
      <h3 v-else>Movies watched</h3>
      <p class="header-8">{{computedUser.watched.length}}</p>
    </article>
    <article class="profileSeries" v-if="computedUser.watchedSeries">
      <h3 v-if="computedUser.watchedSeries.length === 1">Serie watched</h3>
      <h3 v-else>Series watched</h3>
      <p class="header-8">{{computedUser.watchedSeries.length}}</p>
    </article>
    <article class="profileGames" v-if="computedUser.playedGames">
      <h3 v-if="computedUser.playedGames.length === 1">Game played</h3>
      <h3 v-else>Games played</h3>
      <p class="header-8">{{computedUser.playedGames.length}}</p>
    </article>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "profilebanner",
  data() {
    return {};
  },
  created() {
    store.dispatch("getUser");
  },
  methods: {
    addFriends() {
      this.$router.push({
        name: "searchPeople"
      });
    }
  },
  computed: {
    computedLoading() {
      return store.state.loadingStatusUser;
    },
    computedUser() {
      return store.state.user;
    },
    // computedWatchedItems() {
    //   return store.state.user.watched.length;
    // },
    // computedWatchedSeries() {
    //   return store.state.user.watchedSeries.length;
    // },
    // computedPlayedGames() {
    //   return store.state.user.playedGames.length;
    // },
    computedProfileImage() {
      return localStorage.profilePicture;
    }
    // computedFriends() {
    //   const friends = store.state.user.friends.length;
    //   return friends;
    // }
  }
};
</script>
