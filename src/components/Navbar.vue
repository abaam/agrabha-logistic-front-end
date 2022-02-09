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
  components: {
    MenuAlt1Icon,
    UserMenu,
  },
};
</script>
