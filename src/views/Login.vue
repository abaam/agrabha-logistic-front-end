<template>
    <div class="flex items-center min-h-screen">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-8 md:px-12 lg:px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Login</h1>
            <p class="mt-4">Log in with your phone number and password that you entered during your registration.</p>

            <Form @submit="stop" :validation-schema="schema" v-slot="{ errors }">
                <div class="mt-10 space-y-4">
                    <label class="block text-sm font-medium">Phone Number</label>
                    <Field
                        v-model="state.phone_number"
                        v-bind:class="{ 'border border-red-400': errors['phone_number'] }"
                        type="text"
                        as="input"
                        id="phone-number"
                        name="phone_number"
                        label="Phone number" 
                        class="rounded w-full"
                    />

                    <div class="text-red-500">
                        {{ errors.phone_number }}
                    </div>

                    <label class="block text-sm font-medium">Password</label>
                    <Field 
                        v-model="state.password"
                        v-bind:class="{ 'border border-red-400': errors['password'] }"
                        type="password"
                        as="input"
                        id="password"
                        name="password"
                        label="Password" 
                        class="rounded w-full"
                    />

                    <div class="text-red-500">
                        {{ errors.password }}
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
                        <ButtonSolidBlue class="w-full" buttonText="Sign In" />
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
    import { reactive } from "vue";
    import { Form, Field } from "vee-validate";
    import * as yup from "yup";
    
    export default {
        components: {
            LockClosedIcon,
            Input,
            ButtonSolidBlue,
            Form,
            Field,
        },

        setup() {
            const state = reactive({
                phone_number: "",
                password: "",
            });
            
            const schema = yup.object().shape({
            phone_number: yup
                .string()
                .required("Phone number is required")
                .matches(
                /^(09|\+639)\d{9}$/,
                "Phone number is not valid"
                ),
            password: yup
                .string()
                .min(6, 'Password must be at least 6 characters').required("Password is required"),
            });
            //some other function
            return {
                state,
                schema,
            };
        },
    }
</script>