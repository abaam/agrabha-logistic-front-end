<template>
    <TransitionRoot :show="isOpen">
        <Dialog as="div" @close="isOpen = false" class="fixed inset-0 z-40 md:hidden">
            <TransitionChild as="template"
                enter="transition transform duration-200 ease-in-out"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transition transform duration-200 ease-in-out"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
                >
                <aside class="flex flex-col md:hidden relative z-10 h-full w-64 p-3 bg-blue-light">
                    <div class="flex justify-between items-center pl-2">
                        <img class="w-40 -ml-1" src="../../public/img/agrabah-logo-white.png" alt="Agrabah Logo">
                        <button @click="isOpen = false" type="button" class="bg-blue rounded p-1 focus:outline-none">
                            <ArrowLeftIcon class="h-5 w-5 text-white cursor-pointer" />
                        </button>
                    </div>
                    <hr class="mt-2.5 border-blue opacity-25">

                    <div class="mt-8 overflow-y-auto flex-1">
                        <ul>
                            <li v-for="menu in sidebarMenus" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                <router-link :to="menu.href" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </TransitionChild>
            <TransitionChild as="template"
                enter="transition-opacity duration-200 ease-linear"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity duration-200 ease-linear"
                leave-from="opacity-100"
                leave-to="opacity-0"
                >
                <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-25"></DialogOverlay>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
</template>

<script>
    import { ref } from 'vue'
    import { ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon } from '@heroicons/vue/outline'
    import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'

    const sidebarMenus = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: 'ViewGridIcon'
        },
        {
            href: '/transactions',
            label: 'Transaction',
            icon: 'RefreshIcon'
        },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        }
    ]

    export default {
        setup() {
            const isOpen = ref(false)

            return {
                isOpen,
                sidebarMenus
            }
        },
        components: {
            ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon, TransitionRoot, TransitionChild, Dialog, DialogOverlay
        },
        methods: {
            show() {
                this.isOpen = true;
            }
        }
    }
</script>