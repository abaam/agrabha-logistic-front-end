<template>
  <DashboardLayout mobileTitle="Booking Details">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center booking-details-header">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Booking Details
        </h2>

        <button v-show="role == 3" id="accept-button"
          class="details-button bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-light hover:border-green rounded ml-auto mr-2"
          >Accept</button>

        <button v-show="role == 2" id="pay-button" 
          class="details-button bg-blue-light hover:bg-blue text-white font-bold py-2 px-8 text-lg border-b-4 border-blue hover:border-blue-light rounded ml-auto mr-2" data-bs-toggle="modal" data-bs-target="#pay_info"
          >Pay</button>

        <button v-show="role == 2" id="cancel-button" @click="cancelBooking()"
          class="details-button cancel-button bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
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
          <p id="payment-total"></p>

          <br>
          <h3 class="font-bold">Payment Status: <span class="text-orange-light" id="payment-status"></span></h3>
        </div>

        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">Status: <span class="text-orange-light" id="status"></span></h3>
          <div id="tracking-qr-code">
            <h3 class="font-bold">Tracking QR Code</h3>
            <a href="/trace">
              <img class="mx-auto w-60 self-center" src="../../public/img/qrcode_lab.agrabah.ph.png" alt="Agrabah Logistics">
            </a>
            <div class="flex justify-center space-x-4">
              <ButtonOutlineBlue buttonClass="" buttonText="Copy URL"/>
              <ButtonOutlineGreen buttonClass="" buttonText="Download QR"/>
            </div>
          </div>

          <div id="tracking-not-available" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 mt-5 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
              <div>
                <p class="font-bold">Tracking not available.</p>
                <p class="text-sm">Once your item has been picked up, this will be accessible.</p>
              </div>
            </div>
          </div>
            
          <!-- <br>
          <h3 class="font-bold">Status: <span class="text-blue-light">For Pick-up</span></h3> -->
        </div>
      </div>

      <div class="mb-6 px-3 py-6 md:p-6 flex items-center justify-center md:hidden">
        <button v-show="role == 1"
          class="bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-700 hover:border-green-500 rounded"
          >Accept</button>

        <button v-show="role == 2" id="pay-button" 
          class="bg-blue-light hover:bg-blue text-white font-bold py-2 px-8 text-lg border-b-4 border-blue hover:border-blue-light rounded mr-2" data-bs-toggle="modal" data-bs-target="#pay_info"
          >Pay</button>

        <button v-show="role == 2"
          class="bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
          >Cancel</button>
      </div>

      <!-- Pay Modal -->
      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="pay_info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <form @submit="payBooking">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Scan the QR Code
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                <h3 class="font-bold flex justify-center items-center text-xl">Paymaya</h3>
                <img class="mx-auto w-60 self-center" src="" alt="Agrabah Logistics" id="payment_method_qr">
                <div class="border-t border-gray-200">
                  <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-lg font-medium text-gray-500">Account Name</dt>
                      <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">Agrabah</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-lg font-medium text-gray-500">Account Number</dt>
                      <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">09186846547</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="bg-indigo-900 text-center py-4 lg:px-4">
                <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                  <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
                  <span class="font-semibold mr-2 text-left flex-auto">When paying using Gcash or Paymaya, use your registered mobile number.</span>
                </div>
              </div>
              <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">Later</button>
                <button type="submit"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Done</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import $ from "jquery";
import 'tw-elements';
import _ from "lodash";
import axios from "axios";
import Booking from "../api/booking";
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
    $('.cancel-button').hide();
    $('#accept-button').hide()
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
        $('#package-item').html('Item: ' + response.data.package_item);
        $('#package-quantity').html('Quantity: ' + response.data.package_quantity + ' ' + response.data.package_unit);
        $('#package-note').html('Note: ' + response.data.package_note);
        $('#receiver-name').html('Name: ' + response.data.receiver_name);
        $('#contact-number').html('Contact Number: ' + response.data.receiver_contact);
        $('#vehicle-type').html('Vehicle Type: ' + response.data.vehicle_type);
        $('#pick-up').html('Pick-up: ' + response.data.pick_up);
        $('#drop-off').html('Drop Off: ' + response.data.drop_off);
        $('#date-time').html('Date & Time: ' + response.data.date_time);
        $('#payment-total').html('Total: ₱ ' + response.data.payment_total);

        if(response.data.payment_method == 0){
          var payment_method = "Paymaya";
        }else{
          var payment_method = "Gcash";
        }
        $('#payment-method').html('Payment Method: ' + payment_method);

        if(response.data.payment_status == 0){
          var payment_status = "Pending";
        }else if(response.data.payment_status == 1){
          var payment_status = "Pending Approval";
          $('#payment-status').attr('class', 'text-blue')
          $('#accept-button').show()
        }else if(response.data.payment_status == 2){
          var payment_status = "Paid";
          $('#payment-status').attr('class', 'text-green')

          if (localStorage.getItem('role') == 2) {
            $('.details-button').hide();
          }
        }else if(response.data.payment_status == 3){
          var payment_status = "Cancelled";
          $('#payment-status').attr('class', 'text-red')
          
          if (localStorage.getItem('role') == 2) {
            $('.details-button').hide();
          }
        }

        if(response.data.status == 1){
          var status = "Delivered";
          $('#status').attr('class', 'text-green')
        }else if(response.data.status == 2){
          var status = "To Receive";
          $('#status').attr('class', 'text-blue')
        }else if(response.data.status == 3){
          var status = "To Ship";
          $('#status').attr('class', 'text-orange')
        }

        $('#payment-status').html(payment_status);
        $('#status').html(status);

        if(response.data.status == 3 && localStorage.getItem('role') == 2 && response.data.payment_status != 3){
          $('.cancel-button').show();
        }

        if(response.data.tracking_id == null){
          $('#tracking-qr-code').hide();
          $('#tracking-not-available').show();
        }else{
          $('#tracking-qr-code').show();
          $('#tracking-not-available').hide();
        }

        if (response.data.payment_status == 1 || response.data.payment_status == 2) {
          $('#pay-button').hide();
          $('.booking-details-header').addClass('justify-between');
        }

        if (response.data.payment_method == 0) {
          $('#payment_method_qr').attr('src', window.location.origin + '/img/paymaya-qr.png');
        }else{
          $('#payment_method_qr').attr('src', window.location.origin + '/img/gcash-qr.jpg');
        }

      }).catch(error=>{
          console.log(error)
      })
    },
    payBooking(e) {
      e.preventDefault();
      let currentObj = this;
      let booking_id = window.location.pathname.split('/').pop();
      
      Booking.payBooking({booking_id})
      .then(function (response) {
        location.reload(true);
        
        currentObj.output = response.data;
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    },
    cancelBooking() {
      // Use sweetalert2
      let that = this;
      this.$swal.fire({
        title: 'Are you sure?',
        text: "Your booking will be permanently cancelled!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          let currentObj = this;
          let booking_id = window.location.pathname.split('/').pop();

          Booking.cancelBooking({booking_id})
          .then(function (response) {
            currentObj.output = response.data;

            that.$swal.fire(
              'Canceled!',
              currentObj.output = response.data,
              'success'
            )

            setTimeout(function() { 
              location.reload(true);
            }, 2000);
          })
          .catch(function (error) {
            currentObj.output = error;
          });
        }
      })
    },
  }
};
</script>
