<template>
    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700 group hover:shadow-lg hover:scale-110">
      <img :src="idea.image" class="mx-auto w-36 mt-[-100px]" />
      <h3 class="font-bold my-3 text-lg"> {{ idea.title }} </h3>
      <p class="text-sm"> {{ idea.paragraph }} </p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    idea: {
      type: Object,
      required: true
    }
  });
  </script>
  