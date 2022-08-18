<template>
    <div class="flex items-center min-h-screen bg-grey bg-opacity-20">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-4 md:px-8 lg:px-12 max-w-4xl p-10 mx-auto bg-white rounded-md shadow-md hover:shadow-2xl">
            <router-link to="/">
                <img src="img/agrabah-logistics-logo.png" class="w-48 mb-8" alt="Agrabah Logistics">
            </router-link>

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Registration</h1>

            <Form @submit="register" :validation-schema="schema" v-slot="{ errors }">
                <div class="mt-10">
                    <div v-if="alertOpen" id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 dismissible" role="alert" v-show="uniquePhoneNumber">
                        <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                            {{ uniquePhoneNumber }}
                        </div>
                        <button v-on:click="closeAlert()" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-collapse-toggle="alert-2" aria-label="Close">
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
                            autocomplete="off"
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
                            autocomplete="off"
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                            :class="errors['password'] ? 'border border-purple' : 'border border-grey'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="password" />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-semibold">Confirm Password</label>
                        <Field 
                            v-model="state.confirm_password"
                            type="password"
                            as="input"
                            id="confirm-password"
                            name="confirm_password"
                            label="Re-type Password"
                            autocomplete="off"
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"
                            :class="errors['confirm_password'] ? 'border border-purple' : 'border border-grey'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="confirm_password" />
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

                    <ButtonSolidBlue id="sign_up_btn" class="mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>Sign Up</ButtonSolidBlue>
                </div>
            </Form>
            <div class="text-sm">
                Already have an account?
                <router-link to="/login" class="font-semibold text-blue-light hover:text-blue">Sign In</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import User from "../api/user";
    import { reactive } from "vue";
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue'
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'
    import $ from "jquery";
    
    export default {
        setup() {
            const state = reactive({
                phone_number: '',
                password: '',
                confirm_password: '',
                register_as: '1',
            });

            const schema = yup.object().shape({
            phone_number: yup
                .string()
                .required("Phone number is required")
                .matches(
                /^(09|\+639)\d{9}$/,
                "Invalid phone number"
                ),
            password: yup
                .string()
                .min(6, 'Password must be at least 6 characters').required("Password is required"),
            confirm_password: yup.string()
                .oneOf([yup.ref('password'), null], 'Password does not must match'),
            });

            return {
                state,
                schema,
            };
        },
        data() {
            return {
                uniquePhoneNumber: '',
                alertOpen: true
            };
        },
        mounted() {
            $('.animate-spin').hide();
        },
        methods: {
            register(){
                let self = this
                $('#sign_up_btn').attr('disabled', 'true');
                $('.animate-spin').show();

                User.register({
                    phone_number: this.state.phone_number,
                    password: this.state.password,
                    register_as: this.state.register_as
                })
                .then((response) => {
                    localStorage.setItem('Phone Number', response.data.phone_number);
                    createToast("Great! You're successfully registered.",
                    {
                        type: 'info',
                        transition: 'bounce',
                    })

                    setTimeout(function () {
                        self.$router.push("/verification");
                    }, 2000);
                })
                .catch(function (error) {
                    if (error.response) {
                        $('#sign_up_btn').removeAttr('disabled');
                        $('.animate-spin').hide();
                        self.uniquePhoneNumber = error.response.data.errors.phone_number[0];
                        self.alertOpen = true;
                    }
                })
            },

            closeAlert: function(){
                this.alertOpen = false;
            }
        },
        components: { ButtonSolidBlue, Form, Field, ErrorMessage }
    }
</script>