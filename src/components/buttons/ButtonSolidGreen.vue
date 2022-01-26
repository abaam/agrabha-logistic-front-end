<template>
    <button :type="type" :class="buttonClass" class="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-light hover:bg-green focus:outline-none focus:bg-green">
        <slot>Save</slot>
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
            }
        }
    }
</script>
