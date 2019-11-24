<template>
  <div class="register">
    <h3>Register</h3>
    <input type="text" v-model="email" placeholder="E-mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="register">Register</button>
    <p>
      <router-link to="/login">Already have an account?</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("movies");
            console.log(user);
          },
          err => {
            alert("Oops!" + err.message);
          }
        );
    }
  }
};
</script>

<style>
.register {
  margin-left: 30rem;
  width: 25rem;
}
</style>