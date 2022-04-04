<template>
  <!-- Delivery Address -->
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <LocationMarkerIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Location</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Change</span
        >
      </div>
    </div>
    <div class="mb-2 h-32 w-full rounded border border-grey-light">
      Google map where drop off is located here...
    </div>
    <p class="block">16 Juan S. Estevez St Legazpi City</p>
  </div>
  <!-- /Delivery Address -->

  <!-- Payment method -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CreditCardIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Payment Method</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <img
          src="../../../../../public/img/gcash-logo.png"
          alt="GCash Logo"
          class="w-8 rounded"
        />
        <div class="grid">
          <span class="block font-semibold">GCash</span>
          <span class="block">09*****8520</span>
        </div>
      </div>
      <p class="font-semibold">₱ 127.00</p>
    </div>
  </div>
  <!-- /Payment method -->

  <!-- Vehicle Type -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <TruckIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Vehicle Type</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <p>To be delivered via <span class="font-semibold">Truck</span>.</p>
  </div>
  <!-- /Vehicle Type -->

  <!-- Delivery summary -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CubeIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Package Details</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Sample details</p>
      <p>₱ 88.00</p>
    </div>
    <hr class="mb-2" />
    <div class="mb-2 flex items-center justify-between">
      <p class="text-grey-dark">Subtotal</p>
      <p class="text-grey-dark">₱ 88.00</p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-grey-dark">Delivery Fee</p>
      <p class="text-grey-dark">₱ 39.00</p>
    </div>
  </div>
  <!-- /Delivery summary -->
</template>

<script>
import {
  TruckIcon,
  CubeIcon,
  PencilIcon,
  LocationMarkerIcon,
  CreditCardIcon,
} from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    CubeIcon,
    PencilIcon,
    TruckIcon,
    LocationMarkerIcon,
    CreditCardIcon,
  },
};
</script>
