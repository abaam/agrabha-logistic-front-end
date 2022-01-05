<template>
    <div>
        <label class="block text-sm font-medium">{{ label  }}</label>
        <select :="$attrs" class="appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-900 rounded-t-md focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm" @input="$emit('update:modelValue', $event.target.value)">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name  }}</option>
        </select>
    </div>
</template>

<script>
    
    export default {
        props: {
            roles: {
                type: Array,
            },
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