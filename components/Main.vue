<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-w-[500px] overflow-hiden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div v-if="isPosts" v-for="post in posts" :key="post">
            <Post :post="post" @isDeleted="posts = []" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import Post from './Post.vue'
import { useUserStore } from '~/store/user'
import { ref, onBeforeMount } from 'vue'

const userStore = useUserStore()
// const user = useSupabaseUser()

let posts = ref([])
let isPosts = ref(true)
let isLoading = ref(false)

onBeforeMount(() => {
  posts.value = [
    {
      name: 'João R. DEV',
      image: 'https://avatars.githubusercontent.com/u/78563935?v=4',
      text: 'Um titulo aqui!!',
      picture: 'https://avatars.githubusercontent.com/u/78563935?v=4',
    },
  ]
})
</script>
