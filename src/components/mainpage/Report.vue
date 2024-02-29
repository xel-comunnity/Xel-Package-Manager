<template>
  <section class="bg-indigo-300">
    <h1 class="text-center text-[20pt] p-7 font-[Oxanium] font-semibold">Report Bugs</h1>
    <form class="max-w-md mx-auto p-5 font-semibold">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email:
        </label>
        <input
          class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="email" placeholder="Enter your email">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Bug:
        </label>
        <input
          class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" placeholder="Enter your name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="feedback">
          Description:
        </label>
        <textarea class="rounded-md border w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter the description"/>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="user_avatar">
          Attachment
        </label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
      </div>

      <div class="my-10 text-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  </section>
</template>