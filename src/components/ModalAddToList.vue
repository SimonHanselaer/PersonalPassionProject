<template>
  <modal name="addMediaToList" class="modal">
    <h4 class>{{ title }}</h4>
    <article v-for="list in computedLists" v-bind:key="list.id">
      <p>{{ list.name }}</p>
      <button @click="addToList(list.id)">Add</button>
    </article>
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
    }
  },
  computed: {
    computedLists() {
      return store.state.userLists;
    }
  }
};
</script>
