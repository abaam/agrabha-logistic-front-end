<template>
  <DashboardLayout mobileTitle="Wallet">
    <!-- <section class="hidden px-3 py-6 md:block md:p-6">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Wallet
        </h2>
    </section> -->

    <main class="flex-1">
      <div class="md:w-1/2 w-sm-full rounded-lg border m-auto mt-10 mb-10 shadow-xl">
        <div class="grid md:grid-cols-6 gap-3 p-4 pl-7 pr-7 bg-green-lighter bg-opacity-200 rounded-t-lg">
          <!-- Description -->
          <div class="col-span-3 text-green">
            <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl" v-if="balance"> ₱ {{ balance }} </h2>
            <h2 class="block text-xl font-bold leading-6 md:text-2xl lg:text-3xl" v-else> ₱ 0</h2>
            <p class="text-lg"> Current Wallet Balance </p>
          </div>

                <!-- Image -->
          <div class="col-span-3 flex items-center md:justify-end">
            <button class="inline-flex items-center bg-green hover:bg-blue text-white font-bold py-2 px-8 md:text-lg border-b-4 border-orange-light hover:border-orange-light rounded">
              <ArchiveIcon class="h-5 2-5 pr-2"></ArchiveIcon>
              <span>Withdraw</span>
            </button>
          </div>

        </div>
        <!-- <div class="py-3 px-6 border-b border-gray-300 rounded-t-lg bg-green-light">
            <CashIcon class="h-14 w-14 text-blue mx-auto"/>
            <span class="block text-center">Total Balance:</span>
            <h2 class="block text-center text-xl font-bold leading-6 md:text-2xl lg:text-3xl mb-10">
              ₱520.00
            </h2>
        </div> -->
        <div class="p-7 w-full">
        <h3 class="text-lg font-bold mb-6" v-if="sale">All Transaction Details</h3>
          <p class="block leading-6 text-grey-dark" v-else>
            You'll see all your transactions here.
          </p>
          <div class="md:mx-auto overflow-y-auto max-h-72">
            <table class="min-w-full" id="tbl-wallet">
              <tbody>
                <tr class="border-b" v-for="wallet in sale">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <CheckCircleIcon class="h-8 w-8 text-green-light"/>
                  </td>
                  <td class="text-l text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue">{{moment(wallet.created_at).format('LL')}}</p>
                    <span v-if="wallet.payment_method == 0">
                      Paymaya
                    </span>
                    <span v-else-if="wallet.payment_method == 1">
                      Gcash
                    </span>
                    <span v-else>
                      Cash On Delivery
                    </span>
                  </td>
                  <td class="text-xl text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                    <p class="text-lg font-bold text-blue" v-if="wallet.amount.includes(',')">₱ {{ wallet.amount }}</p>
                    <p class="text-lg font-bold text-blue" v-else>₱ {{ String(wallet.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,') }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div class="py-3 px-6 border-t border-gray-300 text-blue-light text-right">
          Show more
        </div> -->
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import $ from "jquery";
import _ from "lodash";
import DashboardLayout from "@/views/DashboardLayout.vue";
import axios from "axios";
import moment from 'moment'
import { CashIcon, CheckCircleIcon, ArchiveIcon  } from '@heroicons/vue/outline'

$( document ).ready(function() {
  $('#tbl-wallet tr:odd').addClass('bg-white')
  $('#tbl-wallet tr:even').addClass('bg-gray-100')
});

export default {
  components: {
    DashboardLayout, CheckCircleIcon, CashIcon, ArchiveIcon
  },

  data() {
    return {
      driver_id: localStorage.getItem('user_id'),
      sale: '',
      balance: ''
    };
  },

  created() {
    this.fetchWallet(this.driver_id),
    this.moment = moment
  },

  methods: {
    fetchWallet(driver_id) {
      axios.get(process.env.VUE_APP_API + "sales/wallet?id=" + driver_id, {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        this.sale = response.data.sales;
        this.balance = response.data.balance;
      });
    }
  }
};
</script>
