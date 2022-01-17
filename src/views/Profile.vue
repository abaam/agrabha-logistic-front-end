<template>
    <div class="flex min-h-screen">
        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <!-- Remove the header tag and use the Navbar component -->
            <!-- <Navbar /> -->
            <Navbar @show-sidebar="$refs.sidebar.show()"/>

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
    import Navbar from "../components/Navbar"
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
        components: { MenuAlt1Icon, SidebarMobile, SidebarDesktop, Navbar, H2 }
    }
</script>