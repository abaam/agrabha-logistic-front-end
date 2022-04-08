<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" >Dashboard</Navbar>
            <div class="container m-auto px-6">

            <div class="lg:flex justify-between items-center mt-5">

                <div class="lg:w-4/12 lg:p-0 p-7">
                    <h1 class="text-center text-2xl font-bold leading-tight mb-3 capitalize">Tracking QR Code</h1>
                    <img class="mx-auto w-60" src="../../public/img/qrcode_lab.agrabah.ph.png" alt="Agrabah Logistics">

                </div>
                    <div class="lg:w-7/12 order-2">
                        <div class="flex flex-col">
                          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                              <div class="overflow-hidden">
                                <table class="min-w-full text-center">
                                  <thead class="border-b bg-gray-50">
                                    <tr>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        #
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        First
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        Last
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                        Handle
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Mark
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Otto
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        @mdo
                                      </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Jacob
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Thornton
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        @fat
                                      </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                      <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                        Larry the Bird
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        @twitter
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import UserMenu from "../components/UserMenu"
    import SidebarDesktop from "../components/SidebarDesktop"
    import SidebarMobile from "../components/SidebarMobile"
    import Navbar from "../components/Navbar"

    import { ViewGridIcon, RefreshIcon, TagIcon, TruckIcon } from '@heroicons/vue/outline'

    const MenusDriver = [
        // {
        //     href: '/dashboard',
        //     label: 'Dashboard',
        //     icon: 'ViewGridIcon'
        // },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        },
        {
            href: '/deliveries',
            label: 'Deliveries',
            icon: 'TruckIcon'
        }
    ]

    const MenusCustomer = [
        // {
        //     href: '/dashboard',
        //     label: 'Dashboard',
        //     icon: 'ViewGridIcon'
        // },
        {
            href: '/transactions',
            label: 'Transactions',
            icon: 'RefreshIcon'
        },
        {
            href: '/bookings',
            label: 'Booking',
            icon: 'TagIcon'
        }
    ]

    export default {
        name: 'Dashboard',
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                TruckIcon,
                ViewGridIcon,
                TagIcon,
                TruckIcon,
                RefreshIcon,
                MenusDriver,
                MenusCustomer
            }
        },
        components: {
            UserMenu, SidebarDesktop, SidebarMobile, Navbar, ViewGridIcon, TagIcon, TruckIcon, RefreshIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
    }
</script>