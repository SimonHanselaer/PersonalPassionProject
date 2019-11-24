<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="E-mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Log in</button>
    <section>
      <p>Sign in with Google!</p>
      <button>Google logo</button>
    </section>
    <p>
      <router-link to="/register">Don't have an account yet?</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("movies");
            console.log(user);
          },
          err => {
            alert("Oops! something went wrong!" + err.message);
          }
        );
    }
  }
};
</script>

<style>
.login {
  margin-left: 30rem;
  width: 25rem;
}
</style>