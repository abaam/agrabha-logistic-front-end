<template>
  <DashboardLayout navClass="border-b-0" mobileTitle="Deliveries">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Deliveries
        </h2>

        <router-link
          to="/deliveries/create"
          class="focus:outline-none flex justify-center rounded-md border border-transparent bg-blue-light py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:bg-blue"
          >Create delivery</router-link
        >
      </div>

      <!-- Table -->
      <div class="hidden gap-y-3 rounded-md bg-white py-6 shadow md:grid">
        <div
          class="flex items-center justify-between px-6 md:flex-col md:space-y-2 lg:flex-row lg:space-y-0"
        >
          <!-- Filter -->
          <div class="flex items-center space-x-2">
            <p>Show</p>
            <select
              v-model="showEntry"
              @change="showEntries($event)"
              class="focus:outline-none relative block w-20 appearance-none rounded border border-grey px-3 py-2 text-gray-900 focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
            <p>entries</p>
          </div>

          <!-- Search -->
          <div class="flex items-center space-x-1">
            <p>Search:</p>
            <input
              type="text"
              v-model="search"
              @keyup="searchDelivery"
              @keyup.enter="fetchDeliveries"
              class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-900 focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
            />
          </div>
        </div>

        <section class="container mx-auto grid grid-cols-1">
          <div class="-my-2 overflow-x-auto">
            <div class="inline-block min-w-full py-2 align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-grey-light">
                  <thead class="bg-grey-light bg-opacity-30">
                    <tr>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Delivery Date
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Delivery ID
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Origin
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Cost
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="deliveries != ''"
                    class="divide-y divide-grey-light bg-white"
                  >
                    <tr v-for="delivery in deliveries" :key="delivery.id">
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ delivery.delivery_date }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ delivery.id }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ delivery.origin }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ delivery.destination }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ delivery.cost }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div v-if="delivery.status == 1">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-green-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-green">
                              Delivered
                            </p>
                          </div>
                        </div>
                        <div v-else-if="delivery.status == 2">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-blue-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-blue">
                              In Transit
                            </p>
                          </div>
                        </div>
                        <div v-else-if="delivery.status == 3">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-orange-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-orange">
                              To Deliver
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-right text-sm"
                      >
                        <a href="#" class="text-blue-light hover:text-blue"
                          >View details</a
                        >
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="7" class="p-6">
                        <img
                          class="mx-auto w-24"
                          src="../../../../public/svg/no_data.svg"
                          alt="No records found"
                        />
                        <p class="mt-4 block text-center">No record found.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div
          class="flex items-center justify-between px-6 md:flex-col md:space-y-2 lg:flex-row lg:space-y-0"
          v-if="deliveries != ''"
        >
          <p>
            Showing <span>{{ entries }}</span> to
            <span>{{ showEntry }}</span> of
            <span>{{ pagination.total }}</span> entries
          </p>
          <div>
            <pagination :pagination="pagination" @paginate="fetchDeliveries" />
          </div>
        </div>
      </div>
      <!-- /Table -->
    </section>

    <section class="relative grid px-3 md:hidden md:p-6 md:py-6">
      <TabGroup>
        <TabList
          class="sticky top-14 z-40 -mx-3 flex justify-evenly border-b border-grey-light bg-white md:mx-0"
        >
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              To Deliver
            </button>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              In Transit
            </button>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              Delivered
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div v-if="toDeliver != ''" class="my-3 grid gap-y-2">
              <div
                v-for="delivery in toDeliver"
                :key="delivery.id"
                class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">{{ delivery.delivery_id }}</p>
                  <p class="font-bold">{{ delivery.cost }}</p>
                </div>

                <div class="block">
                  <p>{{ delivery.description }}</p>
                  <p class="text-sm text-grey">
                    Weight: <span>{{ delivery.weight }}</span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-orange">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-light"
                  >
                    <CubeIcon class="h-3 w-3 text-orange" />
                  </div>
                  <p class="text-sm font-semibold text-orange">To Deliver</p>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No deliveries yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your deliveries to be delivered here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="inTransit != ''" class="my-3 grid gap-y-2">
              <div
                v-for="delivery in inTransit"
                :key="delivery.id"
                class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">{{ delivery.delivery_id }}</p>
                  <p class="font-bold">{{ delivery.cost }}</p>
                </div>

                <div class="block">
                  <p>{{ delivery.description }}</p>
                  <p class="text-sm text-grey">
                    Weight: <span>{{ delivery.weight }}</span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <TruckIcon class="h-3 w-3 text-blue" />
                  </div>
                  <p class="text-sm font-semibold text-blue">In Transit</p>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No deliveries yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your deliveries in transit here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="delivered != ''" class="my-3 grid gap-y-2">
              <div
                v-for="delivery in delivered"
                :key="delivery.id"
                class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">{{ delivery.delivery_id }}</p>
                  <p class="font-bold">{{ delivery.cost }}</p>
                </div>

                <div class="block">
                  <p>{{ delivery.description }}</p>
                  <p class="text-sm text-grey">
                    Weight: <span>{{ delivery.weight }}</span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-green">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-green-light"
                  >
                    <CheckIcon class="h-3 w-3 text-green" />
                  </div>
                  <p class="text-sm font-semibold text-green">Delivered</p>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No deliveries yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your delivered deliveries here.
                </p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <router-link
        to="/deliveries/create"
        class="focus:outline-none fixed bottom-3 right-3 z-40 flex justify-center rounded-full border border-transparent bg-blue-light p-3 font-medium text-white hover:bg-blue focus:bg-blue"
        ><PlusIcon class="h-5 w-5"></PlusIcon
      ></router-link>
    </section>
  </DashboardLayout>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";
import Pagination from "@/components/Pagination.vue";
import {
  TruckIcon,
  CubeIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  setup() {
    const toDeliver = ref([]),
      inTransit = ref([]),
      delivered = ref([]),
      deliveries = ref([]),
      showEntry = ref(5),
      entries = ref(5),
      search = ref(null),
      pagination = ref({});

    // Fetch all deliveries
    onMounted(() => {
      fetchDeliveries();
      searchDelivery();
    });

    // Fetch data
    axios
      .get(process.env.VUE_APP_API + `deliveries`)
      .then((response) => {
        toDeliver.value = response.data.to_deliver;
        inTransit.value = response.data.in_transit;
        delivered.value = response.data.delivered;
      })
      .catch((error) => console.log(error));

    const fetchDeliveries = () => {
      let currentPage = pagination.value.current_page;
      let pageNum = currentPage ? currentPage : 1;

      if (search.value == null) {
        axios
          .get(
            process.env.VUE_APP_API +
              `deliveries?page=${pageNum}&entries=${entries.value}`
          )
          .then((response) => {
            pagination.value = response.data.deliveries.pagination;
            deliveries.value = response.data.deliveries.collection;
          })
          .catch((error) => console.log(error));
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `deliveries/search?q=${search.value}&page=${pageNum}&entries=${entries.value}`
          )
          .then((response) => {
            pagination.value = response.data.deliveries.pagination;
            deliveries.value = response.data.deliveries.collection;
          })
          .catch((error) => console.log(error));
      }
    };

    // Search
    const searchDelivery = _.debounce(function (search) {
      if (search.target.value != null) {
        axios
          .get(
            process.env.VUE_APP_API +
              `deliveries/search?q=${search.target.value}&entries=${entries.value}`
          )
          .then((response) => {
            pagination.value = response.data.deliveries.pagination;
            deliveries.value = response.data.deliveries.collection;
            entries.value = response.data.deliveries.collection.length;
          })
          .catch((error) => console.log(error));
      }
    });

    // Filter entries
    const showEntries = (event) => {
      if (search.value == null) {
        axios
          .get(
            process.env.VUE_APP_API + "deliveries?entries=" + event.target.value
          )
          .then((response) => {
            pagination.value = response.data.deliveries.pagination;
            deliveries.value = response.data.deliveries.collection;
            entries.value = event.target.value;
          })
          .catch((error) => console.log(error));
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `deliveries/search?q=${search.value}&entries=${entries.value}`
          )
          .then((response) => {
            pagination.value = response.data.deliveries.pagination;
            deliveries.value = response.data.deliveries.collection;
          })
          .catch((error) => console.log(error));
      }
    };

    return {
      toDeliver,
      inTransit,
      delivered,
      deliveries,
      entries,
      showEntry,
      showEntries,
      fetchDeliveries,
      pagination: Pagination,
      searchDelivery,
    };
  },
  components: {
    DashboardLayout,
    TruckIcon,
    CubeIcon,
    CheckIcon,
    PlusIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
};
</script>
