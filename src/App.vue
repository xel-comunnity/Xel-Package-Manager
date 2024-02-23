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
  <div class="container max-w-full w-full">
    <section class="bg-stone-300">
      <Navbar />
      <Landing />
    </section>

    <Overview />
    <Installations />
    <Usage />
    <Integrations />
    <Contributors />
    <Report />

    <Footer />

  </div>
</template>