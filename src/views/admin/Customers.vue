<template>
  <DashboardLayout navClass="border-b-0" mobileTitle="Customers">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl">
          Customers
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
              @keyup="searchCustomers"
              @keyup.enter="fetchCustomers"
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
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        PIN
                      </th>
                      <th
                        scope="col"
                        class="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">View Profile</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-grey-light bg-white" v-if="customers != ''">
                    <tr v-for="customer in customers" :key="customer.id">
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ customer.phone_number }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <div class="text-sm">{{ customer.pin }}</div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 w-48">
                        <div v-if="customer.verified == 1">
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-green-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              Verified
                            </p>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            class="flex w-auto items-center justify-center rounded-full bg-green-light py-0.5 px-1"
                          >
                            <p class="text-sm font-semibold text-white">
                              Not Verified
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-right text-sm"
                      >
                        <span
                        class="text-blue-light hover:text-blue cursor-pointer view-profile" @click="viewProfile(customer.id)"
                        >View Profile</span>
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
          v-if="customers != ''"
        >
          <p>
            Showing <span>{{ entries }}</span> to
            <span>{{ show_entries }}</span> of
            <span>{{ pagination.total }}</span> entries
          </p>
          <div>
            <pagination :pagination="pagination" @paginate="fetchCustomers" />
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Data Mobile -->
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
              Verified
            </button>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <button
              :class="[selected ? 'border-blue text-blue' : 'bg-white']"
              class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
            >
              Not Verified
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div v-if="verified != ''" class="my-3 grid gap-y-2">
              <div v-for="customer in verified"
                :key="customer.id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Phone Number: {{ customer.phone_number }}</p>
                  <p class="font-bold">PIN: {{ customer.pin }}</p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                    <span
                    class="text-sm font-semibold text-blue view-profile" @click="viewProfile(customer.id)"
                    >View Profile</span>
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
                  No customers yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all the customers here.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div v-if="not_verified != ''" class="my-3 grid gap-y-2">
              <div v-for="customer in not_verified"
                :key="customer.customer_id" class="grid gap-y-3 rounded-md bg-white p-3 shadow"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold">Phone Number: {{ customer.phone_number }}</p>
                  <p class="font-bold">PIN: {{ customer.pin }}</p>
                </div>

                <div class="flex items-center space-x-1 text-blue">
                  <div
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-light"
                  >
                    <CubeIcon class="h-3 w-3 text-blue" />
                  </div>
                  <router-link :to='{name:"Customer Details",params:{id:customer.id}}' class="text-sm font-semibold text-blue"
                          >View Details</router-link>
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
                  No customers yet?
                </h6>
                <p class="block leading-6 text-grey-dark">
                  You'll see all the customers.
                </p>
              </div>
            </div>
          </TabPanel>
          
        </TabPanels>
      </TabGroup>
      
    </section>

    <!-- View Payment Modal -->
    <button type="button"
    class="hidden inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    data-bs-toggle="modal" data-bs-target="#view-payment-details-modal" id="btn-view-profile">
    Launch static backdrop modal
    </button>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="view-payment-details-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
            Customer Profile
            </h5>
            <button type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          <div v-if="customer_details" class="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div class="grid-cols-1 lg:col-span-3">
                  <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                  <img src="/img/profile-default.jpg">
                  </div>
              </div>

              <div class="col-span-1 lg:col-span-9">
                  <div class="text-center lg:text-left">
                  <h2 class="text-2xl font-bold text-zinc-700">{{ customer_details.first_name +' '+ 
                  customer_details.middle_name +' '+ 
                  customer_details.last_name +' '+ 
                  customer_details.name_extention }}</h2>
                  <p class="mt-2 font-semibold text-zinc-700">{{ customer_details.email }}</p>
                  <p class="mt-4 text-zinc-500">
                  <h3 class="text-l font-bold text-zinc-700" v-if="customer_details.house_number || customer_details.street || customer_details.barangay || customer_details.city || customer_details.province || customer_details.zip_code">
                  Address: </h3>
                  {{ customer_details.house_number +' '+ 
                  customer_details.street +' '+ 
                  customer_details.barangay +' '+ 
                  customer_details.city +' '+ 
                  customer_details.province +' '+ 
                  customer_details.zip_code }}</p>
                  </div>
              </div>
          </div>
          <div v-else class="divide-y divide-gray-100 dark:divide-gray-700">
              <p class="block leading-6 text-grey-dark text-center m-5">
                  You'll see the customer details here.
              </p>
          </div>  
        </div>
        <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal">
            Close
            </button>
        </div>
        </div>
    </div>
    </div>

  </DashboardLayout>
</template>

<script>
import $ from "jquery";
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
  LocationMarkerIcon,
} from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  data() {
    return {
      offset: 4,
      pagination: {},
      customers: [],
      verified: [],
      not_verified: [],
      customer_details: {},
      search: "",
      show_entries: "5",
      role: localStorage.getItem('role')
    };
  },
  created() {
      this.fetchCustomers(),
      this.fetchVerified(),
      this.fetchNotVerified();
  },
  methods: {
    fetchCustomers() {
      let current_page = this.pagination.current_page;
      let pageNum = current_page ? current_page : 1;

      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `users/customers?page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.customers.pagination;
            this.customers = response.data.customers.collection;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `users/customers/search?q=${this.search}&page=${pageNum}&entries=${this.show_entries}`, {
              withCredentials: true,  
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.customers.pagination;
            this.customers = response.data.customers.collection;
          });
      }
    },

    searchCustomers: _.debounce(function () {
      if (this.search != "") {
        axios
          .get(
            process.env.VUE_APP_API +
              `users/customers/search?q=${this.search}&page=drivers&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.customers.pagination;
            this.customers = response.data.customers.collection;
          });
      }
    }),

    showEntries(event) {
      if (this.search == "") {
        axios
          .get(
            process.env.VUE_APP_API + "users/customers?entries=" + event.target.value, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.customers.pagination;
            this.customers = response.data.customers.collection;
            this.show_entries = event.target.value;
          });
      } else {
        axios
          .get(
            process.env.VUE_APP_API +
              `users/customers/search?q=${this.search}&entries=${this.show_entries}`, {
              withCredentials: true,
              headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
              "Access-Control-Allow-Origin": "*"
              }
            }
          )
          .then((response) => {
            this.pagination = response.data.customers.pagination;
            this.customers = response.data.customers.collection;
          });
      }
    },

    fetchVerified() {
      axios.get(process.env.VUE_APP_API + `users/customers`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.verified = response.data.verified;
      });
    },

    fetchNotVerified() {
      axios.get(process.env.VUE_APP_API + `users/customers`, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.not_verified = response.data.not_verified;
      });
    },

    viewProfile(id) {
      let currentObj = this;
      axios.get(process.env.VUE_APP_API + `users/customer/${id}`, {
        withCredentials: true,  
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then(response=>{     
        $('#btn-view-profile').click();
        this.customer_details = response.data.customer

        if(response.data.customer.middle_name == undefined){
            this.customer_details.middle_name = ''
        }

        if(response.data.customer.name_extention == undefined){
            this.customer_details.name_extention = ''
        }

        if(response.data.customer.house_number == undefined){
            this.customer_details.house_number = ''
        }

        if(response.data.customer.street == undefined){
            this.customer_details.street = ''
        }
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    }
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
    LocationMarkerIcon,
  },
};
</script>
