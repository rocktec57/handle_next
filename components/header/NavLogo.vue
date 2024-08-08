<template>
    <div class="flex flex-shrink-0 items-center">
        <!-- Logo small screens -->
        <img src="@/assets/images/logo/shortLogo.png" class="h-10 w-auto sm:hidden" alt="LOGO" v-if="color.preference === 'light'" />
        <img src="@/assets/images/logo/shortLogoW.png" class="h-10 w-auto sm:hidden" alt="LOGO" v-if="color.preference === 'dark'"  />
        <!-- Logo large screens -->
        <img src="@/assets/images/logo/logo.png" class="h-8 w-auto hidden sm:block" alt="LOGO" v-if="color.preference === 'light'"/>
        <img src="@/assets/images/logo/logowhite.png" class="h-8 w-auto hidden sm:block" alt="LOGO" v-if="color.preference === 'dark'" />
    </div>
</template>
<script setup>
const color = useColorMode();
</script> 


