<template>
    <section class="mb-16">
        <PagesReusableTopSection :breadcrumbs="[
            { text: $t('Home'), link: localePath('/') },
            { text: 'Portfolio', highlighted: true }
        ]" />
    </section>

    <PagesProjectSecImg />

    <section class="my-20">
        <PagesStartProjectSection />
    </section>

    <HomeReviewsSec />

    <HomeFreeConsulionSec />
</template>


<script setup>
const localePath = useLocalePath()

</script>
