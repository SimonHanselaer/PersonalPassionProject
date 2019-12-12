<template>
  <modal name="addMediaToList" class="modal" width="400" height="auto" :scrollable="true">
    <h4 class="header-2 modalTitle">{{ title }}</h4>
    <section class="modalAddToList">
      <article v-for="list in computedLists" v-bind:key="list.id" class="modalArticle">
        <p>{{ list.name }}</p>
        <button @click="addToList(list.id)">Add</button>
      </article>
    </section>
  </modal>
</template>

<script>
import store from "../store/index";

export default {
  name: "modaladdtolist",
  props: ["title", "id", "src", "mediaType", "duration", "releaseDate"],
  data() {
    return {};
  },
  methods: {
    addToList(id) {
      let self = this;

      let data = {
        listId: id,
        id: self.id,
        title: self.title,
        src: self.src,
        type: self.mediaType,
        duration: self.duration,
        releaseDate: self.releaseDate
      };
      this.$store.dispatch("addItemToList", data);
      this.$modal.hide("addMediaToList");
    }
  },
  computed: {
    computedLists() {
      return store.state.userLists;
    }
  }
};
</script>

<style>
.v--modal {
  background-color: #ffffff;
  border-radius: 0.8rem;
  border: solid 0.2rem #3764fc;
}
</style>
