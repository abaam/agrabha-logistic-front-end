<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4 flex items-center gap-2">
      <CreditCardIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Payment Method</h6>
    </div>
    <div class="mb-2">
      <label
        for="cod"
        class="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border border-grey-light px-6 py-5"
      >
        <div class="flex items-center justify-start space-x-4">
          <div class="h-7 w-8 rounded bg-green-light text-center text-white">
            <span class="text-xs font-semibold">PHP</span>
          </div>
          <div class="grid">
            <span class="block font-semibold">Cash on Delivery (COD)</span>
          </div>
        </div>
        <Field type="radio" as="input" id="cod" name="cod" value="1" />
      </label>
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="cod"
      />
    </div>
    <div class="">
      <label
        for="gcash"
        class="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border border-grey-light px-6 py-5"
      >
        <div class="flex items-center justify-start space-x-4">
          <img
            src="../../../../public/img/gcash-logo.png"
            alt="GCash Logo"
            class="h-7 w-8 rounded"
          />
          <span class="block font-semibold">GCash</span>
        </div>
        <Field type="radio" as="input" id="gcash" name="gcash" value="2" />
      </label>
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="gcash"
      />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { CreditCardIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    CreditCardIcon,
    Field,
    ErrorMessage,
  },
};
</script>
