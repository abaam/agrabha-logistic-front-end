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

      <div class="inline-flex relative w-fit md:hidden">
          <span class="absolute top-0 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            4
          </span>
          <div class="bg-blue-light flex items-center justify-center text-center rounded-lg shadow-lg mr-3">
              <div>
              <svg id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="mx-auto text-white w-8 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <BellIcon/>
              </svg>
              </div>
          </div>
      </div>

      <!-- Dropdown menu -->
      <div id="dropdownNotification" class="hidden z-20 w-96 max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 overflow-y-auto max-h-80" aria-labelledby="dropdownNotificationButton" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 16040px);">
          <div class="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
              Notifications
          </div>
          <div class="divide-y divide-gray-100 dark:divide-gray-700">
            <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                </div>
            </div>
            <div class="pl-3 w-full">
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Jese Leos 
                  </span>
                    booked a delivery. Check the details.
                </div>
                <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
            </div>
            </a>
            <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Joseph image">
                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                </div>
            </div>
            <div class="pl-3 w-full">
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Joseph Mcfall
                  </span> 
                    made a payment using 
                  <span class="font-medium text-gray-900 dark:text-white">
                    GCash
                  </span> 
                    Check the details.
                </div>
                <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
            </div>
            </a>
            <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                </div>
            </div>
            <div class="pl-3 w-full">
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Jese Leos 
                  </span>
                    booked a delivery. Check the details.
                </div>
                <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
            </div>
            </a>
            <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Joseph image">
                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                </div>
            </div>
            <div class="pl-3 w-full">
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    Joseph Mcfall
                  </span> 
                    made a payment using 
                  <span class="font-medium text-gray-900 dark:text-white">
                    GCash
                  </span> 
                    Check the details.
                </div>
                <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
            </div>
            </a>
          </div>
          <a href="#" class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              <div class="inline-flex items-center">
              <svg class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                  View all
              </div>
          </a>
      </div>

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
};
</script>
