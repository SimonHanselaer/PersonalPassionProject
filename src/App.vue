<template>
  <div id="app" class="normal layout">
    <router-view name="navigation" />
    <router-view name="content" />
    <ModalAddToList
      :title="computedModalValues.title"
      :id="computedModalValues.id"
      :src="computedModalValues.src"
      :releaseDate="computedModalValues.releaseDate"
      :duration="computedModalValues.duration"
      :mediaType="computedModalValues.mediaType"
    />
  </div>
</template>

<script>
import store from "./store/index";
import ModalAddToList from "./components/ModalAddToList";

export default {
  name: "app",
  components: { ModalAddToList },
  computed: {
    computedModalValues() {
      return store.state.modalValues;
    }
  }
};
</script>

<style>
@import "./styles/typo.module.css";
@import "./App.module.css";
</style>
