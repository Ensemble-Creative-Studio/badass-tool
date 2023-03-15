<script setup>
import { RouterView } from 'vue-router'
import { auth } from './auth'
import { useRoute, useRouter } from 'vue-router'
import badassLogo from './../public/badass-logo.svg'

const $route = useRoute()
const $router = useRouter()

const logout = () => {
  auth.logout()
  $router.push('/login')
}
</script>

<template>
  <aside class="aside">
    <nav class="aside__nav">
      <div class="aside__logo">
        <img :src="badassLogo" alt="Badass Logo" />
      </div>
      <hr class="aside__divider" />
      <button
        class="aside__log-out"
        v-if="$route.path === '/dashboard'"
        @click="logout"
      >
        Log out
      </button>
    </nav>
  </aside>

  <RouterView />
</template>

<style lang="scss" scoped>
.aside {
  &__nav {
    margin: 1rem;
  }

  &__divider {
    background-color: grey;
    height: 0.05rem;
    border: none;
    margin-top: 1rem;
  }

  &__log-out {
    margin-top: 1rem;
    display: block;
  }
}
</style>
