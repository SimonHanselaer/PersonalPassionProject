<template>
  <div class="profilelists">
    <h2 class="header-2">My lists</h2>
    {{userLists}}
    <ul v-if="userLists">
      <li v-for="list in userLists" v-bind:key="list.id" @click="goToListDetail(list.id)">
        <p>{{list.name}}</p>
        <p>{{list.count}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../main";
// import firebase from "firebase";

export default {
  name: "profilelists",
  data() {
    return {
      userLists: [],
      listData: []
    };
  },
  components: {},
  created() {
    let self = this;

    const listRef = db
      .collection("lists")
      .where("userId", "==", sessionStorage.uid);

    listRef
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          self.userLists.push({
            id: doc.id,
            name: doc.data().name,
            count: doc.data().count
          });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    goToListDetail(id) {
      this.$router.push({
        name: "listDetail",
        params: { detailId: id }
      });
    }
  },
  computed: {}
};
</script>
