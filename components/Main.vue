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

let posts = ref([])
let isPosts = ref(true)
let isLoading = ref(false)

onBeforeMount(() => {
  posts.value = [
    {
      name: '_jao18',
      image: 'https://picsum.photos/id/8/400',
      text: 'Um titulo aqui!!',
      picture: 'https://picsum.photos/id/270/400',
    },
    {
      name: 'odysseus4244',
      image: 'https://http.cat/200',
      text: 'minha kombi na estrada!!',
      picture: 'https://picsum.photos/id/551/400',
    },
    {
      name: 'XTC1993',
      image: 'https://picsum.photos/id/190/400',
      text: 'Piracacicaba é muito massa 😝',
      picture: 'https://picsum.photos/id/57/400',
    },
    {
      name: 'nicotine',
      image: 'https://picsum.photos/id/61/400',
      text: 'quem fica pendurando pote na minha cerca?',
      picture: 'https://picsum.photos/id/90/400',
    },
    {
      name: 'paulo',
      image: 'https://picsum.photos/id/18/400',
      text: 'o espaço da minha mesa é muito pequeno',
      picture: 'https://picsum.photos/id/20/400',
    },
  ]
})
</script>
