<template>
    <div class="flex min-h-screen">
        <SidebarDesktop />

        <SidebarMobile />

        <main class="flex-1">
            <nav class="flex justify-between md:justify-end items-center space-x-2 border-b p-3">
                <button @click="isOpen = !isOpen" type="button" class="md:hidden rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue">
                    <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
                </button>
                <!-- Show on mobile devices -->
                <img class="w-32 -ml-1 md:sr-only" src="../../../public/img/agrabah-logo.png" alt="Agrabah Logo">

                <UserMenu />
            </nav>

            <section class="px-3 py-6">
                
                <div class="flex items-center justify-between mb-3">
                    <h1 class="text-2xl font-bold text-blue">Transactions</h1>
                    <div class="flex items-center space-x-1">
                        <FilterIcon class="w-4 h-4 text-blue" />
                        <span class="uppercase text-xs font-semibold text-blue">Filter</span>
                    </div>
                </div>

                <div class="hidden md:block">
                    <div class="flex items-center px-3 py-2">
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Delivery Date</span>
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Delivery ID</span>
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Origin</span>
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Destination</span>
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Cost</span>
                        <span class="uppercase text-sm block font-semibold tracking-wide w-1/5 mr-4">Status</span>
                        <span class="uppercase text-sm block font-semibold tracking-widely w-3"></span>
                    </div>
                
                    <div class="md:flex items-center rounded border border-grey-light px-3 py-2 mb-2">
                        <p class="w-1/5 mr-4">Jan 04, 2021</p>
                        <p class="w-1/5 mr-4">AL-00001</p>
                        <p class="w-1/5 truncate mr-4">Nabua, Camarines Sur</p>
                        <p class="w-1/5 truncate mr-4">Sorsogon City</p>
                        <p class="w-1/5 mr-4">P 5,000.00</p>

                        <div class="flex items-centertext-blue space-x-1 md:w-1/5 mr-4">
                            <div class="flex items-center justify-center rounded-full h-5 w-5 bg-green-light">
                                <CheckIcon class="h-3 w-3 text-green" />
                            </div>
                            <p class="text-green text-sm font-semibold">In Transit</p>
                        </div>

                        <p class="md:w-3">></p>
                    </div>
                </div>


                <div v-for="delivery in deliveries" :key="delivery.id" class="flex flex-col space-y-2 rounded border border-grey-light px-3 py-2 mb-2">
                    <div class="flex items-center justify-between">
                        <p class="font-semibold">{{ delivery.id }}</p>
                        <p class="font-bold">{{ delivery.cost }}</p>
                    </div>

                    <div class="block">
                        <p>{{ delivery.description }}</p>
                        <p class="text-sm text-grey">Weight: <span>{{ delivery.weight }}</span></p>
                    </div>

                    <div v-if="delivery.status == 'In Transit'" class="flex items-center text-blue space-x-1">
                        <div class="flex items-center justify-center rounded-full h-5 w-5 bg-blue-light">
                            <TruckIcon class="h-3 w-3 text-blue" />
                        </div>
                        <p class="text-blue text-sm font-semibold">{{ delivery.status }}</p>
                    </div>

                    <div v-else class="flex items-center text-green space-x-1">
                        <div class="flex items-center justify-center rounded-full h-5 w-5 bg-green-light">
                            <CheckIcon class="h-3 w-3 text-green" />
                        </div>
                        <p class="text-green text-sm font-semibold">{{ delivery.status }}</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../../components/UserMenu"
    import SidebarDesktop from "../../components/SidebarDesktop"
    import SidebarMobile from "../../components/SidebarMobile"
    import { MenuAlt1Icon, TagIcon, FilterIcon, CheckIcon, TruckIcon, RefreshIcon } from '@heroicons/vue/outline'

    const deliveries = [
        {
            id: 'AL-00003',
            origin: 'Bitano, Legazpi City',
            destination: 'Nabua, Camarines Sur',
            description: 'Two (2) sacks of carrots',
            weight: '50 kgs',
            cost: 'P 3,500.00',
            status: 'In Transit'
        },
        {
            id: 'AL-00002',
            origin: 'Bitan-o, Sorsogon City',
            destination: 'San Rapael, Sto. Domingo',
            description: 'Ten (10) sacks of rice',
            weight: '250 kgs',
            cost: 'P 5,500.00',
            status: 'Delivered'
        },
        {
            id: 'AL-00001',
            origin: 'Placer, Masbate City',
            destination: 'Virac, Catanduanes',
            description: 'Mixed Vegetables',
            weight: '25 kgs',
            cost: 'P 2,500.00',
            status: 'Delivered'
        }
    ]

    export default {
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                deliveries
            }
        },
        data() {
            return {
                sidebarOpened: false
            }
        },
        components: {
            MenuAlt1Icon, CheckIcon, TruckIcon, TagIcon, FilterIcon, RefreshIcon, UserMenu, SidebarDesktop, SidebarMobile
        }
    }
</script>