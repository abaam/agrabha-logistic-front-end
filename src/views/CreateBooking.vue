<template>
  <DashboardLayout
    navClass="md:border-b-0 border-b"
    mobileTitle="Create Booking"
  >
  <!-- Customer -->
    <section v-show="role == 2" class="mx-auto max-w-7xl px-3 py-4 sm:p-6 relative">
      <div class="mb-6 hidden items-center justify-between md:flex">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Create Booking
        </h2>
      </div>
      <div class="relative mx-auto mb-8 max-w-2xl">
        <!-- Progressbar -->
        <div
          class="absolute top-5 left-0 z-10 h-1 rounded-md bg-green-light transition-all duration-300"
          :style="'width:' + progressBar"
        ></div>
        <div
          class="absolute top-5 left-0 z-0 mx-auto h-1 w-full rounded-md bg-grey-light"
        ></div>
        <!-- /Progressbar -->

        <!-- Stepper Icon -->
        <div class="relative z-20 flex items-center justify-between">
          <div class="flex cursor-pointer flex-col items-start">
            <div
              class="h-12 w-12 rounded-full border-4 border-green-light bg-green-light p-2"
            >
              <CubeIcon class="w-6 text-green" />
            </div>
            <!-- <div
              class="flex h-12 w-12 items-center justify-center rounded-full border-4 border-green-light bg-green-light p-2"
            >
              <span class="text-2xl font-semibold text-green">1</span>
            </div> -->
            <span class="mt-2 block font-semibold">Package</span>
          </div>
          <div class="flex cursor-pointer flex-col items-center">
            <div
              class="rounded-full border-4 p-2"
              :class="
                currentStep >= 1
                  ? 'border-green-light bg-green-light transition-all delay-300 duration-300'
                  : 'border-grey-light bg-gray-50'
              "
            >
              <TruckIcon
                class="w-6"
                :class="
                  currentStep >= 1
                    ? 'text-green transition-all delay-300 duration-300'
                    : 'text-grey'
                "
              />
            </div>
            <span class="mt-2 block font-semibold">Vehicle</span>
          </div>
          <div class="flex cursor-pointer flex-col items-center">
            <div
              class="rounded-full border-4 p-2"
              :class="
                currentStep >= 2
                  ? 'border-green-light bg-green-light transition-all delay-300 duration-300'
                  : 'border-grey-light bg-gray-50'
              "
            >
              <LocationMarkerIcon
                class="w-6"
                :class="
                  currentStep >= 2
                    ? 'text-green transition-all delay-300 duration-300'
                    : 'text-grey'
                "
              />
            </div>
            <span class="mt-2 block font-semibold">Location</span>
          </div>
          <div class="flex cursor-pointer flex-col items-center">
            <div
              class="rounded-full border-4 p-2"
              :class="
                currentStep >= 3
                  ? 'border-green-light bg-green-light transition-all delay-300 duration-300'
                  : 'border-grey-light bg-gray-50'
              "
            >
              <CreditCardIcon
                class="w-6"
                :class="
                  currentStep >= 3
                    ? 'text-green transition-all delay-300 duration-300'
                    : 'text-grey'
                "
              />
            </div>
            <span class="mt-2 block font-semibold">Payment</span>
          </div>
          <div class="flex cursor-pointer flex-col items-end">
            <div
              class="rounded-full border-4 p-2"
              :class="
                currentStep >= 4
                  ? 'border-green-light bg-green-light transition-all delay-300 duration-300'
                  : 'border-grey-light bg-gray-50'
              "
            >
              <NewspaperIcon
                class="w-6"
                :class="
                  currentStep >= 4
                    ? 'text-green transition-all delay-300 duration-300'
                    : 'text-grey'
                "
              />
            </div>
            <span class="mt-2 block font-semibold">Review</span>
          </div>
        </div>
        <!-- /Stepper Icon -->
      </div>

      <form @submit="storeBooking">
        <component :is="stepForms[currentStep].component"></component>

        <div class="mx-auto mt-4 flex max-w-lg justify-between space-x-4">
          <!-- <button
            @click.prevent="previousStep"
            v-if="currentStep"
            class="focus:outline-none flex w-full justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 font-semibold text-white hover:bg-blue focus:bg-blue"
          >
            Back
          </button> -->
          
          <button v-if="currentStep === 4"
            id="pay-button" 
            type="submit"
            class="focus:outline-none flex w-full justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 font-semibold text-white hover:bg-blue focus:bg-blue" 
          >
          </button>
          
          <button v-else
            @click.prevent="nextStep"
            class="focus:outline-none flex w-full justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 font-semibold text-white hover:bg-blue focus:bg-blue"
          >
            <template v-if="currentStep === 0">Select vehicle</template>
            <template v-else-if="currentStep === 1">Set location</template>
            <template v-else-if="currentStep === 2">Payment method</template>
            <template v-else-if="currentStep === 3">Review package</template>
          </button>

          <button type="button"
            class="hidden inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal" data-bs-target="#pay_info" id="btn-booking-mdl">
            Launch static backdrop modal
          </button>
          

          <!-- Modal -->
          <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="pay_info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
              <form @submit="payBooking">
                <div
                  class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                      Scan the QR Code To Pay
                    </h5>
                    <button type="button"
                      class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body relative p-4">
                    <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div>
                        <h3 class="font-bold flex justify-center items-center text-xl" id="payment_method_text"></h3>
                        <img class="mx-auto w-52 self-center" src="" alt="Agrabah Logistics" id="payment_method_qr">
                        <div class="flex justify-center space-x-4 mt-4">
                          <ButtonOutlineBlue type="button" buttonText="Print QR" @click="printImg()"/>
                          <a class="flex justify-center py-2 px-4 border border-green-light text-sm font-medium rounded-md bg-white text-green-light hover:bg-green hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light"
                          id="btn-print-qr" href="#"
                          download>Download QR</a>
                        </div>
                      </div>
                      <div class="border-t border-gray-200 mt-5">
                        <dl>
                          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-lg font-medium text-gray-500">Account Name</dt>
                            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" id="account_name"></dd>
                          </div>
                          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-lg font-medium text-gray-500">Account Number</dt>
                            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" id="account_number"></dd>
                          </div>
                          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-lg font-medium text-gray-500">Amount To Pay</dt>
                            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" id="amount-to-pay"></dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                      Transferred from:
                    </h5>
                  </div>
                  <div class="modal-body relative p-4">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Full Name
                        </label>
                        <input 
                          name="full_name" 
                          required 
                          v-model="sales.full_name" 
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                          id="grid-last-name" 
                          type="text">
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Mobile Number
                        </label>
                        <input 
                          name="mobile_number" 
                          required 
                          v-model="sales.mobile_number" 
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                          id="grid-last-name" 
                          type="text">
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Amount
                        </label>
                        <input 
                          name="amount" 
                          required 
                          v-model="sales.amount" 
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                          id="grid-last-name" 
                          type="text">
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Reference Number
                        </label>
                        <input 
                          name="ref_number" 
                          required 
                          v-model="sales.ref_number" 
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 eading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                          id="grid-last-name" 
                          type="text">
                      </div>
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
        </div>
      </form>
    </section>
  </DashboardLayout>
</template>

<script>
import $ from "jquery";
import 'tw-elements';
import axios from "axios";
import Booking from "../api/booking";
import { ref, shallowRef, computed } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import DashboardLayout from "@/views/DashboardLayout.vue";
import ButtonSolidBlue from "@/components/buttons/ButtonSolidBlue.vue";
import ButtonOutlineBlue from "@/components/buttons/ButtonOutlineBlue.vue";
import {
  CubeIcon,
  TruckIcon,
  LocationMarkerIcon,
  CreditCardIcon,
  NewspaperIcon,
} from "@heroicons/vue/outline";
import Package from "./steps/Package.vue";
import Vehicle from "./steps/Vehicle.vue";
import Location from "./steps/Location.vue";
import Payment from "./steps/Payment.vue";
import Review from "./steps/Review.vue";

$( document ).ready(function() {
  localStorage.removeItem('booking_form');
  localStorage.removeItem('validate_form');
  localStorage.removeItem('distance');
  localStorage.removeItem('booking_id')

  var ran_booking_id = Array.from(Array(8), () => Math.floor(Math.random() * 36).toString(36)).join('');
  localStorage.setItem('booking_id', ran_booking_id);

  $('#hdn-booking-id').val(localStorage.getItem('booking_id'));
});

export default {
  setup() {
    const currentStep = ref(0);
    const stepForms = shallowRef([
      {
        component: Package,
      },
      {
        component: Vehicle,
      },
      {
        component: Location,
      },
      {
        component: Payment,
      },
      {
        component: Review,
      },
    ]);

    const nextStep = () => {
      // if(localStorage.getItem('package_form') !== 'false'){
      //   currentStep.value += 1;
      // }
      if(localStorage.getItem('validate_form') == 'true'){
        currentStep.value += 1;
      }

      if(currentStep.value == 2){
        localStorage['booking_form'] = JSON.stringify(JSON.parse(localStorage["package_form"]).concat(JSON.parse(localStorage["vehicle_form"])));
        console.log(JSON.parse(localStorage['booking_form']));
      }

      if(currentStep.value == 3){
        localStorage['booking_form'] = JSON.stringify(JSON.parse(localStorage['booking_form']).concat(JSON.parse(localStorage["location_form"])));
        console.log(JSON.parse(localStorage['booking_form']));
        console.log(currentStep.value)
      }

      if(currentStep.value == 4 && localStorage.getItem('validate_form') != 'false'){
        localStorage['booking_form'] = JSON.stringify(JSON.parse(localStorage['booking_form']).concat(JSON.parse(localStorage["payment_form"])));
        console.log(JSON.parse(localStorage['booking_form']));
        console.log(currentStep.value)
      }
    };

    const previousStep = () => {
      currentStep.value -= 1;
    };

    const progressBar = computed(() => {
      return (100 / 4) * currentStep.value + "%";
    });

    return { currentStep, previousStep, nextStep, stepForms, progressBar };
  },
  components: {
    DashboardLayout,
    ButtonSolidBlue,
    Form,
    Field,
    ErrorMessage,
    CubeIcon,
    TruckIcon,
    LocationMarkerIcon,
    CreditCardIcon,
    NewspaperIcon,
    ButtonOutlineBlue,
  },
  data() {
      return {
          role: localStorage.getItem('role'),
          user_id: localStorage.getItem('user_id'),
          sales: []
      };
  },
  methods: {
    storeBooking(e) {
      e.preventDefault();
      let currentObj = this;
      let arrayField = new Map();
      JSON.parse(localStorage.getItem("booking_form")).forEach(item => {
          arrayField.set(item.name, item.value);
      })
      let booking_form = JSON.parse(JSON.stringify([...arrayField]));

      $('#pay-button').attr('disabled', 'true');
      $('.animate-spin').show();
      setTimeout(function() { 
        Booking.store({booking_form})
        .then(function (response) {        
          var payment_method_input = JSON.parse(localStorage['booking_form'])[17]['value'];
          currentObj.output = response.data;
          if(payment_method_input == 'Cash On Delivery'){
            $('.animate-spin').hide();
            window.location.replace(window.location.origin + '/booking-details/' + localStorage.getItem('booking_id'));
          } else {
            if (payment_method_input == 'Paymaya') {
              $('#payment_method_qr').attr('src', window.location.origin + '/img/paymaya-qr.jpg');
              document.querySelector('#btn-print-qr').setAttribute('href', window.location.origin + '/img/print-paymaya.jpg');
              $('#payment_method_text').html('Paymaya');
              $('#account_number').html('09087702170');
              $('#account_name').html('Joselito Ocol Jr');
            } else if (payment_method_input == 'GCash') {
              $('#payment_method_qr').attr('src', window.location.origin + '/img/gcash-qr.jpg');
              document.querySelector('#btn-print-qr').setAttribute('href', window.location.origin + '/img/print-gcash.jpg');
              $('#payment_method_text').html('GCash');
              $('#account_number').html('09156819270');
              $('#account_name').html('Joselito Jr O.');
            }

            $('.animate-spin').hide();
            $('#btn-booking-mdl').click();
          }
        })
        .catch(function (error) {
          currentObj.output = error;
        });
      }, 2000);
    },
    payBooking(e) {
      e.preventDefault();
      let currentObj = this;
      let booking_id = localStorage.getItem('booking_id');
      
      Booking.payBooking({
          booking_id: booking_id,
          full_name: this.sales.full_name,
          mobile_number: this.sales.mobile_number,
          amount: this.sales.amount,
          ref_number: this.sales.ref_number,
          payment_method: JSON.parse(localStorage['booking_form'])[15]['value'],
          user_id: this.user_id,
          link: window.location.origin + '/booking-details/' + booking_id
      })
      .then(function (response) {
        window.location.replace(window.location.origin + '/booking-details/' + localStorage.getItem('booking_id'));
        currentObj.output = response.data;
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    },
    redirectBooking(){
      this.$router.push('/bookings');
    },
    showModal() {
      let element = this.$refs.modal.$el
      $(element).modal('show')
    },
    printImg() {
      var payment_method_input = JSON.parse(localStorage['booking_form'])[17]['value'];
      var printWindow = window.open('', 'Print Window','width=100%');
      printWindow.document.write('<html><head><title>Print Window</title>');
      printWindow.document.write('</head><body ><img style="width:500px;display:block;margin-left:auto;margin-right:auto;" src=\'');
      if(payment_method_input == 'Paymaya'){
        printWindow.document.write(window.location.origin + '/img/print-paymaya.jpg');
      } else {
        printWindow.document.write(window.location.origin + '/img/print-gcash.jpg');
      }
      printWindow.document.write('\' /></body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }
};
</script>
