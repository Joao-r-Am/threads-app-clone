<template>
  <div id="AuthPage" class="w-full h-[100vh] h-screen pt-32 bg-black">
    <div class="w-full">
      <div class="w-full flex items-center justify-center gap-2.5 p-2">
        <img class="w-[35px]" src="../public/threads-logo.png" alt="logo" />
        <span class="font-bold text-2xl text-white">Threads</span>
      </div>
      <div class="max-w-[350px] mx-auto px-2 text-white">
        <div class="text-center mb-6 mt-4">Login</div>
        <input
          v-model="email"
          type="text"
          id="Email"
          placeholder="Telefone, nome de usuário ou email"
          class="block w-full px-3 py-2 mb-6 text-white placeholder-white transition duration-100 ease-in-out bg-black border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <input
          v-model="password"
          type="password"
          id="Password"
          placeholder="Senha"
          class="block w-full px-3 py-2 mb-4 text-white placeholder-white transition duration-100 ease-in-out bg-black border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <div v-if="checkInput" class="text-red-500 mb-4">
          Preencha todos os campos.
        </div>
        <button
          @click="login"
          class="flex items-center mb-4 justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">Login</div>
        </button>
        <button
          @click="login"
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
import { ref, useRouter } from '@nuxtjs/composition-api'
const router = useRouter()

const email = ref(null)
const password = ref(null)
const checkInput = ref(false)

const login = () => {
  if (!email.value || !password.value) {
    checkInput.value = true
  } else {
    return router.push('/')
  }
}
</script>
