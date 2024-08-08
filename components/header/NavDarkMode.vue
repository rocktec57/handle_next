<template>
    <UButton class="absolute right-0 lg:relative lg:right-auto size-10" aria-label="button to switch theme dark to light"
        @click="toggleDark" variant="link" color="white"
        :icon="color.preference === 'dark' ? 'i-heroicons-sun size-10' : 'i-heroicons-moon size-10'"
        >
<!-- 
        <IconsNavLightMode />
        <IconsNavDarkMode /> -->

        <!-- {{ color.preference === "dark" ? 'sun' : '<IconsNavDarkMode />' }} -->


    </UButton>
</template>

<script setup>
const color = useColorMode();
function toggleDark() {
    console.log("Dark searrrrrrrrrrrrrr");
    color.preference = color.value === "dark" ? "light" : "dark";
}
</script>






<!-- <template>
    <button @click="toggleDark" class="absolute right-0 lg:relative lg:right-auto">
        <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <IconsNavLightMode v-if="isDarkMode" key="light" />
            <IconsNavDarkMode v-else key="dark" />
        </Transition>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isDarkMode = ref(false);
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    const htmlClasses = document.documentElement.classList;
    if (isDarkMode.value) {
        htmlClasses.add('dark');
        htmlClasses.remove('light');
        localStorage.setItem('darkMode', 'true');
    } else {
        htmlClasses.add('light');
        htmlClasses.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
};
onMounted(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        isDarkMode.value = true;
    } else {
        isDarkMode.value = false;
    }
});
</script> -->
