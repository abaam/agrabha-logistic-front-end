<template>
    <Navbar />
    <main class="container mx-auto">
        <section class="grid place-items-center px-4 md:px-8 lg:px-12">
            <div class="text-center">
                <img class="w-32 md:w-40 lg:w-48 mx-auto mb-8" src="../../public/svg/verification.svg" alt="Account Verification">

                <h2 class="block font-bold text-lg md:text-2xl lg:text-4xl leading-6 my-4">One-Time Password Verification</h2>
                
                <p class="block leading-5 my-3">To know you're real. Please confirm your account by entering the One-Time Code sent to <span class="font-semibold">*******5285</span>.</p>
                
                <form action="">
                    <div class="mb-4 w-full">
                        <label class="block text-sm font-semibold sr-only">Verify Account</label>
                        <input type="number" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" placeholder="" />
                    </div>

                    <p class="block text-center leading-5 my-4">Didn't received the code? <a href="" class="font-semibold text-blue-light hover:text-blue">Resend Code</a></p>

                    <ButtonSolidBlue class="w-full my-4 font-semibold" buttonText="Verify" />
                </form>
                
                <p class="block text-center text-xs md:text-sm lg:text-base leading-4 my-3">By continuing you agree and accept the <a href="" class="font-semibold text-blue-light hover:text-blue">Terms and Conditions</a> and <a href="" class="font-semibold text-blue-light hover:text-blue">Privacy Policy</a>.</p>
            </div>
        </section>
    </main>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import ButtonSolidBlue from "../components/buttons/ButtonSolidBlue.vue";

    export default {
        components: { Navbar, ButtonSolidBlue }
    }
</script>