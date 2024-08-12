<template>
   
<PagesReusableTopSection title="It’s More than a Name its " highlightedText="A Promise"
        description="We provide you with the expertise and technology you need to make an impact with your product. From top UX and product design to efficient development."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        link="/" buttonText="Discover More"  :breadcrumbs="[
            { text: $t('Home'), link: localePath('/') },
            { text: 'Get Free Quote', highlighted: true }
        ]"/>



</template>

<script setup>
const localePath = useLocalePath();
</script>