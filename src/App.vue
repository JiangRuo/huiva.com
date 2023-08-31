<script setup>
  import Header from './components/Header.vue'
</script>

<template>
  <!-- 导航栏 -->
  <header>
    <Header></Header>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>