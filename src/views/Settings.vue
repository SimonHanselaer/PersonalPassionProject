<template>
  <div class="settings contentContainer">
    <h1 class="header-2">Settings</h1>
    <form v-on:submit.prevent v-on:submit="handleSubmitPlex" class="settingContainer">
      <label class="settingLabelContainer">
        <span class="header-7">Set your Plex username</span>
        <input
          class="settingInput textInputField"
          type="text"
          placeholder="myplexusername"
          v-model="plexUsername"
        />
      </label>
      <button type="submit" class="settingSubmit textInputField">Add plex username</button>
    </form>

    <form v-on:submit.prevent v-on:submit="handleSubmitUsername" class="settingContainer">
      <label class="settingLabelContainer">
        <span class="header-7">Set your username</span>
        <input
          class="settingInput textInputField"
          type="text"
          placeholder="username"
          v-model="username"
        />
      </label>
      <button type="submit" class="settingSubmit textInputField">Add username</button>
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
