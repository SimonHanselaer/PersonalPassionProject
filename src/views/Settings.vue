<template>
  <div class="settings contentContainer layoutContent">
    <h1>Settings</h1>
    <form v-on:submit.prevent v-on:submit="handleSubmitPlex">
      <label>
        Plex username:
        <input type="text" placeholder="myplexusername" v-model="plexUsername" />
      </label>
      <button type="submit">Add plex username</button>
    </form>

    <form v-on:submit.prevent v-on:submit="handleSubmitUsername">
      <label>
        username:
        <input type="text" placeholder="username" v-model="username" />
      </label>
      <button type="submit">Add username</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "settings",
  data() {
    return {
      plexUsername: "",
      username: ""
    };
  },
  methods: {
    handleSubmitPlex() {
      this.$store.dispatch("addPlexUsername", this.plexUsername);
    },
    handleSubmitUsername() {
      this.$store.dispatch("addUsername", this.username);
    }
  }
};
</script>

<style>
@import "../styles/index.css";
@import "../styles/layout.module.css";
</style>
