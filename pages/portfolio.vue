<template>
    <section class="mb-16">
        <PagesReusableTopSection 
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        :breadcrumbs="[
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
