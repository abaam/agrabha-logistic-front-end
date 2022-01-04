<template>
    <div class="flex">
        <aside class="flex-none w-64 min-h-screen px-6 py-2 bg-blue-light">
            <img class="w-full -ml-1" src="../../../public/img/agrabah-logo.png" alt="">

            <hr class="my-4 border-blue-400">

            <ul class="mt-6">
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <router-link to="/dashboard" class="flex items-center space-x-2 w-full p-2">
                        <ViewGridIcon class="h-5 w-5"/>
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <router-link to="/dashboard" class="flex items-center space-x-2 w-full p-2">
                        <RefreshIcon class="h-5 w-5"/>
                        <span>Delivery History</span>
                    </router-link>
                </li>
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <a href="#" class="flex items-center space-x-2 w-full p-2">
                        <CogIcon class="h-5 w-5"/>
                        <span>Settings</span>
                    </a>
                </li>
                <li class="text-white hover:bg-blue hover:text-grey-light rounded-md">
                    <a href="#" class="flex items-center space-x-2 w-full p-2">
                        <QuestionMarkCircleIcon class="h-5 w-5"/>
                        <span>Help</span>
                    </a>
                </li>
            </ul>
        </aside>

        <main class="flex-1">
            <nav class="flex justify-between items-center h-16 border border-b pl-4">
                <div class="flex">Search</div>
                <div class="h-full">
                    <a href="#" class="h-full flex items-center justify-end space-x-2 px-4">
                        <img src="../../../public/img/login-image.png" alt="" class="h-10 w-10 bg-grey rounded-full border-2">
                        <span class="text-sm font-semibold text-grey-dark">
                            John Doe
                        </span>
                        <ChevronDownIcon class="h-4 w-4 text-grey-dark" />
                    </a>
                    <div class="relative mt-1 right-3">
                        <div class="w-48 border rounded-md p-2 bg-white shadow-md">
                            <ul>
                                <li>
                                    <a href="" class="flex items-center space-x-2 w-full p-2 text-grey-dark rounded-md hover:text-white hover:bg-blue-light">
                                        <UserCircleIcon class="h-5 w-5" />
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="flex items-center space-x-2 w-full p-2 text-grey-dark rounded-md hover:text-white hover:bg-blue-light">
                                        <LogoutIcon class="h-5 w-5" />
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    </div>
</template>

<script>
    import { ViewGridIcon, CogIcon, QuestionMarkCircleIcon, RefreshIcon, LogoutIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/vue/outline'

    export default {
        components: { 
            ViewGridIcon,
            CogIcon,
            QuestionMarkCircleIcon,
            ChevronDownIcon,
            RefreshIcon,
            LogoutIcon,
            UserCircleIcon
        }
    }
</script>