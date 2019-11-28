<template>
  <div class="profilelists">
    <h2 class="header-2">My lists</h2>
    <ul v-if="userLists">
      <li v-for="list in userLists[0].lists" v-bind:key="list.id">
        <p>{{list.name}}</p>
        <p>{{list.media.length}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { USER_LISTS_QUERY, ADD_USER_MUTATION } from "./../constants/graphql";

export default {
  name: "profilelists",
  data() {
    return {
      users: []
    };
  },
  apollo: {
    userLists: {
      query: USER_LISTS_QUERY,
      variables() {
        return {
          id: this.$store.state.userId
        };
      }
    }
  },
  components: {},
  created() {},
  methods: {
    addUser() {
      this.$apollo
        .mutate({
          mutation: ADD_USER_MUTATION,
          variables: {
            input: {
              id: 3
            }
          }
        })
        .then(console.log("user toegevoegd"));
    }
  },
  computed: {}
};
</script>
