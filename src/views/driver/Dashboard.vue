<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" >Dashboard</Navbar>

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
    import Navbar from "../../components/Navbar"

    export default {
        name: 'Dashboard',
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen
            }
        },
        components: {
            UserMenu, SidebarDesktop, SidebarMobile, Navbar
        }
    }
</script>