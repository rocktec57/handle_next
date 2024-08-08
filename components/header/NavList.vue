<template>
  <nav class="flex items-center gap-x-8">
    <ul class="flex flex-col lg:flex-row gap-5 items-center justify-center w-full ">
      <li v-for="(link, index) in links" :key="index" class="relative group">
        <div @click="toggleOpen(index)" class="flex items-center cursor-pointer">
          <NuxtLink :to="localePath(link.to)" :class="link.class">
            {{ link.label }}
          </NuxtLink>
          <i v-if="link.children"
            :class="[link.children ? 'i-heroicons-chevron-down-20-solid' : '', 'w-4 h-4 text-black_222 dark:text-white hover:text-yellow transform transition-transform duration-200 flex-shrink-0', isOpen(index) ? 'rotate-180' : '']"></i>
        </div>
        <ul v-if="link.children && isOpen(index)"
          class="absolute z-50 w-44  top-full left-0 mt-2 bg-white dark:bg-navyBlue shadow-md rounded-md">
          <li v-for="child in link.children" :key="child.label" class="px-2 py-2 hover:bg-gray-100 dark:hover:bg-navy">
            <NuxtLink :to="localePath(child.to)" :class="'text-black_222 dark:text-white hover:text-yellow'">
              {{ child.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li class="relative group">
        <ULink :to="switchLocalePath('en')" class="py-2 px-5 border solid border-gray-400 text-black_222 dark:text-white cursor-pointer ltr:hidden "> English </ULink>
        <ULink :to="switchLocalePath('ar')" class="py-2 px-5 border solid border-gray-400 text-black_222 dark:text-white cursor-pointer rtl:hidden">  العربية</ULink> <!--🌐-->
      </li>
    </ul>
  </nav>
</template>
  

<script>

export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  setup() {
    const localePath = useLocalePath()
    const openIndices = ref([]);
    const toggleOpen = (index) => {
      if (openIndices.value.includes(index)) {
        openIndices.value = openIndices.value.filter(i => i !== index);
      } else {
        openIndices.value.push(index);
      }
    };
    const isOpen = (index) => {
      return openIndices.value.includes(index);
    };

    return {
      toggleOpen,
      isOpen
    };
  }
}
</script>


