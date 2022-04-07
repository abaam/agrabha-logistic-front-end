<template>
  <DashboardLayout mobileTitle="Payment Successful">
    <section class="hidden px-3 py-6 md:block md:p-6">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Payment Successful
        </h2>

        <div class="py-16">
            <div class="container m-auto px-6">

            <div class="lg:flex justify-between items-center">
                <div class="lg:w-4/12 lg:p-0 p-7">
                    <h1 class="text-center text-2xl font-bold leading-tight mb-3 capitalize">Tracking QR Code</h1>
                    <img class="mx-auto w-60" src="../../../public/img/qrcode_lab.agrabah.ph.png" alt="Agrabah Logistics">

                </div>
                    <div class="lg:w-7/12 order-2">
                        <div class="bg-gray-50 dark:bg-gray-800 w-full flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Trace Info</h3>
                        <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 xl:mt-8">
                                        <p class="text-sm font-semibold uppercase">Pick Up</p>
                                        <p>180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                        <p class="text-sm font-semibold uppercase">Drop Off</p>
                                        <p>180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                        <p class="text-sm font-semibold uppercase">Note</p>
                                        <textarea class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark" placeholder="Bio"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </DashboardLayout>
</template>

<script>
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";

export default {
  components: {
    DashboardLayout,
  },
};
</script>
