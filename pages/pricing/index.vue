<template>
    <section>
        <PagesReusableTopSection :breadcrumbs="[
            { text: $t('Pricing'), link: localePath('/') },
            { text: 'Social Media Packages', highlighted: true }
        ]" />
    </section>



    <section class="my-20 lg:my-28 relative">
        <UContainer class="overflow-hidden lg:overflow-visible">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="mx-auto  relative"  data-aos="fade-left">
                    <span class="absolute">
                        <IconsMaskWhyUs />
                    </span>
                    <img src="@/assets/images/Desktop.png" class="bg-blue dark:bg-navy rounded-lg relative" />
                </div>
                <div class="md:pe-7 mt-3"  data-aos="fade-right">
                    <h1 class="text-black_222 dark:text-white font-[LatoBoldItalic] text-4xl mb-7">Monthly savings <span
                            class="text-yellow uppercase">packages</span></h1>
                    <p class="text-base leading-8 text-black_222 dark:text-white">
                        Lorem Ipsum is simply dummy text of the printing urvived not only five Lorem Ipsum is simply dummy
                        text of the printing urvived not only five Lorem Ipsum is Lorem Ipsum is simply dummy urvived not
                        only five Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing urvived not only five
                        Lorem Ipsum is simply urvived not only five Lorem Ipsum is urvived not only five Lorem Ipsum is
                        Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing urvived not only five
                        Lorem Ipsum is simply urvived not only five Lorem Ipsum is urvived not only five Lorem Ipsum is
                        Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing urvived not only five
                        Lorem Ipsum is simply urvived not only five Lorem Ipsum is urvived not only five Lorem Ipsum is
                    </p>

                </div>
            </div>
        </UContainer>
    </section>


    <PagesPricingSection />

</template>

<script setup>
const localePath = useLocalePath()

</script>