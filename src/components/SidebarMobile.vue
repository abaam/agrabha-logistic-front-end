<template>
   <aside class="hidden md:block w-64 p-3 bg-blue-light">
        <div class="flex justify-between items-center px-3">
            <img class="w-40 -ml-1" src="../../public/img/agrabah-logo-white.png" alt="Agrabah Logo">
        </div>
        <hr class="mt-2.5 border-blue opacity-25">

        <div class="mt-8">
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
</template>

<script>
    import { ViewGridIcon, RefreshIcon, TagIcon } from '@heroicons/vue/outline'

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
            return {
                sidebarMenus
            }
        },
        components: {
            ViewGridIcon, RefreshIcon, TagIcon
        }
    }
</script>