<template>
  <DashboardLayout navClass="border-b-0" mobileTitle="Sales">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Sales
        </h2>
      </div>

      <div class="hidden gap-y-3 rounded-md bg-white py-6 shadow md:grid">
        <div
          class="flex items-center justify-between px-6 md:flex-col md:space-y-2 lg:flex-row lg:space-y-0"
        >
          <div class="flex items-center space-x-2">
            <p>Show</p>
            <select
              v-model="show_entries"
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

          <div class="flex items-center space-x-1">
            <p>Search:</p>
            <input
              type="text"
              v-model="search"
              @keyup="searchSales"
              @keyup.enter="fetchSales"
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
                        Booking ID
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Payee's Full Name
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Payee's Mobile Number
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Reference Number
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Payment Method
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-grey-light bg-white" v-if="sales != ''">
                    <tr v-for="sale in sales" :key="sale.booking_id">
                        <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ sale.booking_id }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm" v-if="sale.full_name">{{ sale.full_name }}</div>
                        <div class="text-sm" v-else>N/A</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm" v-if="sale.mobile_number">{{ sale.mobile_number }}</div>
                        <div class="text-sm" v-else>N/A</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ sale.amount }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm" v-if="sale.ref_number">{{ sale.ref_number }}</div>
                        <div class="text-sm" v-else>N/A</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm" v-if="sale.payment_method == 0">Paymaya</div>
                        <div class="text-sm" v-else-if="sale.payment_method == 1">GCash</div>
                        <div class="text-sm" v-else>Cash On Delivery</div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="10" class="p-6">
                        <img
                          class="mx-auto w-24"
                          src="../../../public/svg/no_data.svg"
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
          v-if="sales != ''"
        >
          <p>
            Showing <span>{{ entries }}</span> to
            <span>{{ show_entries }}</span> of
            <span>{{ pagination.total }}</span> entries
          </p>
          <div>
            <pagination :pagination="pagination" @paginate="fetchSales" />
          </div>
        </div>
      </div>
    </section>

    <!-- Admin Data Mobile -->
    <section class="relative grid px-3 md:hidden md:p-6 md:py-6">
      <TabGroup>
        <TabList
          class="sticky top-14 -mx-3 flex justify-evenly border-b border-grey-light bg-white md:mx-0"
        >
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              Paymaya
            </button>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              GCash
            </button>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              Cash On Delivery
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div v-if="paymaya != ''" class="my-3 grid gap-y-2">
              <div v-for="sale in paymaya"
                :key="sale.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Booking ID: {{ sale.booking_id }}</p>
                  <p class="font-bold">Reference #: {{ sale.ref_number }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Full Name:</span> {{ sale.full_name }}
                  <p>
                  <span class="font-bold">Mobile Number:</span> <span>{{ sale.mobile_number }}</span>
                  </p>
                  <span class="font-bold">Amount:</span> {{ sale.amount }}
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:sale.booking_id}}' class="text-sm font-semibold text-blue"
                          >View details</router-link>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No Sales yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your sales here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="gcash != ''" class="my-3 grid gap-y-2">
              <div v-for="sale in gcash"
                :key="sale.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Booking ID: {{ sale.booking_id }}</p>
                  <p class="font-bold">Reference #: {{ sale.ref_number }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Full Name:</span> {{ sale.full_name }}
                  <p>
                  <span class="font-bold">Mobile Number:</span> <span>{{ sale.mobile_number }}</span>
                  </p>
                  <span class="font-bold">Amount:</span> {{ sale.amount }}
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:sale.booking_id}}' class="text-sm font-semibold text-blue"
                          >View details</router-link>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No Sales yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your sales here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="cash_on_delivery != ''" class="my-3 grid gap-y-2">
              <div v-for="sale in cash_on_delivery"
                :key="sale.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Booking ID: {{ sale.booking_id }}</p>
                  <p class="font-bold">Reference #: {{ sale.ref_number }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Full Name:</span> {{ sale.full_name }}
                  <p>
                  <span class="font-bold">Mobile Number:</span> <span>{{ sale.mobile_number }}</span>
                  </p>
                  <span class="font-bold">Amount:</span> {{ sale.amount }}
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:sale.booking_id}}' class="text-sm font-semibold text-blue"
                          >View details</router-link>
                </div>
              </div>
            </div>
            <div v-else class="my-20 grid h-96 place-items-center gap-1 px-3">
              <div class="px-3 py-6 text-center">
                <img
                  class="mx-auto w-48"
                  src="../../../public/svg/no_delivery.svg"
                  alt=""
                />
                <h6 class="mt-8 block text-xl font-semibold">
                  No Sales yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your sales here.
                </p>
              </div>
            </div>
          </TabPanel>
          
        </TabPanels>
      </TabGroup>
      
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
  SearchIcon,
} from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  data() {
    return {
      offset: 4,
      pagination: {},
      sales: [],
      paymaya: [],
      gcash: [],
      cash_on_delivery: [],
      search: "",
      show_entries: "5",
      role: localStorage.getItem('role')
    };
  },
  created() {
    this.fetchSales(),
    this.fetchPaymaya(),
    this.fetchGCash(),
    this.fetchCashOnDelivery();
  },
  methods: {
    fetchSales() {
      let current_page = this.pagination.current_page;
      let pageNum = current_page ? current_page : 1;

      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `sales?page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.sales.pagination;
            this.sales = response.data.sales.collection;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `sales/search?q=${this.search}&page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.sales.pagination;
            this.sales = response.data.sales.collection;
          });
      }
    },

    searchSales: _.debounce(function () {
      if (this.search != "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `sales/search?q=${this.search}&page=sales&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.sales.pagination;
            this.sales = response.data.sales.collection;
            console.log(response);
          });
      }
    }),

    showEntries(event) {
      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API + "sales?entries=" + event.target.value, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.sales.pagination;
            this.sales = response.data.sales.collection;
            this.show_entries = event.target.value;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `sales/search?q=${this.search}&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.sales.pagination;
            this.sales = response.data.sales.collection;
          });
      }
    },

    fetchPaymaya() {
      axios.get(process.env.VUE_APP_API + `sales`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.paymaya = response.data.paymaya;
      });
    },

    fetchGCash() {
      axios.get(process.env.VUE_APP_API + `sales`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.gcash = response.data.gcash;
      });
    },

    fetchCashOnDelivery() {
      axios.get(process.env.VUE_APP_API + `sales`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.cash_on_delivery = response.data.delivered;
      });
    },
  },
  components: {
    DashboardLayout,
    TruckIcon,
    CubeIcon,
    CheckIcon,
    SearchIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    pagination: Pagination,
    TabPanel,
  },
};
</script>
