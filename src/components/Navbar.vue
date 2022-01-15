<template>
    <nav class="flex justify-start items-center space-x-12 py-2 px-6 md:px-12 lg:px-16 border-b mb-8">
        <router-link to="/">
            <img class="w-64 mr-6" src="../../public/img/agrabah-logo.png" alt="Agrabah">
        </router-link>
            
        <div class="flex-1 items-center justify-evenly space-x-8">
            <router-link to="'/tracking" class="uppercase block tracking-wide font-semibold hover:text-blue">Tracking</router-link>
        </div>

        <router-link to="/login" class="flex justify-center py-2 px-4 border border-blue-light text-sm font-medium rounded-md bg-white text-blue-light hover:bg-blue hover:text-white focus:outline-none">Login</router-link>
    </nav>
</template>

<script>
    import ButtonOutlineBlue from "./buttons/ButtonOutlineBlue.vue"
    
    export default {
        components: {
            ButtonOutlineBlue
        }
    }
</script>