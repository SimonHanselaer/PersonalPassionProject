<template>
  <modal name="addNewList" height="115" width="400" class="modal">
    <h4 class="header-2 modalTitle">Add new list</h4>
    <form v-on:submit.prevent v-on:submit="handleFormSubmit" class="modalForm">
      <input type="text" v-model="listName" placeholder="name" class="modalInput" />
      <button type="submit" class="modalSubmit">Add list</button>
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
      this.$store.dispatch("getLists");
      this.$modal.hide("addNewList");
    }
  },
  computed: {}
};
</script>
