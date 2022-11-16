<template>
  <header class="sticky top-0 z-40 bg-white">
    <nav
      :class="navClass"
      class="flex items-center justify-start space-x-2 p-3 md:justify-end md:border-b"
    >
      <button
        @click="$emit('showSidebar')"
        type="button"
        class="focus:outline-none mr-3 rounded p-1 focus:ring-2 focus:ring-blue md:hidden"
      >
        <MenuAlt1Icon class="h-6 w-6 cursor-pointer text-blue" />
      </button>

      <h6 class="flex-1 text-lg font-bold md:sr-only">
        <slot></slot>
      </h6>

      <UserMenu />
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import UserMenu from "../components/UserMenu";
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import { BellIcon } from '@heroicons/vue/solid'
import 'tw-elements';
import { loadScript, unloadScript } from "vue-plugin-load-script";

export default {
  name: "Navbar",
  props: {
    navClass: String,
  },
  setup() {
    const isOpen = ref(true);

    return {
      isOpen,
    };
  },
  mounted() {
    unloadScript("https://unpkg.com/flowbite@1.5.3/dist/flowbite.js")
    loadScript("https://unpkg.com/flowbite@1.5.3/dist/flowbite.js")
  },
  components: {
    MenuAlt1Icon,
    UserMenu,
    BellIcon
  },
  data() {
      return {
          role: localStorage.getItem('role')
      };
  }
};
</script>
