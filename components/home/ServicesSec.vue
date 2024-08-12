<template>
    <section data-aos="zoom-out">
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-bold mb-7">{{ $t("Our") }} <span
                class="text-yellow uppercase">{{ $t("Services") }}</span></h1>
        <div class="bg-blue dark:bg-navyBlue p-lg-20 relative overflow-hidden">
            <UContainer class="relative h-[38rem] lg:h-96 dark:border">
                <div class=" rounded-md px-1 lg:px-14 py-10  ">
                    <div class="inline-block  lg:w-1/5 flex-shrink-0 mb-20 mb-lg-0">
                        <div class="flex relative gap-4 mb-7 rtl:justify-end rtl:flex-row-reverse">
                            <div
                                class="custom-swiper-button-prev w-9 h-9 bg-white text-blue dark:bg-navy dark:text-white rounded-full flex justify-center items-center">
                                <UIcon name="i-heroicons-arrow-left" />
                            </div>
                            <div
                                class="custom-swiper-button-next w-9 h-9 bg-white text-blue dark:bg-navy dark:text-white rounded-full flex justify-center items-center">
                                <UIcon name="i-heroicons-arrow-right" />
                            </div>
                        </div>
                        <h3 class="text-white text-lg mb-3">Lorem Ipsum is simply text of the survived </h3>
                        <p class="text-white text-sm leading-9">Lorem Ipsum is simply dummy text of the printing urvived not
                            only
                            five
                        </p>
                    </div>


                    <div class="relative lg:top-[-225px] ltr:lg:left-[25%] rtl:lg:right-[25%]" data-aos="fade-right">
                        <!--inline-block lg:w-4/5 lg:relative lg:top-[20%] lg:left-[30%]-->
                        <swiper class="swiper" :modules="modules" :slides-per-view="1.5" :space-between="20"
                            :centered-slides="true" :loop="true" :effect="'fade'"
                            :navigation="{ prevEl: '.custom-swiper-button-prev', nextEl: '.custom-swiper-button-next' }"
                            :breakpoints="{
                                640: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                }
                            }">
                            <!-- <swiper-slide v-for="service in services" :key="service.id">
                                <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">{{ service.name }}</h3>
                                    <p class="text-sm">{{ service.description }}</p>
                                </div>
                            </swiper-slide> -->
                            <swiper-slide>
                                <div 
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide> 
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 2</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </UContainer>
        </div>
    </section>
</template>


 
<script setup>
import { ref } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar, A11y];

//  const services = ref([]);
//  services.value = data.value.data.services;

</script>

<style scoped>
.swiper {
    overflow-y: visible;
    overflow-x: clip;
}</style>