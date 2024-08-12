<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>


<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir" class="light">
  <Body>
    <div class="bg-bodyWhite text-black_222 dark:bg-navyBlue dark:text-bodyWhite">
      <nuxt-layout>
        <main class="overflow-hidden">
          <NuxtPage />
        </main>
      </nuxt-layout>
    </div>
  </Body>
  </Html>
</template>


























