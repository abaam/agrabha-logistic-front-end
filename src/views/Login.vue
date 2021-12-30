<template>
    <div class="flex items-center min-h-screen">
        <div class="w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-2/3 px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Login</h1>
            <p class="mt-4">Log in with your phone number and password that you entered during your registration.</p>

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

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-blue-light hover:text-blue">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-light hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon class="h-5 w-5 text-blue group-hover:text-blue-light" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>

                    <div class="text-sm">
                        Not registered yet? 
                        <router-link to="/register" class="font-medium text-blue-light hover:text-blue">Create an account?</router-link>
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