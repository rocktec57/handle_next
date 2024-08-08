<template>
  <HeaderNavList :links="links" />
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  {
    label: "Home",
    to: "/",
    class:"text-black_222 dark:text-white hover:text-yellow"
  },
  {
    label: "services",
    to: "services",
    class:"text-black_222 dark:text-white hover:text-yellow"
  },
  {
    label: "Portfolio",
    to: "portfolio",
    class:"text-black_222 dark:text-white hover:text-yellow"
  },
  {
    label: "Our Company",
    to: "ourcompany",
    class:"text-black_222 dark:text-white hover:text-yellow"
  },
  {
    label: "Pricing",
    to: "/pricing",
    class:"text-black_222 dark:text-white hover:text-yellow",
    children: [
      {
        label: "Social Media",
        to: "/pricing",
        description: "Social Media",
      },
      {
        label: "Online Store",
        to: "/pricing",
        description: "Online Store",
      },
      {
        label: "Advertising Campaign",
        to: "/pricing",
        description: "Advertising Campaign",
      },
      {
        label: "Visual Identity Design",
        to: "/pricing",
        description: "Visual Identity Design",
      },
      {
        label: "Web Hosting",
        to: "/pricing",
        description: "Web Hosting",
      },
      {
        label: "Digital Marketing",
        to: "/pricing",
        description: "Digital Marketing",
      },
    ],
  },
  {
    label: "Get a Free Quote",
    to: "/freequote",
    class:"btn-yellow py-2 px-5 bg-primary text-blue font-normal peer-active:text-blues",
  },
]);
</script>
