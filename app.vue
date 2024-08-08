<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>


<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
  <Body>
    <div class="bg-bodyWhite text-black_222 dark:bg-navyBlue dark:text-bodyWhite">
      <nuxt-layout>
        <main class="overflow-hidden">
          <NuxtPage />
        </main>
      </nuxt-layout>
    </div>
  </Body>


<!-- 
  <PagesReusableTopSection :breadcrumbs="[
        { text: $t('Home'), link: localePath('/') },
        { text: 'Contact us', highlighted: true }
    ]" title="We make it about Lorem Ipsum is simply dummy text of the survived" highlightedText="not only five"
        description="We provide you with the expertise and technology you need to make an impact with your product. From top UX and product design to efficient development."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        link="/" buttonText="Let’s Talk" imgIconSec="/_nuxt/assets/images/servic/Idea.png" /> -->

  </Html>
</template>




<!-- <style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
 -->

























