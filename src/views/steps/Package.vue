<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6" id="package_form">
    <div class="mb-4 flex items-center gap-2">
      <CubeIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Package Details</h6>
    </div>
    <div class="relative mb-4">
      <input id="hdn-booking-id" type="hidden" val="" name="booking_id">
      <Field
        :rules="isRequired"
        autofocus
        type="text"
        as="input"
        id="item"
        name="package_item"
        placeholder="Item"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="item"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Item</label
      >
      <ErrorMessage
      class="my-1 block text-sm font-semibold text-purple"
      name="package_item"
      />
    </div>
    <div class="mb-4 grid grid-cols-2 gap-2">
      <div class="relative">
        <Field
          :rules="isRequired"
          type="number"
          as="input"
          id="quantity"
          name="package_quantity"
          placeholder="Quantity"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="quantity"
          class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Quantity</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="package_quantity"
        />
      </div>
      <div class="relative">
        <Field
          :rules="isRequired"
          type="input"
          as="select"
          id="unit"
          name="package_unit"
          placeholder="Unit"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        >
          <option value="t">t</option>
          <option value="Kg">Kg</option>
          <option value="Piece">Piece</option>
          <option value="Box">Box</option>
        </Field>
        <label
        for="unit"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Select Unit Type</label
      >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="package_unit"
        />
      </div>
    </div>
    <div class="relative">
      <Field
        :rules="isRequired"
        as="textarea"
        id="note"
        name="package_note"
        placeholder="Note"
        class="mb-4 peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="note"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Description</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="package_note"
      />
      <div class="mb-4 flex items-center gap-2">
        <UserIcon class="h-8 w-8 text-blue-light" />
        <h6 class="text-sm font-semibold uppercase">Receiver's Information</h6>
      </div>
      <div class="mb-4 grid grid-cols-2 gap-2">
      <div class="relative">
        <Field
          :rules="isRequired"
          type="text"
          as="input"
          id="receiver"
          name="receiver_name"
          placeholder="Name"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="receiver"
          class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Name</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="receiver_name"
        />
      </div>
      <div class="relative">
        <Field
          :rules="isRequired"
          type="text"
          as="input"
          id="contact_number"
          name="contact_number"
          placeholder="Contact Number"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="contact_number"
          class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Contact Number</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="contact_number"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import { CubeIcon, UserIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    CubeIcon,
    Field,
    ErrorMessage, UserIcon
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        var package_form = [];
        $('#package_form input, #package_form textarea, #package_form select').each(function(){
          package_form.push({
            name: this.name, 
            value: this.value
          });
        });
        
        if(!package_form.some(function(e){return (!e || 0 === e.length);})){
          localStorage['package_form'] = JSON.stringify(package_form);
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
