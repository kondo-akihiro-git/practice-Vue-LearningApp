<template>
  <div id="app">
    <!-- ナビゲーションメニュー -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <hr />
    <!-- コンテンツの表示エリア -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* 簡単なスタイル */
nav {
  margin-bottom: 10px;
}
</style>
