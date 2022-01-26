<template>
    <main class="container mx-auto max-w-2xl min-h-screen grid place-content-center">
        <section class="grid place-items-center px-4 md:px-8 lg:px-12">
            <div class="text-center">
                <img class="w-32 md:w-40 lg:w-48 mx-auto mb-8" src="../../public/svg/verification.svg" alt="Account Verification">

                <h2 class="block font-bold text-xl md:text-2xl lg:text-3xl leading-6 mb-4">Two-Factor Authentication</h2>
                
                <p class="block leading-5 my-3">Two-factor authentication adds an extra layer of security to your account by asking verification code shen you sign in. Please confirm your account by entering the code sent to <span class="font-semibold">*******5285</span>.</p>
                
                <form action="">
                    <div class="mb-4 w-full">
                        <label class="block text-sm font-semibold sr-only">Verify Account</label>
                        <input maxlength="6" type="text" class="text-center font-semibold appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" />
                    </div>

                    <p class="block text-center leading-5 my-4">Didn't received the code? <a href="" class="font-semibold text-blue-light hover:text-blue">Resend Code</a></p>

                    <ButtonSolidBlue class="w-full my-4 font-semibold">Submit</ButtonSolidBlue>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue.vue'

    export default {
        name: 'Authentication',
        methods: {
            onKeyup(event){
                event.target.value = event.target.value.replace(/[^0-9]/g,'')
                
                if((event.keyCode >= 48 && event.keyCode <= 57)||(event.keyCode >= 96 && event.keyCode<=105)){
                    const next = event.target.nextElementSibling
                    event.target.parentElement.nextElementSibling.lastChild.focus()
                    if(next === null) return
                        event.target.parentElement.nextElementSibling.lastChild.focus()
                }
                return
            }
        },
        components: { ButtonSolidBlue }
    }
</script>