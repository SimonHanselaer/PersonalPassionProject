<template>
  <modal name="addNewList" class="modal">
    <h4 class>Add list</h4>
    <form v-on:submit.prevent v-on:submit="handleFormSubmit">
      <label>
        Name
        <input type="text" v-model="listName" placeholder="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </modal>
</template>

<script>
export default {
  name: "modalAddNewList",
  data() {
    return {
      listName: ""
    };
  },
  methods: {
    handleFormSubmit() {
      this.$store.dispatch("addUserList", this.listName);
      this.listName = "";
    }
  },
  computed: {}
};
</script>
