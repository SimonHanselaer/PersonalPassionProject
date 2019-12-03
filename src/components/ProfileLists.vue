<template>
  <div class="profilelists">
    <h2 class="header-2">My lists</h2>
    <ul v-if="computedUserLists">
      <li v-for="list in computedUserLists" v-bind:key="list.id" @click="goToListDetail(list.id)">
        <p>{{list.name}}</p>
        <p>{{list.count}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "profilelists",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.dispatch("getLists");
  },
  methods: {
    goToListDetail(id) {
      this.$router.push({
        name: "listDetail",
        params: { detailId: id }
      });
    }
  },
  computed: {
    computedUserLists() {
      return store.state.userLists;
    }
  }
};
</script>
