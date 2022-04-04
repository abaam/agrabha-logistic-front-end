<template>
  <DashboardLayout
    navClass="md:border-b-0 border-b"
    mobileTitle="Create Delivery"
  >
    <section class="mx-auto max-w-7xl px-3 py-4 sm:p-6">
      <div class="mb-6 hidden items-center justify-between md:flex">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Create Delivery
        </h2>
      </div>

      <!-- <Form>
        <div class="rounded-md bg-white px-3 py-4 shadow sm:p-6">
          <div class="grid gap-x-3 md:grid-cols-6">
            <div class="mb-4 md:col-span-6">
              <label for="description" class="block text-sm font-semibold"
                >Description</label
              >
              <Field
                autofocus
                type="text"
                as="input"
                id="description"
                name="description"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="description"
              />
            </div>
            <div class="mb-4 md:col-span-3">
              <label for="origin" class="block text-sm font-semibold"
                >Origin</label
              >
              <Field
                type="text"
                as="input"
                id="origin"
                name="origin"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="origin"
              />
            </div>
            <div class="mb-4 md:col-span-3">
              <label for="destination" class="block text-sm font-semibold"
                >Destination</label
              >
              <Field
                type="text"
                as="input"
                id="destination"
                name="destination"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="destination"
              />
            </div>
            <div class="mb-4 md:col-span-2">
              <label for="weight" class="block text-sm font-semibold"
                >Weight (kg)</label
              >
              <Field
                type="number"
                as="input"
                id="weight"
                name="weight"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="weight"
              />
            </div>
            <div class="mb-4 md:col-span-2">
              <label for="height" class="block text-sm font-semibold"
                >Height (cm)</label
              >
              <Field
                type="number"
                as="input"
                id="height"
                name="height"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="height"
              />
            </div>
            <div class="mb-4 md:col-span-2">
              <label for="width" class="block text-sm font-semibold"
                >Width</label
              >
              <Field
                type="number"
                as="input"
                id="width"
                name="width"
                class="focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
              />
              <ErrorMessage
                class="my-1 block text-sm font-semibold text-purple"
                name="width"
              />
            </div>
          </div>
          <div class="hidden justify-end md:flex">
            <ButtonSolidBlue />
          </div>
        </div>

        <div
          class="fixed bottom-0 right-0 left-0 border-t bg-white p-3 md:hidden"
        >
          <ButtonSolidBlue buttonClass="w-full" />
        </div>
      </Form> -->
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
            class="block w-full"
          >
            Back
          </button> -->
          <button
            @click.prevent="nextStep"
            class="focus:outline-none flex w-full justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 font-semibold text-white hover:bg-blue focus:bg-blue"
          >
            <template v-if="currentStep === 0">Select vehicle</template>
            <template v-else-if="currentStep === 1"> Set location</template>
            <template v-else-if="currentStep === 2">Payment method</template>
            <template v-else-if="currentStep === 3">Review package</template>
            <template v-else>Pay ₱127.00</template>
          </button>
        </div>
      </Form>
    </section>
  </DashboardLayout>
</template>

<script>
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
      currentStep.value += 1;
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
};
</script>
