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
          <p id="package-item"></p>
          <p id="package-quantity"></p>
          <p id="package-note"></p>
          
          <br>
          <h3 class="font-bold">Receiver's Information</h3>
          <p id="receiver-name"></p>
          <p id="contact-number"></p>
          <p></p>
        </div>
        <!-- ... -->
        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">Vehicle</h3>
          <p id="vehicle-type"></p>

          <br>
          <h3 class="font-bold">Location</h3>
          <p id="pick-up"></p>
          <p id="drop-off"></p>
          <p id="date-time"></p>
        </div>

        <div  class="p-4 border rounded-lg">
          <h3 class="font-bold">Payment</h3>
          <p id="payment-method"></p>
          <p>Total: ₱127.00</p>

          <br>
          <h3 class="font-bold">Status: <span class="text-blue-light" id="payment-status"></span></h3>
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
import $ from "jquery";
import _ from "lodash";
import axios from "axios";
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
  mounted(){
    this.showBookingDetails()
  },
  methods:{
    showBookingDetails(){
        axios.get(process.env.VUE_APP_API + `bookings/details/${this.$route.params.id}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }).then(response=>{
            $('#package-item').html('Item: ' + response.data.package_item);
            $('#package-quantity').html('Quantity: ' + response.data.package_quantity + ' ' + + response.data.package_unit);
            $('#package-note').html('Note: ' + response.data.package_note);
            $('#receiver-name').html('Name: ' + response.data.receiver_name);
            $('#contact-number').html('Contact Number: ' + response.data.receiver_contact);
            $('#vehicle-type').html('Vehicle Type: ' + response.data.vehicle_type);
            $('#pick-up').html('Pick-up: ' + response.data.pick_up);
            $('#drop-off').html('Drop Off: ' + response.data.drop_off);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            $('#date-time').html('Date & Time: ' + new Date(response.data.date_time.replace('T', ' ')).toLocaleString('en-US', options));

            if(response.data.payment_method == 0){
              var payment_method = "Paymaya";
            }else{
              var payment_method = "Gcash";
            }
            $('#payment-method').html('Payment Method: ' + payment_method);

            if(response.data.payment_status == 0){
              var payment_status = "Pending";
            }else{
              var payment_status = "Paid";
              $('#payment-status').attr('class', 'text-green')
            }
            $('#payment-status').html(payment_status);

        }).catch(error=>{
            console.log(error)
        })
    }
  }
};
</script>
