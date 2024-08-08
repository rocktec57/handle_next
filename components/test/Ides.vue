<template>
    <section class="bg-bodyWhite dark:bg-navyBlue mt-10 mb-20">
      <UContainer>
        <div class="mb-20">
          <h1 class="text-center text-black_222 dark:text-white font-[LatoBoldItalic] text-2xl">
            Our ideas <span class="text-yellow uppercase">outside of the box</span>
          </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
          <Suspense>
            <template #default>
              <IdeaCard v-for="(idea, i) in ideas" :key="i" :idea="idea" />
            </template>
            <template #fallback>
              <p>Loading...</p>
            </template>
          </Suspense>
        </div>
      </UContainer>
    </section>
    <div v-if="error">
      <p>Error loading data.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, defineAsyncComponent } from 'vue';
  
  const ideas = ref([]);
  const error = ref(null);
  
  const fetchIdeas = async () => {
    try {
      const { data, error } = await useFetch(api);
      if (error.value) throw new Error(error.value);
      ideas.value = data.value.data.ideas;
    } catch (err) {
      error.value = err.message;
    }
  };
  
  fetchIdeas();
  
  const IdeaCard = defineAsyncComponent(() => import('@/components/home/IdeaCard.vue'));
  </script>
  