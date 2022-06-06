<template>
  <main>
    <div class="mobilePortraitView">
      <div class="topWrap">
        <img src="@/assets/logo.svg" alt="kishu logo" id="logo" />
      </div>
      <div class="sign-box">
        <h1 class="welcome" style="margin-top: 40px">Welcome!</h1>
        <h2 class="headline">Join kishu today.</h2>
        <button class="email-signup" @click="goToEmail()">
          Sign up with email
        </button>
        <p class="disclaimer-text">
          By signing up, you agree to the
          <span>Terms of Service</span> and <span>Privacy Policy</span>,
          including <span> cookie use</span>.
        </p>
        <form>
<label for="checkbox">Theme</label>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          class="togThemer"
          @change="switchTheme()"
        />
        </form>
        <h3 class="t4-alr">Already have an account?</h3>
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

<style scoped>
span {
  color: ##00008B;
}
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
}
.headline {
  font-family: "Sora";
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
}
.sign-box {
  width: 30%;
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
.email-signup {
  margin-top: 15px;
  background: var(--signcolor);
  color: #fff;
}
.signin {
  background: inherit;
  color: ##0C47A7;
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
.disclaimer-text {
  margin-bottom: 1rem;
}
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
.togThemer {
  height: 30px;
}
</style>
