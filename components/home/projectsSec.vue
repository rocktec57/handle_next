<template>
  <section>
    <UContainer class="mb-20">
      <PagesProjectSecImg />
      <div class="text-center mt-7" data-aos="flip-down">
        <NuxtLink :to="localePath('/portfolio')" class="btn-yellow py-3 px-7 bg-primary text-blue text-lg">Show all
          Projects</NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
<script setup>
const localePath = useLocalePath()
</script>