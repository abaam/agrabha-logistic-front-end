<template>
  <DashboardLayout>
    <section class="grid px-3 md:p-6 md:py-6">
      <div class="hidden flex-col md:flex">
        <h2
          class="mb-4 block text-xl font-bold leading-6 md:text-2xl lg:text-3xl"
        >
          Account Settings
        </h2>
      </div>

      <div class="bg-transparent md:mt-4">
        <TabGroup>
          <TabList
            class="sticky top-14 z-40 -mx-3 flex justify-evenly border-b border-grey-light bg-white md:relative md:top-0 md:z-0 md:mx-0 md:justify-start md:space-x-12 md:bg-transparent"
          >
            <Tab v-slot="{ selected }" as="template">
              <button
                :class="[selected ? 'border-blue text-blue' : 'bg-transparent']"
                class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
              >
                General
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button
                :class="[selected ? 'border-blue text-blue' : 'bg-transparent']"
                class="w-full cursor-pointer border-b-2 border-transparent py-2 text-center text-sm font-semibold md:w-auto md:text-base"
              >
                Security
              </button>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div class="grid">
                <!-- border-b border-grey-light -->
                <div class="my-6">
                  <h4 class="block text-lg font-semibold">Profile</h4>
                  <p class="block text-grey-dark">
                    Manage your basic information in this section.
                  </p>
                </div>
                <div
                  class="mb-8 divide-y divide-grey-light rounded-md bg-white px-3 shadow md:px-6"
                >
                  <div class="grid gap-4 py-6">
                    <div class="flex items-center justify-between">
                      <div class="mr-2 flex-1">
                        <span class="mb-1 block text-sm text-grey-dark"
                          >Name</span
                        >
                        <p class="block font-semibold">{{ profile.full_name }}</p>
                      </div>
                      <button
                        @click="toggleName"
                        class="text-blue-light hover:text-blue"
                      >
                        Edit
                      </button>
                    </div>

                    <form v-if="showNameInput" @submit.prevent="storeName">
                      <div
                        class="grid w-full lg:grid-cols-2 lg:gap-x-2 xl:grid-cols-4"
                      >
                        <div class="mb-2">
                          <label
                            for="first-name"
                            class="block text-sm font-semibold"
                            >First Name</label
                          >
                          <input
                            type="text"
                            id="first-name"
                            name="first_name"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="First Name"
                            v-model="profile.first_name"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="middle-name"
                            class="block text-sm font-semibold"
                            >Middle Name</label
                          >
                          <input
                            type="text"
                            id="middle-name"
                            name="middle_name"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Middle Name"
                            v-model="profile.middle_name"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="last-name"
                            class="block text-sm font-semibold"
                            >Last Name</label
                          >
                          <input
                            type="text"
                            id="last-name"
                            name="last_name"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Last Name"
                            v-model="profile.last_name"
                            
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="extension-name"
                            class="block text-sm font-semibold"
                            >Extension</label
                          >
                          <input
                            type="text"
                            id="extension-name"
                            name="extension_name"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Extension (ex. Jr/Sr/I/II/III)"
                            v-model="profile.name_extension"
                          />
                        </div>
                      </div>

                      <div class="mt-2 flex items-center justify-end">
                        <ButtonSolidBlue
                          class="w-full md:w-auto"
                          buttonText="Save"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="grid gap-4 py-6">
                    <div class="flex items-center justify-between">
                      <div class="mr-2 flex-1">
                        <span class="mb-1 block text-sm text-grey-dark"
                          >Photo</span
                        >
                        <img
                          class="h-10 w-10 rounded-full bg-grey"
                          src="https://picsum.photos/200"
                          alt="Profile Picture"
                        />
                      </div>
                      <button
                        @click="togglePhoto"
                        class="text-blue-light hover:text-blue"
                      >
                        Edit
                      </button>
                    </div>

                    <form action="" class="" v-if="showPhotoInput">
                      <div class="grid w-full">
                        <div class="mb-2">
                          <label for="photo" class="block text-sm font-semibold"
                            >Photo</label
                          >
                          <input
                            type="file"
                            id="photo"
                            name="photo"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                          />
                        </div>
                      </div>

                      <div class="mt-2 flex items-center justify-end">
                        <ButtonSolidBlue
                          class="w-full md:w-auto"
                          buttonText="Save"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="grid gap-4 py-6">
                    <div class="flex items-center justify-between">
                      <div class="mr-2 flex-1">
                        <span class="mb-1 block text-sm text-grey-dark"
                          >Email address</span
                        >
                        <p class="block font-semibold">
                          {{ profile.temp_email }}
                        </p>
                      </div>
                      <button
                        @click="toggleEmail"
                        class="text-blue-light hover:text-blue"
                      >
                        Edit
                      </button>
                    </div>

                    <form v-if="showEmailInput" @submit.prevent="storeEmail">
                      <div class="grid w-full">
                        <div class="mb-2">
                          <label
                            for="email-address"
                            class="block text-sm font-semibold"
                            >Email address</label
                          >
                          <input
                            type="text"
                            id="email-address"
                            name="email_address"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Email address"
                            v-model="profile.email"
                          />
                        </div>
                      </div>

                      <div class="mt-2 flex items-center justify-end">
                        <ButtonSolidBlue
                          class="w-full md:w-auto"
                          buttonText="Save"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="grid gap-4 py-6">
                    <div class="flex items-center justify-between">
                      <div class="mr-2 flex-1">
                        <span class="mb-1 block text-sm text-grey-dark"
                          >Mobile number</span
                        >
                        <p class="block font-semibold">{{ profile.temp_mobile_number }}</p>
                      </div>
                      <button
                        @click="toggleMobile"
                        class="text-blue-light hover:text-blue"
                      >
                        Edit
                      </button>
                    </div>

                    <form action="" class="" v-if="showMobileInput">
                      <div class="grid w-full">
                        <div class="mb-2">
                          <label
                            for="mobile-number"
                            class="block text-sm font-semibold"
                            >Mobile number</label
                          >
                          <input
                            type="number"
                            id="mobile-number"
                            name="mobile_number"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Mobile number"
                            v-model="profile.mobile_number"
                          />
                        </div>
                      </div>

                      <div class="mt-2 flex items-center justify-end">
                        <ButtonSolidBlue
                          class="w-full md:w-auto"
                          buttonText="Save"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="grid gap-4 py-6">
                    <div class="flex items-center justify-between">
                      <div class="mr-2 flex-1">
                        <span class="mb-1 block text-sm text-grey-dark"
                          >Permanent Address</span
                        >
                        <p class="block font-semibold leading-5">
                          {{ profile.address }}
                        </p>
                      </div>
                      <button
                        @click="toggleAddress"
                        class="text-blue-light hover:text-blue"
                      >
                        Edit
                      </button>
                    </div>

                    <form v-if="showAddressInput" @submit.prevent="storeAddress">
                      <div
                        class="grid lg:grid-cols-2 lg:gap-x-2 xl:grid-cols-3"
                      >
                        <div class="mb-2">
                          <label
                            for="house-number"
                            class="block text-sm font-semibold"
                            >House/Lot No.</label
                          >
                          <input
                            type="text"
                            id="house-number"
                            name="house_number"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="House/Lot No."
                            v-model="profile.house_number"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="street-name"
                            class="block text-sm font-semibold"
                            >Street Name</label
                          >
                          <input
                            type="text"
                            id="street-name"
                            name="street_name"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Street Name"
                            v-model="profile.street"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="barangay"
                            class="block text-sm font-semibold"
                            >Barangay</label
                          >
                          <input
                            type="text"
                            id="barangay"
                            name="barangay"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Barangay"
                            v-model="profile.barangay"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="municipality"
                            class="block text-sm font-semibold"
                            >City/Municipality</label
                          >
                          <input
                            type="text"
                            id="municipality"
                            name="municipality"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="City/Municipality"
                            v-model="profile.city"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="province"
                            class="block text-sm font-semibold"
                            >Province</label
                          >
                          <input
                            type="text"
                            id="province"
                            name="province"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Province"
                            v-model="profile.province"
                          />
                        </div>
                        <div class="mb-2">
                          <label
                            for="zip-code"
                            class="block text-sm font-semibold"
                            >Zip Code</label
                          >
                          <input
                            type="number"
                            id="zip-code"
                            name="zip_code"
                            class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                            placeholder="Zip Code"
                            v-model="profile.zip_code"
                          />
                        </div>
                      </div>

                      <div class="mt-2 flex items-center justify-end">
                        <ButtonSolidBlue
                          class="w-full md:w-auto"
                          buttonText="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="grid">
                <div class="my-6">
                  <h4 class="block text-lg font-semibold">Password</h4>
                  <p class="block text-grey-dark">
                    Manage your account security in this section.
                  </p>
                </div>
                <form
                  action=""
                  class="mb-8 divide-y divide-grey-light rounded-md bg-white px-3 shadow md:px-6"
                >
                  <div class="grid py-6">
                    <div class="grid lg:grid-cols-2 lg:gap-x-2">
                      <div class="mb-2">
                        <label
                          for="current-password"
                          class="block text-sm font-semibold"
                          >Current Password</label
                        >
                        <input
                          type="password"
                          id="current-password"
                          name="current_password"
                          class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                          placeholder="Current Password"
                        />
                      </div>

                      <div class="mb-2">
                        <label
                          for="new-password"
                          class="block text-sm font-semibold"
                          >New Password</label
                        >
                        <input
                          type="password"
                          id="new-password"
                          name="new_password"
                          class="focus:outline-none relative block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-800 placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark sm:text-sm"
                          placeholder="New Password"
                        />
                      </div>
                    </div>

                    <div class="mt-2 flex items-center justify-end">
                      <ButtonSolidBlue
                        class="w-full md:w-auto"
                        buttonText="Save"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  </DashboardLayout>
</template>

<script>
import { ref } from "vue";
import $ from "jquery";
import 'tw-elements';
import _ from "lodash";
import axios from "axios";
import Profile from "../api/profile";
import DashboardLayout from "./DashboardLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ButtonSolidBlue from "../components/buttons/ButtonSolidBlue.vue";

export default {
  name: "Profile",
  setup() {
    const isOpen = ref(true);
    const showNameInput = ref(false);
    const showEmailInput = ref(false);
    const showMobileInput = ref(false);
    const showAddressInput = ref(false);
    const showPhotoInput = ref(false);

    return {
      isOpen,
      showNameInput,
      showPhotoInput,
      showEmailInput,
      showMobileInput,
      showAddressInput,
    };
  },
  data() {
    return {
      profile: {
        first_name: '',
        middle_name: '',
        last_name: '',
        name_extension: '',
        photo: '',
        email: '',
        house_number: '',
        street: '',
        barangay: '',
        city: '',
        province: '',
        zip_code: ''
      },
      name: {
        first_name: '',
        middle_name: '',
        last_name: '',
        name_extension: ''
      }
    }
  },
  mounted() {
    this.showUserProfile();
  },
  methods: {
    toggleName() {
      this.showNameInput = !this.showNameInput;
    },
    togglePhoto() {
      this.showPhotoInput = !this.showPhotoInput;
    },
    toggleEmail() {
      this.showEmailInput = !this.showEmailInput;
    },
    toggleMobile() {
      this.showMobileInput = !this.showMobileInput;
    },
    toggleAddress() {
      this.showAddressInput = !this.showAddressInput;
    },
    showUserProfile(){
      axios.get(process.env.VUE_APP_API + 'users/profile', {
        withCredentials: true,  
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
        "Access-Control-Allow-Origin": "*"
        }
      }).then(response=>{
        if(response.data.length !== 0) {
          let data_response = response.data;
          if(Object.keys(response.data).length > 1) {
            this.profile = response.data;
            if(response.data.middle_name == '') {
              var middle_name = '';
            } else {
              var middle_name = response.data.middle_name.charAt(0) +'. ';
            }
            var house_number = "";
            var street = "";
            var barangay = "";
            var city = "";
            var province = "";
            var zip_code= "";

            if(response.data.house_number != "") {
              house_number = response.data.house_number + ', ';
            }

            if(response.data.street != "") {
              street = response.data.street + ', ';;
            }

            if(response.data.barangay != "") {
              barangay = response.data.barangay + ', ';;
            }

            if(response.data.city != "") {
              city = response.data.city + ', ';;
            }

            if(response.data.province != "") {
              province = response.data.province + ', ';;
            }

            if(response.data.zip_code != "") {
              zip_code = response.data.zip_code + ', ';;
            }

            this.profile['full_name'] = response.data.first_name + ' '+ middle_name + response.data.last_name +' ' + response.data.name_extension;
            this.profile['address'] = house_number +  street + barangay + city + province + zip_code;
            this.profile['address'] = this.profile['address'].replace(/,\s*$/, "");
            this.profile['temp_email'] = response.data.email;
            this.profile['temp_mobile_number'] = response.data.mobile_number;
          } else {
            this.profile['temp_mobile_number'] = response.data.mobile_number;
          }
        }
      }).catch(error=>{
          console.log(error)
      })
    },
    storeName() {
      let user = this.profile;
      let currentObj = this;
      Profile.storeName({user})
        .then(function (response) {        
          // currentObj.output = response.data;
          // $('.animate-spin').hide();
          // $('#btn-booking-mdl').click();
          // console.log(response);
          currentObj.profile = response.data;
          // if(response.data.middle_name == '') {
          //     var middle_name = '';
          //   } else {
          //     var middle_name = response.data.middle_name.charAt(0) +'. ';
          //   }
          // currentObj.profile['full_name'] = response.data.first_name + ' '+ middle_name + response.data.last_name +' ' + response.data.name_extension;
          // currentObj.profile['address'] = response.data.house_number + ' ' + response.data.street + ', ' + response.data.barangay + ', '+ response.data.city + ', '+ response.data.province + ', '+ response.data.zip_code; 
          // currentObj.profile['temp_email'] = response.data.email;
          // currentObj.profile['temp_mobile_number'] = response.data.mobile_number;
          // currentObj.toggleName();
          currentObj.buildData(currentObj.profile);
          currentObj.toggleName();
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },
    storeEmail() {
      let user = this.profile;
      let currentObj = this;
      Profile.storeEmail({user})
        .then(function (response) {        
          // currentObj.output = response.data;
          // $('.animate-spin').hide();
          // $('#btn-booking-mdl').click();
          currentObj.buildData(currentObj.profile);
          currentObj.toggleEmail();
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },
    storeAddress() {
      let user = this.profile;
      let currentObj = this;
      Profile.storeAddress({user})
        .then(function (response) {
          currentObj.buildData(currentObj.profile);
          currentObj.toggleAddress();
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },
    buildData(user_profile) {
      if(user_profile.middle_name == '') {
          var middle_name = '';
        } else {
          var middle_name = user_profile.middle_name.charAt(0) +'. ';
        }
      this.profile['full_name'] = user_profile.first_name + ' '+ middle_name + user_profile.last_name +' ' + user_profile.name_extension;
      this.profile['address'] = user_profile.house_number + ' ' + user_profile.street + ', ' + user_profile.barangay + ', '+ user_profile.city + ', '+ user_profile.province + ', '+ user_profile.zip_code; 
      this.profile['temp_email'] = user_profile.email;
      this.profile['temp_mobile_number'] = user_profile.mobile_number;
    }
  },
  components: {
    DashboardLayout,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ButtonSolidBlue,
  },
};
</script>
