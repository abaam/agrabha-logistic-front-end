<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <nav class="hidden md:flex justify-between md:justify-end items-center space-x-2 border-b p-3">
                <UserMenu />
            </nav>

            <nav v-if="$route.path==='/dashboard'" class="flex justify-between md:justify-end items-center space-x-2 border-b p-3">
                <button @click="$refs.sidebar.show()" type="button" class="md:hidden rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue">
                    <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
                </button>
                
                <img class="w-32 -ml-1 md:sr-only" src="../../../public/img/agrabah-logo.png" alt="Agrabah Logo">
                
                <UserMenu />
            </nav>

            <nav v-else class="bg-white grid grid-cols-1 gap-y-7 border-b shadow px-6 pt-3 md:hidden">
                <div class="flex items-center justify-start space-x-6">
                    <router-link to="/dashboard">
                        <ArrowLeftIcon class="h-5 w-5 text-blue" />
                    </router-link>
                    <h6 class="font-bold tracking-wide">Transactions</h6>
                </div>
                <div class="flex items-center justify-between">
                    <h6 class="text-sm font-semibold pb-2 border-b-4 border-blue text-blue rounded-b">To Deliver</h6>
                    <h6 class="text-sm font-semibold pb-2 border-b-4 border-white">In Transit</h6>
                    <h6 class="text-sm font-semibold pb-2 border-b-4 border-white">Delivered</h6>
                </div>
            </nav>

            <section class="px-3 py-6 md:p-6">

            </section>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../../components/UserMenu"
    import SidebarDesktop from "../../components/SidebarDesktop"
    import SidebarMobile from "../../components/SidebarMobile"
    import { MenuAlt1Icon, TagIcon, RefreshIcon, ArrowLeftIcon } from '@heroicons/vue/outline'
    import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'

    export default {
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
            }
        },
        components: {
            MenuAlt1Icon, TagIcon, RefreshIcon, ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, UserMenu, SidebarDesktop, SidebarMobile
        }
    }
</script>