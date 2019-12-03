<template>
  <div class="profile contentContainer">
    <AddList />
    <ProfileLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileLists from "../components/ProfileLists.vue";
import AddList from "../components/AddList.vue";

export default {
  name: "profile",
  components: {
    ProfileLists,
    AddList
  }
};
</script>
