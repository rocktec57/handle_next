<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-28" data-aos="fade-down">
    <img :src="bgImage" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <UContainer>
        <div class="flex justify-between items-center">
          <ol class="list-reset flex">
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
              <ULink v-if="breadcrumb.link" :to="breadcrumb.link" class="text-white">{{ breadcrumb.text }}</ULink>
              <span v-else class="text-yellow">{{ breadcrumb.text }}</span>
              <span v-if="index < breadcrumbs.length - 1" class="mx-2 text-gray-300">></span>
            </li>
          </ol>
          <img :src="imgIconSec" alt="" />
        </div>
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-white font-bold lg:font-extrabold text-lg lg:text-3xl">
            {{ title }} <span class="text-yellow">{{ highlightedText }}</span>
          </h2>
          <p class="font-normal text-sm lg:text-base text-white mt-4 mb-8">{{ description }}</p>
          <ULink :to="localePath(link)"  v-if="buttonText"  class="bg-yellow text-blue px-6 py-3 shadow-sm">
            {{ buttonText }}
          </ULink>
        </div>

      </UContainer>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    title: {
      type: String,
    },
    highlightedText: {
      type: String,
    },
    description: {
      type: String,
    },
    bgImage: {
      type: String,
    },
    link: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    imgIconSec: {
      type: String
    },
  }
}
</script>
  