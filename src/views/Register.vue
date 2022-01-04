<template>
    <div class="flex items-center min-h-screen">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-8 md:px-12 lg:px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Registration</h1>

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

                    <Input 
                        v-model="event.retypePassword"
                        type="password"
                        id="retype-password"
                        name="retype_password"
                        label="Re-type Password" 
                    />

                    <div>
                        <ButtonSolidBlue class="w-full" buttonText="Register" />
                    </div>

                    <div class="text-sm">
                        Already have an account?
                        <router-link to="/login" class="font-medium text-blue-light hover:text-blue">Sign In</router-link>
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
                    password: '',
                    retypePassword: ''
                }
            }
        }
    }
</script>