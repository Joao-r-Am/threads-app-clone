<template>
  <div
    id="Modal"
    class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 background-blur-md h-screen w-full"
  >
    <div
      class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2"
    >
      <button
        @click="userStore.isLogoutOverlay = false"
        class="flex items-center justify-between bg-black w-full p-3"
      >
        <div>Close Modal</div>
        <i class="material-icons" style="size: 25">close</i>
      </button>
      <div class="border-b border-b-gray-700 my-1" />
      <button
        class="flex items-center justify-between bg-black w-full p-3"
        @click="logout"
      >
        <div>Log Out</div>
        <i class="material-icons" style="size: 25">logout</i>
      </button>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '~/store/user'
import { useRouter } from '@nuxtjs/composition-api'
const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  return router.push('/auth')
}
</script>
