<template>
    <!-- User Menu -->
    <Menu as="div" class="hidden md:flex items-center relative z-40">
        <div class="mr-6 inline-flex relative w-fit">
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                4
            </span>
            <div class="bg-blue-light flex items-center justify-center text-center rounded-lg shadow-lg">
                <div>
                <svg id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="mx-auto text-white w-8 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <BellIcon/>
                </svg>
                </div>
            </div>
        </div>
        <MenuButton>            
            <button class="flex space-x-4 items-center">
                <img class="rounded-full bg-grey w-10 h-10" src="https://picsum.photos/200" alt="">

                <!-- Driver -->
                <span v-show="role == 1" class="hidden md:flex">Driver</span>

                <!-- Customer -->
                <span v-show="role == 2" class="hidden md:flex">Customer</span>

                <!-- Admin -->
                <span v-show="role == 3" class="hidden md:flex">Admin</span>
                <ChevronDownIcon class="h-4 w-4 hidden md:flex" />
            </button>
        </MenuButton>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
            >
            <MenuItems class="absolute top-12 right-0 w-48 border rounded-md p-2 bg-white shadow-md">
                <MenuItem v-for="userMenu in userMenus" :key="userMenu.label" v-slot="{ active }">
                    <router-link :to="userMenu.href" :class="{ 'bg-blue-light text-white': active }" class="flex items-center space-x-2 w-full p-2 rounded-md" @click="logout(userMenu.label)">
                        <component :is="userMenu.icon" class="h-5 w-5" />
                        <span>{{ userMenu.label }}</span>
                    </router-link>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
    <!-- /User Menu -->
</template>

<script>
    import axios from 'axios';
    import { UserCircleIcon, LogoutIcon, ChevronDownIcon } from '@heroicons/vue/outline'
    import { BellIcon } from '@heroicons/vue/solid'
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
    import 'tw-elements';
    import { loadScript, unloadScript } from "vue-plugin-load-script";

    const userMenus = [
        {
            href: '/profile',
            label: 'Profile',
            icon: 'UserCircleIcon'
        },
        {
            href: '',
            label: 'Logout',
            icon: 'LogoutIcon'
        }
    ]

    export default {
        setup() {
            return {
                userMenus
            }
        },

        components: {
            Menu, MenuButton, MenuItems, MenuItem, UserCircleIcon, LogoutIcon, ChevronDownIcon, BellIcon
        },

        methods: {
            logout(menu) {
                if(menu == 'Logout'){
                    axios.get(process.env.VUE_APP_LARAVEL + "sanctum/csrf-cookie").then(response => {
                        axios.post(process.env.VUE_APP_API + "logout", {
                          withCredentials: true,  
                          headers: {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
                          "Access-Control-Allow-Origin": "*"
                          }
                        })
                        .then(response => {
                            if (response.data.success) {
                                localStorage.clear();
                                window.location.href = "/login"
                            } else {
                                console.log(response.data)
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                    })
                }
            }
        },
        mounted: function() {
            // window.onunload = function () {
            //     if (localStorage.getItem('time_of_login') && (new Date()).getTime() - (localStorage.getItem('time_of_login')) > 900000) {
            //         localStorage.clear();
            //         window.location.href = "/login"
            //     }
            // }

            unloadScript("https://unpkg.com/flowbite@1.5.3/dist/flowbite.js")
            loadScript("https://unpkg.com/flowbite@1.5.3/dist/flowbite.js")

            const timeoutInMS = 900000;
            let timeoutId;
            
            function handleInactive() {
                logout('Logout')
            }

            function startTimer() { 
                timeoutId = setTimeout(handleInactive, timeoutInMS);
            }

            function resetTimer() { 
                clearTimeout(timeoutId);
                startTimer();
            }
            
            function setupTimers () {
                document.addEventListener("keypress", resetTimer, false);
                document.addEventListener("mousemove", resetTimer, false);
                document.addEventListener("mousedown", resetTimer, false);
                document.addEventListener("touchmove", resetTimer, false);
                
                startTimer();
            }

            setupTimers()
        },
        data() {
            return {
                role: localStorage.getItem('role')
            };
        }
    }
</script>