<template>
  <!-- Delivery Address -->
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <LocationMarkerIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Location</h6>
        </div>
        <span id="location-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Change</span
        >
      </div>
    </div>
    <div class="mb-4 flex items-center gap-2 h-96" id="map"></div>
    <div id="complete-address-details">
      <div class="mb-2 flex items-center justify-between">
        <p>Pick Up Complete Address</p>
        <p id="pick-up-complete-address"></p>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <p>Drop Off Complete Address</p>
        <p id="drop-off-complete-address"></p>
      </div>
    </div>
    <div id="complete-address-details-input">
      <div class="relative mb-4">
        <Field
          type="text"
          as="input"
          id="origin-input"
          name="pick_up"
          placeholder="Pick Up"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <Field
          type="hidden"
          as="input"
          id="origin-input-lat"
          name="pick_up_lat"
          placeholder="Pick Up Latitude"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <Field
          type="hidden"
          as="input"
          id="origin-input-lng"
          name="pick_up_lng"
          placeholder="Pick Up Longitude"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="origin-input"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Pick Up</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="pick_up"
        />
      </div>
      <div class="relative mb-4">
          <Field
          :rules="isRequired"
          type="text"
          as="input"
          id="origin-complete-address"
          name="pick_up_complete_address"
          placeholder="Complete Address"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="origin-complete-address"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Complete Address</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="pick_up_complete_address"
        />
      </div>  
      <hr class="mb-4">
      <div class="relative mb-4">
        <Field
          type="text"
          as="input"
          id="destination-input"
          name="drop_off"
          placeholder="Drop Off"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <Field
          type="hidden"
          as="input"
          id="destination-input-lat"
          name="drop_off_lat"
          placeholder="Drop Off Latitude"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <Field
          type="hidden"
          as="input"
          id="destination-input-lng"
          name="drop_off_lng"
          placeholder="Drop Off Longitude"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="destination-input"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Drop Off</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="drop_off"
        />
      </div>
      <div class="relative mb-4">
        <Field
          :rules="isRequired"
          type="text"
          as="input"
          id="destination-complete-address"
          name="drop_off_complete_address"
          placeholder="Complete Address"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="destination-complete-address"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Complete Address</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="drop_off_complete_address"
        />
      </div>
    </div>
    <div class="inline-flex w-full space-x-4" id="location-buttons">
      <span id="location-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="location-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div>
  </div>
  <!-- /Delivery Address -->

  <!-- Package Details -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CubeIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Package Details</h6>
        </div>
        <span id="package-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div id="package-details">
      <div class="mb-2 flex items-center justify-between">
        <p>Item</p>
        <p id="package-item"></p>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <p>Quantity</p>
        <p id="package-quantity"></p>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <p>Unit</p>
        <p id="package-unit"></p>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <p>Note</p>
        <p id="package-note"></p>
      </div>
    </div>
    <div id="package-details-input">
      <div class="relative mb-4">
        <Field
          :rules="isRequired"
          autofocus
          type="text"
          as="input"
          id="item-input"
          name="package_item"
          placeholder="Item"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="item-input"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Item</label
        >
        <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="package_item"
        />
      </div>
      <div class="mb-4 grid grid-cols-2 gap-2">
        <div class="relative">
          <Field
            :rules="isRequired"
            type="text"
            as="input"
            id="quantity-input"
            name="package_quantity"
            placeholder="Quantity"
            class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
          />
          <label
            for="quantity-input"
            class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
            >Quantity</label
          >
          <ErrorMessage
            class="my-1 block text-sm font-semibold text-purple"
            name="package_quantity"
          />
        </div>
        <div class="relative">
          <Field
            :rules="isRequired"
            type="text"
            as="input"
            id="unit-input"
            name="package_unit"
            placeholder="Unit"
            class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
          />
          <label
            for="unit-input"
            class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
            >Unit</label
          >
          <ErrorMessage
            class="my-1 block text-sm font-semibold text-purple"
            name="package_unit"
          />
        </div>
      </div>
      <div class="relative">
        <Field
          :rules="isRequired"
          as="textarea"
          id="note-input"
          name="package_note"
          placeholder="Note"
          class="mb-4 peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        />
        <label
          for="note-input"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Note</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="package_note"
        />
      </div>
    </div>
    <div class="inline-flex w-full space-x-4" id="package-buttons">
      <span id="package-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="package-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div>
  </div>
  <!-- Package Details -->

  <!-- Receiver's Information -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <UserIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Receiver's Information</h6>
        </div>
        <span id="receiver-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div id="receiver-details">
      <div class="mb-2 flex items-center justify-between">
        <p>Name</p>
        <p id="receiver-name"></p>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <p>Contact Number</p>
        <p id="receiver-contact"></p>
      </div>
    </div>
    <div id="receiver-details-input">
      <div class="mb-4 grid grid-cols-2 gap-2">
          <div class="relative">
            <Field
              :rules="isRequired"
              type="text"
              as="input"
              id="receiver-input"
              name="receiver_name"
              placeholder="Name"
              class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
            />
            <label
              for="receiver-input"
              class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
              >Name</label
            >
            <ErrorMessage
              class="my-1 block text-sm font-semibold text-purple"
              name="receiver_name"
            />
          </div>
          <div class="relative">
            <Field
              :rules="isRequired"
              type="text"
              as="input"
              id="contact-number-input"
              name="contact_number"
              placeholder="Contact Number"
              class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
            />
            <label
              for="contact-number-input"
              class="absolute -top-1.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-1.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
              >Contact Number</label
            >
            <ErrorMessage
              class="my-1 block text-sm font-semibold text-purple"
              name="contact_number"
            />
          </div>
      </div>
    </div>
    <div class="inline-flex w-full space-x-4" id="receiver-buttons">
      <span id="receiver-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="receiver-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div>  
  </div>
  <!-- Package Details -->

  <!-- Vehicle Type -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <TruckIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Vehicle Type</h6>
        </div>
        <span id="vehicle-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div id="vehicle-details">
      <p>To be delivered via <span class="font-semibold" id="vehicle-type">Truck</span>.</p>
    </div>
    <div id="vehicle-details-input">
      <div class="relative mb-4">
        <Field
          :rules="isRequired"
          as="select"
          id="vehicle-type-input"
          name="vehicle_type"
          placeholder="Select Vehicle Type"
          class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
        >
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
          <option value="Car">Car</option>
        </Field>
        <label
          for="vehicle-type-input"
          class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
          >Select Vehicle Type</label
        >
        <ErrorMessage
          class="my-1 block text-sm font-semibold text-purple"
          name="vehicle_type"
        />
      </div>
    </div>
    <div class="inline-flex w-full space-x-4" id="vehicle-buttons">
      <span id="vehicle-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="vehicle-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div> 
  </div>
  <!-- /Vehicle Type -->

  <!-- Payment method -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CreditCardIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Payment Method</h6>
        </div>
        <span id="payment-method-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div id="payment-method-details" class="flex items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <img id="payment-logo" 
          src=""
          class="w-8 rounded"
        />
        <TruckIcon
          class="h-7 w-8 cod-logo"
        />
        <div class="grid">
          <span class="block font-semibold" id="payment-method"></span>
          <!-- <span class="block">09*****8520</span> -->
        </div>
      </div>
      <p class="font-semibold" id="payment-total"></p>
    </div>
    <div id="payment-method-details-input" class="mb-4">
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
    <div class="inline-flex w-full space-x-4" id="payment-method-buttons">
      <span id="payment-method-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="payment-method-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div> 
    <hr class="mb-4 mt-2" />
    <div class="mb-2 flex items-center justify-between">
      <p class="text-grey-dark">Distance</p>
      <p id="total-amount" class="text-grey-dark"></p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-grey-dark">Delivery Fee</p>
      <p class="text-grey-dark" id="delivery-fee"></p>
    </div>
  </div>
  <!-- /Payment method -->
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import {
  TruckIcon,
  CubeIcon,
  PencilIcon,
  LocationMarkerIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/vue/outline";
import { loadScript } from "vue-plugin-load-script";
import ButtonSolidBlue from '../../components/buttons/ButtonSolidBlue'
import 'flowbite';

$( document ).ready(function() {
    
});

function setupPlaceChangedListener(autocomplete, mode) {
  localStorage.removeItem('originPlaceId');
  localStorage.removeItem('originLat');
  localStorage.removeItem('originLng');
  localStorage.removeItem('destinationPlaceId');
  localStorage.removeItem('destinationLat');
  localStorage.removeItem('destinationLng');

  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:12.8819585, lng: 121.76654050000002},
    scrollwheel: false,
    zoom: 4
  })
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  directionsRenderer.setMap(map);

  autocomplete.bindTo("bounds", map);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      alert("Please select an option from the dropdown list.");
      return;
    }

    if (mode === "ORIG") {
      localStorage.setItem('originPlaceId', place.place_id);
      localStorage.setItem('originLat', place.geometry.location.lat());
      localStorage.setItem('originLng', place.geometry.location.lng());
    } else {
      localStorage.setItem('destinationPlaceId', place.place_id);
      localStorage.setItem('destinationLat', place.geometry.location.lat());
      localStorage.setItem('destinationLng', place.geometry.location.lng());
    }

    var geocoder = new google.maps.Geocoder();
    var origin_input = document.getElementById("origin-input").value;
    var destination_input = document.getElementById("destination-input").value;
    geocoder.geocode( { 'address': origin_input}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
          $('#origin-input-lat').val(results[0].geometry.location.lat());
          $('#origin-input-lng').val(results[0].geometry.location.lng());
      }
    });
    geocoder.geocode( { 'address': destination_input}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
          $('#destination-input-lat').val(results[0].geometry.location.lat());
          $('#destination-input-lng').val(results[0].geometry.location.lng());
      }
    });

    directionsService.route(
      {
        origin: { placeId: localStorage.getItem('originPlaceId') },
        destination: { placeId: localStorage.getItem('destinationPlaceId') },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          alert("Directions request failed due to " + status);
        }
      }
    );

    originMarker.setPosition(new google.maps.LatLng(localStorage.getItem('originLat'), localStorage.getItem('originLng')));
    originMarker.setMap(map);
    originMarker.setAnimation(google.maps.Animation.DROP);
    originMarker.setIcon('/img/pick-up.png');

    destinationMarker.setPosition(new google.maps.LatLng(localStorage.getItem('destinationLat'), localStorage.getItem('destinationLng')));
    destinationMarker.setMap(map);
    destinationMarker.setAnimation(google.maps.Animation.DROP);
    destinationMarker.setIcon('/img/drop-off.png');

    var origininfowindow = new google.maps.InfoWindow();
    origininfowindow.setContent('Pick Up: ' + origin_input);
    origininfowindow.open(map, originMarker);

    var destinationinfowindow = new google.maps.InfoWindow();
    destinationinfowindow.setContent('Drop Off: ' + destination_input);
    destinationinfowindow.open(map, destinationMarker);
  });

  var originMarker = new google.maps.Marker({
    draggable: false
  });

  var destinationMarker = new google.maps.Marker({
    draggable: false
  });
}

function initializeMap(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 12.8819585, 
      lng: 121.76654050000002
    },
    scrollwheel: false,
    zoom: 4
  })

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });

  directionsRenderer.setMap(map);

  directionsService.route(
    {
      origin: { 
        lat: parseFloat(booking_form.get('pick_up_lat')), 
        lng: parseFloat(booking_form.get('pick_up_lng')) 
      },
      destination: { 
        lat: parseFloat(booking_form.get('drop_off_lat')), 
        lng: parseFloat(booking_form.get('drop_off_lng')) 
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        alert("Directions request failed due to " + status);
      }
    }
  );

  var originMarker = new google.maps.Marker({
    draggable: false,
    icon: '/img/pick-up.png',
    position: new google.maps.LatLng(booking_form.get('pick_up_lat'), booking_form.get('pick_up_lng')),
    animation: google.maps.Animation.DROP,
    map: map
  });

  var destinationMarker = new google.maps.Marker({
    draggable: false,
    icon: '/img/drop-off.png',
    position: new google.maps.LatLng(booking_form.get('drop_off_lat'), booking_form.get('drop_off_lng')),
    animation: google.maps.Animation.DROP,
    map: map
  });

  var distance = haversineDistance(originMarker, destinationMarker);
  $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
  localStorage.setItem('distance', distance.toFixed(2))

  var origin_input = booking_form.get('pick_up');
  var destination_input = booking_form.get('drop_off');
  var origininfowindow = new google.maps.InfoWindow();
  origininfowindow.setContent('Pick Up: ' + origin_input);
  origininfowindow.open(map, originMarker);

  var destinationinfowindow = new google.maps.InfoWindow();
  destinationinfowindow.setContent('Drop Off: ' + destination_input);
  destinationinfowindow.open(map, destinationMarker);
}

function haversineDistance(mk1, mk2) {
    var rad = 6371.0710; // Radius of the Earth in kms
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * rad * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}

function hideDestinationInputs(){
  $("#complete-address-details-input").hide();
  $("#location-buttons").hide();
}

function hidePackageInputs(){
  $("#package-details-input").hide();
  $("#package-buttons").hide();
}

function hideReceiverInputs(){
  $("#receiver-details-input").hide();
  $("#receiver-buttons").hide();
}

function hideVehicleInputs(){
  $("#vehicle-details-input").hide();
  $("#vehicle-buttons").hide();
}

function hidePaymentMethodInputs(){
  $("#payment-method-details-input").hide();
  $("#payment-method-buttons").hide();
}

function hideCompleteAddressInputs(){
  $("#complete-address-details-input").hide();
}

function retrieveCompleteAddress(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  $('#pick-up-complete-address').html(booking_form.get('pick_up_complete_address'));
  $('#drop-off-complete-address').html(booking_form.get('drop_off_complete_address'));
}

function retrievePackage(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  $('#package-item').html(booking_form.get('package_item'));
  $('#package-quantity').html(booking_form.get('package_quantity'));
  $('#package-unit').html(booking_form.get('package_unit'));
  $('#package-note').html(booking_form.get('package_note'));
}

function retrieveReceiversInfo(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  $('#receiver-name').html(booking_form.get('receiver_name'));
  $('#receiver-contact').html(booking_form.get('contact_number'));
}

function retrieveVehicleType(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  $('#vehicle-type').html(booking_form.get('vehicle_form'));
}

function retrievePaymentMethod(){
  let booking_form = new Map();
  JSON.parse(localStorage['booking_form']).forEach(item => {
      booking_form.set(item.name, item.value);
  })

  $('#payment-method').html(booking_form.get('payment_method'));
}

export default {
  setup() {
    return {};
  },
  components: {
    CubeIcon,
    PencilIcon,
    TruckIcon,
    LocationMarkerIcon,
    CreditCardIcon,
    Field,
    ErrorMessage,
    ButtonSolidBlue,
    UserIcon
  },
  mounted: function() {
    hideDestinationInputs()
    hidePackageInputs()
    hideReceiverInputs()
    hideVehicleInputs()
    hidePaymentMethodInputs()
    hideCompleteAddressInputs()

    loadScript("https://polyfill.io/v3/polyfill.min.js?features=default")
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A&libraries=places")
    .then(() => {

      let booking_form = new Map();
      JSON.parse(localStorage['booking_form']).forEach(item => {
          booking_form.set(item.name, item.value);
      })

      initializeMap()

      const originInput = document.getElementById("origin-input");
      const destinationInput = document.getElementById("destination-input");

      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        { 
          componentRestrictions: {country: "ph"} 
        }
      );
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        { 
          componentRestrictions: {country: "ph"} 
        }
      );

      var originMarker = new google.maps.Marker({
        draggable: false,
        icon: '/img/pick-up.png',
        position: new google.maps.LatLng(booking_form.get('pick_up_lat'), booking_form.get('pick_up_lng')),
        animation: google.maps.Animation.DROP,
        map: map
      });

      var destinationMarker = new google.maps.Marker({
        draggable: false,
        icon: '/img/drop-off.png',
        position: new google.maps.LatLng(booking_form.get('drop_off_lat'), booking_form.get('drop_off_lng')),
        animation: google.maps.Animation.DROP,
        map: map
      });

      var distance = haversineDistance(originMarker, destinationMarker);
      var payment_total = [];
      payment_total.push({
        name: 'payment_total', 
        value: parseFloat(localStorage.getItem('distance') * 200).toLocaleString()
      });

      localStorage['payment_total'] = JSON.stringify(payment_total);
      localStorage['booking_form'] = JSON.stringify(JSON.parse(localStorage['booking_form']).concat(JSON.parse(localStorage["payment_total"])));
      $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
      $('#payment-total').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());
      $('#amount-to-pay').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());

      if (booking_form.get('payment_method') == 'Cash On Delivery') {
        $('#pay-button').html('<svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">'
                      +  '<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>'
                      +  '<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>'
                      +  '</svg>Done');
      } else {
        $('#pay-button').html('<svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">'
                      +  '<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>'
                      +  '<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>'
                      +  '</svg>Save');
      }

      $('.animate-spin').hide();
      
      $("#location-change").click(function() {
        setupPlaceChangedListener(originAutocomplete, "ORIG");
        setupPlaceChangedListener(destinationAutocomplete, "DEST");
        $("#location-change").hide();
        $("#complete-address-details").hide();
        $("#location-buttons").show();
        $("#complete-address-details-input").show();

        $('#origin-complete-address').val(booking_form.get('pick_up_complete_address'))
        $('#destination-complete-address').val(booking_form.get('drop_off_complete_address'))
      });

      $("#package-change").click(function() {
        let booking_form = new Map();
        JSON.parse(localStorage['booking_form']).forEach(item => {
            booking_form.set(item.name, item.value);
        })

        $("#package-details-input").show();
        $("#package-buttons").show();
        $("#package-details").hide();
        $("#package-change").hide();

        $('#item-input').val(booking_form.get('package_item'));
        $('#quantity-input').val(booking_form.get('package_quantity'));
        $('#unit-input').val(booking_form.get('package_unit'));
        $('#note-input').val(booking_form.get('package_note'));
      });

      $("#receiver-change").click(function() {
        let booking_form = new Map();
        JSON.parse(localStorage['booking_form']).forEach(item => {
            booking_form.set(item.name, item.value);
        })

        $("#receiver-details-input").show();
        $("#receiver-buttons").show();
        $("#receiver-details").hide();
        $("#receiver-change").hide();

        $('#receiver-input').val(booking_form.get('receiver_name'));
        $('#contact-number-input').val(booking_form.get('contact_number'));
      });

      $("#vehicle-change").click(function() {
        let booking_form = new Map();
        JSON.parse(localStorage['booking_form']).forEach(item => {
            booking_form.set(item.name, item.value);
        })

        $("#vehicle-details-input").show();
        $("#vehicle-buttons").show();
        $("#vehicle-details").hide();
        $("#vehicle-change").hide();

        $('#vehicle-type-input').val(booking_form.get('vehicle_form'));
      });
      
      $("#payment-method-change").click(function() {
        let booking_form = new Map();
        JSON.parse(localStorage['booking_form']).forEach(item => {
            booking_form.set(item.name, item.value);
        })
        
        $("#payment-method-details-input").show();
        $("#payment-method-buttons").show();
        $("#payment-method-details").hide();
        $("#payment-method-change").hide();

        $('input.type_checkbox[value="6"]').prop('checked', true);

        $('input[name="payment_method"][value="'+booking_form.get('vehicle_form')+'"]').prop('checked', true);
      });

      $("#location-save").click(function(e) {        
        var origin_input = $('#origin-input').val();
        var destination_input = $('#destination-input').val();
        var origin_complete_address_input = $('#origin-complete-address').val();
        var destination_complete_address_input = $('#destination-complete-address').val();

        if(origin_input !== '' && destination_input !== '' && origin_complete_address_input && destination_complete_address_input){
          let booking_form = JSON.parse(localStorage['booking_form']);
          booking_form[8]['value'] = origin_input;
          booking_form[9]['value'] = $('#origin-input-lat').val();
          booking_form[10]['value'] = $('#origin-input-lng').val();
          booking_form[11]['value'] = $('#origin-complete-address').val();
          booking_form[12]['value'] = destination_input;
          booking_form[13]['value'] = $('#destination-input-lat').val();
          booking_form[14]['value'] = $('#destination-input-lng').val();
          booking_form[15]['value'] = $('#destination-complete-address').val();
          
          localStorage['booking_form'] = JSON.stringify(booking_form);
          hideDestinationInputs()
          $("#location-change").show();
          $("#complete-address-details").show();

          var originMarker = new google.maps.Marker({
            draggable: false,
            icon: '/img/pick-up.png',
            position: new google.maps.LatLng($('#origin-input-lat').val(), $('#origin-input-lng').val()),
            animation: google.maps.Animation.DROP,
            map: map
          });

          var destinationMarker = new google.maps.Marker({
            draggable: false,
            icon: '/img/drop-off.png',
            position: new google.maps.LatLng($('#destination-input-lat').val(), $('#destination-input-lng').val()),
            animation: google.maps.Animation.DROP,
            map: map
          });

          var distance = haversineDistance(originMarker, destinationMarker);
          $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
          $('#payment-total').html('₱ ' + parseFloat(distance * 200).toLocaleString());
          $('#pay-button').html('₱ ' + parseFloat(distance * 200).toLocaleString());
          booking_form[16]['value'] = parseFloat(distance * 200).toLocaleString();
          localStorage['booking_form'] = JSON.stringify(booking_form);
        } else {
          alert("All fields are required.");
        }
      });

      $("#package-save").click(function(e) {        
        var item_input = $('#item-input').val();
        var quantity_input = $('#quantity-input').val();
        var unit_input = $('#unit-input').val();
        var note_input = $('#note-input').val();

        if(item_input !== '' && quantity_input !== '' && unit_input !== ''){
          let booking_form = JSON.parse(localStorage['booking_form']);
          booking_form[1]['value'] = item_input;
          booking_form[2]['value'] = quantity_input;
          booking_form[3]['value'] = unit_input;
          booking_form[4]['value'] = note_input;
          
          localStorage['booking_form'] = JSON.stringify(booking_form);
          hidePackageInputs()
          $("#package-change").show();
          retrievePackage();
          $("#package-details").show();
        } else {
          alert("All fields are required.");
        }
      });

      $("#receiver-save").click(function(e) {        
        var receiver_input = $('#receiver-input').val();
        var contact_number_input = $('#contact-number-input').val();

        if(receiver_input !== '' && contact_number_input !== ''){
          let booking_form = JSON.parse(localStorage['booking_form']);
          booking_form[5]['value'] = receiver_input;
          booking_form[6]['value'] = contact_number_input;
          
          localStorage['booking_form'] = JSON.stringify(booking_form);
          hideReceiverInputs()
          $("#receiver-change").show();
          retrieveReceiversInfo();
          $("#receiver-details").show();
        } else {
          alert("All fields are required.");
        }
      });

      $("#vehicle-save").click(function(e) {        
        var vehicle_type_input = $('#vehicle-type-input').val();

        if(vehicle_type_input !== ''){
          let booking_form = JSON.parse(localStorage['booking_form']);
          booking_form[7]['value'] = vehicle_type_input;
          
          localStorage['booking_form'] = JSON.stringify(booking_form);
          hideVehicleInputs()
          $("#vehicle-change").show();
          retrieveVehicleType();
          $("#vehicle-details").show();
        } else {
          alert("All fields are required.");
        }
      });

      $(".cod-logo").hide();
      $("#payment-method-save").click(function(e) {        
        var payment_method_input = $('input[name="payment_method"]:checked').val();
        let booking_form_array = JSON.parse(localStorage['booking_form']);
        booking_form_array[17]['value'] = payment_method_input;
          
        localStorage['booking_form'] = JSON.stringify(booking_form_array);
        hidePaymentMethodInputs()
        $("#payment-method-change").show();

        let booking_form = new Map();
        JSON.parse(localStorage['booking_form']).forEach(item => {
            booking_form.set(item.name, item.value);
        })

        if (booking_form.get('payment_method') == 'Paymaya') {
          $("#payment-logo").show();
          $(".cod-logo").hide();
          var payment_logo = "/img/paymaya-logo.png"
        } else if (booking_form.get('payment_method') == 'GCash') {
          $("#payment-logo").show();
          $(".cod-logo").hide();
          var payment_logo = "/img/gcash-logo.png"
        } else {
          $("#payment-logo").hide();
          $(".cod-logo").show();
        }

        $('#payment-logo').attr('src', payment_logo);
        retrievePaymentMethod();
        $("#payment-method-details").show();

        if (booking_form.get('payment_method') == 'Cash On Delivery') {
        $('#pay-button').html('<svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">'
                        +  '<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>'
                        +  '<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>'
                        +  '</svg>Done');
        } else {
          $('#pay-button').html('<svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">'
                        +  '<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>'
                        +  '<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>'
                        +  '</svg>Save');
        }

        $('.animate-spin').hide();
      });

      $("#location-cancel").click(function(e) {        
        initializeMap()
        hideDestinationInputs()
        $("#location-change").show()
      });

      $("#package-cancel").click(function(e) {        
        hidePackageInputs()
        $("#package-details").show();
        $("#package-change").show();
      });

      $("#receiver-cancel").click(function(e) {        
        hideReceiverInputs()
        $("#receiver-details").show();
        $("#receiver-change").show();
      });

      $("#vehicle-cancel").click(function(e) {        
        hideVehicleInputs()
        $("#vehicle-details").show();
        $("#vehicle-change").show();
      });

      $("#payment-method-cancel").click(function(e) {        
        hidePaymentMethodInputs()
        $("#payment-method-details").show();
        $("#payment-method-change").show();
      });
    })

    let booking_form = new Map();
    JSON.parse(localStorage['booking_form']).forEach(item => {
        booking_form.set(item.name, item.value);
    })

    retrievePackage()
    retrieveReceiversInfo()
    retrieveVehicleType()
    retrievePaymentMethod()
    retrieveCompleteAddress()

    if (booking_form.get('payment_method') == 'Paymaya') {
      var payment_logo = "/img/paymaya-logo.png"
    } else {
      var payment_logo = "/img/gcash-logo.png"
    }

    $('#payment-logo').attr('src', payment_logo);
    $('#delivery-fee').html('₱ 200.00 /Kms');
  },
};
</script>
