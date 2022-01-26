<template>
    <DashboardLayout>
        <section class="grid px-3 md:py-6 md:p-6">
            <div class="hidden md:flex flex-col">
                <h2 class="block font-bold text-xl md:text-2xl lg:text-3xl leading-6 mb-4">Account Settings</h2>
            </div>

            <div class="md:mt-4 bg-transparent">
                <TabGroup>
                    <TabList class="flex justify-evenly md:justify-start md:space-x-12 sticky md:relative top-14 md:top-0 z-40 md:z-0 border-b border-grey-light bg-white md:bg-transparent md:mx-0 -mx-3">
                        <Tab v-slot="{ selected }" as="template">
                            <button
                            :class="[selected ? 'border-blue text-blue' : 'bg-transparent']" class="w-full md:w-auto text-sm md:text-base font-semibold py-2 border-b-2 border-transparent text-center cursor-pointer">
                                General
                            </button>
                        </Tab>
                        <Tab v-slot="{ selected }" as="template">
                            <button
                            :class="[selected ? 'border-blue text-blue' : 'bg-transparent']" class="w-full md:w-auto text-sm md:text-base font-semibold py-2 border-b-2 border-transparent text-center cursor-pointer">
                                Security
                            </button>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div class="grid">
                                <!-- border-b border-grey-light -->
                                <div class="my-6">
                                    <h4 class="block font-semibold text-lg">Profile</h4>
                                    <p class="block text-grey-dark">Manage your basic information in this section.</p>
                                </div>
                                <div class="divide-y divide-grey-light bg-white rounded-md px-3 md:px-6 shadow mb-8">
                                    <div class="grid gap-4 py-6">
                                        <div class="flex items-center justify-between">
                                            <div class="flex-1 mr-2">
                                                <span class="block text-sm text-grey-dark mb-1">Name</span>
                                                <p class="block font-semibold">John Doe</p>
                                            </div>
                                            <button @click="toggleName" class="text-blue-light hover:text-blue">Edit</button>
                                        </div>

                                        <form action="" class="" v-if="showNameInput">
                                            <div class="w-full grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-2">
                                                <div class="mb-2">
                                                    <label for="first-name" class="block text-sm font-semibold">First Name</label>
                                                    <input type="text" id="first-name" name="first_name" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="First Name" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="middle-name" class="block text-sm font-semibold">Middle Name</label>
                                                    <input type="text" id="middle-name" name="middle_name" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Middle Name" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="last-name" class="block text-sm font-semibold">Last Name</label>
                                                    <input type="text" id="last-name" name="last_name" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Last Name" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="extension-name" class="block text-sm font-semibold">Extension</label>
                                                    <input type="text" id="extension-name" name="extension_name" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Extension (ex. Jr/Sr/I/II/III)" />
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-end mt-2">
                                                <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="grid gap-4 py-6">
                                        <div class="flex items-center justify-between">
                                            <div class="flex-1 mr-2">
                                                <span class="block text-sm text-grey-dark mb-1">Photo</span>
                                                <img class="rounded-full bg-grey w-10 h-10" src="https://picsum.photos/200" alt="Profile Picture">
                                            </div>
                                            <button @click="togglePhoto" class="text-blue-light hover:text-blue">Edit</button>
                                        </div>

                                        <form action="" class="" v-if="showPhotoInput">
                                            <div class="w-full grid">
                                                <div class="mb-2">
                                                    <label for="photo" class="block text-sm font-semibold">Photo</label>
                                                    <input type="file" id="photo" name="photo" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" />
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-end mt-2">
                                                <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="grid gap-4 py-6">
                                        <div class="flex items-center justify-between">
                                            <div class="flex-1 mr-2">
                                                <span class="block text-sm text-grey-dark mb-1">Email address</span>
                                                <p class="block font-semibold">john.doe@testemail.com</p>
                                            </div>
                                            <button @click="toggleEmail" class="text-blue-light hover:text-blue">Edit</button>
                                        </div>

                                        <form action="" class="" v-if="showEmailInput">
                                            <div class="w-full grid">
                                                <div class="mb-2">
                                                    <label for="email-address" class="block text-sm font-semibold">Email address</label>
                                                    <input type="text" id="email-address" name="email_address" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Email address" />
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-end mt-2">
                                                <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="grid gap-4 py-6">
                                        <div class="flex items-center justify-between">
                                            <div class="flex-1 mr-2">
                                                <span class="block text-sm text-grey-dark mb-1">Mobile number</span>
                                                <p class="block font-semibold">09999999999</p>
                                            </div>
                                            <button @click="toggleMobile" class="text-blue-light hover:text-blue">Edit</button>
                                        </div>

                                        <form action="" class="" v-if="showMobileInput">
                                            <div class="w-full grid">
                                                <div class="mb-2">
                                                    <label for="mobile-number" class="block text-sm font-semibold">Mobile number</label>
                                                    <input type="number" id="mobile-number" name="mobile_number" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Mobile number" />
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-end mt-2">
                                                <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="grid gap-4 py-6">
                                        <div class="flex items-center justify-between">
                                            <div class="flex-1 mr-2">
                                                <span class="block text-sm text-grey-dark mb-1">Permanent Address</span>
                                                <p class="block font-semibold leading-5">#015 P-3 Sumlang Lake, Barangay Sumlang, Camalig, Albay, 4502</p>
                                            </div>
                                            <button @click="toggleAddress" class="text-blue-light hover:text-blue">Edit</button>
                                        </div>

                                        <form action="" class="" v-if="showAddressInput">
                                            <div class="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-2">
                                                <div class="mb-2">
                                                    <label for="house-number" class="block text-sm font-semibold">House/Lot No.</label>
                                                    <input type="text" id="house-number" name="house_number" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="House/Lot No." />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="street-name" class="block text-sm font-semibold">Street Name</label>
                                                    <input type="text" id="street-name" name="street_name" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Street Name" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="barangay" class="block text-sm font-semibold">Barangay</label>
                                                    <input type="text" id="barangay" name="barangay" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Barangay" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="municipality" class="block text-sm font-semibold">City/Municipality</label>
                                                    <input type="text" id="municipality" name="municipality" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="City/Municipality" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="province" class="block text-sm font-semibold">Province</label>
                                                    <input type="text" id="province" name="province" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Province" />
                                                </div>
                                                <div class="mb-2">
                                                    <label for="zip-code" class="block text-sm font-semibold">Zip Code</label>
                                                    <input type="number" id="zip-code" name="zip_code" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Zip Code" />
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-end mt-2">
                                                <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="grid">
                                <div class="my-6">
                                    <h4 class="block font-semibold text-lg">Password</h4>
                                    <p class="block text-grey-dark">Manage your account security in this section.</p>
                                </div>
                                <form action="" class="divide-y divide-grey-light bg-white rounded-md px-3 md:px-6 shadow mb-8">
                                    <div class="grid py-6">
                                        <div class="grid lg:grid-cols-2 lg:gap-x-2">
                                            <div class="mb-2">
                                                <label for="current-password" class="block text-sm font-semibold">Current Password</label>
                                                <input type="password" id="current-password" name="current_password" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Current Password" />
                                            </div>

                                            <div class="mb-2">
                                                <label for="new-password" class="block text-sm font-semibold">New Password</label>
                                                <input type="password" id="new-password" name="new_password" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="New Password" />
                                            </div>
                                        </div>

                                        <div class="flex items-center justify-end mt-2">
                                            <ButtonSolidBlue class="w-full md:w-auto" buttonText="Save" />
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
    import { ref } from 'vue'
    import DashboardLayout from './DashboardLayout.vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue.vue'

    export default {
        name: 'Profile',
        setup() {
            const isOpen = ref(true)
            const showNameInput = ref(false)
            const showEmailInput = ref(false)
            const showMobileInput = ref(false)
            const showAddressInput = ref(false)
            const showPhotoInput = ref(false)

            return {
                isOpen,
                showNameInput,
                showPhotoInput,
                showEmailInput,
                showMobileInput,
                showAddressInput
            }
        },
        methods: {
            toggleName() {
                this.showNameInput =! this.showNameInput
            },
            togglePhoto() {
                this.showPhotoInput =! this.showPhotoInput
            },
            toggleEmail() {
                this.showEmailInput =! this.showEmailInput
            },
            toggleMobile() {
                this.showMobileInput =! this.showMobileInput
            },
            toggleAddress() {
                this.showAddressInput =! this.showAddressInput
            }
        },
        components: { 
            DashboardLayout, TabGroup, TabList, Tab, TabPanels, TabPanel, ButtonSolidBlue
        }
    }
</script>