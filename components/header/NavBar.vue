<template>
    <Disclosure as="nav" v-slot="{ open }">
        <UContainer>
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6 bg-transparent" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6 bg-transparent" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center lg:justify-between ">
                    <HeaderNavLogo />
                    <div class="hidden lg:ml-6 lg:block w-100">
                        <div class="flex space-x-6 items-center justify-around">
                            <HeaderItemListNav />
                        </div>
                    </div>
                    <HeaderNavDarkMode />
                </div>
            </div>
        </UContainer>

        <DisclosurePanel class="absolute z-10 bg-bodyWhite dark:bg-navyBlue shadow-lg w-full mx-auto lg:hidden transition ease-in-out delay-150 duration-700">
            <div class="flex flex-col divide-y  divide-gray-400 space-y-1 px-2 pb-3 pt-2 transition ease-in-out delay-150 duration-700">
                <HeaderItemListNav />
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    components: {
        Disclosure, DisclosureButton, DisclosurePanel, Menu,
        Bars3Icon, BellIcon, XMarkIcon,

    },
};
</script>
