<template>
    <main class="container mx-auto">
        <Navbar />

        <div class="grid place-items-center py-48 px-8 md:px-12 lg:px-16 text-center">
            <h4 class="text-xl uppercase tracking-widest mb-2 text-grey-dark font-sans">Welcome to</h4>
            <h1 class="text-6xl md:text-7xl font-bold uppercase text-blue font-sans">Agrabah Logistics</h1>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue'

    export default {
        components: {
            Navbar
        }
    }
</script>