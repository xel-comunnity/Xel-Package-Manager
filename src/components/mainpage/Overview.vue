<template>
  <section class="py-5 bg-xel">
    <h1 class="font-[Oxanium] font-semibold text-center text-4xl text-sky-400">Overview</h1>

    <form class="flex items-center max-w-4xl mx-auto mb-10 mt-7 px-10">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input type="text" id="simple-search"
          class="bg-transparent border border-r-transparent border-gray-300 text-white text-sm rounded-l-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-3"
          placeholder="Search" required />
      </div>
      <button type="submit"
        class="p-3 ring-2 ms-[1px] ring-blue-700 text-sm font-medium text-white bg-blue-700 rounded-r-full border-blue-700 hover:bg-blue-800 hover:ring-blue-800">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>

    <div class="grid grid-cols-1 max-w-4xl gap-5 px-5 mx-auto font-[Oxanium] md:grid-cols-2 md:px-10">
      <a href="../../xel-async.html">
        <div
          class="px-2 mb-5 text-justify text-white duration-500 border-2 border-white rounded-xl hover:shadow-xl hover:shadow-sky-600 hover:scale-105">
          <h1 class="p-2 text-xl text-center font-semibold">Xel Async Server</h1>
          <hr class="border-white">
          <p class="px-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
            nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
            doloremque,
            repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
            officiis! Autem ducimus eligendi sit.
          </p>
        </div>
      </a>

      <a href="#">
        <div
          class="px-2 mb-5 text-justify text-white duration-500 border-2 border-white rounded-xl hover:shadow-xl hover:shadow-sky-600 hover:scale-105">
          <h1 class="p-2 text-xl text-center font-semibold">Xel Skeleton</h1>
          <hr class="border-white">
          <p class="px-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
            nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
            doloremque,
            repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
            officiis! Autem ducimus eligendi sit.
          </p>
        </div>
      </a>

      <a href="#">
        <div
          class="px-2 mb-5 text-justify text-white duration-500 border-2 border-white rounded-xl hover:shadow-xl hover:shadow-sky-600 hover:scale-105">
          <h1 class="p-2 text-xl text-center font-semibold">Xel Psr7 Bridge</h1>
          <hr class="border-white">
          <p class="px-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
            nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
            doloremque,
            repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
            officiis! Autem ducimus eligendi sit.
          </p>
        </div>
      </a>
      <a href="#">
        <div
          class="px-2 mb-5 text-justify text-white duration-500 border-2 border-white rounded-xl hover:shadow-xl hover:shadow-sky-600 hover:scale-105">
          <h1 class="p-2 text-xl text-center">Repo 1</h1>
          <hr class="border-white">
          <p class="px-2 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
            nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
            doloremque,
            repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
            officiis! Autem ducimus eligendi sit.
          </p>
        </div>
      </a>
    </div>
  </section>
</template>