<template>
    <div class="">
        <nav class="flex justify-between items-center space-x-12 py-2 px-6 md:px-12 lg:px-16 border-b">
            <a href="https://agrabah.ph">
                <img class="w-64" src="../../public/img/agrabah-logo.png" alt="Agrabah">
            </a>
            
            <router-link to="/login" class="flex justify-center py-2 px-4 border border-blue-light text-sm font-medium rounded-md bg-white text-blue-light hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">Login</router-link>
        </nav>
    </div>
</template>

<script>
    import ButtonOutlineBlue from "./buttons/ButtonOutlineBlue.vue"
    
    export default {
        components: {
            ButtonOutlineBlue
        }
    }
</script>