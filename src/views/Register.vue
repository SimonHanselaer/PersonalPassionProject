<template>
  <div class="register login">
    <h3 class="header-4 loginTitle">Register</h3>
    <p class="loginSubtitle">Register and start making lists &amp; discover new media!</p>
    <input class="loginInput loginEmail" type="text" v-model="email" placeholder="E-mail" />
    <input
      class="loginInput loginPassword"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button class="loginButton" @click="register">Register</button>
    <button class="loginGoogle" @click="socialLoginGoogle">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
        <title>google</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Login" transform="translate(-889.000000, -641.000000)" fill-rule="nonzero">
            <g id="Group-5" transform="translate(837.000000, 224.000000)">
              <g id="google" transform="translate(52.000000, 417.000000)">
                <path
                  d="M6.64863281,18.129375 L5.604375,22.0277344 L1.78763672,22.1084766 C0.646992187,19.992832 0,17.5722656 0,15 C0,12.5126367 0.604921875,10.1670117 1.6771875,8.10164063 L1.67800781,8.10164063 L5.07597656,8.72460938 L6.56449219,12.1021875 C6.25294922,13.0104492 6.08314453,13.9854492 6.08314453,15 C6.08326172,16.1010937 6.28271484,17.1560742 6.64863281,18.129375 Z"
                  id="Path"
                  fill="#FBBB00"
                />
                <path
                  d="M29.7379102,12.1978125 C29.9101758,13.1051953 30,14.0422852 30,15 C30,16.0739063 29.8870898,17.1214453 29.6719922,18.1318945 C28.9417969,21.5703516 27.0338086,24.5728125 24.3907031,26.6975391 L24.3898828,26.6967188 L20.1099609,26.4783398 L19.5042187,22.6969922 C21.2580469,21.6684375 22.6286719,20.0588086 23.3506641,18.1318945 L15.3297656,18.1318945 L15.3297656,12.1978125 L23.4676758,12.1978125 L29.7379102,12.1978125 L29.7379102,12.1978125 Z"
                  id="Path"
                  fill="#518EF8"
                />
                <path
                  d="M24.3898242,26.6967188 L24.3906445,26.6975391 C21.8200781,28.7637305 18.5546484,30 15,30 C9.28763672,30 4.32117187,26.807168 1.78763672,22.1085352 L6.64863281,18.1294336 C7.91537109,21.5101758 11.1766406,23.9167969 15,23.9167969 C16.6433789,23.9167969 18.1829883,23.4725391 19.5041016,22.6969922 L24.3898242,26.6967188 Z"
                  id="Path"
                  fill="#28B446"
                />
                <path
                  d="M24.5744531,3.45328125 L19.7150977,7.4315625 C18.3478125,6.57691406 16.7315625,6.08320313 15,6.08320313 C11.0900977,6.08320313 7.76783203,8.60021484 6.56455078,12.1021875 L1.67800781,8.10164062 L1.6771875,8.10164062 C4.17363281,3.28845703 9.20273437,0 15,0 C18.6395508,0 21.9766406,1.29644531 24.5744531,3.45328125 Z"
                  id="Path"
                  fill="#F14336"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button class="loginTwitter" @click="socialLoginTwitter">
      <svg
        width="30px"
        height="24px"
        viewBox="0 0 30 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
        <title>Path</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="Login"
            transform="translate(-1037.000000, -645.000000)"
            fill="#01A9F4"
            fill-rule="nonzero"
          >
            <g id="Group-5" transform="translate(837.000000, 224.000000)">
              <path
                d="M200.001667,442.20886 C202.662193,443.896228 205.818158,444.872719 209.201228,444.872719 C218.705526,444.872719 226.41,437.167368 226.41,427.663947 C226.41,427.426667 226.405,427.19114 226.395877,426.956316 C226.739649,426.685789 228.865789,424.981667 229.38693,423.88614 C229.38693,423.88614 227.660351,424.603684 225.970526,424.772719 C225.967193,424.772719 225.96307,424.773509 225.959737,424.773509 C225.959737,424.773509 225.96307,424.771842 225.96886,424.767719 C226.124561,424.663684 228.301404,423.181842 228.59614,421.416228 C228.59614,421.416228 227.374912,422.06807 225.665,422.638333 C225.38193,422.732368 225.085614,422.824825 224.780088,422.910526 C223.677895,421.734211 222.111228,421 220.372193,421 C217.036491,421 214.333509,423.702193 214.333509,427.035351 C214.333509,427.505702 214.387632,427.963509 214.49,428.40307 C214.02386,428.383947 206.925351,427.985965 202.096228,422.137895 C202.096228,422.137895 199.210088,426.077982 203.81614,430.129561 C203.81614,430.129561 202.415965,430.073772 201.207982,429.352018 C201.207982,429.352018 200.764298,434.125351 205.980526,435.345789 C205.980526,435.345789 204.954123,435.734561 203.316667,435.457368 C203.316667,435.457368 204.232368,439.314211 208.866754,439.674649 C208.866754,439.674649 205.202105,442.985175 200,442.208421 L200.001667,442.20886 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button class="loginFacebook" @click="socialLoginFacebook">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
        <title>facebook</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="Login"
            transform="translate(-1185.000000, -642.000000)"
            fill="#39559F"
            fill-rule="nonzero"
          >
            <g id="Group-5" transform="translate(837.000000, 224.000000)">
              <g id="facebook" transform="translate(348.000000, 418.000000)">
                <path
                  d="M0,0 L0,29.9822368 L15.9673684,29.9822368 L15.9673684,18.4007237 L12.0640789,18.4007237 L12.0640789,13.6728289 L15.9673684,13.6728289 L15.9673684,9.70223684 C15.9673684,6.81453947 18.3082895,4.47361842 21.1959868,4.47361842 L25.2765789,4.47361842 L25.2765789,8.72506579 L22.3567105,8.72506579 C21.4391447,8.72506579 20.6952632,9.46894737 20.6952632,10.3865132 L20.6952632,13.6728947 L25.2032237,13.6728947 L24.5801974,18.4007895 L20.6952632,18.4007895 L20.6952632,29.9822368 L29.9822368,29.9822368 L29.9822368,0 L0,0 Z"
                  id="Path"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
    <p class="loginRegister">
      Already have an account?
      <router-link class="loginRegisterButton" to="/login">Sign in</router-link>
    </p>

    <div class="loginBorder1"></div>
    <p class="loginOr">Or</p>
    <div class="loginBorder2"></div>
  </div>
</template>

<script>
import firebase from "firebase";
// import { ADD_USER_MUTATION } from "./../constants/graphql";

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
            this.$router.push({ name: "movies" });
            this.$store.dispatch("addUser", user.user.uid);
            localStorage.setItem("uid", user.user.uid);
            localStorage.setItem("uid", user.user.photoURL);
          },
          err => {
            alert("Oops!" + err.message);
          }
        );
    },
    socialLoginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      this.handleSocialLogin(provider);
    },
    socialLoginTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();

      this.handleSocialLogin(provider);
    },
    socialLoginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();

      this.handleSocialLogin(provider);
    },
    handleSocialLogin(provider) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;

          this.$router.push({ name: "movies" });
          this.$store.state.user = user;
          localStorage.setItem("user", user);
          localStorage.setItem("uid", user.uid);

          this.$store.dispatch("addUser", user.uid);
        })
        .catch(err => {
          const errorMessage = err.message;

          alert("Oops! Something went wrong!" + errorMessage);
        });
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