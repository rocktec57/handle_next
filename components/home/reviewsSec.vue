<template>
  <section data-aos="zoom-out-down">
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
          <!-- <swiper-slide v-for="review in reviews" :key="review.id">
              <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
                <div class="flex items-center gap-4 mb-3">
                  <img :src="review.customer_img" class="size-14 rounded-full" />
                  <div>
                    <p class="text-black_222 dark:text-white font-semibold text-lg"> {{ review.customer_name }} </p>
                    <span class="font-normal text-base text-[#727272]"> {{ review.customer_position }}</span>
                  </div>
                </div>
                <p class="font-normal text-base line-clamp-2 mb-3">
                  “<span class="text-justify">
                    {{review.comment}}
                  </span>”
                </p>
                <div class="flex gap-1 text-yellow">
                  <IconsStarReviews v-for="i in review.rating" :key="i"/>
                </div>
              </div>
           </swiper-slide> -->
          <swiper-slide>
            <div class="bg-bgDark dark:bg-navy border border-bgDark rounded-[20px] p-8 hover-bg-borderReviews">
              <div class="flex items-center gap-4 mb-3">
                <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                  <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                  <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                  <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
                  <img src="@/assets/images/data/user.png" class="size-14	rounded-full" />
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
            
        </swiper>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar, A11y];

// const reviews = ref([]);
// const { data, error } = await useFetch(api);
// reviews.value = data.value.data.reviews;



</script>
  

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

