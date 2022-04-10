<template>
  <DashboardLayout mobileTitle="Wallet">
    <!-- <section class="hidden px-3 py-6 md:block md:p-6">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Wallet
        </h2>
    </section> -->

    <main class="flex-1">
      <div class="md:w-1/2 w-sm-full rounded-lg border m-auto mt-10 mb-10 shadow-xl">
        <div class="grid md:grid-cols-6 gap-3 p-4 pl-7 pr-7 bg-green-lighter bg-opacity-200 rounded-t-lg">
          <!-- Description -->
          <div class="col-span-3 text-green">
            <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"> ₱520.00 </h2>
            <p class="text-lg"> Current Wallet Balance </p>
          </div>

                <!-- Image -->
          <div class="col-span-3 flex items-center md:justify-end">
            <button class="inline-flex items-center bg-green hover:bg-blue text-white font-bold py-2 px-8 md:text-lg border-b-4 border-orange-light hover:border-orange-light rounded">
              <ArchiveIcon class="h-5 2-5 pr-2"></ArchiveIcon>
              <span>Withdraw</span>
            </button>
          </div>

        </div>
        <!-- <div class="py-3 px-6 border-b border-gray-300 rounded-t-lg bg-green-light">
            <CashIcon class="h-14 w-14 text-blue mx-auto"/>
            <span class="block text-center">Total Balance:</span>
            <h2 class="block text-center text-xl font-bold leading-6 md:text-2xl lg:text-3xl mb-10">
              ₱520.00
            </h2>
        </div> -->
        <div class="p-7 w-full">
          <div class="md:mx-auto overflow-y-auto">
            <h3 class="text-lg font-bold mb-6">All Transaction Details</h3>
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
        <!-- <div class="py-3 px-6 border-t border-gray-300 text-blue-light text-right">
          Show more
        </div> -->
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";

import { CashIcon, CheckCircleIcon, ArchiveIcon  } from '@heroicons/vue/outline'

export default {
  components: {
    DashboardLayout, CheckCircleIcon, CashIcon, ArchiveIcon
  },
};
</script>
