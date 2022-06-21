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
            data-bs-toggle="modal" data-bs-target="#pay_info" 
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
          

          <!-- Modal -->
          <div class="modal fade fixed top-20 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto mr-20"
            id="pay_info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog relative w-auto pointer-events-none">
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
                  <img class="mx-auto w-60 self-center" src="../../public/img/paymaya-qr.png" alt="Agrabah Logistics">
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
                <div
                  class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal">Close</button>
                  <button type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Done</button>
                </div>
              </div>
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
import { ref, shallowRef, computed } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import DashboardLayout from "@/views/DashboardLayout.vue";
import ButtonSolidBlue from "@/components/buttons/ButtonSolidBlue.vue";
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
  localStorage.removeItem('distance')

  // $('#frm-pay').submit(function(e) {
  //   e.preventDefault();

  //   $.ajax({
  //     type: 'POST',
  //     url: process.env.VUE_APP_API + `bookings/store`,
  //     data: { 
  //       arrayField: localStorage['booking_form'],
  //     },
  //     beforeSend: function (xhr) {
  //         xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('csrf_token'));
  //     },
  //     dataType: 'jsonp',
  //     crossDomain: true,
  //     success: function(data) {
  //         $('#pay-button').attr("disabled", true);
  //         setTimeout(function() {
  //           $('#pay-button').attr("disabled", false);
  //           $('#pay-button').click();
  //         }, 1000);
  //     },
  //     error:function (xhr, error, ajaxOptions, thrownError){
  //       console.log(xhr);
  //     }
  //   });
  // });
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
  },
  data() {
      return {
          role: localStorage.getItem('role')
      };
  },
  methods: {
    storeBooking(e) {
      e.preventDefault();
      let currentObj = this;
      let arrayField = localStorage['booking_form'];

      axios.post(process.env.VUE_APP_API + "bookings/store", {
          arrayField
      }, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      })
      .then(function (response) {
          currentObj.output = response.data;
      })
      .catch(function (error) {
          currentObj.output = error;
      });
    }
  },
};
</script>
