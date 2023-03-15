<script setup>
import { ref } from 'vue'
import { auth } from '../auth'
import { useRouter } from 'vue-router'

const $router = useRouter()

const username = ref('')
const password = ref('')

const login = () => {
  // Perform login logic here, then call auth.login() to set the loggedIn flag to true
  auth.login()
  $router.push('/dashboard')
}

const handleSubmit = (e) => {
  e.preventDefault()
  login()
}
</script>

<template>
  <main class="Login">
    <h1>Login</h1>
    <form @submit="handleSubmit">
      <div class="container">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div class="container">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<style lang="scss" scoped>
.Login {
  margin: 1rem;
  width: 15rem;

  h1 {
    margin-bottom: 1rem;
  }

  .container {
    label, input {
      display: block;
      width: 100%;
    }
  }

  form {
    display: grid;
    gap: 1rem;
  }
}
</style>
