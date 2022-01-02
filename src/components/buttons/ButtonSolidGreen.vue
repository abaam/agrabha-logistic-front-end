<template>
    <button :type="type" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-light hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light">
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
            buttonText: {
                type: String,
                default: ''
            },
        }
    }
</script>
