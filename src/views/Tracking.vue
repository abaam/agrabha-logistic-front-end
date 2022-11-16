<template>
    <Navigation />
    <main class="container mx-auto">
        <section class="grid place-items-center px-4 md:px-8 lg:px-12">
            <div class="w-full md:w-3/4 lg:w-1/2 bg-blue-light rounded py-4 px-4 md:px-8 lg:px-12 mb-8">
                <!-- Use the 'prevent' modifier in form @submit.prevent="" -->
                <Form @submit="searchTracking()" :validation-schema="schema" v-slot="{ errors }" class="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-between md:space-x-2">
                    <div class="w-full md:flex-1">
                        <label for="phone-number" class="block text-sm font-semibold sr-only">Tracking number</label>
                        <Field
                            v-model="tracking_number"
                            name="tracking_number"
                            class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" 
                            :class="errors['tracking_number'] ? 'border border-purple focus:ring-purple focus:ring-0 focus:border-purple' : 'border border-grey focus:ring-grey-dark focus:ring-0 focus:border-grey-dark'"
                            placeholder="Tracking ID"
                        />
                        <ErrorMessage class="text-purple font-semibold text-sm block my-1" name="tracking_number" />
                    </div>
                    <ButtonSolidGreen class="md:w-auto w-full uppercase tracking-wide font-semibold">Track Delivery</ButtonSolidGreen>
                </Form>
            </div>

            <!-- Display the element below by default -->
            <div v-if="tracking_response" class="w-full md:w-3/4 lg:w-1/2 grid place-items-center">
                <div class="w-3/4">
                    <img class="my-6" src="../../public/svg/destination.svg" alt="">
                    <p class="block leading-5 text-center">Track your delivery by entering the delivery ID in the box above.</p>
                </div>
            </div>

            <div v-else class="w-full md:w-3/4 lg:w-1/2 grid place-items-center">
                <div class="w-3/4">
                    <img class="my-6" src="../../public/svg/no_results.svg" alt="">
                    <p class="block leading-5 text-center">Can't find your tracking details. Please check your Tracking ID or try again later.</p>
                </div>
            </div>

            <!-- Display the element below if tracking number was found -->
            <!-- <ul class="w-full md:w-3/4 lg:w-1/2 grid gap-2">
                <li class="flex items-center justify-start space-x-6 px-10 py-4 border border-grey-light rounded w-full">
                    <div class="grid">
                        <h6 class="font-medium">Successfully delivered to Charles Limpo</h6>
                        <p class="text-sm text-grey-dark block leading-4">Jan 04, 2022 1:00 PM</p>
                    </div>
                </li>
                <li class="flex items-center justify-start space-x-6 px-10 py-4 border border-grey-light rounded w-full">
                    <div class="grid">
                        <h6 class="font-medium">Departed from pick up point - In transit</h6>
                        <p class="text-sm text-grey-dark block leading-4">Jan 04, 2022 1:00 PM</p>
                    </div>
                </li>
                <li class="flex items-center justify-start space-x-6 px-10 py-4 border border-grey-light rounded w-full">
                    <div class="grid">
                        <h6 class="font-medium">Picked up from customer</h6>
                        <p class="text-sm text-grey-dark block leading-4">Jan 04, 2022 1:00 PM</p>
                    </div>
                </li>
                <li class="flex items-center justify-start space-x-6 px-10 py-4 border border-grey-light rounded w-full">
                    <div class="grid">
                        <h6 class="font-medium">Delivery created</h6>
                        <p class="text-sm text-grey-dark block leading-4">Jan 04, 2022 1:00 PM</p>
                    </div>
                </li>
            </ul> -->
        </section>
    </main>
</template>

<script>
    import axios from "axios";
    import Navigation from '../components/Navigation.vue'
    import Input from '../components/Input.vue'
    import ButtonSolidGreen from '../components/buttons/ButtonSolidGreen.vue'
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";

    export default {
        name: 'Tracking',
        components: { 
            Navigation,
            Input,
            ButtonSolidGreen,
            Form,
            Field,
            ErrorMessage
        },
        data() {
            return {
                tracking_number : '',
                tracking_response : true
            }
        },
        setup() {
            const schema = yup.object().shape({
                tracking_number: yup
                    .string()
                    .required("Please input the tracking number")
            });

            return {
                schema,
            }
        },
        mounted() {

        },
        methods: {
            searchTracking() {
                axios.get(process.env.VUE_APP_API + `tracking/search/${this.tracking_number}`)
                .then(response=>{
                    if(response.data.success === true) {
                        this.$router.push('/tracking/'+this.tracking_number);
                    } else {
                        this.tracking_response = false;
                    }
                    console.log(this.tracking_details);
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
</script>