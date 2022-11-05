<template>
  <DashboardLayout mobileTitle="Booking Details">
    <section class="hidden px-3 py-6 md:block md:p-6">
      <div class="mb-6 flex items-center booking-details-header">
        <h2
        class="mb-6 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
        Booking Details
        </h2>

        <button v-show="role == 1" id="accept-button" @click="acceptBooking()"
          class="details-button accept-button bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-light hover:border-green rounded ml-auto mr-2"
          >Accept</button>

        <button v-show="role == 3" id="approve-payment" @click="approvePayment()"
          class="details-button approve-payment bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-light hover:border-green rounded ml-auto mr-2"
          >Approve Payment</button>

        <button v-show="role == 2" id="pay-button" 
          class="details-button pay-button bg-blue-light hover:bg-blue text-white font-bold py-2 px-8 text-lg border-b-4 border-blue hover:border-blue-light rounded ml-auto mr-2" data-bs-toggle="modal" data-bs-target="#pay_info"
          >Pay</button>

        <button v-show="role == 2" id="cancel-button" @click="cancelBooking()"
          class="details-button cancel-button bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
          >Cancel</button>
      </div>
    </section>

    <main class="flex-1">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 rounded-lg border sm:p-8 m-2">
        <div class="p-4 border rounded-lg rounded-lg">
          <h3 class="font-bold">Package Details</h3>
          <p id="package-item"></p>
          <p id="package-quantity"></p>
          <p id="package-note"></p>
          
          <br>
          <h3 class="font-bold">Receiver's Information</h3>
          <p id="receiver-name"></p>
          <p id="contact-number"></p>
          <p></p>
        </div>
        <!-- ... -->
        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">Vehicle</h3>
          <p id="driver-name"></p>
          <p id="vehicle-type"></p>

          <br>
          <h3 class="font-bold">Location</h3>
          <p id="pick-up"></p>
          <p id="drop-off"></p>
          <p id="date-time"></p>
        </div>

        <div class="p-4 border rounded-lg">
          <div class="flex items-start justify-between">
            <h3 class="font-bold">Payment</h3>
            <div v-show="role == 3">
              <span id="view-payment-details" 
              class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue" @click="viewPaymentDetails"
              >View Details</span>
            </div>
          </div>
          <p id="payment-method"></p>
          <p id="payment-total"></p>
          <br>
          <h3 class="font-bold" id="payment-status-details">Payment Status: 
            <span class="text-orange-light" id="payment-status"></span>
          </h3>
        </div>

        <div class="p-4 border rounded-lg">
          <form @submit="updateTracking">
            <div class="flex items-start justify-between">
              <h3 class="font-bold" id="shipment-status">Status: 
              <span class="text-orange-light" id="status">
              </span>
              </h3>
              <div v-show="role == 1">
                <span id="shipping-info-change" 
                class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
                hidden>Edit</span>
              </div>
            </div>
            <div id="tracking-qr-code">
              <h3 class="font-bold flex justify-center mt-5">Tracking QR Code</h3>
              <a :href="value" class="flex justify-center mt-5 mb-5">
                <qrcode-vue :value="value" :size="size" level="H" />
              </a>
              <div class="flex justify-center space-x-4">
                <ButtonOutlineBlue @click="copyTrackingUrl(this.value)" id="copy-tracking-url" type="button" buttonText="Copy URL"/>
                <ButtonOutlineGreen buttonClass="" buttonText="Download QR"/>
              </div>
            </div>

            <div id="tracking-not-available" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 mt-5 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                  <p class="font-bold">Tracking not available.</p>
                  <p class="text-sm">Once the item has been picked up, this will be accessible.</p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mt-5" id="tracking-status">
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Status (tracking)
                </label>
                <select id="shipment-status-select" 
                  name="tracking_status" 
                  v-model="shipment.tracking_status"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="Item has been picked up by our driver" selected>Picked up</option>
                  <option value="Item has arrived at: " selected>Arrived at</option>
                  <option value="Item has departed from: ">Departed from</option>
                  <option value="Item is out for delivery">Out for delivery</option>
                  <option value="Item has been delivered">Delivered</option>
                </select>
              </div>
              <div class="w-full md:w-1/2 px-3" id="shipment-location-field">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Location
                </label>
                <div class="flex">
                  <input 
                  type="text"
                  placeholder="Get your location here"
                  v-model="shipment.location"
                  id="shipment-location" 
                  ref="autocomplete"
                  class="rounded-none rounded-l-lg appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <span @click="locatorButtonPressed" class="inline-flex items-center px-3 cursor-pointer text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    📍
                  </span>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-3" id="shipment-amount">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Amount
                </label>
                <div class="flex">
                  <input 
                  type="text"
                  placeholder="Input amount received"
                  v-model="shipment.amount"
                  id="shipment-amount" 
                  ref="autocomplete"
                  class="rounded-none rounded-l-lg appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                </div>
              </div>
            </div>

            <div class="inline-flex w-full space-x-4 mt-10" id="shipping-status-buttons">
              <button type="submit" id="shipping-status-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
              <span id="shipping-status-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
            </div>
              
            <!-- <br>
            <h3 class="font-bold">Status: <span class="text-blue-light">For Pick-up</span></h3> -->
          </form>
        </div>
      </div>

      <div class="mb-6 px-3 py-6 md:p-6 flex items-center justify-center md:hidden">
        <button v-show="role == 1" id="accept-button" @click="acceptBooking()"
          class="details-button accept-button bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-light hover:border-green rounded"
          >Accept</button>

        <button v-show="role == 3" id="approve-payment" @click="approvePayment()"
          class="details-button approve-payment bg-green hover:bg-green-light text-white font-bold py-2 px-8 text-lg border-b-4 border-green-light hover:border-green rounded"
          >Approve Payment</button>

        <button v-show="role == 2" id="pay-button" 
          class="details-button pay-button bg-blue-light hover:bg-blue text-white font-bold py-2 px-8 text-lg border-b-4 border-blue hover:border-blue-light rounded" data-bs-toggle="modal" data-bs-target="#pay_info"
          >Pay</button>

        <button v-show="role == 2" id="cancel-button" @click="cancelBooking()"
          class="details-button cancel-button bg-orange-light hover:bg-orange text-white font-bold py-2 px-8 text-lg border-b-4 border-orange hover:border-orange-light rounded"
          >Cancel</button>
      </div>

      <!-- Pay Modal -->
      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="pay_info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
          <form @submit="payBooking">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Scan the QR Code To Pay
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <h3 class="font-bold flex justify-center items-center text-xl" id="payment_method_text"></h3>
                    <img class="mx-auto w-52 self-center" src="" alt="Agrabah Logistics" id="payment_method_qr">
                  </div>
                  <div class="border-t border-gray-200 mt-5">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-lg font-medium text-gray-500">Account Name</dt>
                        <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">Agrabah</dd>
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-lg font-medium text-gray-500">Account Number</dt>
                        <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" id="account_number"></dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-lg font-medium text-gray-500">Amount To Pay</dt>
                        <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" id="amount-to-pay"></dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Transferred from:
                </h5>
              </div>
              <div class="modal-body relative p-4">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Full Name
                    </label>
                    <input 
                      name="full_name" 
                      required 
                      v-model="sales.full_name" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Mobile Number
                    </label>
                    <input 
                      name="mobile_number" 
                      required 
                      v-model="sales.mobile_number" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Amount
                    </label>
                    <input 
                      name="amount" 
                      required 
                      v-model="sales.amount" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Reference Number
                    </label>
                    <input 
                      name="ref_number" 
                      required 
                      v-model="sales.ref_number" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 eading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                </div>
              </div>
              <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">Later</button>
                <button type="submit"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Done</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Approve Payment Modal -->
      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="approve_payment" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <form @submit="approvePayment">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Transferred from:
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      First Name
                    </label>
                    <input 
                      name="first_name" 
                      required 
                      v-model="sales.first_name" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Last Name
                    </label>
                    <input 
                      name="last_name" 
                      required 
                      v-model="sales.last_name" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Amount
                    </label>
                    <input 
                      name="amount" 
                      required 
                      v-model="sales.amount" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Reference Number
                    </label>
                    <input 
                      name="ref_number" 
                      required 
                      v-model="sales.ref_number" 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 eading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="grid-last-name" 
                      type="text">
                  </div>
                </div>
              </div>
              <div class="bg-indigo-900 text-center py-4 lg:px-4">
                <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                  <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
                  <span class="font-semibold mr-2 text-left flex-auto">Please input the payer's information.</span>
                </div>
              </div>
              <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">Later</button>
                <button type="submit"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Approve</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- View Payment Modal -->
      <button type="button"
        class="hidden inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal" data-bs-target="#view-payment-details-modal" id="btn-view-payment-details">
        Launch static backdrop modal
      </button>

      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="view-payment-details-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                Payment Details
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <dt class="text-lg font-medium text-gray-500">Reference Number</dt>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">{{ payment.ref_id }}</dd>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <dt class="text-lg font-medium text-gray-500">Full Name</dt>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">{{ payment.full_name }}</dd>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <dt class="text-lg font-medium text-gray-500">Mobile Number</dt>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">{{ payment.mobile }}</dd>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <dt class="text-lg font-medium text-gray-500">Amount</dt>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" v-if="payment.amount.includes(',')">{{ payment.amount }}</dd>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2" v-else>{{ String(payment.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,') }}</dd>
                </div>
                <div class="w-full px-3 mt-6">
                  <dt class="text-lg font-medium text-gray-500">Date of Transaction</dt>
                  <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">{{moment(payment.date).format('LLLL')}}</dd>
                </div>
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
    </main>
  </DashboardLayout>
</template>

<script>
import $ from "jquery";
import 'tw-elements';
import _ from "lodash";
import axios from "axios";
import Booking from "../api/booking";
import DashboardLayout from "@/views/DashboardLayout.vue";
import ButtonOutlineBlue from "@/components/buttons/ButtonOutlineBlue.vue";
import ButtonOutlineGreen from "@/components/buttons/ButtonOutlineGreen.vue";
import { Field, ErrorMessage } from "vee-validate";
import 'flowbite';
import { loadScript } from "vue-plugin-load-script";
import QrcodeVue from 'qrcode.vue'
import moment from 'moment'

import { CashIcon, CheckCircleIcon  } from '@heroicons/vue/outline'

const absoluteURL = window.location.origin;

export default {
  components: {
    DashboardLayout, CheckCircleIcon, CashIcon, ButtonOutlineBlue, ButtonOutlineGreen, QrcodeVue
  },
  data() {
      return {
          role: localStorage.getItem('role'),
          user_id: localStorage.getItem('user_id'), 
          sales: [],
          shipment: {
            tracking_status:"Item has been picked up by our driver",
            receiver_name: '',
            location: $('#shipment-location').val(),
            current_url: absoluteURL,
            pick_up_location: '',
            drop_off_location: '',
            amount: '',
            payment_method: ''
          },
          value: '',
          size: 200,
          payment: {
            ref_id:'',
            full_name: '',
            mobile: '',
            amount: '',
            date: ''
          }
      };
  },
  created() {
    this.moment = moment
  },
  mounted(){
    this.showBookingDetails(),
    
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A&libraries=places")
    .then(() => {
      const originInput = document.getElementById("shipment-location");

      // Specify just the place data fields that you need.
      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        { 
          componentRestrictions: {country: "ph"} 
        }
      );
      
      originAutocomplete.addListener("place_changed", () => {
        var place = originAutocomplete.getPlace();
        this.shipment.location = place.formatted_address
      })
    })
  },
  methods:{
    showBookingDetails(){
      axios.get(process.env.VUE_APP_API + `bookings/details/${this.$route.params.id}`, {
        withCredentials: true,  
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then(response=>{
        $('#package-item').html('Item: ' + response.data.booking.package_item);
        $('#package-item').html('Item: ' + response.data.booking.package_item);
        $('#package-quantity').html('Quantity: ' + response.data.booking.package_quantity + ' ' + response.data.booking.package_unit);
        $('#package-note').html('Note: ' + response.data.booking.package_note);
        $('#receiver-name').html('Name: ' + response.data.booking.receiver_name);
        $('#contact-number').html('Contact Number: ' + response.data.booking.receiver_contact);
        $('#driver-name').html('Driver Name: ' + response.data.booking.driver_name);
        $('#vehicle-type').html('Vehicle Type: ' + response.data.booking.vehicle_type);
        $('#pick-up').html('Pick-up: ' + response.data.booking.pick_up);
        $('#drop-off').html('Drop Off: ' + response.data.booking.drop_off);
        $('#date-time').html('Date & Time: ' + response.data.booking.date_time);
        $('#payment-total').html('Total: ₱ ' + response.data.booking.payment_total);
        $('#amount-to-pay').html('₱ ' + response.data.booking.payment_total);

        this.shipment.pick_up_location = response.data.booking.pick_up
        this.shipment.drop_off_location = response.data.booking.drop_off
        this.shipment.receiver_name = response.data.booking.receiver_name
        this.value = response.data.qr_code.url
        this.shipment.amount = response.data.booking.payment_total

        if (localStorage.getItem('role') == 1) {
          $('#driver-name').hide()
        }

        if (localStorage.getItem('role') == 2) {
          $('#driver-name').hide()
        }

        if (localStorage.getItem('role') == 3) {
          $('#driver-name').show()
        }

        if(response.data.booking.payment_method == 0){
          var payment_method = "Paymaya";
        } else if(response.data.booking.payment_method == 1){
          var payment_method = "Gcash";
        }else{
          var payment_method = "Cash On Delivery";
          $('.pay-button').hide();
          $('#payment-status-details').hide();
          $('.approve-payment').hide();
          $('#view-payment-details').hide();
          $('#cancel-button').addClass('ml-auto mr-2')
        }
        $('#payment-method').html('Payment Method: ' + payment_method);
        this.shipment.payment_method = payment_method;

        if(response.data.booking.payment_status == 0){
          var payment_status = "Pending";
        }else if(response.data.booking.payment_status == 1){
          var payment_status = "Pending Approval";
          $('#payment-status').attr('class', 'text-blue')
        }else if(response.data.booking.payment_status == 1 && role == 3){
          $('.approve-payment').show()
          $('#view-payment-details').show();
        }else if(response.data.booking.payment_status == 2){
          var payment_status = "Paid";
          $('.pay-button').hide()
          $('#payment-status').attr('class', 'text-green')

          if (localStorage.getItem('role') == 2) {
            $('.details-button').hide();
          }

          if (localStorage.getItem('role') == 3) {
            $('.approve-payment').hide();
          }
        }else if(response.data.booking.payment_status == 3){
          var payment_status = "Cancelled";
          $('#payment-status').attr('class', 'text-red')
          
          if (localStorage.getItem('role') == 2) {
            $('.details-button').hide();
          }
        }

        if(response.data.booking.status == 1){
          var status = "Delivered";
          $('#status').attr('class', 'text-green')
        }else if(response.data.booking.status == 2){
          var status = "To Receive";
          $('#status').attr('class', 'text-blue')
        }else if(response.data.booking.status == 3){
          var status = "For Pickup";
          $('#status').attr('class', 'text-orange')
        }else if(response.data.booking.payment_status == 3){
          var status = "Cancelled";
          $('#status').attr('class', 'text-red')
        }else if(response.data.booking.status == 5){
          var status = "For Pickup";
          $('#status').attr('class', 'text-orange')
          
          $("#shipping-info-change").show()
          $('.accept-button').hide();
        }

        $('#payment-status').html(payment_status);
        $('#status').html(status);

        if(response.data.booking.status == 3 && localStorage.getItem('role') == 2 && response.data.booking.payment_status != 3){
          $('.cancel-button').show();
        }

        if(response.data.booking_has_tracking == 'false'){
          $('#tracking-qr-code').hide();
          $('#tracking-not-available').show();
        }else{
          $('#tracking-qr-code').show();
          $('#tracking-not-available').hide();
          $("#shipping-info-change").show()
          $('.accept-button').hide();
        }

        if (response.data.booking.payment_status == 1 || response.data.booking.payment_status == 2) {
          $('.pay-button').hide();
          $('.booking-details-header').addClass('justify-between');
        }

        if (response.data.booking.payment_method == 0) {
          $('#payment_method_qr').attr('src', window.location.origin + '/img/paymaya-qr.png');
          $('#payment_method_text').html('Paymaya');
          $('#account_number').html('09087702170');
        }else{
          $('#payment_method_qr').attr('src', window.location.origin + '/img/gcash-qr.jpg');
          $('#payment_method_text').html('GCash');
          $('#account_number').html('09156819270');
        }

        $("#shipping-status-buttons").hide()
        $("#tracking-status").hide()

        $("#shipping-info-change").click(function() {
          $("#shipping-status-buttons").show()
          $("#shipping-info-change").hide()
          $("#tracking-status").show()
          $("#tracking-not-available").hide()
          $('#shipment-location-field').hide()
          $('#tracking-qr-code').hide();
        });

        $("#shipping-status-cancel").click(function() {
          $("#shipping-info-change").show()
          $("#shipping-status-buttons").hide()
          $("#tracking-status").hide()
          $("#tracking-not-available").show()
          $('#tracking-qr-code').show();
  
          if(response.data.booking.tracking_id == null){
            $('#tracking-qr-code').hide();
            $('#tracking-not-available').show();
          }else{
            $('#tracking-qr-code').show();
            $('#tracking-not-available').hide();
          }

          $('#shipment-status-select option').prop('selected', function() {
              return this.defaultSelected;
          });
        });

        $('#shipment-location-field').hide()
        $('#shipment-amount').hide()
        $('#shipment-status-select').on('change', function() {
          var selected_status = $(this).find(":selected").val();
          if(selected_status.includes("delivered") && payment_method == "Cash On Delivery"){
            $('#shipment-amount').show()
            $('#shipment-location-field').hide()
          } else if(selected_status.includes("arrived") || selected_status.includes("departed")){
            $('#shipment-amount').hide()
            $('#shipment-location-field').show()
          } else {
            $('#shipment-amount').hide()
            $('#shipment-location-field').hide()
          }
        });

        if(response.data.booking.status == 1){
          $("#shipping-info-change").hide()
          $(".accept-button").hide()
        }

      }).catch(error=>{
          console.log(error)
      })
    },
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
          position => {
            this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
          },
          error => {
            console.log(error.message);
          },
      )
    },
    async getStreetAddressFrom(lat, long) {
      try {
          var {
            data
          } = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A"
          );
          if (data.error_message) {
            console.log(data.error_message)
          } else {
            this.shipment.location = data.results[0].formatted_address;
          }
      } catch (error) {
          console.log(error.message);
      }
    },
    payBooking(e) {
      e.preventDefault();
      let currentObj = this;
      let booking_id = window.location.pathname.split('/').pop();
      
      Booking.payBooking({
          booking_id: booking_id,
          full_name: this.sales.full_name,
          mobile_number: this.sales.mobile_number,
          amount: this.sales.amount,
          ref_number: this.sales.ref_number
      })
      .then(function (response) {
        location.reload(true);
        
        currentObj.output = response.data.booking;
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    },
    updateTracking(e) {
      e.preventDefault();
      let sale = this.sales;
      let currentObj = this;
      let booking_id = window.location.pathname.split('/').pop();
      
      Booking.updateTracking({
          booking_id: booking_id,
          tracking_status: this.shipment.tracking_status,
          location: this.shipment.location,
          driver_id: this.user_id,
          receiver_name: this.shipment.receiver_name,
          url: this.shipment.current_url,
          pick_up_location : this.shipment.pick_up_location,
          drop_off_location : this.shipment.drop_off_location,
          amount: this.shipment.amount,
          payment_method: this.shipment.payment_method
      })
      .then(function (response) {
        location.reload(true);
        
        currentObj.output = response.data.booking;
      })
      .catch(function (error) {
        currentObj.output = error;
        console.log(error)
      });
    },
    cancelBooking() {
      // Use sweetalert2
      let that = this;
      this.$swal.fire({
        title: 'Are you sure?',
        text: "Your booking will be permanently cancelled!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          let currentObj = this;
          let booking_id = window.location.pathname.split('/').pop();

          Booking.cancelBooking({
            booking_id: booking_id,
            driver_id: this.user_id
          })
          .then(function (response) {
            currentObj.output = response.data.booking;

            that.$swal.fire(
              'Canceled!',
              currentObj.output = response.data.booking,
              'success'
            )

            setTimeout(function() { 
              currentObj.$router.push('/transactions');
            }, 2000);
          })
          .catch(function (error) {
            currentObj.output = error;
          });
        }
      })
    },
    acceptBooking() {
      // Use sweetalert2
      let that = this;
      this.$swal.fire({
        title: 'Are you sure?',
        text: "The booking will be permanently accepted!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, accept it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          let currentObj = this;
          let booking_id = window.location.pathname.split('/').pop();

          Booking.acceptBooking({
            booking_id: booking_id,
            driver_id: this.user_id,
            payment_method: this.shipment.payment_method
          })
          .then(function (response) {
            currentObj.output = response.data.booking;

            that.$swal.fire(
              'Accepted!',
              currentObj.output = response.data.booking,
              'success'
            )

            setTimeout(function() { 
              location.reload(true);
            }, 2000);
          })
          .catch(function (error) {
            currentObj.output = error;
          });
        }
      })
    },
    approvePayment() {
      // Use sweetalert2
      let that = this;
      this.$swal.fire({
        title: 'Are you sure?',
        text: "The payment will be permanently approved!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          let currentObj = this;
          let booking_id = window.location.pathname.split('/').pop();

          Booking.approvePayment({booking_id})
          .then(function (response) {
            currentObj.output = response.data.booking;

            that.$swal.fire(
              'Accepted!',
              currentObj.output = response.data.booking,
              'success'
            )

            setTimeout(function() { 
              location.reload(true);
            }, 2000);
          })
          .catch(function (error) {
            currentObj.output = error;
          });
        }
      })
    },
    viewPaymentDetails(e) {
      e.preventDefault();
      let currentObj = this;
      let booking_id = window.location.pathname.split('/').pop();
      axios.get(process.env.VUE_APP_API + `bookings/payment/details/${booking_id}`, {
        withCredentials: true,  
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then(response=>{     
        $('#btn-view-payment-details').click();
        this.payment.ref_id = response.data.sale.ref_number
        this.payment.full_name = response.data.sale.full_name
        this.payment.mobile = response.data.sale.mobile_number
        this.payment.amount = response.data.sale.amount
        this.payment.date = response.data.sale.created_at
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    },
    async copyTrackingUrl(URL) {
      try {
        await navigator.clipboard.writeText(URL);
        $('#copy-tracking-url').html('Copied!');
      } catch($e) {
        alert('Cannot copy');
      }
    }
  }
};
</script>
