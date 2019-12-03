<template>
  <div class="addlist addlistContainer">
    <h2 class="header-2">Add list</h2>
    <form v-on:submit.prevent v-on:submit="handleFormSubmit">
      <label>
        Name
        <input type="text" v-model="listName" placeholder="name" />
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "profilelists",
  data() {
    return {
      listName: ""
    };
  },
  components: {},
  created() {},
  methods: {
    handleFormSubmit() {
      this.$store.dispatch("addUserList", this.listName);
      this.listName = "";
    }
  }
};
</script>
