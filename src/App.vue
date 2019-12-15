<template>
  <div id="app" class="normal layout">
    <router-view name="navigation" />
    <router-view name="content" />
    <router-view name="footer" />

    <ModalAddToList
      :title="computedModalValues.title"
      :id="computedModalValues.id"
      :src="computedModalValues.src"
      :releaseDate="computedModalValues.releaseDate"
      :duration="computedModalValues.duration"
      :mediaType="computedModalValues.mediaType"
    />
    <ModalAddNewList />
  </div>
</template>

<script>
import store from "./store/index";
import ModalAddToList from "./components/ModalAddToList";
import ModalAddNewList from "./components/ModalAddNewList";

export default {
  name: "app",
  components: { ModalAddToList, ModalAddNewList },
  computed: {
    computedModalValues() {
      return store.state.modalValues;
    }
  }
};
</script>

<style>
@import "./styles/typo.module.css";
@import "./styles/vars.css";
@import "./App.module.css";
</style>
