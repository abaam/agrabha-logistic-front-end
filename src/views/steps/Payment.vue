<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6" id="payment_form">
    <div class="mb-4 flex items-center gap-2">
      <CreditCardIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Payment Method</h6>
    </div>
    <div class="mb-2">
      <label
        for="paymaya"
        class="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border border-grey-light px-6 py-5"
      >
        <div class="flex items-center justify-start space-x-4">
          <img
            src="../../../public/img/paymaya-logo.png"
            alt="GCash Logo"
            class="h-7 w-8 rounded"
          />
          <div class="grid">
            <span class="block font-semibold">Paymaya</span>
          </div>
        </div>
        <Field :rules="isRequired" type="radio" as="input" id="paymaya" name="payment_method" value="Paymaya" />
      </label>
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="paymaya"
      />
    </div>
    <div class="">
      <label
        for="gcash"
        class="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border border-grey-light px-6 py-5"
      >
        <div class="flex items-center justify-start space-x-4">
          <img
            src="../../../public/img/gcash-logo.png"
            alt="GCash Logo"
            class="h-7 w-8 rounded"
          />
          <span class="block font-semibold">GCash</span>
        </div>
        <Field :rules="isRequired" type="radio" as="input" id="gcash" name="payment_method" value="GCash" />
      </label>
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="gcash"
      />
    </div>
    <div class="">
      <label
        for="cash-on-delivery"
        class="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border border-grey-light px-6 py-5"
      >
        <div class="flex items-center justify-start space-x-4">
          <TruckIcon
            class="h-7 w-8"
          />
          <span class="block font-semibold">Cash On Delivery</span>
        </div>
        <Field :rules="isRequired" type="radio" as="input" id="cash-on-delivery" name="payment_method" value="Cash On Delivery" />
      </label>
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="cash_on_delivery"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import { CreditCardIcon, TruckIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {};
  },
  components: {
    CreditCardIcon,
    TruckIcon,
    Field,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        var payment_form = [];
        var selected_payment_method = document.querySelector('input[name="payment_method"]:checked').value;
        payment_form.push({
          name: 'payment_method', 
          value: selected_payment_method
        });

        var checked_payment_method = document.querySelector('input[name="payment_method"]:checked');

        if (checked_payment_method != null) {
          localStorage['payment_form'] = JSON.stringify(payment_form);
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
