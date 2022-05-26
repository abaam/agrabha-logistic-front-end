<template>
    <div class="flex items-center min-h-screen bg-grey bg-opacity-20">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
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
                    
                    <ButtonSolidBlue class="mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign In</ButtonSolidBlue>
                    
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
        methods: {
            login(){
                let self = this
                User.login({
                        phone_number: this.state.phone_number,
                        password: this.state.password
                    })
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('time_of_login', (new Date()).getTime())
                    localStorage.setItem('csrf_token', response.data.csrf_token);
                    this.$root.$emit('login', true); 
                    if(response.data.verified){
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('role', response.data.role);
                        localStorage.setItem('user_id', response.data.id);
                        this.$router.push('/dashboard');
                    } else {
                        localStorage.setItem('Phone Number', response.data.phone_number);
                        localStorage.setItem('user_id', response.data.id);
                        this.$router.push('/verification');
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        self.invalidCredentials = error.response.data.message;
                    }
                });
            }
        },
    }
</script>