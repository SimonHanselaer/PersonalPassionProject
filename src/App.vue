<template>
  <div id="app" class="layout normal">
    <section class="sideBar">
      <div id="nav" class="nav sideBarItems">
        <router-link to="movies">Movies</router-link>
        <router-link to="shows">TV-shows</router-link>
        <router-link to="games">Games</router-link>
        <router-link to="social">Social</router-link>
        <router-link to="profile">Profile</router-link>
        <button @click="logout">Logout</button>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "app",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style>
@import "./styles/typo.module.css";
@import "./App.module.css";
</style>
