<template>
  <div id="app" class="layout normal">
    <section class="navBar">
      <p class="appName">Media wish- &amp; watchlist</p>
      <SearchBar />
      <p class="profilePicture">profile picture</p>
    </section>
    <section class="sideBar">
      <div id="nav" class="nav sideBarItems">
        <router-link v-bind:to="{name: 'movies'}">Movies</router-link>
        <router-link v-bind:to="{name: 'shows'}">TV-shows</router-link>
        <router-link v-bind:to="{name: 'games'}">Games</router-link>
        <router-link v-bind:to="{name: 'social'}">Social</router-link>
        <router-link v-bind:to="{name: 'profile'}">Profile</router-link>
        <button @click="logout">Logout</button>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
//v-if="computedUser.user"

import firebase from "firebase";
import store from "./store/index";
import SearchBar from "./components/SearchBar";

export default {
  name: "app",
  components: { SearchBar },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
          this.$store.state.user = [];
        });
    }
  },
  computed: {
    computedUser() {
      return store.state.user;
    }
  }
};
</script>

<style>
@import "./styles/typo.module.css";
@import "./App.module.css";
</style>
