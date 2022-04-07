<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" >Dashboard</Navbar>

            
            <div class="container max-w-3xl my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap items-center justify-center -mx-1 lg:-mx-4">

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-show="role == 1" v-for="menu in MenusDriver" :key="menu.label">

                        <!-- Article -->
                        <div class="overflow-hidden rounded-lg shadow-lg bg-blue-light text-white hover:bg-blue hover:text-grey-light">
                            <router-link :to="menu.href">
                            <!-- <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"> -->
                                <component :is="menu.icon" class="block h-36 w-full"/>

                                <header class="flex items-center justify-center p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <span>{{menu.label}}</span>
                                    </h1>
                                </header>
                            </router-link>

                        </div>
                        <!-- END Article -->

                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-show="role == 2" v-for="menu in MenusCustomer" :key="menu.label">

                        <!-- Article -->
                        <div class="overflow-hidden rounded-lg shadow-lg bg-blue-light text-white hover:bg-blue hover:text-grey-light">
                            <router-link :to="menu.href">
                            <!-- <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"> -->
                                <component :is="menu.icon" class="block h-36 w-full"/>

                                <header class="flex items-center justify-center p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <span>{{menu.label}}</span>
                                    </h1>
                                </header>
                            </router-link>

                        </div>
                        <!-- END Article -->

                    </div>
                    <!-- END Column -->

                </div>
            </div>
            <!-- Driver -->
            <section v-show="role == 1" class="px-3 py-6 md:p-6">

            </section>

            <!-- Customer -->
            <section v-show="role == 2" class="px-3 py-6 md:p-6">

            </section>

        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../components/UserMenu"
    import SidebarDesktop from "../components/SidebarDesktop"
    import SidebarMobile from "../components/SidebarMobile"
    import Navbar from "../components/Navbar"

    import { ViewGridIcon, RefreshIcon, TagIcon, TruckIcon } from '@heroicons/vue/outline'

    const MenusDriver = [
        // {
        //     href: '/dashboard',
        //     label: 'Dashboard',
        //     icon: 'ViewGridIcon'
        // },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/deliveries',
            label: 'Deliveries',
            icon: 'TruckIcon'
        }
    ]

    const MenusCustomer = [
        // {
        //     href: '/dashboard',
        //     label: 'Dashboard',
        //     icon: 'ViewGridIcon'
        // },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        }
    ]

    export default {
        name: 'Dashboard',
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                TruckIcon,
                ViewGridIcon,
                TagIcon,
                TruckIcon,
                RefreshIcon,
                MenusDriver,
                MenusCustomer
            }
        },
        components: {
            UserMenu, SidebarDesktop, SidebarMobile, Navbar, ViewGridIcon, TagIcon, TruckIcon, RefreshIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
    }
</script>