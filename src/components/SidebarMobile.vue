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
                            <li v-show="role == 1" >
                                <div class="justify-center">
                                  <div class="mb-3 xl:w-96">
                                    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Bookings" aria-label="Search" aria-describedby="button-addon3">
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <!-- Driver -->
                            <li v-show="role == 1" v-for="menu in sidebarMenusDriver" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded">
                                <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>

                            <!-- Customer -->
                            <li v-show="role == 2" v-for="menu in sidebarMenusCustomer" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded">
                                <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>
                            
                            <!-- Customer -->
                            <li v-show="role == 3" v-for="menu in sidebarMenusAdmin" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded">
                                <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <component :is="menu.icon" class="h-5 w-5"/>
                                    <span>{{ menu.label }}</span>
                                </router-link>
                            </li>

                            <li v-show="role == 3">
                                <a class="flex items-center space-x-3 w-full px-3 py-2 h-12 overflow-hidden cursor-pointer text-white hover:bg-blue hover:text-grey-light rounded-md" 
                                data-bs-toggle="collapse" data-bs-target="#collapseBooking" aria-expanded="true" aria-controls="collapseBooking">
                                    <TagIcon class="h-5 w-5"/>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Booking</span>
                                    <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                                <ul class="relative accordion-collapse collapse" id="collapseBooking" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                    <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                        <router-link to="/bookings" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2 pl-11">
                                        <span>List</span>
                                        </router-link>
                                    </li>
                                    <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                        <router-link to="/payment-approval" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2 pl-11">
                                        <span>Payment Approval</span>
                                        </router-link>
                                    </li>
                                </ul>
                                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                    <router-link to="/admin/transactions" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <RefreshIcon class="h-5 w-5"/>
                                    <span>Transactions</span>
                                    </router-link>
                                </li>
                                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                    <router-link to="/sales" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                                    <ChartBarIcon class="h-5 w-5"/>
                                    <span>Sales</span>
                                    </router-link>
                                </li>
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
    import { ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, BookOpenIcon, SearchIcon, CashIcon, UsersIcon, ChartBarIcon } from '@heroicons/vue/outline'
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
        // {
        //     href: '/quick-search',
        //     label: 'Quick Search',
        //     icon: 'SearchIcon'
        // },
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
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        // {
        //     href: '/bookings/create',
        //     label: 'Create Booking',
        //     icon: 'BookOpenIcon'
        // }
    ]

    const sidebarMenusAdmin = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: 'ViewGridIcon'
        },
        {
            href: '/users',
            label: 'Users',
            icon: 'UsersIcon'
        }
    ]

    export default {
        setup() {
            const isOpen = ref(false)

            return {
                isOpen,
                sidebarMenusDriver,
                sidebarMenusCustomer,
                sidebarMenusAdmin
            }
        },
        components: {
            ArrowLeftIcon, ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, TransitionRoot, TransitionChild, Dialog, DialogOverlay, ShieldCheckIcon, UserCircleIcon, BookOpenIcon, SearchIcon, CashIcon, UsersIcon, ChartBarIcon
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