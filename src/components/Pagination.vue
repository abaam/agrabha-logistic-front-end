<template>
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm"
        @click.prevent="change(pagination.current_page -1)"
        :class="{ 'disabled' : pagination.current_page == 1 }">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5"/>
        </a>

        <a href="#" aria-current="page" class="md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
        @click.stop="change(page)"
        v-for="page in pages" :key="page"
        :class="[page == pagination.current_page ? 'text-white bg-blue-light border border-blue-light':'hover:text-white hover:bg-blue-light text-black border border-grey-light']">
            {{ page }}
        </a>

        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-grey-light hover:bg-grey-light hover:bg-opacity-50 bg-white text-sm"
        @click.prevent="change(pagination.current_page + 1)"
        :class="{ 'disabled' : pagination.current_page == pagination.last_page }">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" />    
        </a>
    </nav>
</template>

<script>
    import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'

    export default {
        components: {
            ChevronRightIcon, ChevronLeftIcon
        },
        props: {
            pagination: {
                type: Object,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            }
        },
        computed: {
            pages() {
                if (!this.pagination.to) {
                    return null;
                }
                let from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                let to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                let pages = [];
                for (let page = from; page <= to; page++) {
                    pages.push(page);
                }
                return pages;
            },
        },
        methods: {
            change: function(page) {
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        }
    }
</script>