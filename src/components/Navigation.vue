<template>
  <div id="app" class="layout normal">
    <section class="navBar">
      <p class="appName">Media wish- &amp; watchlist</p>
      <SearchBar />
      <img :src="profilePicture" class="profilePicture" height="40" alt v-if="profilePicture" />
      <img src="/assets/icon/user.svg" class="profilePicture" height="40" alt v-else />
    </section>
    <section class="sideBar">
      <div id="nav" class="nav sideBarItems">
        <router-link v-bind:to="{name: 'movies'}">Movies</router-link>
        <router-link v-bind:to="{name: 'shows'}">TV-shows</router-link>
        <router-link v-bind:to="{name: 'games'}">Games</router-link>
        <router-link v-bind:to="{name: 'social'}">Social</router-link>
        <router-link v-bind:to="{name: 'profile'}">Profile</router-link>
        <button class="logoutButton" @click="logout">
          Logout
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 15 15"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>logout</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">
              <g
                id="SideBar"
                transform="translate(-174.000000, -921.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="logout" transform="translate(174.000000, 921.000000)">
                  <path
                    d="M7.47509766,13.729248 L1.86875977,13.729248 C1.52490234,13.729248 1.24584961,13.450166 1.24584961,13.1063379 L1.24584961,1.89369141 C1.24584961,1.54983398 1.52493164,1.27078125 1.86875977,1.27078125 L7.47509766,1.27078125 C7.81957031,1.27078125 8.09800781,0.99234375 8.09800781,0.647871094 C8.09800781,0.303398437 7.81957031,0.0249023437 7.47509766,0.0249023437 L1.86875977,0.0249023437 C0.838447266,0.0249023437 0,0.863378906 0,1.89369141 L0,13.1063086 C0,14.1366211 0.838447266,14.9750684 1.86875977,14.9750684 L7.47509766,14.9750684 C7.81957031,14.9750684 8.09800781,14.6966309 8.09800781,14.3521582 C8.09800781,14.0076855 7.81957031,13.729248 7.47509766,13.729248 Z"
                    id="Path"
                  />
                  <path
                    d="M14.814375,7.05647461 L11.0269922,3.31892578 C10.7828027,3.07722656 10.3878809,3.08036133 10.1461816,3.32516602 C9.90448242,3.5699707 9.90697266,3.96427734 10.1524219,4.20597656 L12.8590137,6.87706055 L5.60630859,6.87706055 C5.26183594,6.87706055 4.98339844,7.15549805 4.98339844,7.4999707 C4.98339844,7.84444336 5.26183594,8.12291016 5.60630859,8.12291016 L12.8590137,8.12291016 L10.1524219,10.7939941 C9.90700195,11.0356934 9.90512695,11.43 10.1461816,11.6748047 C10.2682617,11.7981445 10.4289844,11.8604297 10.589707,11.8604297 C10.7479395,11.8604297 10.9061426,11.8006348 11.0269922,11.6810156 L14.814375,7.9434668 C14.9327344,7.82636719 15,7.666875 15,7.49994141 C15,7.33306641 14.9333496,7.17421875 14.814375,7.05647461 Z"
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store/index";
import SearchBar from "./SearchBar";

export default {
  name: "navigation",
  components: { SearchBar },
  data() {
    return {
      profilePicture: localStorage.profilePicture
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
          this.$store.state.user = [];
          localStorage.clear();
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
/* @import "./styles/typo.module.css";
@import "./App.module.css"; */
</style>
