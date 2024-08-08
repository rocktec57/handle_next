<template>
    <main class="overflow-hidden">
        <article class="relative mb-30">
            <div class="absolute top-[59%] left-[26%] opacity-0 dark:opacity-100">
                <IconsStarInDark />
            </div>
            <div class="absolute left-[-40%] lg:left-[10%] -top-40">
                <IconsMaskHomeSec1 />
            </div>
            <UContainer>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-56 items-center relative">
                    <div class="px-2">
                        <h1 class="text-blue dark:text-white font-bold lg:font-extrabold text-2xl lg:text-4xl">
                            Lorem Ipsum is simply dummy text of the <span class="text-primary">printing</span> survived not
                            only
                            five
                        </h1>
                        <p class="font-normal text-lg text-black_222 dark:text-white mt-4 mb-8 ">Lorem Ipsum is simply dummy
                            text of
                            the printing urvived not only five Lorem Ipsum is simply dummy text of the printing
                            urvived not only five </p>

                        <ULink to="/components/link" class="bg-yellow text-blue px-6 py-3 shadow-sm">
                            Get a Free Quote
                        </ULink>
                    </div>
                    <div class="order-first lg:order-last">
                        <img src="@/assets/images/data/homesec1.png" class="m-auto" />
                    </div>
                </div>
            </UContainer>
        </article>
        <section class="bg-bodyWhite dark:bg-navyBlue mt-10 mb-20">
            <UContainer>
                <div class="mb-20">
                    <h1 class="text-center text-black_222 dark:text-white font-[LatoBoldItalic] text-2xl">
                        Our ideas <span class="text-yellow uppercase">outside of the box</span>
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
                    <div
                        class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700  group hover:shadow-lg hover:scale-110">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px] " />
                        <h3 class="font-bold my-3 text-lg">Customized Solutions</h3>
                        <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem
                            Ipsum </p>
                    </div>
                    <div
                        class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700  group hover:shadow-lg hover:scale-110">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                        <h3 class="font-bold my-3 text-lg">Customized Solutions</h3>
                        <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem
                            Ipsum</p>
                    </div>
                    <div
                        class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700  group hover:shadow-lg hover:scale-110">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                        <h3 class="font-bold my-3 text-lg">Customized Solutions</h3>
                        <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem
                            Ipsum</p>
                    </div>
                    <div
                        class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-8 transition ease-in-out delay-150 duration-700  group hover:shadow-lg hover:scale-110">
                        <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                        <h3 class="font-bold my-3 text-lg">Customized Solutions</h3>
                        <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem
                            Ipsum</p>
                    </div>
                </div>
            </UContainer>
        </section>
        <section class="my-20 lg:my-28 relative">
            <UContainer class="overflow-hidden lg:overflow-visible">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div class="mx-auto relative">
                        <span class="absolute">
                            <IconsMaskWhyUs />
                        </span>
                        <img src="@/assets/images/Desktop.png" class="bg-blue dark:bg-navy rounded-lg w-fit relative" />
                    </div>
                    <div class="md:pe-7 mt-3">
                        <h1 class="text-black_222 dark:text-white font-[LatoBoldItalic] text-3xl">Why <span
                                class="text-yellow uppercase">us</span></h1>
                        <h3 class="text-black_222 dark:text-white font-bold text-xl my-4">Lorem Ipsum is simply dummy text
                            of the
                            survived
                            not only five </h3>
                        <p class="text-sm text-black_222 dark:text-white">Lorem Ipsum is simply dummy text of the printing
                            urvived not
                            only five Lorem Ipsum is simply
                            dummy text of the printing
                            urvived not only five Lorem Ipsum is </p>
                        <div class="mt-8 grid sm:grid-cols-2 gap-6">
                            <div class="flex items-center">
                                <div class="relative">
                                    <span class="absolute bottom-0 left-2 text-White_EEE dark:text-navy">
                                        <svg width="67" height="62" viewBox="0 0 67 62" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M65.028 28.9877C62.6141 20.3883 58.0183 11.2597 49.5217 5.42127C46.0356 2.92807 42.0636 1.19663 37.8642 0.339568C33.3481 -0.394031 28.7187 0.0689906 24.4373 1.68246C13.803 5.50441 6.79847 14.1683 3.05902 23.7717C0.0860666 31.4039 -0.905836 43.1167 3.28232 48.5217C7.47047 53.9268 14.093 59.4462 27.4281 61.354C29.5115 61.8797 33.8079 61.9746 39.7619 61.7745C46.1308 61.6765 57.501 58.1114 62.9633 52.2807C64.638 50.4937 65.3761 48.1139 65.9018 45.742C67.1598 40.6361 67.0068 35.2844 65.4591 30.2588"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <div class="w-20 relative">
                                        <img src="@/assets/images/servic/MouseIdea.png" class="" />
                                    </div>
                                </div>
                                <div class="relative">
                                    <p class="px-2">Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="relative">
                                    <span class="absolute bottom-0 left-2 text-White_EEE dark:text-navy">
                                        <svg width="67" height="62" viewBox="0 0 67 62" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M65.028 28.9877C62.6141 20.3883 58.0183 11.2597 49.5217 5.42127C46.0356 2.92807 42.0636 1.19663 37.8642 0.339568C33.3481 -0.394031 28.7187 0.0689906 24.4373 1.68246C13.803 5.50441 6.79847 14.1683 3.05902 23.7717C0.0860666 31.4039 -0.905836 43.1167 3.28232 48.5217C7.47047 53.9268 14.093 59.4462 27.4281 61.354C29.5115 61.8797 33.8079 61.9746 39.7619 61.7745C46.1308 61.6765 57.501 58.1114 62.9633 52.2807C64.638 50.4937 65.3761 48.1139 65.9018 45.742C67.1598 40.6361 67.0068 35.2844 65.4591 30.2588"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <div class="w-20 relative">
                                        <img src="@/assets/images/servic/MouseIdea.png" class="" />
                                    </div>
                                </div>
                                <div class="relative">
                                    <p class="px-2">Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="relative">
                                    <span class="absolute bottom-0 left-2 text-White_EEE dark:text-navy">
                                        <svg width="67" height="62" viewBox="0 0 67 62" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M65.028 28.9877C62.6141 20.3883 58.0183 11.2597 49.5217 5.42127C46.0356 2.92807 42.0636 1.19663 37.8642 0.339568C33.3481 -0.394031 28.7187 0.0689906 24.4373 1.68246C13.803 5.50441 6.79847 14.1683 3.05902 23.7717C0.0860666 31.4039 -0.905836 43.1167 3.28232 48.5217C7.47047 53.9268 14.093 59.4462 27.4281 61.354C29.5115 61.8797 33.8079 61.9746 39.7619 61.7745C46.1308 61.6765 57.501 58.1114 62.9633 52.2807C64.638 50.4937 65.3761 48.1139 65.9018 45.742C67.1598 40.6361 67.0068 35.2844 65.4591 30.2588"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <div class="w-20 relative">
                                        <img src="@/assets/images/servic/MouseIdea.png" class="" />
                                    </div>
                                </div>
                                <div class="relative">
                                    <p class="px-2">Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="relative">
                                    <span class="absolute bottom-0 left-2 text-White_EEE dark:text-navy">
                                        <svg width="67" height="62" viewBox="0 0 67 62" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M65.028 28.9877C62.6141 20.3883 58.0183 11.2597 49.5217 5.42127C46.0356 2.92807 42.0636 1.19663 37.8642 0.339568C33.3481 -0.394031 28.7187 0.0689906 24.4373 1.68246C13.803 5.50441 6.79847 14.1683 3.05902 23.7717C0.0860666 31.4039 -0.905836 43.1167 3.28232 48.5217C7.47047 53.9268 14.093 59.4462 27.4281 61.354C29.5115 61.8797 33.8079 61.9746 39.7619 61.7745C46.1308 61.6765 57.501 58.1114 62.9633 52.2807C64.638 50.4937 65.3761 48.1139 65.9018 45.742C67.1598 40.6361 67.0068 35.2844 65.4591 30.2588"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <div class="w-20 relative">
                                        <img src="@/assets/images/servic/MouseIdea.png" />
                                    </div>

                                </div>
                                <div class="relative">
                                    <p class="px-2">Lorem Ipsum is</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UContainer>
    </section>
    <section>
      <UContainer class="mb-20">
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-7">A few Selected <span
            class="text-yellow uppercase">Projects</span></h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div class="w-full h-96 rounded-lg border-gradient ">
            <img src="https://via.placeholder.com/800x250/F00" class="w-full h-full rounded-md" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="w-full h-44 rounded-lg border-gradient"><img src="https://via.placeholder.com/800x250/F00"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg border-gradient"><img src="https://via.placeholder.com/800x250/F00"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg border-gradient"><img src="https://via.placeholder.com/800x250/F00"
                class="w-full h-full rounded-md" /></div>
            <div class="w-full h-44 rounded-lg border-gradient"><img src="https://via.placeholder.com/800x250/F00"
                class="w-full h-full rounded-md" /></div>
          </div>
        </div>
        <div class="text-center  mt-7">
          <RouterLink to="/portfolio" class="btn-yellow py-3 px-7 bg-primary text-blue text-lg">Show all Projects
          </RouterLink>
        </div>
      </UContainer>
    </section>

      <section>
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-7">Our <span class="text-yellow uppercase">Services</span></h1>
        <div class="bg-blue dark:bg-navyBlue p-lg-20 relative overflow-hidden">
            <UContainer class="relative h-[38rem] lg:h-96 dark:border">
                <div class=" rounded-md px-1 lg:px-14 py-10  ">
                    <div class="inline-block  lg:w-1/5 flex-shrink-0 mb-20 mb-lg-0">
                        <div class="flex relative gap-4 mb-7">
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


                    <div class="relative lg:top-[-225px] lg:left-[25%]"> <!--inline-block lg:w-4/5 lg:relative lg:top-[20%] lg:left-[30%]-->
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
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 1</h3>
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
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">Customized Solutions</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 3</h3>
                                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing urvived not only
                                        five Lorem Ipsum
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="bg-bodyWhite dark:bg-navy border border-[#CCCCCC] dark:border-navy text-center p-3 lg:p-8">
                                    <img src="@/assets/images/servic/Idea.png" class="mx-auto w-36 mt-[-100px]" />
                                    <h3 class="font-bold my-1 lg:my-3 text-lg">said 4</h3>
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
    <section class="relative mt-28 mb-20">
    <div class="absolute inset-0 top-[-30%] lg:top-[-90%] left-[-85%] lg:left-[7%]">
        <IconsMaskAboutUs/>
    </div>
      <UContainer class="relative">
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-3">STATISTICS <span
            class="text-yellow uppercase">ABOUT US</span></h1>
        <h3 class="text-center text-black_222 dark:text-white text-lg mx-auto w-[90%] lg:w-2/5">Lorem Ipsum is simply
          dummy
          text of the Lorem Ipsum is simply dummy text of the</h3>
        <div class="flex flex-col lg:flex-row justify-between items-center mt-10">
          <div class="relative flex items-center justify-center w-64 h-64 group group-hover:shadow-md">
            <img src="https://via.placeholder.com/50x50/F00" class="w-64 h-64 rounded-full p-[1px]" />
            <div
              class="absolute w-full h-full z-10 top-0 left-0 rounded-full flex justify-center items-center flex-col bg-bgDark dark:bg-navy group-hover:bg-navy/70">
              <h1 class="text-yellow text-3xl  mb-3 uppercase">6375</h1>
              <p class="text-center text-black_222 dark:text-white text-lg uppercase group-hover:text-white">PROJECTS</p>
            </div>
          </div>
          <IconsNextAboutHome class="rotate-90  lg:rotate-0 p-2" />
          <div class="relative flex items-center justify-center w-64 h-64 group group-hover:shadow-md">
            <img src="https://via.placeholder.com/500x500/F00" class="w-64 h-64 rounded-full p-[1px]" />
            <div
              class="absolute w-full h-full z-10 top-0 left-0 rounded-full flex justify-center items-center flex-col bg-bgDark dark:bg-navy group-hover:bg-navy/70">
              <h1 class="text-yellow text-3xl  mb-3 uppercase">6375</h1>
              <p class="text-center text-black_222 dark:text-white text-lg uppercase group-hover:text-white">PROJECTS</p>
            </div>
          </div>
          <IconsNextAboutHome class="rotate-90 lg:rotate-0 p-2" />
          <div class="relative flex items-center justify-center w-64 h-64 group group-hover:shadow-md">
            <img src="https://via.placeholder.com/265x265/F00" class="w-64 h-64 rounded-full p-[1px]" />
            <div
              class="absolute w-full h-full z-10 top-0 left-0 rounded-full flex justify-center items-center flex-col bg-bgDark dark:bg-navy group-hover:bg-navy/70">
              <h1 class="text-yellow text-3xl  mb-3 uppercase">6375</h1>
              <p class="text-center text-black_222 dark:text-white text-lg uppercase group-hover:text-white">PROJECTS</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section>
      <UContainer>
        <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-3">Customers Reviews</h1>
        <h3 class="text-center text-black_222 dark:text-white text-lg mx-auto w-[90%] lg:w-2/5">Don't take our word for
          it. See what
          customers are saying about us</h3>


        <div class="Customers_Reviews">
          <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="20"
            :pagination="{ clickable: true }" :effect="'fade'" :breakpoints="{
              640: {
                slidesPerView: 2,
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
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14 rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img src="https://via.placeholder.com/50x50/F00" class="size-14	rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg">Sabo Masties</p>
                    <span class="font-normal text-base text-[#727272]">Founder at Rolex</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    And residence for met the estimablee
                    le disposing. Mean if he they been
                    no hold mr
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews />
                  <IconsStarReviews />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </UContainer>
    </section>
    <section class="relative py-20">
    <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-3">Get your <spantat
        class="text-yellow uppercase">free</spantat> consulion</h1>
    <h3 class="text-center text-black_222 dark:text-white text-lg mx-auto w-[90%] lg:w-2/5 mb-8">Lorem Ipsum is simply
      dummy text of the
      Lorem Ipsum is simply dummy text of the</h3>
    <div class="absolute w-full top-52 ">
      <div class="w-[130%] h-[670px] lg:h-[480px] bg-blue dark:bg-navy rotate-[4deg] lg:rotate-[3deg] relative -left-8">
      </div>
    </div>
    <UContainer>
      <div class="flex gap-y-10 flex-col lg:flex-row  items-center ">
        <div class="hidden lg:block lg:w-2/5 relative left-4">
          <img src="@/assets/images/Desktop.png" class="bg-white dark:bg-navy rounded-lg w-fit" />
        </div>
        <div class="w-full lg:w-3/5 relative">
          <div class="absolute z-10 -right-20 -top-40 hidden lg:block">
            <img src="@/assets/images/freeConsultation.png" class="w-64" />
          </div>
          <div class="bg-white dark:bg-navyBlue rounded-md p-8 lg:p-12 shadow-lg">
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="mx-2 mb-5">
                  <label for="full-name" class="px-2">Full Name</label>
                  <div class="mt-2">
                    <UInput size="xl" variant="none"
                      class="rounded-md dark:border dark:border-white dark:border-opacity-40 bg-bgDark dark:bg-navy"
                      type="text" placeholder="Name" />
                  </div>
                </div>
                <div class="mx-2 mb-5">
                  <label for="Email" class="px-2">Email</label>
                  <div class="mt-2">
                    <UInput size="xl" variant="none"
                      class="rounded-md dark:border dark:border-white dark:border-opacity-40 bg-bgDark dark:bg-navy"
                      type="email" placeholder="Email" />
                  </div>
                </div>
                <div class="mx-2 mb-5">
                  <label for="service" class="px-2">Choose Your Service</label>
                  <div class="mt-2">
                    <USelect size="xl" variant="none"
                      class="rounded-md dark:border dark:border-white dark:border-opacity-40 bg-bgDark dark:bg-navy"
                      type="text" placeholder="Service" v-model="country" :options="countries" />
                  </div>
                </div>
                <div class="mx-2 mb-5">
                  <label for="Phone" class="px-2">Phone</label>
                  <div class="mt-2">
                    <UInput size="xl" variant="none"
                      class="rounded-md dark:border dark:border-white dark:border-opacity-40 bg-bgDark dark:bg-navy"
                      type="text" placeholder="Phone" />
                  </div>
                </div>
                <div class="col-span-full mx-2 mb-5">
                  <label for="Email" class="px-2">Choose Your Service</label>
                  <div class="mt-2">
                    <UTextarea :rows="5" variant="none"
                      class="rounded-md dark:border dark:border-white dark:border-opacity-40 bg-bgDark dark:bg-navy"
                      type="text" placeholder="..." />
                  </div>
                </div>
              </div>
              <div class="text-end mx-2 mt-3">
                <UButton type="submit" class="bg-yellow px-12 py-3 rounded-sm font-semibold text-blue hover:bg-yellow/80">
                  Submit
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</main>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar, A11y];


const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])

</script>

<style scoped>
.swiper {
    overflow-y: visible;
    overflow-x: clip;
}</style>



<!-- 

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>
 -->

<style scoped>
@media only screen and (max-width: 768px) {
  .swiper {
    overflow: visible !important;
  }
}
</style>


<style>
.Customers_Reviews .swiper-wrapper {
  padding-top: 20px;
  padding-bottom: 30px;
}

.Customers_Reviews .swiper-pagination-fraction,
.Customers_Reviews .swiper-pagination-custom,
.Customers_Reviews .swiper-horizontal>.swiper-pagination-bullets,
.Customers_Reviews .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0;
}

.Customers_Reviews .swiper-pagination-bullet {
  width: 13px;
  height: 13px;
  background: transparent;
  opacity: 1;
  border: 1px solid #90919F;
}

.Customers_Reviews .swiper-pagination-bullet-active {
  border: 1px solid #FFBB0D;
  background: #FFBB0D;
}

.Customers_Reviews .hover-bg-borderReviews:hover {
  border: 1px solid transparent;
  background-image: url('@/assets/images/borderReviews.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
