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

      <Form>
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
            @click.prevent="createBooking" id="pay-button" 
            class="focus:outline-none flex w-full justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 font-semibold text-white hover:bg-blue focus:bg-blue"
          >
            Pay ₱127.00
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
        </div>
      </Form>
    </section>
  </DashboardLayout>
</template>

<script>
import $ from "jquery";
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
      createBooking(){
          alert('SUCCESS');
      }
  },
};
</script>
