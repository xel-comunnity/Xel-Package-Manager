<script setup>
import Overview from './components/Overview.vue';
import Installations from './components/Installations.vue';
import Usage from './components/Usage.vue';
import Integrations from './components/Integrations.vue';
import Report from './components/Report.vue';
import Contributors from './components/Contributors.vue';
import Landing from './components/Landing.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container w-full max-w-full">
    <section class="bg-sky-700">
      <Navbar />
      <Landing />
    </section>

    <!-- Line separate -->
    <hr class="border-2 border-white">

    <Overview />
    <!-- <Installations />
    <Usage />
    <Integrations /> -->
    <Contributors />
    <Report />

    <Footer />

  </div>
</template>