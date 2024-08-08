<template>
    <section>
        <PagesReusableTopSection title="We make it about Lorem Ipsum is simply dummy text of the survived"
            highlightedText="not only five"
            description="We provide you with the expertise and technology you need to make an impact with your product. From top UX and product design to efficient development."
            bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            link="/" buttonText="Let’s Talk" />
    </section>

    <section class="my-14">
        <PagesAllServices />
    </section>

    <section class="mt-20">
        <PagesStartProjectSection />
    </section>

    <HomeFreeConsulionSec />
</template>

<script setup>
const localePath = useLocalePath()
useHead({
    title: "services - Handel it"
})

</script>