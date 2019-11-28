<template>
  <div class="profile contentContainer">
    <ProfileLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileLists from "../components/ProfileLists.vue";

export default {
  name: "profile",
  components: {
    ProfileLists
  }
};
</script>
