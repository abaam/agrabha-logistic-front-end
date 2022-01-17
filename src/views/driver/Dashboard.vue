<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <nav class="flex justify-start md:justify-end items-center space-x-2 border-b p-3">
                <button @click="$refs.sidebar.show()" type="button" class="md:hidden rounded p-1 mr-3 focus:outline-none focus:ring-2 focus:ring-blue">
                    <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
                </button>
                
                <h1 class="md:sr-only flex-1 font-bold text-lg">{{ name }}</h1>

                <UserMenu />
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
                name: 'Dashboard'
            }
        },
        components: {
            MenuAlt1Icon, TagIcon, RefreshIcon, ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, UserMenu, SidebarDesktop, SidebarMobile
        }
    }
</script>