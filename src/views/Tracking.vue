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
                    <ButtonSolidGreen type="submit" class="md:w-auto w-full uppercase tracking-wide font-semibold" buttonText="Track Delivery" />
                </form>
            </div>

            <!-- Display the element below by default -->
            <div class="w-full md:w-3/4 lg:w-1/2 grid place-items-center">
                <div class="w-3/4">
                    <img class="my-6" src="../../public/svg/destination.svg" alt="">
                    <p class="block leading-5 text-center">Track your delivery by entering the delivery ID in the box above.</p>
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
    import Navigation from '../components/Navigation.vue'
    import Input from '../components/Input.vue'
    import ButtonSolidGreen from '../components/buttons/ButtonSolidGreen.vue'

    export default {
        name: 'Tracking',
        components: {
            Navigation,
            Input,
            ButtonSolidGreen
        }
    }
</script>