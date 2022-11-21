<template>
    <!-- User Menu -->
    <Menu as="div" class="md:flex items-center relative z-40">
        <div class="mr-6 inline-flex relative w-fit">
            <span v-if="notification.count" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {{notification.count}}
            </span>
            <span v-else class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                0
            </span>
            <div class="bg-blue-light flex items-center justify-center text-center rounded-lg shadow-lg">
                <div>
                <svg id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="mx-auto text-white w-8 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <BellIcon/>
                </svg>
                </div>
            </div>
        </div>

        <!-- Dropdown menu -->
        <div id="dropdownNotification" class="hidden bg-white z-20 w-96 max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 overflow-y-auto max-h-80" aria-labelledby="dropdownNotificationButton" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 16040px);">
            <div class="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
                Notifications
            </div>
            <div v-if="notification.length" class="divide-y divide-gray-100 dark:divide-gray-700" 
                v-for="push_notification in notification">
                <a @click="viewNotification(push_notification.id, push_notification.link)" v-bind:class="(push_notification.seen == 0)?'flex py-3 px-4 bg-gray-100 hover:bg-white dark:hover:bg-gray-700 cursor-pointer':'flex py-3 px-4 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'">
                <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full" 
                    src="/img/profile-default.jpg" alt="Jese image">
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                    <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    </div>
                </div>
                <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        <span class="font-semibold text-gray-900 dark:text-white" v-if="push_notification.from_user_name != 'Admin'">
                            {{ push_notification.from_user_name }}
                        </span>
                        <span v-if="push_notification.description.includes('payment has been approved') && this.role == '1'">
                            A booking is available. Check the details.
                        </span>
                        <span v-else>
                            {{ push_notification.description }}
                        </span>
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">{{moment(push_notification.created_at).fromNow()}}</div>
                </div>
                </a>
            </div>
            <div v-else class="divide-y divide-gray-100 dark:divide-gray-700">
                <p class="block leading-6 text-grey-dark text-center m-5">
                    You'll see all your notifications here.
                </p>
            </div>
            <div class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
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
    import moment from 'moment'
    import Notification from "../api/notification";

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
        created() {
            this.interval = setInterval(this.fetchNotifications, 2000),
            this.moment = moment
        },
        beforeDestroy () {
            clearInterval(this.interval)
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
            },
            fetchNotifications() {
                axios.get(process.env.VUE_APP_API + `notifications?user_id=${this.user_id}&role=` + this.role, {
                    withCredentials: true,
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
                    "Access-Control-Allow-Origin": "*"
                    }
                }).then((response) => {
                    this.notification = response.data.notifications;
                    this.notification.count = response.data.count;
                });
            },
            viewNotification(id, link) {
                Notification.view({
                    id: id
                }).then((response) => {    
                    window.location.replace(link);
                })
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
                role: localStorage.getItem('role'),
                user_id: localStorage.getItem('user_id'),
                notification: {
                    count: ''
                },
                interval: null
            };
        }
    }
</script>