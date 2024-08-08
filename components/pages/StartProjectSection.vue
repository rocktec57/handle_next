<template>
    <UContainer>
        <div class="bg-gradient-rectangle bg-gradient-rectangle-startProject rounded" data-aos="zoom-in">
            <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div class="mx-auto max-w-lg px-6 lg:px-8 text-center">
                    <h2 class="text-white font-bold lg:font-extrabold text-lg lg:text-3xl">
                        Start a Project with <span class="text-yellow">Handle IT</span>
                    </h2>
                    <p class="font-normal text-sm lg:text-base text-white mt-4 mb-8">SEE HOW WE CAN HELP YOUR BUSINESS GROW
                        WITH
                        DIGITAL MARKETING</p>
                    <ULink :to="localePath('/freequote')" class="bg-yellow text-blue px-10 py-3 shadow-sm">
                        Let’s Talk
                    </ULink>
                </div>
            </div>
        </div>
    </UContainer>
</template>
<script setup>
const localePath = useLocalePath()

</script>