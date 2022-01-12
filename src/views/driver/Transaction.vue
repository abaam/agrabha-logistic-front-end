<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <!-- Show if current route is /dashboard -->
            <nav v-if="$route.path==='/dashboard'" class="flex justify-between md:justify-end items-center space-x-2 border-b p-3">
                <button @click="$refs.sidebar.show()" type="button" class="md:hidden rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue">
                    <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />
                </button>
                
                <img class="w-32 -ml-1 md:sr-only" src="../../../public/img/agrabah-logo.png" alt="Agrabah Logo">
                
                <UserMenu />
            </nav>
            <!-- /Show if current route is /dashboard -->

            <!-- Else -->
            <nav v-else class="bg-white grid grid-cols-1 gap-y-7 border-b shadow px-6 pt-3">
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
            <!-- /Else -->

            <section class="px-3 py-6 md:p-6">
                

                <!-- Table -->
                <div class="hidden md:flex flex-col">
                    <div class="flex items-center justify-between md:flex-col md:space-y-2 lg:flex-row mt-4 mb-3">
                        <!-- Filter -->
                        <div class="flex items-center space-x-2">
                            <p>Show</p>
                            <select class="appearance-none rounded relative block w-20 px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
                                <option>10</option>
                                <option>25</option>
                                <option>100</option>
                            </select>
                            <p>entries</p>
                        </div>

                        <!-- Search -->
                        <div class="flex items-center space-x-1">
                            <p>Search:</p>
                            <input type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
                        </div>
                    </div>

                    <section class="container mx-auto grid grid-cols-1 shadow rounded">
                        <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline-block min-w-full">
                                <div class="shadow overflow-hidden border-b border-grey-light sm:rounded">
                                    <table class="min-w-full divide-y divide-grey-light">
                                        <thead class="bg-grey-light bg-opacity-30">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Delivery Date
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Delivery ID
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Origin
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Destination
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Cost
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                                                    Status
                                                </th>
                                                <th scope="col" class="relative px-6 py-3">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-grey-light">
                                            <tr v-for="delivery in deliveries" :key="delivery.id">
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.date }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.id }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.origin }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.destination }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.cost }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div v-if="delivery.status == 'In Transit'">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-blue-light">
                                                            <p class="text-blue text-sm font-semibold">{{ delivery.status }}</p>
                                                        </div>
                                                    </div>
                                                    <div v-else-if="delivery.status == 'To Deliver'">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-orange-light">
                                                            <p class="text-orange text-sm font-semibold">{{ delivery.status }}</p>
                                                        </div>
                                                    </div>
                                                    <div v-if="delivery.status == 'Delivered'">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-green-light">
                                                            <p class="text-green text-sm font-semibold">{{ delivery.status }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                    <a href="#" class="text-blue-light hover:text-blue">View details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="flex items-center justify-between md:flex-col md:space-y-2 lg:flex-row mt-3">
                        <p>Showing <span>1</span> to <span>10</span> of <span>57</span> entries</p>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm">
                                    <span class="sr-only">Previous</span>
                                    <ChevronLeftIcon class="h-5 w-5"/>
                                </a>
                                <a href="#" aria-current="page" class="z-10 bg-blue-light border-blue-light text-white relative inline-flex items-center px-4 py-2 border text-sm">
                                    1
                                </a>
                                <a href="#" class="bg-white border-grey-light hover:bg-grey-light hover:bg-opacity-50 relative inline-flex items-center px-4 py-2 border text-sm">
                                    2
                                </a>
                                <a href="#" class="bg-white border-grey-light hover:bg-grey-light hover:bg-opacity-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm">
                                    3
                                </a>
                                <span class="relative inline-flex items-center px-4 py-2 border border-grey-light bg-white text-sm text-gray-700">
                                    ...
                                </span>
                                <a href="#" class="bg-white border-grey-light hover:bg-grey-light hover:bg-opacity-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm">
                                    8
                                </a>
                                <a href="#" class="bg-white border-grey-light hover:bg-grey-light hover:bg-opacity-50 relative inline-flex items-center px-4 py-2 border text-sm">
                                    9
                                </a>
                                <a href="#" class="bg-white border-grey-light hover:bg-grey-light hover:bg-opacity-50 relative inline-flex items-center px-4 py-2 border text-sm">
                                    10
                                </a>
                                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm">
                                    <span class="sr-only">Next</span>
                                    <ChevronRightIcon class="h-5 w-5" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- /Table -->

                <div v-for="delivery in deliveries" :key="delivery.id" class="bg-white shadow md:hidden flex flex-col space-y-2 rounded border border-grey-light px-3 py-2 mb-2">
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
                    <div v-else-if="delivery.status == 'To Deliver'" class="flex items-center text-orange space-x-1">
                        <div class="flex items-center justify-center rounded-full h-5 w-5 bg-orange-light">
                            <CubeIcon class="h-3 w-3 text-orange" />
                        </div>
                        <p class="text-orange text-sm font-semibold">{{ delivery.status }}</p>
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
    import { MenuAlt1Icon, TagIcon, FilterIcon, CheckIcon, TruckIcon, RefreshIcon, CubeIcon, ArrowLeftIcon } from '@heroicons/vue/outline'
    import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'

    const deliveries = [
        {
            date: 'Jan 06, 2022',
            id: 'AL-00003',
            origin: 'Bitano, Legazpi City',
            destination: 'Nabua, Camarines Sur',
            description: 'Two (2) sacks of carrots',
            weight: '50 kgs',
            cost: 'P 3,500.00',
            status: 'To Deliver'
        },
        {
            date: 'Jan 04, 2022',
            id: 'AL-00002',
            origin: 'Bitan-o, Sorsogon City',
            destination: 'San Rapael, Sto. Domingo',
            description: 'Ten (10) sacks of rice',
            weight: '250 kgs',
            cost: 'P 5,500.00',
            status: 'In Transit'
        },
        {
            date: 'Jan 02, 2022',
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
        components: {
            MenuAlt1Icon, CheckIcon, TruckIcon, TagIcon, FilterIcon, RefreshIcon, CubeIcon, ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, UserMenu, SidebarDesktop, SidebarMobile
        }
    }
</script>