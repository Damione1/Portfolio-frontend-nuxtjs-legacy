<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <nuxt-link to="/" class="border-0 py-1 px-3 mr-5 hover:text-gray-900">
            Home
          </nuxt-link>
          <nuxt-link to="/project" class="border-0 py-1 px-3  mr-5 hover:text-gray-900">
            Projects
          </nuxt-link>
          <nuxt-link to="/blog" class="border-0 py-1 px-3  mr-5 hover:text-gray-900">
            Blog
          </nuxt-link>
        </nav>
      </div>
    </header>
    <nuxt />
  </div>
</template>
