<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container max-w-full">
    <section class="bg-fuchsia-100 pb-32">
      <div class="p-3">
        <button class="text-white hover:bg-slate-300 focus:ring-2 focus:ring-slate-100 font-medium rounded-lg text-sm"
          type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation">
          <img src="./assets/icons/3-bar.svg" class="h-10">
        </button>
      </div>

      <nav class="relative">
        <div id="drawer-navigation"
          class="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-all -translate-x-full bg-white max-w-xs"
          tabindex="-1" aria-labelledby="drawer-navigation-label">
          <h5 id="drawer-navigation-label" class="text-xl font-[Amarante] font-semibold">X-E-L Framework
          </h5>
          <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="ms-3">Overview</span>
                </a>
              </li>
              <li>
                <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="install" data-collapse-toggle="install">
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Get Started</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul id="install" class="hidden py-2 space-y-2">
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Installation & Requirements</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">General Usage</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Example of Usage</a>
                  </li>
                </ul>
              </li>
              <li>
                <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="repository" data-collapse-toggle="repository">
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Repository</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul id="repository" class="hidden py-2 space-y-2">
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">XEL Async</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">XEL SSE Event</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Async-Server</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 ms-3 whitespace-nowrap">Integration</span>
                </a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 ms-3 whitespace-nowrap">Advanced Usage</span>

                </a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 ms-3 whitespace-nowrap">Report Bug</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="justify-between max-w-screen-lg mx-auto text-justify gap-5 items-center md:flex">
        <div class="text-center mx-auto pb-5 md:pb-0 font-[Amarante]">
          <h1 class="text-9xl">X-E-L</h1>
          <h2 class="text-6xl">Framework</h2>
        </div>
        <div class="max-w-sm w-full mx-auto text-justify py-5 md:w-1/2">
          <h1 class="font-bold text-3xl text-center pb-1">Write PHP easily and fastly</h1>
          <p class="m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident illo voluptate sequi eum id
            quam, maxime explicabo obcaecati ducimus saepe nostrum enim facere, pariatur rem voluptates quos temporibus
            cupiditate doloremque neque. Eum quisquam doloremque dicta maxime repellat nulla numquam necessitatibus,
            dignissimos dolorum cum, fugiat nihil laboriosam? Maiores, id consectetur.
          </p>
          <div class="">
            <ul class="flex mx-auto gap-10 text-center text-[15px] w-full py-5">
              <li class="hover:text-white flex items-center gap-3">
                <a href="https://github.com/xel-comunnity">
                  <img src="./assets/icons/github.svg" alt="GitHub" class="h-[20px] mx-auto">
                </a>
                <span>GitHub</span>
              </li>
              <li class="hover:text-white flex items-center gap-3">
                <a href="">
                  <img src="./assets/icons/x.svg" alt="X" class="h-[16px] mx-auto">
                </a>
                <span>X</span>
              </li>
              <li class="hover:text-white flex items-center gap-3">
                <a href="">
                  <img src="./assets/icons/discord.svg" alt="Discord" class="h-[20px] mx-auto">
                </a>
                <span>Discord</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <!-- Overview open -->
      <div class="text-center p-5">
        <h1 class="text-3xl font-[Orbitron] py-3">Overview</h1>
        <div class="grid grid-cols-2 max-w-screen-lg text-justify mx-auto gap-20 p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio alias accusamus mollitia deleniti
            autem tempore eligendi? Iste eveniet voluptas eligendi pariatur magni voluptate, culpa commodi molestias
            assumenda incidunt nisi! Nisi, molestias eligendi illum autem, eaque distinctio assumenda ut consectetur,
            fugit fugiat nemo vel a in neque ea earum itaque! Sint rem ducimus aliquam magni fuga distinctio, tempora
            itaque autem at optio quisquam quo repellendus cumque fugiat perferendis quidem harum enim vero, laudantium
            eos perspiciatis deserunt ut dolorem! Quae autem dolores ut molestiae itaque iure at nihil quia eum?
            Recusandae, at totam quos tenetur accusamus ut aut dignissimos soluta fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio alias accusamus mollitia deleniti
            autem tempore eligendi? Iste eveniet voluptas eligendi pariatur magni voluptate, culpa commodi molestias
            assumenda incidunt nisi! Nisi, molestias eligendi illum autem, eaque distinctio assumenda ut consectetur,
            fugit fugiat nemo vel a in neque ea earum itaque! Sint rem ducimus aliquam magni fuga distinctio, tempora
            itaque autem at optio quisquam quo repellendus cumque fugiat perferendis quidem harum enim vero, laudantium
            eos perspiciatis deserunt ut dolorem! Quae autem dolores ut molestiae itaque iure at nihil quia eum?
            Recusandae, at totam quos tenetur accusamus ut aut dignissimos soluta fugit.
          </p>
        </div>
      </div>
      <!-- Overview close -->

      <div class="max-w-full text-center py-6">
        <!-- Search bar open -->
        <hr class="border-gray-200">
        <div class="py-8 bg-slate-100">
          <form class="flex items-center px-5 max-w-screen-lg mx-auto">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <input type="text" id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg py-3 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Component" required>
            </div>
            <button type="submit"
              class="inline-flex items-center text-sm py-3.5 px-4 font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </form>
        </div>
        <!-- Search bar close -->

        <hr class="border-gray-200">
        <h1 class="text-3xl font-[Orbitron] py-5">Cat 1</h1>

        <!-- Repo 1 open -->
        <div class="grid grid-cols-2 mx-auto max-w-screen-lg px-5 py-2 gap-5 pt-5">
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
        </div>
        <div class="grid grid-cols-2 mx-auto max-w-screen-lg px-5 py-2 gap-5 pt-5 pb-10">
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
        </div>

        <hr class=" border-gray-200">
        <!-- Repo 1 close -->
        <h1 class="text-3xl font-[Orbitron] py-5">Cat 2</h1>

        <!-- Repo 1 open -->
        <div class="grid grid-cols-2 mx-auto max-w-screen-lg px-5 py-2 gap-5 pt-5">
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
        </div>
        <div class="grid grid-cols-2 mx-auto max-w-screen-lg px-5 py-2 gap-5 pt-5">
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">

            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
          <div class="bg-gray-200 max-w-full p-3 rounded-lg">
            <h1 class="text-xl font-semibold pb-2">Repo 1</h1>
            <hr class="border-cyan-400 pb-3">
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, error veniam?
              Necessitatibus error consequuntur quo officiis dolorum porro sequi quam!</p>
          </div>
        </div>
      <!-- Repo 1 close -->
    </div>

    <!-- Contributors open -->
    <div class="max-w-full bg-violet-100">
      <h1 class="text-center text-3xl font-[Orbitron] pt-6 pb-4">Contributors</h1>
      <div class="grid grid-cols-4 max-w-4xl mx-auto w-full pb-6 pt-2">
        <div class="h-28 w-28 rounded-full bg-black mx-auto max-w-screen-lg" />
        <div class="h-28 w-28 rounded-full bg-black mx-auto max-w-screen-lg" />
        <div class="h-28 w-28 rounded-full bg-black mx-auto max-w-screen-lg" />
        <div class="h-28 w-28 rounded-full bg-black mx-auto max-w-screen-lg" />
      </div>
    </div>
    <!-- Contributors close -->
  </section>

  <footer class="bg-fuchsia-200 mx-auto w-full">
    <div class="mx-auto max-w-sm">
      <ul class="flex mx-auto text-center text-[15px] w-full py-5 justify-between">
        <li class="hover:text-white flex items-center gap-3">
          <a href="https://github.com/xel-comunnity">
            <img src="./assets/icons/github.svg" alt="GitHub" class="h-[20px] mx-auto">
          </a>
          <span>GitHub</span>
        </li>
        <li class="hover:text-white flex items-center gap-3">
          <a href="">
            <img src="./assets/icons/x.svg" alt="X" class="h-[16px] mx-auto">
          </a>
          <span>X</span>
        </li>
        <li class="hover:text-white flex items-center gap-3">
          <a href="">
            <img src="./assets/icons/discord.svg" alt="Discord" class="h-[20px] mx-auto">
          </a>
          <span>Discord</span>
        </li>
      </ul>
    </div>
  </footer>
</div></template>