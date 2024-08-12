<template>
    <UContainer>
        <div class="p-8 text-center">
            <h1 class="text-center text-black_222 dark:text-white text-2xl font-bold mb-3">Choose your <span
                    class="text-yellow uppercase">Plan</span></h1>
            <h3 class="text-center text-black_222 dark:text-white text-lg mx-auto w-[90%] lg:w-2/5 mb-8">No Contracts, no
                surprise fee!</h3>


            <div class="grid grid-cols-3 gap-8">
                <div v-for="(plan, index) in pricingData" :key="index"
                    class="w-full bg-white dark:bg-navyBlue relative border rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
                    :class="{ ' dark:bg-navy border-2 border-yellow ': plan.highlight }">

                    <div v-if="plan.highlight">
                        <span class="absolute right-3 top-[2px] z-10 text-blue">Popular</span>
                        <svg class="absolute -right-1 -top-1" width="109" height="47" viewBox="0 0 109 47" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_379_1467" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="109" height="47">
                                <rect x="0.658203" width="107.468" height="47" rx="9.62963" fill="#0C0909" />
                                <rect x="0.658203" width="107.468" height="47" rx="9.62963"
                                    stroke="url(#paint0_linear_379_1467)" />
                            </mask>
                            <g mask="url(#mask0_379_1467)">
                                <path
                                    d="M19.6865 1.52618C19.3105 -3.62427 23.3877 -8.01001 28.5518 -8.01001H288.254C293.163 -8.01001 297.143 -4.03032 297.143 0.878879V15.4532C297.143 20.1942 293.422 24.1008 288.687 24.3315L30.9655 36.8892C26.1458 37.124 22.019 33.4707 21.6676 28.6581L19.6865 1.52618Z"
                                    class="fill-yellow" />
                                <path
                                    d="M19.6865 1.52618C19.3105 -3.62427 23.3877 -8.01001 28.5518 -8.01001H288.254C293.163 -8.01001 297.143 -4.03032 297.143 0.878879V15.4532C297.143 20.1942 293.422 24.1008 288.687 24.3315L30.9655 36.8892C26.1458 37.124 22.019 33.4707 21.6676 28.6581L19.6865 1.52618Z"
                                    stroke="url(#paint1_linear_379_1467)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_379_1467" x1="104.728" y1="-6.09199e-06" x2="3.23888"
                                    y2="48.6689" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#522C19" />
                                    <stop offset="0.510417" stop-color="#392318" stop-opacity="0" />
                                    <stop offset="1" stop-color="#4F2A19" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_379_1467" x1="96.1145" y1="1.67866" x2="47.8453"
                                    y2="57.314" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.2" />
                                    <stop offset="0.489583" stop-color="white" stop-opacity="0" />
                                    <stop offset="0.8125" stop-color="white" stop-opacity="0.510417" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.62" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div class="p-8">
                        <h2 class="text-2xl font-semibold mb-4">{{ plan.title }}</h2>
                        <p class=" mb-8">{{ plan.description }}</p>
                        <p class="text-4xl font-bold mb-8"><span class="text-yellow">{{ plan.price }}</span><span
                                class="text-base">{{ plan.cycle }}</span></p>
                        <p v-if="plan.discount" class="text-red-500 mb-4">{{ plan.discount }}</p>
                        <ul class="text-start mb-6 space-y-2">
                            <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="group mb-4">
                                <button @click="toggleDetails(plan, feature)"
                                    class="flex items-center w-full text-blue  dark:text-yellow mb-6">
                                    <div>
                                        <svg class="w-5 h-5 mr-2 rtl:ml-2" viewBox="0 0 25 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="17" y1="12.375" x2="8" y2="12.375"
                                                class="stroke-blue dark:stroke-yellow" stroke-width="2" />
                                            <line x1="12.625" y1="17" x2="12.625" y2="8"
                                                class="stroke-blue dark:stroke-yellow" stroke-width="2"
                                                v-if="!feature.showDetails" />
                                            <circle cx="12.5" cy="12.5" r="11.5" class="stroke-blue dark:stroke-yellow"
                                                stroke-width="1.77778" />
                                        </svg>
                                    </div>
                                    {{ feature.title }}
                                </button>
                                <ul v-if="feature.showDetails" class="ml-4 rtl:mr-4 mb-5 space-y-5">
                                    <li v-for="(detail, detailIndex) in feature.details" :key="detailIndex"
                                        class="flex items-center">
                                        <div>
                                            <svg class="w-5 h-5 mr-2 rtl:ml-2" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12.5" cy="12.5" r="11.5"
                                                    class="stroke-slate-700 dark:stroke-white" stroke-opacity="0.5"
                                                    stroke-width="1.77778" />
                                                <path d="M7 13L10.9431 17L18.8259 9"
                                                    class="stroke-slate-700 dark:stroke-white" stroke-opacity="0.5"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        {{ detail }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class=" mt-20 ">
                            <button
                                class="btn-yellow py-2 px-5 bg-primary text-blue font-normal w-[90%] m-5 absolute bottom-0 left-0 ">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>
  
<script setup>
import { ref } from 'vue';
const pricingData = ref([
    {
        title: 'Basic',
        description: 'This the most affordable plan for you to get started',
        price: '29$',
        discount: '',
        cycle: '/month',
        highlight: false,
        showDetails: false,
        features: [
            { title: 'Content', details: ['Create advertising content', 'Prepare a dissemination plan for diverse content', 'Develop a business-friendly content strategy'], showDetails: true },
            { title: 'Design', details: ['Lorem Ipsum is simply dummy lorem'], showDetails: false },
            { title: 'Social Media Management', details: ['Lorem Ipsum is simply dummy lorem'], showDetails: false }
        ]
    },
    {
        title: 'PRO',
        description: 'Our clients choose this plan to Get the best value',
        price: '89$',
        cycle: '/month',
        highlight: true,
        showDetails: false,
        features: [
            { title: 'Content', details: ['Create advertising content', 'Prepare a dissemination plan for diverse content', 'Develop a business-friendly content strategy'], showDetails: true },
            { title: 'Design', details: ['Lorem Ipsum is simply dummy lorem', 'Lorem Ipsum is simply dummy lorem', 'Lorem Ipsum is simply dummy lorem'], showDetails: false },
            { title: 'Social Media Management', details: ['Lorem Ipsum is simply dummy lorem', 'Lorem Ipsum is simply dummy lorem', 'Lorem Ipsum is simply dummy lorem'], showDetails: false }
        ]
    },
    {
        title: 'Premium',
        description: 'For Larger business or those seeking advanced services',
        price: '159$',
        cycle: '/month',
        highlight: false,
        showDetails: false,
        features: [
            { title: 'Content', details: ['Create advertising content', 'Prepare a dissemination plan for diverse content', 'Develop a business-friendly content strategy'], showDetails: true },
            { title: 'Design', details: ['Develop a business-friendly content strategy'], showDetails: false },
            { title: 'Social Media Management', details: ['Develop a business-friendly content strategy'], showDetails: false }
        ]
    }
])

const toggleDetails = (plan, feature) => {
    feature.showDetails = !feature.showDetails;
};
</script>
  