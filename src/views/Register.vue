<template>
    <div class="flex items-center min-h-screen">
        <div class="w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-2/3 px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Registration</h1>

            <form action="">
                <div class="mt-10 space-y-4">
                    <div>
                        <label for="phone-number" class="block text-sm font-medium">Phone number</label>
                        <input id="phone-number" name="phone_number" type="text" autocomplete="number" required="" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm" placeholder="Phone number" />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium">Re-type Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-light hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">
                            Register
                        </button>
                    </div>

                    <div class="text-sm">
                        Already have an account?
                        <router-link to="/" class="font-medium text-blue-light hover:text-blue">Sign In</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { LockClosedIcon } from '@heroicons/vue/solid'

    export default {
        components: {
            LockClosedIcon,
        },
    }
</script>