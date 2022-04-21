<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6" id="vehicle_form">
    <div class="mb-4 flex items-center gap-2">
      <TruckIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Vehicle Type</h6>
    </div>
    <div class="relative">
      <Field
        :rules="isRequired"
        as="select"
        id="vehicle-type"
        name="vehicle_type"
        placeholder="Select Vehicle Type"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      >
        <option value="Truck">Truck</option>
        <option value="Van">Van</option>
        <option value="Car">Car</option>
      </Field>
      <label
        for="vehicle-type"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Select Vehicle Type</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="vehicle_type"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import { TruckIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    TruckIcon,
    Field,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        var vehicle_form = [];
        var selected_vehicle = $('#vehicle_form option:selected').val();
        vehicle_form.push(selected_vehicle)
        
        if(!vehicle_form.some(function(e){return (!e || 0 === e.length);})){
          localStorage['vehicle_form'] = JSON.stringify(vehicle_form);
          localStorage.setItem('validate_form', true);
        }

        return true;
      } else {
        localStorage.setItem('validate_form', false);
        return 'This is required';
      }
    },
  },
};
</script>
