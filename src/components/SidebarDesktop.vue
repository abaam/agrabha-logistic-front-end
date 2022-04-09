<template>
   <div class="h-screen sticky top-0">
       <aside class="hidden md:flex md:flex-col relative h-full w-64 p-3 bg-blue-light">
            <div class="flex justify-between items-center px-3">
                <img class="w-32" src="../../public/img/agrabah-logistics-logo.png" alt="Agrabah Logistics">
            </div>
            <hr class="mt-2 border-blue opacity-25">
            <div class="mt-8">
                <ul>
                    <li v-show="role == 1" >
                        <div class="flex justify-center">
                          <div class="mb-3 xl:w-96">
                            <div class="input-group relative flex flex-wrap items-stretch w-full">
                              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Bookings" aria-label="Search" aria-describedby="button-addon3">
                            </div>
                          </div>
                        </div>
                    </li>
                    <!-- Driver -->
                    <li v-show="role == 1" v-for="menu in sidebarMenusDriver" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                        <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                            <component :is="menu.icon" class="h-5 w-5"/>
                            <span>{{ menu.label }}</span>
                        </router-link>
                    </li>

                    <!-- Customer -->
                    <li v-show="role == 2" v-for="menu in sidebarMenusCustomer" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                        <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                            <component :is="menu.icon" class="h-5 w-5"/>
                            <span>{{ menu.label }}</span>
                        </router-link>
                    </li>
                    
                    <div class="absolute inset-x-4 bottom-5">
                        <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                            <router-link to="/profile" class="flex items-center space-x-3 w-full px-3 py-2">
                            <UserCircleIcon class="h-5 w-5"/>
                            <span>Profile</span>
                            </router-link>
                        </li>
                        <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                            <router-link to="/profile" class="flex items-center space-x-3 w-full px-3 py-2">
                            <ShieldCheckIcon class="h-5 w-5"/>
                            <span>Security</span>
                            </router-link>
                        </li>
                    </div>
                </ul>
            </div>
        </aside>
   </div>
</template>

<script>
    import { ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, SearchIcon, CashIcon  } from '@heroicons/vue/outline'

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
            href: '/wallet',
            label: 'Wallet',
            icon: 'CashIcon'
        },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        }
    ]

    export default {
        setup() {
            return {
                sidebarMenusDriver,
                sidebarMenusCustomer
            }
        },
        components: {
            ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, SearchIcon, CashIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
    }
</script>