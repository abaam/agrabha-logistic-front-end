<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4 flex items-center gap-2">
      <CubeIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Package Details</h6>
    </div>
    <div class="relative mb-4">
      <Field
        autofocus
        type="text"
        as="input"
        id="item"
        name="item"
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
        name="item"
      />
    </div>
    <div class="mb-4 grid grid-cols-2 gap-2">
      <div class="relative">
        <Field
          type="number"
          as="input"
          id="quantity"
          name="quantity"
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
          name="quantity"
        />
      </div>
      <div class="relative">
        <Field
          type="text"
          as="input"
          id="unit"
          name="unit"
          placeholder="Unit"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="unit"
          class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Unit</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="unit"
        />
      </div>
    </div>
    <div class="relative">
      <Field
        as="textarea"
        id="note"
        name="note"
        placeholder="Note"
        class="mb-4 peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="note"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Note</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="note"
      />
      <div class="mb-4 flex items-center gap-2">
        <UserIcon class="h-8 w-8 text-blue-light" />
        <h6 class="text-sm font-semibold uppercase">Receiver's Information</h6>
      </div>
      <div class="mb-4 grid grid-cols-2 gap-2">
      <div class="relative">
        <Field
          type="text"
          as="input"
          id="receiver"
          name="receiver"
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
          name="receiver"
        />
      </div>
      <div class="relative">
        <Field
          type="text"
          as="input"
          id="contact_number"
          name="contact-number"
          placeholder="Contact Number"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="contact-number"
          class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Contact Number</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="receiver"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
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
};
</script>
