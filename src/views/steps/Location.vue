<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4 flex items-center gap-2">
      <LocationMarkerIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Location</h6>
    </div>
    <div class="mb-4 flex items-center gap-2">
      <img src="../../../public/img/google-map.png" alt="Agrabah Logistics">
    </div>
    <div class="relative mb-4">
      <Field
        type="text"
        as="input"
        id="pick-up"
        name="pick_up"
        placeholder="Pick Up"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="pick-up"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Pick Up</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="pick_up"
      />
    </div>
    <div class="relative mb-4">
      <Field
        type="text"
        as="input"
        id="drop-off"
        name="drop_off"
        placeholder="Drop Off"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="drop-off"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Drop Off</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="drop_off"
      />
    </div>
    <div class="relative">
      <Field
        type="datetime-local"
        as="input"
        id="date-time"
        name="date_time"
        placeholder="Date/Time"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="date-time"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Date/Time</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="date_time"
      />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { LocationMarkerIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    LocationMarkerIcon,
    Field,
    ErrorMessage,
  },
};
</script>
