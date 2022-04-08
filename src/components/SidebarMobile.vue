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
                <aside class="flex flex-col md:hidden relative z-10 h-full w-5/6 sm:w-1/2 p-3 bg-blue-light">
                    <div class="flex justify-between items-center">
                        <!-- <img class="w-40 -ml-1" src="../../public/img/agrabah-logo-white.png" alt="Agrabah Logo"> -->
                        <div class="flex items-center justify-start">
                            <img class="rounded-full bg-grey w-10 h-10 flex-none mr-3" src="https://picsum.photos/200" alt="">
                            <div class="flex flex-col text-left flex-1">
                                <span class="text-white font-semibold">Charles Marnie</span>
                                <router-link to="/profile" class="text-sm text-grey-light cursor-pointer">View Profile</router-link>
                            </div>
                        </div>
                        <button @click="isOpen = false" type="button" class="bg-blue rounded p-1 focus:outline-none">
                            <ArrowLeftIcon class="h-5 w-5 text-white cursor-pointer" />
                        </button>
                    </div>
                    <hr class="mt-2.5 border-blue opacity-25">

                    <div class="mt-8 overflow-y-auto flex-1">
                        <ul>
                            <li v-show="role == 1" v-for="menu in sidebarMenusDriver" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded">
                                <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>

                            <li v-show="role == 2" v-for="menu in sidebarMenusCustomer" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded">
                                <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    
                    <div class="absolute bottom-0 right-0 left-0 z-10 p-3 flex items-center w-full">
                        <ul class="w-full">
                            <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                <a href="/profile" class="flex items-center space-x-3 w-full px-3 py-2">
                                <UserCircleIcon class="h-5 w-5"/>
                                <span>Profile</span>
                                </a>
                            </li>
                            <li class="text-white hover:bg-blue hover:text-grey-light rounded-md mb-8">
                                <a href="/security" class="flex items-center space-x-3 w-full px-3 py-2">
                                <ShieldCheckIcon class="h-5 w-5"/>
                                <span>Security</span>
                                </a>
                            </li>
                            <li class="flex justify-center font-medium rounded text-white bg-green-light hover:bg-green focus:outline-none focus:bg-green-light">
                                <router-link to="" active-class="bg-blue rounded" class="flex items-center justify-center w-full py-2 px-4"  @click="logout">
                                    <span class="uppercase font-semibold">Sign Out</span>
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
    import axios from 'axios';
    import { ref } from 'vue'
    import { ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, BookOpenIcon, SearchIcon, CashIcon } from '@heroicons/vue/outline'
    import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'

    const sidebarMenusDriver = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: 'ViewGridIcon'
        },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/quick-search',
            label: 'Quick Search',
            icon: 'SearchIcon'
        },
        {
            href: '/wallet',
            label: 'Wallet',
            icon: 'CashIcon'
        },
        {
            href: '/deliveries',
            label: 'Deliveries',
            icon: 'TruckIcon'
        }
    ]

    const sidebarMenusCustomer = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: 'ViewGridIcon'
        },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/bookings/create',
            label: 'Create Booking',
            icon: 'BookOpenIcon'
        }
    ]

    export default {
        setup() {
            const isOpen = ref(false)

            return {
                isOpen,
                sidebarMenusDriver,
                sidebarMenusCustomer
            }
        },
        components: {
            ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, TransitionRoot, TransitionChild, Dialog, DialogOverlay, ShieldCheckIcon, UserCircleIcon, BookOpenIcon, SearchIcon, CashIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
        methods: {
            show() {
                this.isOpen = true;
            },

            logout() {
                axios.get(process.env.VUE_APP_LARAVEL + "sanctum/csrf-cookie").then(response => {
                    axios.post(process.env.VUE_APP_API + "logout")
                    .then(response => {
                        if (response.data.success) {
                            localStorage.clear();
                            window.location.href = "/login"
                        } else {
                            console.log(response.data)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
                })
            }
        }
    }
</script>