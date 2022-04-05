<template>
  <main>
    <nav>
      <ul class="nbar">
        <li class="nbar-l">
          <img src="../assets/logo.svg" alt="" class="bar-logo" />
        </li>
        <li class="nbar-l">
          <input type="text" placeholder="&#xF002;" class="bar-search" />
        </li>
        <li class="nbar-l">
          <img
            src="../assets/favorited_false.svg"
            alt=""
            class="bar-favorited"
          />
        </li>
        <li class="nbar-lf">
          <img src="../assets/profile_mask.svg" alt="" class="bar-avi" />
        </li>
      </ul>
    </nav>
    <section class="m-content">
      <div v-if="feed_empty">
        <img
          src="https://c.tenor.com/Nv2YauTamwIAAAAC/dead-chat-dead.gif"
          alt="dead chat"
        />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
nav {
  display: flex;
  justify-content: center;
}

.nbar {
  display: flex;
  justify-content: space-evenly;
}

.nbar-l {
  margin-left: 3rem;
  margin-right: 3rem;
}

.nbar-lf {
  margin-left: 1.5rem;
  margin-right: 3rem;
}

.bar-logo,
.bar-search,
.bar-favorited,
.bar-avi {
  height: 5rem;
}

.bar-search {
  width: 40vw;
  font-family: Arial, FontAwesome;
  text-indent: 1.6rem;
}
</style>
