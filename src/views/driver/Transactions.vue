<template>
    <DashboardLayout>
        <section class="hidden md:block px-3 py-6 md:p-6">
            <h2 class="block font-bold text-xl md:text-2xl lg:text-3xl leading-6 mb-4">Transactions</h2>
            
            <!-- Table -->
            <div class="bg-white shadow rounded-md hidden md:grid gap-y-3 py-6">
                <div class="flex md:flex-col md:space-y-2 lg:flex-row lg:space-y-0 items-center justify-between px-6">
                    <!-- Filter -->
                    <div class="flex items-center space-x-2">
                        <p>Show</p>
                        <select v-model="show_entries" @change="showEntries($event)" class="appearance-none rounded relative block w-20 px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="100">100</option>
                        </select>
                        <p>entries</p>
                    </div>

                    <!-- Search -->
                    <div class="flex items-center space-x-1">
                        <p>Search:</p>
                        <input type="text" @keyup="searchDelivery" @keyup.enter="fetchDeliveries" v-model="search" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey text-gray-900 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10">
                    </div>
                </div>

                <section class="container mx-auto grid grid-cols-1">
                    <div class="-my-2 overflow-x-auto">
                        <div class="py-2 align-middle inline-block min-w-full">
                            <div class="overflow-hidden">
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
                                    <tbody v-if="deliveries != ''" class="bg-white divide-y divide-grey-light">
                                        <tr v-for="delivery in deliveries" :key="delivery.id">
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
                                                <div v-if="delivery.status == 1">
                                                    <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-green-light">
                                                        <p class="text-green text-sm font-semibold">Delivered</p>
                                                    </div>
                                                </div>
                                                <div v-else-if="delivery.status == 2">
                                                    <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-blue-light">
                                                        <p class="text-blue text-sm font-semibold">In Transit</p>
                                                    </div>
                                                </div>
                                                <div v-else-if="delivery.status == 3">
                                                    <div class="flex items-center justify-center rounded-full w-auto py-0.5 px-1 bg-orange-light">
                                                        <p class="text-orange text-sm font-semibold">To Deliver</p>
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
                                                <p class="mt-4 block text-center">No record found.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="flex md:flex-col md:space-y-2 lg:flex-row lg:space-y-0 items-center justify-between px-6" v-if="deliveries !=''" >
                    <p>Showing <span>1</span> to <span>{{ show_entries }}</span> of <span>{{ pagination.total }}</span> entries</p>
                    <div>
                        <pagination :pagination="pagination" @paginate="fetchDeliveries" />
                    </div>
                </div>
            </div>
            <!-- /Table -->
        </section>

        <section class="md:hidden grid px-3 md:py-6 md:p-6">
            <TabGroup>
                <TabList class="flex justify-evenly sticky top-14 z-40 bg-white border-b border-grey-light md:mx-0 -mx-3">
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        :class="[selected ? 'border-blue text-blue' : 'bg-white']" class="w-full md:w-auto text-sm md:text-base font-semibold py-2 border-b-2 border-transparent text-center cursor-pointer">
                            To Deliver
                        </button>
                    </Tab>
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        :class="[selected ? 'border-blue text-blue' : 'bg-white']" class="w-full md:w-auto text-sm md:text-base font-semibold py-2 border-b-2 border-transparent text-center cursor-pointer">
                            In Transit
                        </button>
                    </Tab>
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        :class="[selected ? 'border-blue text-blue' : 'bg-white']" class="w-full md:w-auto text-sm md:text-base font-semibold py-2 border-b-2 border-transparent text-center cursor-pointer">
                            Delivered
                        </button>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div v-if="to_deliver != ''" class="grid gap-y-2 my-3">
                            <div v-for="delivery in to_deliver" :key="delivery.id" class="grid gap-y-3 bg-white shadow rounded-md p-3">
                                <div class="flex items-center justify-between">
                                    <p class="font-semibold">{{ delivery.delivery_id }}</p>
                                    <p class="font-bold">{{ delivery.cost }}</p>
                                </div>

                                <div class="block">
                                    <p>{{ delivery.description }}</p>
                                    <p class="text-sm text-grey">Weight: <span>{{ delivery.weight }}</span></p>
                                </div>

                                <div class="flex items-center text-orange space-x-1">
                                    <div class="flex items-center justify-center rounded-full h-5 w-5 bg-orange-light">
                                        <CubeIcon class="h-3 w-3 text-orange" />
                                    </div>
                                    <p class="text-orange text-sm font-semibold">To Deliver</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="px-3 grid gap-1 place-items-center h-96 my-20">
                            <div class="px-3 py-6 text-center">
                                <img class="w-48 mx-auto" src="../../../public/svg/no_delivery.svg" alt="">
                                <h6 class="block font-semibold text-xl mt-8">No deliveries yet?</h6>
                                <p class="block text-grey-dark leading-6">You'll see all your deliveries to be delivered here.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div v-if="in_transit != ''" class="grid gap-y-2 my-3">
                            <div v-for="delivery in in_transit" :key="delivery.id" class="grid gap-y-3 bg-white shadow rounded-md p-3">
                                <div class="flex items-center justify-between">
                                    <p class="font-semibold">{{ delivery.delivery_id }}</p>
                                    <p class="font-bold">{{ delivery.cost }}</p>
                                </div>

                                <div class="block">
                                    <p>{{ delivery.description }}</p>
                                    <p class="text-sm text-grey">Weight: <span>{{ delivery.weight }}</span></p>
                                </div>

                                <div class="flex items-center text-blue space-x-1">
                                    <div class="flex items-center justify-center rounded-full h-5 w-5 bg-blue-light">
                                        <TruckIcon class="h-3 w-3 text-blue" />
                                    </div>
                                    <p class="text-blue text-sm font-semibold">In Transit</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="px-3 grid gap-1 place-items-center h-96 my-20">
                            <div class="px-3 py-6 text-center">
                                <img class="w-48 mx-auto" src="../../../public/svg/no_delivery.svg" alt="">
                                <h6 class="block font-semibold text-xl mt-8">No deliveries yet?</h6>
                                <p class="block text-grey-dark leading-6">You'll see all your deliveries in transit here.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div v-if="delivered != ''" class="grid gap-y-2 my-3">
                            <div v-for="delivery in delivered" :key="delivery.id" class="grid gap-y-3 bg-white shadow rounded-md p-3">
                                <div class="flex items-center justify-between">
                                    <p class="font-semibold">{{ delivery.delivery_id }}</p>
                                    <p class="font-bold">{{ delivery.cost }}</p>
                                </div>

                                <div class="block">
                                    <p>{{ delivery.description }}</p>
                                    <p class="text-sm text-grey">Weight: <span>{{ delivery.weight }}</span></p>
                                </div>

                                <div class="flex items-center text-green space-x-1">
                                    <div class="flex items-center justify-center rounded-full h-5 w-5 bg-green-light">
                                        <CheckIcon class="h-3 w-3 text-green" />
                                    </div>
                                    <p class="text-green text-sm font-semibold">Delivered</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="px-3 grid gap-1 place-items-center h-96 my-20">
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
    </DashboardLayout>
</template>

<script>
    import axios from 'axios';
    import _ from "lodash";
    import DashboardLayout from '../DashboardLayout.vue';
    import Pagination from "../../components/Pagination"
    import { TruckIcon, CubeIcon, CheckIcon } from '@heroicons/vue/outline'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    export default {
        data() {
            return {
                offset: 4,
                pagination:{},
                deliveries:[],
                to_deliver:[],
                in_transit:[],
                delivered:[],
                search: '',
                show_entries: '5',
            }
        },
        created(){
            this.fetchDeliveries(),
            this.fetchToDeliver(),
            this.fetchInTransit(),
            this.fetchDelivered()
        },
        methods: {
            fetchDeliveries() {
                let current_page = this.pagination.current_page;
                let pageNum = current_page ? current_page : 1;
                
                if(this.search == ""){
                    axios.get(process.env.VUE_APP_API + `deliveries?page=${pageNum}&entries=${this.show_entries}`)
                    .then(response => {
                        this.pagination = response.data.deliveries.pagination
                        this.deliveries = response.data.deliveries.collection
                    })
                } else {
                    axios.get(process.env.VUE_APP_API + `deliveries/search?q=${this.search}&page=${pageNum}&entries=${this.show_entries}`)
                    .then((response) => {
                        this.pagination = response.data.deliveries.pagination
                        this.deliveries = response.data.deliveries.collection
                    })
                }
            },
            
            searchDelivery:_.debounce(function(){
                if(this.search != ""){
                    axios.get(process.env.VUE_APP_API + `deliveries/search?q=${this.search}&entries=${this.show_entries}`)
                    .then((response) => {
                        this.pagination = response.data.deliveries.pagination
                        this.deliveries = response.data.deliveries.collection
                    })
                }
            }),

            showEntries(event){
                if(this.search == ""){
                    axios.get(process.env.VUE_APP_API + 'deliveries?entries=' + event.target.value)
                    .then((response) => {
                        this.pagination = response.data.deliveries.pagination
                        this.deliveries = response.data.deliveries.collection
                        this.show_entries = event.target.value
                    })
                } else {
                    axios.get(process.env.VUE_APP_API + `deliveries/search?q=${this.search}&entries=${this.show_entries}`)
                    .then((response) => {
                        this.pagination = response.data.deliveries.pagination
                        this.deliveries = response.data.deliveries.collection
                    })
                }
            },

            fetchToDeliver(){
                axios.get(process.env.VUE_APP_API + `deliveries`)
                .then(response => {
                    this.to_deliver = response.data.to_deliver
                })
            }, 

            fetchInTransit(){
                axios.get(process.env.VUE_APP_API + `deliveries`)
                .then(response => {
                    this.in_transit = response.data.in_transit
                })
            },

            fetchDelivered(){
                axios.get(process.env.VUE_APP_API + `deliveries`)
                .then(response => {
                    this.delivered = response.data.delivered
                })
            }
        },
        components: {
            TabGroup, TabList, Tab, TabPanels, TabPanel, pagination : Pagination, TruckIcon, CubeIcon, CheckIcon, DashboardLayout
        },
    }
</script>