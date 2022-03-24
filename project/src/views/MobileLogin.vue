<template>
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
        <button class="email-signup" @click="goToEmail()" >Sign up with email</button>
        <p class="disclaimer-text">
          By signing up, you agree to the
          <span style="color: #42c2ff">Terms of Service</span> and
          <span style="color: #42c2ff">Privacy Policy</span>, including
          <span style="color: #42c2ff"> cookie use </span>.
        </p>
        <h4 class="t4-alr">Already have an account?</h4>
        <button class="signin">Sign in</button>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>