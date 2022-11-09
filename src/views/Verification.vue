<template>
    <Navigation />
    <main class="flex h-screen justify-center items-center">
        <section class="grid place-items-center px-4 md:px-8 lg:px-12">
            <div class="text-center">
                <img class="w-32 md:w-40 lg:w-48 mx-auto mb-8" src="../../public/svg/verification.svg" alt="Account Verification">

                <h2 class="block font-bold text-xl md:text-2xl lg:text-3xl leading-6 mb-4">One-Time Password Verification</h2>
                
                <p class="block leading-5 my-3">To know you're real. Please confirm your account by entering the One-Time Code sent to <span class="font-semibold">{{ phone_number }}</span>.</p>
                
                <Form @submit="verify">
                    <div class="mb-4 w-full">
                        <label class="block text-sm font-semibold sr-only">Verify Account</label>
                        <input type="number" name="phone_number" v-model="phone_number" hidden />
                        <div v-if="alertOpen" id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 dismissible" role="alert" v-show="invalidOTP">
                            <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                                {{ invalidOTP }}
                            </div>
                            <button v-on:click="closeAlert()" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-collapse-toggle="alert-2" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <input type="number" name="otp_code" v-model="state.otp_code" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" />
                    </div>

                    <p class="block text-center leading-5 my-4 ">Didn't received the code? <a href class="font-semibold text-blue-light hover:text-blue" v-on:click="resend()">Resend Code</a></p>

                    <ButtonSolidBlue class="w-full my-4 font-semibold">Verify</ButtonSolidBlue>
                </Form>
                
                <p class="block text-center text-xs md:text-sm lg:text-base leading-4 my-3">By continuing you agree and accept the <a href="" class="font-semibold text-blue-light hover:text-blue">Terms and Conditions</a> and <a href="" class="font-semibold text-blue-light hover:text-blue">Privacy Policy</a>.</p>
            </div>
        </section>
    </main>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import ButtonSolidBlue from "../components/buttons/ButtonSolidBlue.vue";
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'
    import { Form } from "vee-validate";
    import { reactive } from "vue";
    import axios from 'axios';

    export default {
        components: { Navigation, ButtonSolidBlue, Form },
        data() {
            return {
                phone_number: localStorage.getItem('phone_number'),
                invalidOTP: '',
                alertOpen: true
            };
        },
        setup() {
            const state = reactive({
                otp_code: '',
            });

            return {
                state,
            };
        },
        methods: {
            verify(){
                let self = this
                axios.post(process.env.VUE_APP_API + 'verify', {
                    otp_code: this.state.otp_code,
                    phone_number: this.phone_number,
                })
                .then((response) => {
                    if(response.data.success){
                        // localStorage.clear();
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('role', response.data.role);
                        this.$router.push('/dashboard');
                    }else{
                        self.invalidOTP = response.data.message;
                        self.alertOpen = true;
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        self.invalidOTP = error.response.data.message;
                    }
                });
            },

            resend(){
                event.preventDefault();

                let self = this
                axios.post(process.env.VUE_APP_API + 'resend', {
                    user_id: localStorage.getItem('user_id'),
                })
                .then((response) => {
                    if(response.data.success){
                        createToast(response.data.message,
                        {
                            type: 'success',
                            transition: 'bounce',
                        })
                    }else{
                        createToast(response.data.message,
                        {
                            type: 'danger',
                            transition: 'bounce',
                        })
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // self.invalidOTP = error.response.data.message;
                        createToast(error.response.data.message,
                        {
                            type: 'danger',
                            transition: 'bounce',
                        })
                    }
                });
            },

            closeAlert: function(){
                this.alertOpen = false;
            }
        },
    }
</script>