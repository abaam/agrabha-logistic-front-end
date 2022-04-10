<template>
  <DashboardLayout mobileTitle="Booking Details">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center justify-between">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Booking Details
        </h2>

        <button v-show="role == 1"
          class="bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-700 hover:border-green-500 rounded"
          >Accept</button>

        <button v-show="role == 2"
          class="bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
          >Cancel</button>
      </div>
    </section>

    <main class="flex-1">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 rounded-lg border sm:p-8 m-2">
        <div class="p-4 border rounded-lg rounded-lg">
          <h3 class="font-bold">Package Details</h3>
          <p>Item: Banana</p>
          <p>Quantity: 50 KG</p>
          <p>Note: Please handle with care. Perishable goods.</p>
          
          <br>
          <h3 class="font-bold">Receiver's Information</h3>
          <p>Name: Juan Dela Cruz</p>
          <p>Contact Number: 09015644552</p>
          <p>Address: 110 E. Rodriguez Jr. Avenue, Libis, Quezon City, Metro Manila</p>
        </div>
        <!-- ... -->
        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">Vehicle</h3>
          <p>Vehicle Type: Truck</p>

          <br>
          <h3 class="font-bold">Location</h3>
          <p>Pick-up: Juan Dela Cruz</p>
          <p>Drop-off: 110 E. Rodriguez Jr. Avenue, Libis, Quezon City, Metro Manila</p>
          <p>Date & Time: April 9, 2022 04:35 PM</p>
        </div>

        <div  class="p-4 border rounded-lg">
          <h3 class="font-bold">Payment</h3>
          <p>Payment Method: Cash on Delivery</p>
          <p>Total: ₱127.00</p>

          <br>
          <h3 class="font-bold">Status: <span class="text-blue-light">Pending</span></h3>
        </div>

        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">Tracking QR Code</h3>
          <a href="/trace">
            <img class="mx-auto w-60 self-center" src="../../public/img/qrcode_lab.agrabah.ph.png" alt="Agrabah Logistics">
          </a>
          <div class="flex justify-center space-x-4">
            <ButtonOutlineBlue buttonClass="" buttonText="Copy URL"/>
            <ButtonOutlineGreen buttonClass="" buttonText="Download QR"/>
          </div>
            
          <!-- <br>
          <h3 class="font-bold">Status: <span class="text-blue-light">For Pick-up</span></h3> -->
        </div>
      </div>

      <div class="mb-6 px-3 py-6 md:p-6 flex items-center justify-center md:hidden">
        <button v-show="role == 1"
          class="bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-700 hover:border-green-500 rounded"
          >Accept</button>

        <button v-show="role == 2"
          class="bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
          >Cancel</button>
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";
import ButtonOutlineBlue from "@/components/buttons/ButtonOutlineBlue.vue";
import ButtonOutlineGreen from "@/components/buttons/ButtonOutlineGreen.vue";

import { CashIcon, CheckCircleIcon  } from '@heroicons/vue/outline'

export default {
  components: {
    DashboardLayout, CheckCircleIcon, CashIcon, ButtonOutlineBlue, ButtonOutlineGreen
  },
  data() {
      return {
          role: localStorage.getItem('role')
      };
  },
};
</script>
