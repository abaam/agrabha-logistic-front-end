<template>
    <div class="flex min-h-screen">

        <SidebarMobile ref="sidebar"/>
        <SidebarDesktop />

        <main class="flex-1">
            <Navbar @show-sidebar="$refs.sidebar.show()" ></Navbar>
            <div class="p-4 max-w-md rounded-lg border sm:p-8 m-auto mt-10 shadow-xl">
              <h2 class="block text-center text-xl font-bold leading-6 md:text-2xl lg:text-3xl mb-5">
                Trace Timeline
              </h2>
              <h2 class="block text-center text-l leading-6 mb-5">
                Tracking No.: 090909090
              </h2>
              <div class="md:mx-auto">
                <table class="min-w-full">
                  <tbody>
                    <tr class="bg-gray-100 border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <CheckCircleIcon class="h-8 w-8 text-blue"/>
                      </td>
                      <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                        <p class="text-lg font-bold text-blue">June 29, 2022</p>
                        Claimed at Albay, Bicol
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <TruckIcon class="h-8 w-8 text-gray-500"/>
                      </td>
                      <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                        <p class="text-lg font-bold text-blue">June 26, 2022</p>
                        Forwarded to Bicol
                      </td>
                    </tr>
                    <tr class="bg-gray-100 border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <TruckIcon class="h-8 w-8 text-gray-500"/>
                      </td>
                      <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                        <p class="text-lg font-bold text-blue">June 24, 2022</p>
                        Arrived at Quezon
                      </td>
                    </tr>
                  </tbody>
                </table>
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

    import { CheckCircleIcon, TruckIcon } from '@heroicons/vue/outline'

    export default {
        setup() {
            const isOpen = ref(true)
            
            return {
                isOpen,
                CheckCircleIcon,
                TruckIcon
            }
        },
        components: {
            UserMenu, SidebarDesktop, SidebarMobile, Navbar, CheckCircleIcon, TruckIcon
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        },
    }
</script>