<template>
  <div class="dark:bg-neutral-900 min-h-screen">
    <header class="text-gray-900 dark:text-gray-500 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <nuxt-link to="/" class="border-0 py-1 px-3 mr-5 hover:text-gray-100 dark:target:text-gray-100">
            Home
          </nuxt-link>
          <nuxt-link to="/project" class="border-0 py-1 px-3 mr-5 hover:text-gray-100 dark:target:text-gray-100">
            Projects
          </nuxt-link>
          <nuxt-link to="/blog" class="border-0 py-1 px-3 mr-5 hover:text-gray-100 dark:target:text-gray-100">
            Blog
          </nuxt-link>
        </nav>
      </div>
    </header>
    <nuxt />
  </div>
</template>
