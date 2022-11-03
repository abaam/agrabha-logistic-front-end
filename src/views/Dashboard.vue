<template>
    <div class="flex min-h-screen bg-grey bg-opacity-20">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" >Dashboard</Navbar>
            <div class="container max-w-4xl my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap items-center justify-center -mx-1 lg:-mx-4">

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition ease-in-out hover:-translate-y-1 hover:scale-110" v-show="role == 1" v-for="menu in MenusDriver" :key="menu.label">

                        <!-- Article -->
                        <div class="overflow-hidden rounded-lg shadow-lg bg-white text-blue hover:bg-blue hover:text-white">
                            <router-link :to="menu.href">
                            <!-- <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"> -->
                                <component :is="menu.icon" class="block h-32 w-full"/>

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
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition ease-in-out hover:-translate-y-1 hover:scale-110" v-show="role == 2" v-for="menu in MenusCustomer" :key="menu.label">

                        <!-- Article -->
                        <div class="overflow-hidden rounded-lg shadow-lg bg-white text-blue hover:bg-blue hover:text-white">
                            <router-link :to="menu.href">
                            <!-- <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"> -->
                                <component :is="menu.icon" class="block h-32 w-full"/>

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
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition ease-in-out hover:-translate-y-1 hover:scale-110" v-show="role == 3" v-for="menu in MenusAdmin" :key="menu.label">

                        <!-- Article -->
                        <div class="overflow-hidden rounded-lg shadow-lg bg-white text-blue hover:bg-blue hover:text-white">
                            <router-link :to="menu.href">
                            <!-- <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"> -->
                                <component :is="menu.icon" class="block h-32 w-full"/>

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
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../components/UserMenu"
    import SidebarDesktop from "../components/SidebarDesktop"
    import SidebarMobile from "../components/SidebarMobile"
    import Navbar from "../components/Navbar"

    import { ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, SearchIcon, CashIcon, UserCircleIcon, ShieldCheckIcon, UsersIcon, ChartBarIcon  } from '@heroicons/vue/outline'

    const MenusDriver = [
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
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
        },
        {
            href: '/profile',
            label: 'Profile',
            icon: 'UserCircleIcon'
        },
        {
            href: '/profile',
            label: 'Security',
            icon: 'ShieldCheckIcon'
        },
    ]

    const MenusCustomer = [
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        // {
        //     href: '/wallet',
        //     label: 'Wallet',
        //     icon: 'CashIcon'
        // },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        {
            href: '/profile',
            label: 'Profile',
            icon: 'UserCircleIcon'
        },
        {
            href: '/profile',
            label: 'Security',
            icon: 'ShieldCheckIcon'
        },
    ]

    const MenusAdmin = [
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/users',
            label: 'Users',
            icon: 'UsersIcon'
        },
        {
            href: '/sales',
            label: 'Sales',
            icon: 'ChartBarIcon'
        },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        {
            href: '/profile',
            label: 'Profile',
            icon: 'UserCircleIcon'
        },
        {
            href: '/profile',
            label: 'Security',
            icon: 'ShieldCheckIcon'
        },
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
                MenusCustomer,
                MenusAdmin,
                SearchIcon,
                CashIcon,
                UserCircleIcon,
                ShieldCheckIcon,
                UsersIcon,
                ChartBarIcon
            }
        },
        components: {
            UserMenu, SidebarDesktop, SidebarMobile, Navbar, ViewGridIcon, TagIcon, TruckIcon, RefreshIcon, SearchIcon, CashIcon, UserCircleIcon, ShieldCheckIcon, UsersIcon, ChartBarIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
    }
</script>