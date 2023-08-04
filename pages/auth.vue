<template>
  <div id="AuthPage" class="w-full h-[100vh] h-screen pt-32 bg-black">
    <div class="w-full">
      <div class="w-full flex items-center justify-center gap-2.5 p-2">
        <img class="w-[35px]" src="../public/threads-logo.png" alt="logo" />
        <span class="font-bold text-2xl text-white">Threads</span>
      </div>
      <div class="max-w-[350px] mx-auto px-2 text-white">
        <div class="text-center mb-6 mt-4">Login / Register</div>
        <button
          @click="login('github')"
          class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">
            <img
              src="../public/github-logo.png"
              alt="github login"
              class="w-full max-w-[30px] rounded-full"
            />
            Github
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from '@nuxtjs/composition-api'
import { watchEffect } from 'vue-demi'
import { supabase } from '../server/supabase'

const route = useRouter()
const client = supabase
const user = async () => {
  return await client.auth.getUser()
}

watchEffect(() => {
  if (user.name) {
    return route.push('/')
  }
})

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    // options: {
    //   redirectTo: window.location.origin,
    // },
  })
  if (error) console.log(error)
}
</script>
