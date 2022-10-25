<template>
  <DashboardLayout navClass="border-b-0" mobileTitle="Deliveries">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Deliveries
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
              @keyup="searchBooking"
              @keyup.enter="fetchBookings"
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
                        Package Item
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Receiver's Name
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Receiver's Contact
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Vehicle Type
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Drop Off
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Pick Up
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Date/Time
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                        Booking Status
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-grey-light bg-white" v-if="bookings != ''">
                    <tr v-for="booking in bookings" :key="booking.booking_id">
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ booking.package_item }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ booking.receiver_name }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ booking.receiver_contact }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ booking.vehicle_type }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm truncate text-ellipsis w-60">{{ booking.drop_off }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm truncate text-ellipsis w-60">{{ booking.pick_up }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ booking.date_time }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 w-48">
                        <div v-if="booking.status == 1">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-green-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              Delivered
                            </p>
                          </div>
                        </div>
                        <div v-if="booking.status == 2">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-blue-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              To Receive
                            </p>
                          </div>
                        </div>
                        <div v-if="booking.status == 3 || booking.status == 5">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-orange-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              To Ship
                            </p>
                          </div>
                        </div>
                        <div v-if="booking.status == 4">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-red-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              Cancelled
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-right text-sm"
                      >
                        <router-link :to='{name:"Booking Details",params:{id:booking.booking_id}}' class="text-blue-light hover:text-blue"
                          >View details</router-link>
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
          v-if="bookings != ''"
        >
          <p>
            Showing <span>{{ entries }}</span> to
            <span>{{ show_entries }}</span> of
            <span>{{ pagination.total }}</span> entries
          </p>
          <div>
            <pagination :pagination="pagination" @paginate="fetchBookings" />
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Data Mobile -->
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
              To Receive
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
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              Cancelled
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div v-if="to_receive != ''" class="my-3 grid gap-y-2">
              <div v-for="booking in to_receive"
                :key="booking.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Package Item: {{ booking.package_item }}</p>
                  <p class="font-bold">Vehicle Type: {{ booking.vehicle_type }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Drop Off:</span> {{ booking.drop_off }}
                  <p>
                  <span class="font-bold">Pick Up:</span> <span>{{ booking.pick_up }}</span>
                  </p>
                  <span class="font-bold">Date/Time:</span> {{ booking.date_time }}
                  <p>
                  <span class="font-bold">Payment Method:</span> 
                  <span v-if="booking.payment_method == 0">
                    Paymaya
                  </span>
                  <span v-else>
                    Gcash
                  </span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:booking.booking_id}}' class="text-sm font-semibold text-blue"
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
                  No bookings yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your bookings to be shipped here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="delivered != ''" class="my-3 grid gap-y-2">
              <div v-for="booking in delivered"
                :key="booking.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Package Item: {{ booking.package_item }}</p>
                  <p class="font-bold">Vehicle Type: {{ booking.vehicle_type }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Drop Off:</span> {{ booking.drop_off }}
                  <p>
                  <span class="font-bold">Pick Up:</span> <span>{{ booking.pick_up }}</span>
                  </p>
                  <span class="font-bold">Date/Time:</span> {{ booking.date_time }}
                  <p>
                    <span class="font-bold">Payment Method:</span> 
                  <span v-if="booking.payment_method == 0">
                    Paymaya
                  </span>
                  <span v-else>
                    Gcash
                  </span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:booking.booking_id}}' class="text-sm font-semibold text-blue"
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
                  No bookings yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your bookings to be received here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="cancelled != ''" class="my-3 grid gap-y-2">
              <div v-for="booking in cancelled"
                :key="booking.booking_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Package Item: {{ booking.package_item }}</p>
                  <p class="font-bold">Vehicle Type: {{ booking.vehicle_type }}</p>
                </div>

                <div class="block">
                  <span class="font-bold">Drop Off:</span> {{ booking.drop_off }}
                  <p>
                  <span class="font-bold">Pick Up:</span> <span>{{ booking.pick_up }}</span>
                  </p>
                  <span class="font-bold">Date/Time:</span> {{ booking.date_time }}
                  <p>
                    <span class="font-bold">Payment Method:</span> 
                  <span v-if="booking.payment_method == 0">
                    Paymaya
                  </span>
                  <span v-else>
                    Gcash
                  </span>
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Booking Details",params:{id:booking.booking_id}}' class="text-sm font-semibold text-blue"
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
                  No bookings yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all your bookings to be delivered here.
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
      bookings: [],
      to_receive: [],
      delivered: [],
      cancelled: [],
      search: "",
      show_entries: "5",
      role: localStorage.getItem('role')
    };
  },
  created() {
      this.fetchBookings(),
      this.fetchToReceive(),
      this.fetchDelivered(),
      this.fetchCancelled();
  },
  methods: {
    fetchBookings() {
      let current_page = this.pagination.current_page;
      let pageNum = current_page ? current_page : 1;

      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `bookings/deliveries?page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.bookings.pagination;
            this.bookings = response.data.bookings.collection;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `bookings/deliveries/search?q=${this.search}&page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.bookings.pagination;
            this.bookings = response.data.bookings.collection;
          });
      }
    },

    searchBooking: _.debounce(function () {
      if (this.search != "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `bookings/deliveries/search?q=${this.search}&page=transaction&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.bookings.pagination;
            this.bookings = response.data.bookings.collection;
          });
      }
    }),

    showEntries(event) {
      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API + "bookings/deliveries?entries=" + event.target.value, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.bookings.pagination;
            this.bookings = response.data.bookings.collection;
            this.show_entries = event.target.value;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `bookings/deliveries/search?q=${this.search}&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.bookings.pagination;
            this.bookings = response.data.bookings.collection;
          });
      }
    },

    fetchToReceive() {
      axios.get(process.env.VUE_APP_API + `bookings/deliveries`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.to_receive = response.data.to_receive;
      });
    },

    fetchDelivered() {
      axios.get(process.env.VUE_APP_API + `bookings/deliveries`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.delivered = response.data.delivered;
      });
    },

    fetchCancelled() {
      axios.get(process.env.VUE_APP_API + `bookings/deliveries`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.cancelled = response.data.cancelled;
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
