<template>
  <div class="p-1">
    <button class="text-sm font-medium text-white rounded-lg hover:bg-sky-800 active:bg-sky-900 focus:ring-2 focus:ring-sky-500 focus:ring-opacity-40"
      type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation">
      <img src="../assets/icons/3-bar.svg" class="h-10">
    </button>
  </div>
  <nav class="relative font-[Oxanium]  text-white">
    <div id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-all -translate-x-full bg-sky-800"
      tabindex="-1" aria-labelledby="drawer-navigation-label">
      <a href="../App.vue">
        <h5 id="drawer-navigation-label" class="text-xl font-[Oxanium] font-semibold">Xel-<span class="font-[Orbitron] text-base">Framework</span></h5>
      </a>
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2">
          <li class="">
            <a href="#"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-sky-600 dark:hover:bg-gray-700 group">
              <span class="ms-3">Overview</span>
            </a>
          </li>
          <li>
            <button type="button"
              class="flex items-center w-full p-2 pe-3 text-base transition duration-75 rounded-lg group hover:bg-sky-600 dark:hover:bg-gray-700"
              aria-controls="repository" data-collapse-toggle="repository">
              <span class="flex-1 font-bold text-left mx-3 rtl:text-right whitespace-nowrap">Repository</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <ul id="repository" class="hidden py-2 space-y-2 font-bold text-slate-300">
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-sky-600 dark:hover:bg-gray-700">XEL
                  Async</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-sky-600 dark:hover:bg-gray-700">XEL
                  SSE Event</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-sky-600 dark:hover:bg-gray-700">Async-Server</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"
              class="flex items-center p-2 rounded-lg hover:bg-sky-600 dark:hover:bg-gray-700 group">
              <span class="flex-1 font-bold ms-3 whitespace-nowrap">Integration</span>
            </a>
          </li>
          <li>
            <a href="#"
              class="flex items-center p-2 rounded-lg hover:bg-sky-600 dark:hover:bg-gray-700 group">
              <span class="flex-1 font-bold ms-3 whitespace-nowrap">Advanced Usage</span>

            </a>
          </li>
          <li>
            <a href="#"
              class="flex items-center p-2 rounded-lg hover:bg-sky-600 dark:hover:bg-gray-700 group">
              <span class="flex-1 font-bold ms-3 whitespace-nowrap">Report Bug</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>