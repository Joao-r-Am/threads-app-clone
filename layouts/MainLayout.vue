<template>
  <div id="MainLayout" class="h-screen">
    <div class="w-full max-w-[500px] mx-auto">
      <div
        id="TopMenu"
        class="w-full flex items-center justify-center px-2 h-10 my-2"
      >
        <img src="../public/threads-logo.png" alt="" class="w-[35px]" />
      </div>
    </div>
    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>
    <div
      id="BottomNav"
      class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
    >
      <div
        class="flex w-full max-w-[500px] mx-auto flex items-center justify-around"
      >
        <button to="/" class="w-full h-full">
          <i class="material-icons" style="color: #ffffff; size: 35">home</i>
        </button>
        <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
          <i class="mb-1 material-icons" style="color: #ffffff; size: 32"
            >edit</i
          >
        </button>
        <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
          <i class="mb-1 material-icons" style="color: #ffffff; size: 32"
            >logout</i
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>
