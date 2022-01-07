<template>
    <div class="flex items-center min-h-screen">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-6 md:px-12 lg:px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Registration</h1>

            <Form @submit="register" :validation-schema="schema" v-slot="{ errors }">
                <div class="mt-10">
                    <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 dismissible" role="alert" v-show="uniquePhoneNumber">
                        <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                            {{ uniquePhoneNumber }}
                        </div>
                        <button @click="closeAlert" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-collapse-toggle="alert-2" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-semibold">Phone Number</label>
                        <Field 
                            v-model="state.phone_number"
                            type="text"
                            as="input"
                            id="phone-number"
                            name="phone_number"
                            label="Phone number" 
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                            :class="errors['phone_number'] ? 'border border-purple' : 'border border-grey'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="phone_number" />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-semibold">Password</label>
                        <Field 
                            v-model="state.password"
                            type="password"
                            as="input"
                            id="password"
                            name="password"
                            label="Password" 
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                            :class="errors['password'] ? 'border border-purple' : 'border border-grey'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="password" />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-semibold">Re-type Password</label>
                        <Field 
                            v-model="state.retype_password"
                            type="password"
                            as="input"
                            id="retype-password"
                            name="retype_password"
                            label="Re-type Password" 
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                            :class="errors['retype_password'] ? 'border border-purple' : 'border border-grey'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="retype_password" />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-semibold">Register As</label>
                        <Field as="select"
                        v-model="state.register_as"
                            id="register-as"
                            name="register_as"
                            label="Register As"
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey border border-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                        >
                        <option value="1">Driver</option>
                        <option value="2">Customer</option>
                        </Field>
                    </div>

                    <div>
                        <ButtonSolidBlue type="submit" class="w-full" buttonText="Register" />
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
    import SelectInput from '../components/SelectInput'
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue'
    import { reactive } from "vue";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import * as yup from "yup";
    import axios from 'axios';

    export default {
        components: {
            LockClosedIcon,
            Input,
            ButtonSolidBlue,
            SelectInput,
            Form,
            Field,
            ErrorMessage,
        },

        data() {
            return {
                uniquePhoneNumber: '',
            };
        },

        setup() {
            const state = reactive({
                phone_number: '',
                password: '',
                retype_password: '',
                register_as: '1',
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
                .min(8, 'Password must be at least 6 characters').required("Password is required"),
            retype_password: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match'),
            });
            //some other function
            return {
                state,
                schema,
            };
        },

        methods: {
            register(){
                let self = this
                axios.post(process.env.VUE_APP_API + "register", {
                    phone_number: this.state.phone_number,
                    password: this.state.password,
                    register_as: this.state.register_as
                })
                .then(() => {
                    this.$router.push("/dashboard");
                })
                .catch(function (error) {
                    if (error.response) {
                        self.uniquePhoneNumber = error.response.data.errors.phone_number[0];
                    }
                })
            },

            closeAlert() {
                let self = this
                self.uniquePhoneNumber = '';
            }
        },
    }
</script>