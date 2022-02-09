<template>
  <DashboardLayout
    navClass="md:border-b-0 border-b"
    mobileTitle="Create Delivery"
  >
    <section class="px-3 py-4 sm:p-6">
      <div class="mb-6 hidden items-center justify-between md:flex">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Create Delivery
        </h2>
      </div>

      <Form>
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
      </Form>
    </section>
  </DashboardLayout>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import DashboardLayout from "@/views/DashboardLayout.vue";
import ButtonSolidBlue from "@/components/buttons/ButtonSolidBlue.vue";

export default {
  name: "Deliveries",
  setup() {
    return {};
  },
  components: {
    DashboardLayout,
    ButtonSolidBlue,
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
