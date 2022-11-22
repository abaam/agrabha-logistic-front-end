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

                    <!-- Admin -->
                    <li v-show="role == 3" v-for="menu in sidebarMenusAdmin" :key="menu.label" class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                        <router-link :to="menu.href" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2">
                            <component :is="menu.icon" class="h-5 w-5"/>
                            <span>{{ menu.label }}</span>
                        </router-link>
                    </li>

                    <li v-show="role == 3">
                        <a class="flex items-center space-x-3 w-full px-3 py-2 h-12 overflow-hidden cursor-pointer text-white hover:bg-blue hover:text-grey-light rounded-md" 
                        data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="true" aria-controls="collapseUsers">
                            <UsersIcon class="h-5 w-5"/>
                            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Users</span>
                            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <ul class="relative accordion-collapse collapse" id="collapseUsers" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                            <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                <router-link to="/customers" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2 pl-11">
                                <span>Customers</span>
                                </router-link>
                            </li>
                            <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                                <router-link to="/drivers" active-class="bg-blue rounded" class="flex items-center space-x-3 w-full px-3 py-2 pl-11">
                                <span>Drivers</span>
                                </router-link>
                            </li>
                        </ul>
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
                    
                    <div class="absolute inset-x-4 bottom-5">
                        <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                            <router-link to="/profile" class="flex items-center space-x-3 w-full px-3 py-2">
                            <UserCircleIcon class="h-5 w-5"/>
                            <span>Profile</span>
                            </router-link>
                        </li>
                        <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                            <router-link to="/security" class="flex items-center space-x-3 w-full px-3 py-2">
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
    import { ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, SearchIcon, CashIcon, UsersIcon, ChartBarIcon  } from '@heroicons/vue/outline'
    import 'tw-elements';
    import $ from "jquery";
    
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
            href: '/driver/transactions',
            label: 'Transaction',
            icon: 'RefreshIcon'
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
        // {
        //     href: '/wallet',
        //     label: 'Wallet',
        //     icon: 'CashIcon'
        // },
        {
            href: '/customer/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        }
    ]

    const sidebarMenusAdmin = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: 'ViewGridIcon'
        }
    ]

    export default {
        setup() {
            return {
                sidebarMenusDriver,
                sidebarMenusCustomer,
                sidebarMenusAdmin
            }
        },
        components: {
            ViewGridIcon, RefreshIcon, TagIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, SearchIcon, CashIcon, UsersIcon, ChartBarIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
        mounted(){
            if($('.accordion-collapse a').hasClass('router-link-exact-active')){
                $('.accordion-collapse').addClass('show')
            }
        },
    }
</script>