<template>
    <article class="relative mb-30" >
        <div class="absolute top-[59%] left-[26%] opacity-0 dark:opacity-100">
            <IconsStarInDark />
        </div>
        <div class="absolute left-[-40%] lg:left-[10%] -top-40">
            <IconsMaskHomeSec1 />
        </div>
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-56 items-center mt-4 relative">
                <div class="px-2"  data-aos="fade-right">
                    <h1 class="text-blue dark:text-white font-bold text-2xl lg:text-4xl" >
                        Lorem Ipsum is simply dummy text of the <span class="text-primary">printing</span> survived not only five
                        <!-- {{ slider.title }} -->
                    </h1>
                    <p class="font-normal text-lg text-black_222 dark:text-white mt-4 mb-8 ">
                        Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum is simply dummy text of the printing urvived not only five 
                        <!-- {{ slider.paragraph }} -->
                    </p>

                    <ULink :to="localePath('freequote')" class="bg-yellow text-blue px-6 py-3 shadow-sm">
                        {{ $t('freequote') }} 
                    </ULink>
                </div>
                <div class="order-first lg:order-last" data-aos="fade-left">
                    <img src="@/assets/images/data/homesec1.png" class="m-auto" />
                    <!-- <img :src="slider.image" class="m-auto" /> -->
                </div>
            </div>
        </UContainer> 
    </article>
    <!-- <article class="relative mb-30"  >
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-56 items-center relative">
                EROOR
            </div>
        </UContainer> 
    </article> -->
</template>

<script setup>
import { ref } from 'vue';
const localePath = useLocalePath()

</script>
