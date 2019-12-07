<template>
  <div id="app">
    <half-circle-spinner :animation-duration="1000" :size="60" color="#3764FC" class="loading" />
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";
export default {
  components: {
    HalfCircleSpinner
  }
};
</script>