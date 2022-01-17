<template>
    <div class="flex min-h-screen">
        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <!-- Remove the header tag and use the Navbar component -->
            <!-- <Navbar /> -->
            <header>
                <nav class="flex justify-start md:justify-end items-center space-x-2 md:border-b p-3">
                    <button @click="$refs.sidebar.show()" type="button" class="md:hidden rounded p-1 mr-3 focus:outline-none focus:ring-2 focus:ring-blue">
                        <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
                    </button>
                    
                    <h6 class="md:sr-only flex-1 font-bold text-lg">{{ name }}</h6>

                    <UserMenu />
                </nav>
            </header>

            <section class="hidden md:block px-3 py-6 md:p-6">
                <div class="hidden md:flex flex-col">
                    <H2>Account Settings</H2>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../components/UserMenu"
    import SidebarMobile from "../components/SidebarMobile"
    import SidebarDesktop from "../components/SidebarDesktop"
    import { MenuAlt1Icon } from '@heroicons/vue/outline'
    import H2 from '../components/typography/H2.vue'

    export default {
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                name: 'Account Settings'
            }
        },
        components: { MenuAlt1Icon, SidebarMobile, SidebarDesktop, UserMenu, H2 }
    }
</script>