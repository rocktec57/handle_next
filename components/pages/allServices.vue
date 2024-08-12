<template>
    <section class="relative">
        <div class="absolute left-[-40%] lg:left-[10%] -top-72 opacity-75">
            <IconsMaskHomeSec1 />
        </div>

        <h1 class="text-center text-black_222 dark:text-white text-2xl font-bold mb-20"  data-aos="fade-up">Our <span class="text-yellow uppercase">Services</span></h1>
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 relative">
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>
                <div class="bg-gradient-rectangle rounded group" data-aos="fade-up">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Graphic Design</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">Lorem Ipsum is simply 
                            dummy text </p>
                        <ULink :to="localePath(`/services/[id]`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div>

                <!-- <div class="bg-gradient-rectangle rounded group" v-for="service in services" :key="service.id">
                    <div class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 group-hover:border-transparent dark:group-hover:border-transparent">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">{{ service.name }}</h3>
                        <p class="text-sm text-ellipsis overflow-hidden line-clamp-2 ">{{ service.description }} </p>
                        <ULink :to="localePath(`/services/${service.id}`)"
                            class="mt-5 mb-0 bg-gray-ea dark:bg-navyBlue text-navy dark:text-white w-16 mx-auto flex justify-center items-center py-3 rounded-full  hover:bg-yellow hover:text-white dark:hover:bg-yellow dark:hover:text-navy ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor" class="size-5 stroke-2 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </ULink>
                    </div>
                </div> -->
            </div>
        </UContainer>
    </section>
</template>

<script setup>
const localePath = useLocalePath()

// import { ref } from 'vue';
// const services = ref([]);
// const { data, error } = await useFetch(api);
// services.value = data.value.data.services;
</script>