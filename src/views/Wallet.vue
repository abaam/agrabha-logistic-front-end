<template>
  <DashboardLayout mobileTitle="Wallet">
    <section class="hidden px-3 py-6 md:block md:p-6">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Wallet
        </h2>
    </section>

    <main class="flex-1">
      <div class="max-w-md rounded-lg border m-auto mt-10 mb-10 shadow-xl">
        <div class="py-3 px-6 border-b border-gray-300 rounded-t-lg bg-green-light">
          <!-- <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
              <path fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
              </path>
            </svg> -->
            <!-- <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg> -->

            <CashIcon class="h-14 w-14 text-blue mx-auto"/>
            <span class="block text-center">Total Balance:</span>
            <h2 class="block text-center text-xl font-bold leading-6 md:text-2xl lg:text-3xl mb-10">
              ₱520.00
            </h2>
        </div>
        <div class="p-6 max-w-md">
          <div class="md:mx-auto">
            <h3 class="font-bold">History</h3>
            <table class="min-w-full">
              <tbody>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <CheckCircleIcon class="h-8 w-8 text-green-light"/>
                  </td>
                  <td class="text-l text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">June 29, 2022</p>
                    Delivery Payment
                  </td>
                  <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">₱2,000.00</p>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <CheckCircleIcon class="h-8 w-8 text-green-light"/>
                  </td>
                  <td class="text-l text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">June 26, 2022</p>
                    Delivery Payment
                  </td>
                  <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">₱1,500.00</p>
                  </td>
                </tr><tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <CheckCircleIcon class="h-8 w-8 text-green-light"/>
                  </td>
                  <td class="text-l text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">June 24, 2022</p>
                    Delivery Payment
                  </td>
                  <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">₱4,875.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="py-3 px-6 border-t border-gray-300 text-blue-light text-right">
          Show more
        </div>
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";

import { CashIcon, CheckCircleIcon  } from '@heroicons/vue/outline'

export default {
  components: {
    DashboardLayout, CheckCircleIcon, CashIcon
  },
};
</script>
