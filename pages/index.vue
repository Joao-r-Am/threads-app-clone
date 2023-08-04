<template>
  <!-- INDEX -->
  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <Main />

    <CreatePost
      :class="[
        {
          'max-h-[100vh] transition-all duration-200 ease-in visible':
            userStore.isMenuOverlay,
        },
        {
          'max-h-[0vh] transition-all duration-200 ease-in visible':
            !userStore.isMenuOverlay,
        },
      ]"
    />
    <Modal
      :class="[
        {
          'max-h-[100vh] transition-all duration-200 ease-in visible':
            userStore.isLogoutOverlay,
        },
        {
          'max-h-[0vh] transition-all duration-200 ease-in visible':
            !userStore.isLogoutOverlay,
        },
      ]"
    />
  </div>
</template>

<script setup>
import Vue from 'vue'
import Modal from '~/components/Modal.vue'
import CreatePost from '~/components/CreatePost.vue'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>
