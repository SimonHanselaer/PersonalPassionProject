<template>
  <div class="profile contentContainer">
    <ProfileBanner />
    <ProfileLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileLists from "../components/ProfileLists.vue";
import ProfileBanner from "../components/ProfileBanner.vue";

export default {
  name: "profile",
  components: {
    ProfileBanner,
    ProfileLists
  }
};
</script>
