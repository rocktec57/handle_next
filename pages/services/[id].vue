<template>
    <!-- <h1>sewar {{ useRoute().params.id }}</h1> -->
    <section>
        <PagesReusableTopSection :breadcrumbs="[
            { text: $t('Home'), link: localePath('/') },
            { text: $t('Services'), link: localePath('/services') },
            { text: 'Graphic Design', highlighted: true }
        ]" :imgIconSec="'@/assets/images/servic/Idea.png'" />
    </section>


    <section class="my-20 lg:my-28 relative">
        <UContainer class="overflow-hidden lg:overflow-visible">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="mx-auto  relative">
                    <span class="absolute">
                        <IconsMaskWhyUs />
                    </span>
                    <img src="@/assets/images/Desktop.png" class="bg-blue dark:bg-navy rounded-lg relative" />
                </div>
                <div class="md:pe-7 mt-3">
                    <h1 class="text-black_222 dark:text-white font-bold text-4xl">Graphic Design in <span
                            class="text-yellow uppercase">Handle IT</span></h1>
                    <h3 class="text-black_222 dark:text-white font-bold text-2xl my-4">
                        Lorem Ipsum is simply dummy text of the survived not only five </h3>
                    <p class="text-base leading-8 text-black_222 dark:text-white">
                        Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum is simply dummy
                        text of the printing urvived not only five Lorem Ipsum is Lorem Ipsum is simply dummy urvived not
                        only five Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing urvived not only five
                        Lorem Ipsum is simply urvived not only five Lorem Ipsum is urvived not only five Lorem Ipsum is
                    </p>

                </div>
            </div>
        </UContainer>
    </section>


    <section>
        <UContainer class="my-4">
            <h1 class="text-center text-black_222 dark:text-white text-2xl font-bold mb-7">Graphic Design <span
                    class="text-yellow uppercase">{{ $t("Projects") }}</span></h1>
            <div class="container grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-gradient-rectangle rounded group">
                    <img src="@/assets/images/data/kaya.png" class="img-fluid" />
                </div>
                <div class="bg-gradient-rectangle rounded group">
                    <img src="@/assets/images/data/kaya.png" class="img-fluid" />
                </div>
                <div class="bg-gradient-rectangle rounded group">
                    <img src="@/assets/images/data/kaya.png" class="img-fluid" />
                </div>
                <div class="bg-gradient-rectangle rounded group">
                    <img src="@/assets/images/data/kaya.png" class="img-fluid" />
                </div>
            </div>
        </UContainer>
    </section>


    <HomeFreeConsulionSec />
</template>



<script setup>
// import { ref } from 'vue';

// const service = ref(null)
// const { data, error } = await useFetch(() => `${api}/${useRoute().params.id}`)
// service.value = data
// console.log(data)

</script>
