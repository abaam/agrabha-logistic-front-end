<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />
            
        <main class="flex-1 bg-gray-50">
            <Navbar @show-sidebar="$refs.sidebar.show()" >Transactions</Navbar>
            <slot></slot>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import SidebarMobile from "../components/SidebarMobile.vue"
    import SidebarDesktop from "../components/SidebarDesktop.vue"
    import Navbar from "../components/Navbar.vue"
    
    export default {
        name: 'DashboardLayout',
        setup() {
            const isOpen = ref(true)

            return {
                isOpen
            }
        },
        components: {
            SidebarMobile, SidebarDesktop, Navbar
        }
    }
</script>