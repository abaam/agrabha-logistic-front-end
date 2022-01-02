<template>
    <div class="flex items-center min-h-screen">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-8 md:px-12 lg:px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Login</h1>
            <p class="mt-4">Log in with your phone number and password that you entered during your registration.</p>

            <form action="">
                <div class="mt-10 space-y-4">
                    <Input
                        v-model="event.phoneNumber"
                        type="text"
                        id="phone-number"
                        name="phone_number"
                        label="Phone number" 
                    />

                    <Input 
                        v-model="event.password"
                        type="password"
                        id="password"
                        name="password"
                        label="Password" 
                    />
                    
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
                        <ButtonSolidBlue buttonText="Sign In" />
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
    import Input from '../components/Input'
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue'
    import ButtonOutlineGreen from '../components/buttons/ButtonOutlineGreen'

    export default {
        components: {
            LockClosedIcon,
            Input,
            ButtonSolidBlue
        },
        data() {
            return {
                event: {
                    phoneNumber: '',
                    password: ''
                }
            }
        }
    }
</script>