<template>
    <Navigation />
    <main class="container mx-auto">
        <section class="grid place-items-center px-4 md:px-8 lg:px-12">
            <div class="w-full md:w-3/4 lg:w-1/2 bg-blue-light rounded py-4 px-4 md:px-8 lg:px-12 mb-8">
                <!-- Use the 'prevent' modifier in form @submit.prevent="" -->
                <form class="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-between md:space-x-2">
                    <div class="w-full md:flex-1">
                        <label for="phone-number" class="block text-sm font-semibold sr-only">Tracking number</label>
                        <input class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="Tracking ID" />
                    </div>
                    <ButtonSolidGreen class="md:w-auto w-full uppercase tracking-wide font-semibold">Track Delivery</ButtonSolidGreen>
                </form>
            </div>

            <!-- Display the element below by default -->
            <!-- <div class="w-full md:w-3/4 lg:w-1/2 grid place-items-center">
                <div class="w-3/4">
                    <img class="my-6" src="../../public/svg/destination.svg" alt="">
                    <p class="block leading-5 text-center">Track your delivery by entering the delivery ID in the box above.</p>
                </div>
            </div> -->

            
            <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ml-4" v-for="(tracking_detail, index) in tracking_details" :key="tracking_detail.id">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ tracking_detail.date_time }}</time>
                    <h3 v-if="index === 1" class="text-md font-semibold text-gray-900 dark:text-white">{{ tracking_detail.tracking_status }}</h3>
                    <h3 v-else class="text-md font-semibold text-gray-900 dark:text-white">{{ tracking_detail.tracking_status }} {{ tracking_detail.location }}</h3>
                    <!-- <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p> -->
                    <!-- <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> -->
                </li>
            </ol>

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
    import Navigation from '../components/Navigation.vue'
    import Input from '../components/Input.vue'
    import axios from "axios";
    import ButtonSolidGreen from '../components/buttons/ButtonSolidGreen.vue'

    export default {
        name: 'Tracking',
        components: { Navigation, Input, ButtonSolidGreen },
        data() {
            return {
                tracking_details:[]
            }
        },
        mounted() {
            let tracking_id = window.location.pathname.split('/').pop();
            console.log(tracking_id);

            axios.get(process.env.VUE_APP_API + `tracking/details/${this.$route.params.id}`, {
                withCredentials: true,  
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('csrf_token'),
                "Access-Control-Allow-Origin": "*"
                }
            }).then(response=>{
                this.tracking_details = response.data.tracking;
                console.log(this.tracking_details);
            }).catch(error=>{
                console.log(error)
            })
        }
    }
</script>