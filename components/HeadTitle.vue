<template>
  <div class="relative overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-md">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {{ mainTitle }}
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            {{ subTitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
})
</script>
