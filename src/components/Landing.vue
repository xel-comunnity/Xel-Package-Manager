<script setup>
import Navbar from './Navbar.vue';
</script>

<template>
  <section class="bg-sky-700">

    <Navbar />

    <div class="grid grid-cols-1 mx-auto w-full max-w-screen-lg gap-5 items-center font-['Oxanium'] md:grid-cols-2 md:p-5">
      <div class="font-[Orbitron] mx-auto text-center px-3">
        <img src="../assets/img/xel-logo.png" alt="" />
      </div>
      <div class="px-4 py-3 text-white">
        <h1 class="text-center text-[55px] leading-none font-semibold">Xel-Framework</h1>
        <h2 class="text-4xl font-medium text-center leading-relaxed">Use PHP easily</h2>
        <p class="text-sm text-justify lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          omnis fugiat quo dicta eum ullam delectus debitis corporis quia
          tenetur eos sapiente assumenda rem voluptas doloremque est praesentium
          ipsa quod, dolore maxime, voluptatem mollitia numquam? Nisi corrupti
          perspiciatis delectus unde.
        </p>
      </div>
    </div>
  </section>
</template>
