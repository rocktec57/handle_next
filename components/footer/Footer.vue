<template>
    <UContainer class="relative overflow-hidden pt-14">
        <div class="absolute -top-4 opacity-25">
            <IconsMaskFooterSvg />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap:8 lg:gap-20 mb-10 relative z-0">
            <div class="col-span-2 text-start lg:px-4">
                <img src="@/assets/images/logo/logo.png" class="w-[50%] mb-5" alt="LOGO" v-if="color.preference === 'light'"  />
                <img src="@/assets/images/logo/logowhite.png" class="w-[50%] mb-5" alt="LOGO" v-else-if="color.preference === 'dark'" />
                <p class="text-black_222 dark:text-white text-justify">
                    Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum is simply dummy text
                    of the printing urvived not only five Lorem Ipsum is text of the printing urvived not only five .
                </p>
            </div>
            <div>
                <h1 class="text-blue dark:text-yellow text-2xl font-[LatoBoldItalic] mb-4">Links</h1>
                <ul class="space-y-3">
                    <li>
                        <NuxtLink :to="localePath('/')" class="text-black_222 dark:text-white hover:text-yellow">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/services')" class="text-black_222 dark:text-white hover:text-yellow">Services </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/portfolio')" class="text-black_222 dark:text-white hover:text-yellow">Portfolio </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/ourcompany')" class="text-black_222 dark:text-white hover:text-yellow">Why choose us </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="text-blue dark:text-yellow text-2xl font-[LatoBoldItalic] mb-4">Company</h1>
                <ul class="space-y-3">
                    <li>
                        <NuxtLink class="text-black_222 dark:text-white hover:text-yellow">Terms & Conditions
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-black_222 dark:text-white hover:text-yellow">Privacy Policy
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-black_222 dark:text-white hover:text-yellow">Help Center
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="text-blue dark:text-yellow text-2xl font-[LatoBoldItalic] mb-4">Get in touch</h1>
                <ul class="space-y-3">
                    <li>
                        <NuxtLink to="geo:gaza" class="text-black_222 dark:text-white hover:text-yellow">gaza - address</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="tel:970568833020" class="text-black_222 dark:text-white hover:text-yellow"> +970568833020 </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="mailto:handelIt@info.com" class="text-black_222 dark:text-white hover:text-yellow">handelIt@info.com</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr />

        <div class="flex justify-between items-center my-4 relative z-0">
            <p> &copy; {{ new Date().getFullYear() }}  title .  footer.</p>
            <div class="flex space-x-4 items-center">
                <a href="https://www.facebook.com/" title="Go to facebook" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsFacebookSvg />
                </a>
                <a href="https://www.twitter.com/" title="Go to X" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsXTwitterSvg />
                </a>
                <a href="https://www.instagram.com/" title="Go to Instagram" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsInstagramSvg />
                </a>
                <a href="https://www.linkedin.com/" title="Go to LinkedIn" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsLinkedInSvg />
                </a>
            </div>
        </div>


<!-- 
         <div>
                <h1 class="text-blue dark:text-yellow text-2xl font-[LatoBoldItalic] mb-4">Get in touch</h1>
                <ul class="space-y-3">
                    <li>
                        <NuxtLink :to="`geo:${companyInfo.address}`" class="text-black_222 dark:text-white hover:text-yellow">{{  companyInfo.address }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`tel:${companyInfo.phone}`" class="text-black_222 dark:text-white hover:text-yellow">{{ companyInfo.phone }} </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`mailto:${companyInfo.email}`" class="text-black_222 dark:text-white hover:text-yellow">{{ companyInfo.email }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr />

        <div class="flex justify-between items-center my-4 relative z-0">
            <p> &copy; {{ new Date().getFullYear() }}  title .  footer.</p>
            <div class="flex space-x-4 items-center">
                <a :href="companyInfo.facebook" title="Go to facebook" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsFacebookSvg />
                </a>
                <a :href="companyInfo.twitter" title="Go to X" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsXTwitterSvg />
                </a>
                <a :href="companyInfo.instagram" title="Go to Instagram" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsInstagramSvg />
                </a>
                <a :href="companyInfo.linkedin" title="Go to LinkedIn" target="_blank"
                    class="flex-shrink-0 h-4 w-4 text-blue dark:text-white ms-auto hover:text-yellow">
                    <IconsLinkedInSvg />
                </a>
            </div>
            <div v-if="loading">
                <p>Loading...</p>
            </div>
            <div v-if="error">
                <p>Error {{ error }}.</p>
            </div>
        </div> -->


    </UContainer>
</template> 

<script setup>


import { ref } from 'vue';
const color = useColorMode();
const localePath = useLocalePath();

const companyInfo = ref({});
const error = ref(null);
const loading = ref(true);

try {
  const { data, error } = await useFetch(api);

  if (data.value && data.value.data) {
    companyInfo.value = data.value.data;
  } else {
    throw new Error("Unexpected data format");
  }
} catch (err) {
  error.value = err.message;
} finally {
  loading.value = false;
}
</script>