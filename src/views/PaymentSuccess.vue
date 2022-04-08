<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" ></Navbar>
            <div class="p-4 max-w-md rounded-lg border sm:p-8 m-auto mt-10 shadow-xl">
              <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
              </svg>
              <h2 class="block text-center text-xl font-bold leading-6 md:text-2xl lg:text-3xl mb-10">
                Payment Successful
              </h2>
              <div class="md:mx-auto">
                <table class="flex justify-center">
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900">Payout Method:</td>
                      <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Cash
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900">Amount Paid:</td>
                      <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        P 100
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900">Tracking No.:</td>
                      <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                        09090909090
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1 class="text-center text-2xl font-bold leading-tight mb-3 mt-10 capitalize">Tracking QR Code</h1>
                  <a href="/trace">
                    <img class="mx-auto w-60" src="../../public/img/qrcode_lab.agrabah.ph.png" alt="Agrabah Logistics">
                  </a>
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
                RefreshIcon
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