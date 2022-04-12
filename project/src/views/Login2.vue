<template>
  <main>
    <div class="desktopView">
      <div class="sign-box">
        <h1 class="welcome" style="margin-top: 40px">Happening now.</h1>
        <button class="facebook-signup">
          <img src="@/assets/facebook.png" alt="fb" class="fb-logo" />
          <p class="btn-text">Sign in with Facebook</p>
        </button>
        <button class="google-signup">
          <img src="@/assets/google.png" alt="goog" class="goog-logo" />
          <p class="btn-text">Sign in with Google</p>
        </button>
        <button class="email-signup" @click="goToEmail()">
          Sign up with email
        </button>
        <p class="disclaimer-text">
          By signing up, you agree to the
          <span style="color: #42c2ff">Terms of Service</span> and
          <span style="color: #42c2ff">Privacy Policy</span>, including
          <span style="color: #42c2ff"> cookie use </span>.
        </p>
        <h4 class="t4-alr">Already have an account?</h4>
        <button class="signin" @click="goToSignIn()">Sign in</button>
      </div>
    </div>

    <div class="mobilePortraitView">
      <div class="topWrap">
        <img src="@/assets/logo.svg" alt="logo" id="logo" />
        <div class="themeWrapper">
          <input
            type="checkbox"
            name="checkbox"
            class="togThemer"
            @change="switchTheme()"
          />
        </div>
      </div>
      <h1 class="welcome" style="margin-top: 40px">Hello</h1>
      <h2 class="headline">Join kishu today.</h2>
      <div class="sign-box">
        <button class="facebook-signup">
          <img src="@/assets/facebook.png" alt="fb" class="fb-logo" />
          <p class="btn-text">Sign in with Facebook</p>
        </button>
        <button class="google-signup">
          <img src="@/assets/google.png" alt="goog" class="goog-logo" />
          <p class="btn-text">Sign in with Google</p>
        </button>
        <button class="email-signup" @click="goToEmail()">
          Sign up with email
        </button>
        <p class="disclaimer-text">
          By signing up, you agree to the
          <span class="fu" style="color: #42c2ff">Terms of Service</span> and
          <span style="color: #42c2ff">Privacy Policy</span>, including
          <span style="color: #42c2ff"> cookie use </span>.
        </p>
        <h4 class="t4-alr">Already have an account?</h4>
        <button class="signin" @click="goToSignIn()">Sign in</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login2",
  components: {},
  methods: {
    switchTheme: function () {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      }
      console.log("Hi!");
    },
    goToEmail() {
      console.log("btn clicked");
      this.$router.push("/register");
    },
    goToSignIn() {
      console.log("btn clicked");
      this.$router.push("/login");
    },
  },
  mounted() {
    document.body.classList.add("light-mode");
  },
};
</script>

<style>
:root {
  --lavender: #9f90cf;
  --bleepblue: #5463ff;
  --black: #000;
  --white: #fff;
}

.dark-mode {
  --signcolor: var(--lavender);
  --bgco: var(--black);
  --textco: var(--white);
}

.light-mode {
  --signcolor: var(--bleepblue);
  --bgco: var(--white);
  --textco: var(--black);
}
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;700&display=swap");
@media only screen and (min-width: 1281px) {
  .mobileLandscapeView,
  .mobilePortraitView {
    display: none;
  }
  body {
    background: #7d6eb3;
    height: 100%;
    overflow: hidden;
    background-image: url("../assets/login-bg.jpg");
  }
  .desktopView {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .sign-box {
    margin-left: 10%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 3rem;
  }
  button {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border-style: none;
    outline-style: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .facebook-signup {
    margin-bottom: 7.5px;
    background: #1877f2;
    color: #fff;
  }
  .google-signup {
    background: #fff;
    color: #000000a9;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 0.5px solid rgba(41, 41, 41, 0.459);
  }
  .email-signup {
    margin-top: 15px;
    background: var(--signcolor);
    color: #fff;
  }
  .signin {
    background: inherit;
    color: #4285f4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 0.5px solid rgb(41, 41, 41);
  }
  .t4-alr {
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: "Sora";
    font-weight: 400px;
    font-size: 12px;
  }
  .disclaimer-text {
    margin-top: 12px;
    font-family: "Sora";
    font-weight: 400;
    font-size: 9px;
  }
  .fb-logo,
  .goog-logo {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .welcome {
    font-family: "Sora";
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
  }
}
@media only screen and (max-width: 896px) and (orientation: landscape) {
  .desktopView {
    display: none;
  }
  .mobilePortraitView {
    display: none;
  }
  .mobileLandscapeView {
    font-family: "Sora";
    margin-top: 4.5rem;
    text-align: center;
  }
}
@media only screen and (max-width: 760px) and (orientation: portrait) {
  .desktopView {
    display: none;
  }
  .mobileLandscapeView {
    display: none;
  }
  body {
    background: var(--bgco);
    color: var(--textco);
  }
  #logo {
    width: 25px;
    height: 25px;
    margin-left: 3rem;
    margin-top: 4rem;
  }
  .welcome {
    font-family: "Sora";
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    margin-left: 30px;
  }
  .headline {
    font-family: "Sora";
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    margin-left: 30px;
    margin-bottom: 45px;
  }
  .sign-box {
    width: 54.5%;
    margin: auto;
  }
  button {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border-style: none;
    outline-style: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .facebook-signup {
    margin-bottom: 7.5px;
    background: #1877f2;
    color: #fff;
  }
  .google-signup {
    background: #fff;
    color: #000000a9;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 0.5px solid rgba(41, 41, 41, 0.459);
  }
  .email-signup {
    margin-top: 15px;
    background: var(--signcolor);
    color: #fff;
  }
  .signin {
    background: inherit;
    color: #4285f4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 0.5px solid rgb(41, 41, 41);
  }
  .t4-alr {
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: "Sora";
    font-weight: 400px;
    font-size: 12px;
  }
  /* .disclaimer-text {
    margin-top: 12px;
    font-family: "Sora";
    font-weight: 400;
    font-size: 9px;
  } */
  .fb-logo,
  .goog-logo {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .togThemer {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    position: relative;
    outline: 0;
    cursor: pointer;
  }
  .togThemer:after {
    content: "";
    width: 60px;
    height: 28px;
    display: inline-block;
    background: rgba(196, 195, 195, 0.55);
    border-radius: 18px;
    clear: both;
  }
  .togThemer:before {
    content: "";
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    left: 0;
    top: -1.2px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  }
  .togThemer:checked:before {
    left: 32px;
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);
  }
  .togThemer:checked:after {
    background: rgb(68, 68, 68);
  }
  .togThemer,
  .togThemer:before,
  .togThemer:after,
  .togThemer:checked:before,
  .togThemer:checked:after {
    transition: ease 0.4s;
    -webkit-transition: ease 0.4s;
    -moz-transition: ease 0.4s;
    -o-transition: ease 0.4s;
  }
  .themeTextInfo {
    font-family: "Sora";
    font-size: 16px;
  }

  .topWrap {
    display: flex;
    flex-flow: column wrap;
  }
  .themeWrapper {
    margin-top: 2rem;
    margin-left: 3rem;
  }
  .togThemer {
    height: 30px;
  }
}
</style>
