<template>
  <DashboardLayout mobileTitle="Quick Search">
    <section class="hidden px-3 py-6 md:block md:p-6">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Quick Search
        </h2>
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
