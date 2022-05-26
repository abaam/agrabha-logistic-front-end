<template>
    <!-- User Menu -->
    <Menu as="div" class="hidden md:flex items-center relative z-40">
        <MenuButton>
            <button class="flex space-x-4 items-center">
                <img class="rounded-full bg-grey w-10 h-10" src="https://picsum.photos/200" alt="">

                <!-- Driver -->
                <span v-show="role == 1" class="hidden md:flex">Driver</span>

                <!-- Customer -->
                <span v-show="role == 2" class="hidden md:flex">Customer</span>
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
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"

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
            Menu, MenuButton, MenuItems, MenuItem, UserCircleIcon, LogoutIcon, ChevronDownIcon
        },

        methods: {
            logout(menu) {
                if(menu == 'Logout'){
                    axios.get(process.env.VUE_APP_LARAVEL + "sanctum/csrf-cookie").then(response => {
                        axios.post(process.env.VUE_APP_API + "logout")
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
            window.onunload = function () {
                if (localStorage.getItem('time_of_login') && (new Date()).getTime() - (localStorage.getItem('time_of_login')) > 900000) {
                    localStorage.clear();
                    window.location.href = "/login"
                }
            }

            const timeoutInMS = 900000;
            let timeoutId;
            
            function handleInactive() {
                localStorage.clear();
                window.location.href = "/login"
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