<template>
    <button :type="type" :class="buttonClass" class="flex justify-center py-2 px-4 border border-blue-light text-sm font-medium rounded-md bg-white text-blue-light hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">
        {{ buttonText }}
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "submit"
            },
            buttonClass: {
                type: String,
                default: ''
            },
            buttonText: {
                type: String,
                default: ''
            },
        }
    }
</script>
