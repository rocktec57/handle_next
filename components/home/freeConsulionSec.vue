<template>
  <section class="relative py-20" data-aos="zoom-in-down">
    <h1 class="text-center text-black_222 dark:text-white text-2xl font-[LatoBoldItalic] mb-3">Get your <span
        class="text-yellow uppercase">free</span> consultation</h1>
    <h3 class="text-center text-black_222 dark:text-white text-lg mx-auto w-[90%] lg:w-2/5 mb-8">Lorem Ipsum is simply
      dummy text of the
      Lorem Ipsum is simply dummy text of the</h3>
    <div class="absolute w-full top-52 ">
      <div class="w-[130%] h-[670px] lg:h-[480px] bg-blue dark:bg-navy rotate-[4deg] lg:rotate-[3deg] relative ltr:-left-8 rtl:-right-8 analytical_mileage"></div>
    </div>
    <UContainer>
      <div class="flex gap-y-10 flex-col lg:flex-row  items-center ">
        <div class="hidden lg:block lg:w-2/5 relative ltr:left-4  rtl:right-3" data-aos="zoom-out-right">
          <img src="@/assets/images/Desktop.png" class="bg-white dark:bg-navy rounded-lg w-fit bg-inFreePage" />
        </div>
        <div class="w-full lg:w-3/5 relative" data-aos="zoom-out-left">
          <div class="absolute z-10 ltr:-right-20 rtl:-left-20  -top-40 hidden lg:block">
            <img src="@/assets/images/freeConsultation.png" class="w-64" />
          </div>
          <div class="bg-white dark:bg-navyBlue rounded-md p-3 lg:p-12 shadow-lg dark:border dark:border-white dark:border-opacity-40">
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
</template>

<script setup>
  const countries = ['United States', 'Canada', 'Mexico']
  const country = ref(countries[0])
</script>
