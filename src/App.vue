<script setup>
import Landing from './components/mainpage/Landing.vue'
import Overview from './components/mainpage/Overview.vue';
import Installations from './components/mainpage/Installations.vue';
import Contributors from './components/mainpage/Contributors.vue';
import Report from './components/mainpage/Report.vue';
import Footer from './components/mainpage/Footer.vue';
</script>

<template>
  <div class="container w-full max-w-full">
    <Landing />
    <Overview />
    <Installations />
    <Contributors />
    <Report />
    <Footer />
  </div>
</template>