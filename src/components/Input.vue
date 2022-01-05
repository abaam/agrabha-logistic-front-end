<template>
    <div>
        <label class="block text-sm font-medium">{{ label  }}</label>
        <input :="$attrs" :value="modelValue" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-900 rounded-t-md focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" :placeholder="label" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        inheritAttrs: false,
    }
</script>