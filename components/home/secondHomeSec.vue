<template>
  <section class="bg-bodyWhite dark:bg-navyBlue mt-10 mb-20">
    <UContainer>
      <div class="mb-20">
        <h1 class="text-center text-black_222 dark:text-white font-bold text-2xl">
          Our ideas <span class="text-yellow uppercase">outside of the box</span>
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
        <div data-aos="zoom-in" class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out group hover:shadow-lg hover:scale-110">
          <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
          <h3 class="font-bold my-3 text-lg"> Customized Solutions </h3>
          <p class="text-sm"> Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum  </p>
        </div>
        <div data-aos="zoom-in" class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out group hover:shadow-lg hover:scale-110">
          <img src="@/assets/images/servic/Analize.png" class="mx-auto w-36 mt-[-100px]" />
          <h3 class="font-bold my-3 text-lg"> Customized Solutions </h3>
          <p class="text-sm"> Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum  </p>
        </div>
        <div data-aos="zoom-in" class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out group hover:shadow-lg hover:scale-110">
          <img src="@/assets/images/servic/Folder.png" class="mx-auto w-36 mt-[-100px]" />
          <h3 class="font-bold my-3 text-lg"> Customized Solutions </h3>
          <p class="text-sm"> Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum  </p>
        </div>
        <div data-aos="zoom-in" class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out group hover:shadow-lg hover:scale-110">
          <img src="@/assets/images/servic/StartUp.png" class="mx-auto w-36 mt-[-100px]" />
          <h3 class="font-bold my-3 text-lg"> Customized Solutions </h3>
          <p class="text-sm"> Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum  </p>
        </div>
      </div>
    </UContainer>
  </section>
  <!-- <section class="bg-bodyWhite dark:bg-navyBlue mt-10 mb-20" v-if="data">
    <UContainer>
      <div class="mb-20">
        <h1 class="text-center text-black_222 dark:text-white font-[LatoBoldItalic] text-2xl">
          Our ideas <span class="text-yellow uppercase">outside of the box</span>
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
        <div v-for="(idea, i) in ideas" :key="i"
          class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700 group hover:shadow-lg hover:scale-110">
          <img :src="image" class="mx-auto w-36 mt-[-100px]" />
          <h3 class="font-bold my-3 text-lg"> {{idea.title}} </h3>
          <p class="text-sm"> {{idea.paragraph}} </p>
        </div>
      </div>
    </UContainer>
  </section> 
  <div v-if="error">
    <p>Error loading data.</p>
  </div>-->
</template>

<script setup>

</script>
