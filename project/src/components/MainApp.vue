<template>
  <main>
    <nav class="nbar">
      <ul>
        <p style="color: #fff">hi</p>
        <li><img src="../assets/logo.svg" alt="" class="bar-logo" /></li>
        <li><input type="text" placeholder="Search…" class="bar-search" /></li>
        <li>
          <img
            src="../assets/favorited_false.svg"
            alt=""
            class="bar-favorited"
          />
        </li>
      </ul>
    </nav>
  </main>
</template>
<script></script>
<style>
.nbar {
  display: flex;
}

.bar-logo,
.bar-search,
.bar-favorited {
  height: 5rem;
}
</style>
