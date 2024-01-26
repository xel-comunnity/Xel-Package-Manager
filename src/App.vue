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

      <nav>
        <div id="drawer-navigation"
          class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
          tabindex="-1" aria-labelledby="drawer-navigation-label">
          <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu
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
                  <h1>Introduction</h1>
                </a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <h1>Packages</h1>
                </a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <h1>Contributors</h1>
                </a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <h1>About us</h1>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="justify-between max-w-screen-lg mx-auto text-justify gap-5 items-center md:flex">
        <div class="text-center mx-auto pb-5 md:pb-0">
          <h1 class="text-7xl">X-E-L</h1>
          <h2 class="text-2xl">PHP Framework</h2>
        </div>
        <div class="max-w-lg w-3/4 mx-auto text-justify py-5 md:w-1/2">
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

    <!-- <section class="bg-pink-200 max-w-full">
    <div class=" w-full p-4">
      <ul class="bg-pink-300 text-black text-lg mx-auto p-3 border-pink-600 border-2 w-1/6">
        <h1 class="font-semibold text-2xl pb-1">Content</h1>
        <hr class="pb-2 border-pink-500">
        <li class="hover:text-slate-600">
          <a href="">Installation & Requirements</a>
        </li>

        <li class="hover:text-slate-600">
          <a href="">General Usage</a>
        </li>

        <li class="hover:text-slate-600">
          <a href="">Example</a>
        </li>

        <li class="hover:text-slate-600">
          <a href="">Integration</a>
        </li>

        <li class="hover:text-slate-600">
          <a href="">Advance Usage</a>
        </li>

        <li class="hover:text-slate-600">
          <a href="">Report Bug</a>
        </li>
      </ul>
    </div>
    <div class=""></div>
  </section> -->

    <section>
      <div class="text-center p-5">
        <h1 class="text-3xl font-[Orbitron]">Overview</h1>
        <div class="grid grid-cols-2 max-w-screen-lg text-justify mx-auto gap-36 p-5">
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
        <div class="grid grid-cols-2 max-w-screen-lg text-justify mx-auto gap-36 p-5">
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

        <div class="max-w-5xl mx-auto">
          <form class="flex items-center px-5">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg py-3 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Component" required>
            </div>
            <button type="submit"
              class="inline-flex items-center text-sm py-3.5 px-4 font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </form>
        </div>


      </div>
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