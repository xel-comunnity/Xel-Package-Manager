<template>
  <section class="bg-slate-300 py-5">
    <h1 class="font-[Oxanium] font-semibold text-center text-[20pt]">Overview</h1>
    <div class="py-8 max-w-4xl mx-auto px-7 md:px-10">
      <form>
        <div class="flex">
          <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" />
          <div class="relative w-full">
            <input type="search" id="search-dropdown"
              class="px-7 py-3 w-full text-base text-gray-900 bg-gray-50 rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search" required>
            <button type="submit"
              class="absolute top-0 end-0 p-2.5 px-4 pe-5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>

    <h1 class="text-2xl text-center pb-5">Category 1</h1>

    <div class="grid grid-cols-1 max-w-4xl gap-5 px-5 mx-auto font-[Oxanium] md:grid-cols-2 md:px-10">
      <div class="bg-white text-justify rounded-xl px-2 mb-5">
        <h1 class="text-center p-2 text-xl">Repo 1</h1>
        <hr class="border-slate-300">
        <p class="py-4 px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
          nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
          doloremque,
          repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
          officiis! Autem ducimus eligendi sit.
        </p>
      </div>
      <div class="bg-white text-justify rounded-xl px-2 mb-5">
        <h1 class="text-center p-2 text-xl">Repo 2 </h1>
        <hr class="border-slate-300">
        <p class="py-4 px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
          nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
          doloremque,
          repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
          officiis! Autem ducimus eligendi sit.
        </p>
      </div>
      <div class="bg-white text-justify rounded-xl px-2 mb-5">
        <h1 class="text-center p-2 text-xl">Repo 3</h1>
        <hr class="border-slate-300">
        <p class="py-4 px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
          nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
          doloremque,
          repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
          officiis! Autem ducimus eligendi sit.
        </p>
      </div>
      <div class="bg-white text-justify rounded-xl px-2 mb-5">
        <h1 class="text-center p-2 text-xl">Repo 4</h1>
        <hr class="border-slate-300">
        <p class="py-4 px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur itaque est recusandae a accusantium
          nobis incidunt sit, in aut expedita obcaecati? Aperiam et enim harum praesentium accusamus minus eaque
          doloremque,
          repellendus nobis necessitatibus possimus reiciendis in! Modi quod sint commodi nobis aperiam tempore delectus
          officiis! Autem ducimus eligendi sit.
        </p>
      </div>
    </div>
  </section>
</template>