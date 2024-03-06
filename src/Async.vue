<script setup>
import Navbar from '../src/components/Navbar.vue';
import Usage from '../src/components/async/Usage.vue';
</script>

<template>
  <section class="text-white">
    <div class="absolute w-full flex items-center shadow-md bg-sky-700">
      <Navbar />
      <h1 class="text-lg text-center mx-auto w-full text-white font-semibold font-[Oxanium]">Xel-Framework</h1>
    </div>

    <div class="w-full text-center pt-20 bg-sky-700">
      <h1 class="text-[33px] font-[Oxanium] py-8 font-semibold md:text-5xl">Xel Async Server</h1>
      <div class="max-w-screen-2xl text-justify mx-auto p-7 md:px-14 md:pt-10 font-medium text-lg font-[Oxanium]">
        <h3 class="mb-3 font-bold  text-lg">HTTP Server based on Swoole</h3>
        <p class="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex minima quam, accusamus alias similique perferendis at ad et voluptatum ducimus odio eligendi delectus fugit sed maxime. Iure, praesentium optio. Animi quas consequuntur, numquam quod magni nemo deleniti consequatur. Iusto nobis facilis magni aspernatur, sunt dolorem in, voluptatum officiis eligendi voluptas incidunt voluptatibus. Porro ratione minima, non cupiditate sed dolores?
        </p>

      </div>
    </div>
    <Usage/>
  </section>
</template>