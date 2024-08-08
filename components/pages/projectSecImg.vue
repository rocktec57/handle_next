<template>
    <section>
      <UContainer class="mb-20">
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-7">{{ $t("AfewSelected") }} <span
            class="text-yellow uppercase">{{ $t("Projects") }}</span></h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div class="w-full h-96 rounded-lg  bg-gradient-rectangle " data-aos="flip-left">
            <img src="@/assets/images/data/kaya.png" class="w-full h-full rounded-md" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- <div class="w-full h-44 rounded-lg border-gradient" v-for="project in projects" :key="project.id"  v-show="project.id < 5" >
              <img src="https://via.placeholder.com/800x250/F00" class="w-full h-full rounded-md"/>
            </div> -->
            <div class="w-full h-44 rounded-lg bg-gradient-rectangle" data-aos="flip-right"><img src="@/assets/images/data/kaya.png"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg  bg-gradient-rectangle" data-aos="flip-right"><img src="@/assets/images/data/kaya.png"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg  bg-gradient-rectangle" data-aos="flip-right"><img src="@/assets/images/data/kaya.png"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg  bg-gradient-rectangle" data-aos="flip-right"><img src="@/assets/images/data/kaya.png"
                class="w-full h-full rounded-md" /></div>
          </div>
        </div>

      </UContainer>
    </section>
</template>
<script setup>
// import { ref } from 'vue';
// const projects = ref([]);
// const { data, error } = await useFetch(api);
// projects.value = data.value.data.projects;
</script>
