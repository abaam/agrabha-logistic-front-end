<template>
    <button :type="type" :class="buttonClass" class="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-light hover:bg-blue focus:outline-none focus:bg-blue">
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
