<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
    <SecPagesTestTaj v-slot="slotPropsLinks">
      <img :src="slotPropsLinks.img" alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    </SecPagesTestTaj>
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
    <UContainer>
      <SecPagesTestTaj v-slot="slotPropsLinks"  class="flex justify-between items-center">
        <ol class="list-reset flex">
          <li>
            <ULink :to="localePath('/')" class="text-white">{{ $t("Home") }}</ULink>
          </li>
          <li><span class="mx-2 text-gray-300">></span></li>
          <li class="text-yellow ">{{ slotPropsLinks.text }} </li>
        </ol>
        <div>
          <img :src="slotPropsLinks.imgIcon" alt="" />
        </div>
      </SecPagesTestTaj>
    </UContainer>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>