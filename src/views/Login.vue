<template>
    <div class="flex items-center min-h-screen bg-grey bg-opacity-20">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image-3.jpg" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-4 md:px-8 lg:px-12 max-w-4xl p-10 mx-auto bg-white rounded-md shadow-md hover:shadow-2xl">
            <router-link to="/">
                <img src="img/agrabah-logistics-logo.png" class="w-64 mb-8 inline-block" alt="Agrabah Logistics">
            </router-link>

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Login</h1>
            <p class="mt-4">Log in with your phone number and password that you entered during your registration.</p>

            <Form @submit="login" :validation-schema="schema" v-slot="{ errors }">
                <div class="mt-10">
                    <div role="alert" v-show="invalidCredentials">
                        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Incorrect Credentials
                        </div>
                        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{{ invalidCredentials }}</p>
                        </div><br>
                    </div>
                    
                    <div class="mb-4">
                        <label for="phone-number" class="block text-sm font-semibold">Phone number</label>
                        <Field
                            v-model="state.phone_number"
                            type="text"
                            as="input"
                            id="phone-number"
                            name="phone_number"
                            autocomplete="off"
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:z-10 sm:text-sm"
                            :class="errors['phone_number'] ? 'border border-purple focus:ring-purple focus:ring-0 focus:border-purple' : 'border border-grey focus:ring-grey-dark focus:ring-0 focus:border-grey-dark'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="phone_number" />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-sm font-semibold">Password</label>
                        <Field 
                            v-model="state.password"
                            type="password"
                            as="input"
                            id="password"
                            name="password"
                            autocomplete="off"
                            class="appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:z-10 sm:text-sm"
                            :class="errors['password'] ? 'border border-purple focus:ring-purple focus:ring-0 focus:border-purple' : 'border border-grey focus:ring-grey-dark focus:ring-0 focus:border-grey-dark'"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="password" />
                    </div>
                    
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm">
                            Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-semibold text-blue-light hover:text-blue">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    
                    <ButtonSolidBlue id="sign_in_btn" class="mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg class="inline mr-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>Sign In</ButtonSolidBlue>
                </div>
            </Form>

            <div class="text-sm">
                Not registered yet? 
                <router-link to="/register" class="font-semibold text-blue-light hover:text-blue">Create an account?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import User from "../api/user";
    import * as yup from "yup";
    import { reactive } from "vue";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import { LockClosedIcon } from '@heroicons/vue/solid'
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue'
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'
    import 'flowbite';
    import $ from "jquery";

    export default {
        components: {
            LockClosedIcon,
            ButtonSolidBlue,
            Form,
            Field,
            ErrorMessage
        },
        data() {
            return {
                invalidCredentials: '',
                error: null
            };
        },
        setup() {
            const state = reactive({
                phone_number: '',
                password: '',
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
                .required("Password is required"),
            });
            return {
                state,
                schema,
            };
        },
        mounted() {
            $('.animate-spin').hide();
        },
        methods: {
            login(){
                localStorage.clear();
                let self = this
                $('#sign_in_btn').attr('disabled', 'true');
                $('.animate-spin').show();
               
                User.login({
                        phone_number: this.state.phone_number,
                        password: this.state.password
                    })
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('time_of_login', (new Date()).getTime())
                    localStorage.setItem('csrf_token', response.data.access_token);
                    this.$root.$emit('login', true); 
                    
                    if(response.data.verified){
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('role', response.data.role);
                        localStorage.setItem('user_id', response.data.id);

                        createToast('Welcome! Logged-in successfully.',
                        {
                            type: 'success',
                            transition: 'bounce',
                        })

                        setTimeout(function () {
                            self.$router.push('/dashboard');
                        }, 2000);
                    } else {
                        localStorage.setItem('phone_number', response.data.phone_number);
                        localStorage.setItem('user_id', response.data.id);
                        localStorage.setItem('user_id', response.data.id);
                        
                        createToast('Logged-in! Your account needs to be verified.',
                        {
                            type: 'info',
                            transition: 'bounce',
                        })

                        setTimeout(function () {
                            self.$router.push('/verification');
                        }, 2000);
                    }
                })
                .catch(function (error) { 
                    if (error.response) {
                        $('#sign_in_btn').removeAttr('disabled');
                        $('.animate-spin').hide();
                        createToast(error.response.data.message,
                        {
                            type: 'danger',
                            transition: 'bounce',
                        })
                    }
                });
            }
        },
    }
</script>