<template>
    <div class="flex">
        <aside class="flex-none md:w-16 min-h-screen p-3 bg-blue-light hidden md:block">
            <div class="px-3 md:px-0">
                <img class="block md:hidden w-40 -ml-1" src="../../../public/img/agrabah-logo-white.png" alt="Agrabah Logo">

                <!-- Show on medium devices -->
                <img class="hidden md:block w-40 mt-1 mb-2" src="../../../public/img/agrabah-logo-white-icon.png" alt="Agrabah Logo">

                <hr class="mt-2.5 md:mt-4 border-blue opacity-25">
            </div>

            <ul class="mt-8">
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <router-link to="/dashboard" class="flex items-center space-x-3 w-full px-3 py-2">
                        <ViewGridIcon class="h-5 w-5"/>
                        <span class="md:sr-only">Dashboard</span>
                    </router-link>
                </li>
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <router-link to="/transactions" class="flex items-center space-x-3 w-full px-3 py-2">
                        <RefreshIcon class="h-5 w-5"/>
                        <span class="md:sr-only">Transactions</span>
                    </router-link>
                </li>
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <router-link to="/bookings" class="flex items-center space-x-3 w-full px-3 py-2">
                        <TagIcon class="h-5 w-5"/>
                        <span class="md:sr-only">Bookings</span>
                    </router-link>
                </li>
            </ul>
        </aside>

        <main class="flex-1">
            <nav class="flex justify-between items-center border-b p-3">
                <MenuAlt1Icon class="h-6 w-6 text-blue cursor-pointer" />

                <!-- Show on mobile devices -->
                <img class="w-32 -ml-1 md:sr-only" src="../../../public/img/agrabah-logo.png" alt="Agrabah Logo">

                <a href="#" class="flex space-x-2 items-center">
                    <img class="rounded-full bg-grey w-10 h-10" src="https://picsum.photos/200" alt="">
                    <span class="hidden md:flex">John Doe</span>
                    <ChevronDownIcon class="h-4 w-4 hidden md:flex" />
                </a>
            </nav>

            <!-- Navbar user dropdown menu -->
            <div class="flex justify-end mt-1 mr-3 sr-only">
                <div class="w-48 border rounded-md p-2 bg-white shadow-md">
                    <ul>
                        <li>
                            <a href="" class="flex items-center space-x-2 w-full p-2 text-grey-dark rounded-md hover:text-white hover:bg-blue-light">
                                <UserCircleIcon class="h-5 w-5" />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="flex items-center space-x-2 w-full p-2 text-grey-dark rounded-md hover:text-white hover:bg-blue-light">
                                <LogoutIcon class="h-5 w-5" />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /Navbar user dropdown menu -->

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
    import { ViewGridIcon, MenuAlt1Icon, TagIcon, FilterIcon, CheckIcon, TruckIcon, RefreshIcon, LogoutIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/vue/outline'

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
            return {
                deliveries,
            }
        },
        components: { 
            ViewGridIcon,
            MenuAlt1Icon,
            CheckIcon,
            TruckIcon,
            TagIcon,
            FilterIcon,
            ChevronDownIcon,
            RefreshIcon,
            LogoutIcon,
            UserCircleIcon
        }
    }
</script>