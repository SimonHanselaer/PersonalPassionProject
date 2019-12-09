<template>
  <div class="social contentContainer">
    <h1 class="header-2">Social</h1>
    <section v-for="friend in computedFriends" :key="friend.id" class="friendContainer">
      <h2>{{friend.friendName}}</h2>
      <ul class="listContainer">
        <li v-for="list in friend.listData" :key="list.id" class="listTile">
          <h3 class="listTitle header-9">{{list.name}}</h3>
          <p class="listCount">{{list.count}} items in list</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "social",
  data() {
    return {};
  },
  created() {
    store.dispatch("getFriends");
  },
  methods: {},
  computed: {
    computedFriends() {
      return store.state.friends;
    }
  }
};
</script>
