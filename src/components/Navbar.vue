<template>
    <header class="sticky top-0 z-40 bg-white">
        <nav class="flex justify-start md:justify-end items-center space-x-2 md:border-b p-3">
            <button @click="$emit('showSidebar')" type="button" class="md:hidden rounded p-1 mr-3 focus:outline-none focus:ring-2 focus:ring-blue">
                <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
            </button>
            
            <h6 class="md:sr-only flex-1 font-bold text-lg">
                <slot></slot>
            </h6>

            <UserMenu />
        </nav>
    </header>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../components/UserMenu"
    import { MenuAlt1Icon } from '@heroicons/vue/outline'

    export default {
        name: 'Navbar',
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
            }
        },
        components: { 
            MenuAlt1Icon, UserMenu 
        }
    }
</script>