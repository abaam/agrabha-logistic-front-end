<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()"/>

            <section class="hidden md:block px-3 py-6 md:p-6">
                <!-- Table -->
                <div class="hidden md:flex flex-col">
                    <h1 class="block font-bold text-2xl lg:text-3xl mb-3 text-blue">Transactions</h1>
                    <div class="flex items-center justify-between md:flex-col md:space-y-2 lg:flex-row mt-4 mb-3">
                        <!-- Filter -->
                        <div class="flex items-center space-x-2">
                            <p>Show</p>
                            <select v-model="show_entries" @change="showEntries($event)" class="appearance-none rounded relative block w-20 px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="100">100</option>
                            </select>
                            <p>entries</p>
                        </div>

                        <!-- Search -->
                        <div class="flex items-center space-x-1">
                            <p>Search:</p>
                            <input type="text" @keyup="searchDelivery" v-model="search" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
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
                                        <tbody v-if="deliveries.data != ''" class="bg-white divide-y divide-grey-light">
                                            <tr v-for="delivery in deliveries.data" :key="delivery.id">
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.delivery_date }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm">{{ delivery.delivery_id }}</div>
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
                                                    <div v-if="delivery.status == 2">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-blue-light">
                                                            <p class="text-blue text-sm font-semibold">In Transit</p>
                                                        </div>
                                                    </div>
                                                    <div v-else-if="delivery.status == 3">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-orange-light">
                                                            <p class="text-orange text-sm font-semibold">To Deliver</p>
                                                        </div>
                                                    </div>
                                                    <div v-if="delivery.status == 1">
                                                        <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-green-light">
                                                            <p class="text-green text-sm font-semibold">Delivered</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                    <a href="#" class="text-blue-light hover:text-blue">View details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="7" class="p-6">
                                                    <img class="mx-auto w-24" src="../../../public/svg/no_data.svg" alt="No records found">
                                                    <p class="mt-4 block text-center">No records found.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="flex items-center justify-between md:flex-col md:space-y-2 lg:flex-row mt-3" v-if="deliveries.data !=''" >
                        <p>Showing <span>1</span> to <span>{{ show_entries }}</span> of <span v-if="deliveries !=''">{{ deliveries.data.length }}</span> entries</p>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm">
                                    <span class="sr-only">Previous</span>
                                    <ChevronLeftIcon class="h-5 w-5"/>
                                </a>
                                <!-- <pagination :data="deliveries.data" @pagination-change-page="getDeliveries"></pagination> -->
                                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm">
                                    <span class="sr-only">Next</span>
                                    <ChevronRightIcon class="h-5 w-5" />    
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- /Table -->
            </section>

            <section class="md:hidden grid">
                <TabGroup>
                    <TabList class="flex justify-evenly">
                        <Tab v-slot="{ selected }" as="template">
                            <button
                            :class="[selected ? 'border-blue text-blue rounded-b' : 'bg-white']" class="w-full text-sm font-semibold py-2 border-b-4 border-white focus:bg-transparent text-center cursor-pointer">
                                To Deliver
                            </button>
                        </Tab>
                        <Tab v-slot="{ selected }" as="template">
                            <button
                            :class="[selected ? 'border-blue text-blue rounded-b' : 'bg-white']" class="w-full text-sm font-semibold py-2 border-b-4 border-white focus:bg-transparent text-center cursor-pointer">
                                In Transit
                            </button>
                        </Tab>
                        <Tab v-slot="{ selected }" as="template">
                            <button
                            :class="[selected ? 'border-blue text-blue rounded-b' : 'bg-white']" class="w-full text-sm font-semibold py-2 border-b-4 border-white focus:bg-transparent text-center cursor-pointer">
                                Delivered
                            </button>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div class="px-3 grid gap-1 place-items-center h-96 my-20">
                                <div class="px-3 py-6 text-center">
                                    <img class="w-48 mx-auto" src="../../../public/svg/no_delivery.svg" alt="">
                                    <h6 class="block font-semibold text-xl mt-8">No deliveries yet?</h6>
                                    <p class="block text-grey-dark leading-6">You'll see all your deliveries to be delivered here.</p>
                                </div>
                            </div>
                            <div v-for="delivery in deliveries.data" :key="delivery.id" class="bg-white shadow md:hidden flex flex-col space-y-2 rounded border border-grey-light px-3 py-2 mb-2">
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
                        </TabPanel>
                        <TabPanel>
                            <div class="px-3 grid gap-1 place-items-center h-96 my-20">
                                <div class="px-3 py-6 text-center">
                                    <img class="w-48 mx-auto" src="../../../public/svg/no_delivery.svg" alt="">
                                    <h6 class="block font-semibold text-xl mt-8">No deliveries yet?</h6>
                                    <p class="block text-grey-dark leading-6">You'll see all your deliveries in transit here.</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="px-3 grid gap-1 place-items-center h-96 my-20">
                                <div class="px-3 py-6 text-center">
                                    <img class="w-48 mx-auto" src="../../../public/svg/no_delivery.svg" alt="">
                                    <h6 class="block font-semibold text-xl mt-8">No deliveries yet?</h6>
                                    <p class="block text-grey-dark leading-6">You'll see all your delivered deliveries here.</p>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </section>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import axios from 'axios';
    import _ from "lodash";
    import Navbar from "../../components/Navbar"
    import SidebarDesktop from "../../components/SidebarDesktop"
    import SidebarMobile from "../../components/SidebarMobile"
    import { MenuAlt1Icon, TagIcon, CheckIcon, TruckIcon, RefreshIcon, CubeIcon, ArrowLeftIcon } from '@heroicons/vue/outline'
    import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    

    export default {
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                name: 'Transactions'
            }
        },
        components: {
            MenuAlt1Icon, CheckIcon, TruckIcon, TagIcon, RefreshIcon, CubeIcon, ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, Navbar, SidebarDesktop, SidebarMobile, TabGroup, TabList, Tab, TabPanels, TabPanel
        },
        data() {
            return {
                deliveries:[],
                search: '',
                show_entries: '10',
            }
        },
        mounted(){
            this.fetchAllDeliveries()
        },
        methods: {
            fetchAllDeliveries() {
                axios.get(process.env.VUE_APP_API + 'deliveries')
                .then(response => {
                    this.deliveries = response.data
                })
                .catch(response => {
                    console.error(response)
                })
            },

            getDeliveries(page = 1){
                axios.get(process.env.VUE_APP_API + `deliveries/show?page=${page}`)
                .then(response => {
                    this.deliveries = response.data
                })
                .catch(response => {
                    console.error(response)
                })
            },
            
            searchDelivery:_.debounce(function(){
                axios.get(process.env.VUE_APP_API + 'deliveries/search?q=' + this.search)
                .then((response) => {
                    this.deliveries.data = response.data.delivery
                })
            }),

            showEntries(event){
                axios.get(process.env.VUE_APP_API + 'deliveries/show?entries=' + event.target.value)
                .then((response) => {
                    this.deliveries = response.data
                })
            }
        },
    }
</script>