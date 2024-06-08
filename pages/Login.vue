<template>
    <div class="login-container">
        <h1 class="text-3xl">Inicia Sesión</h1>
        <MazInput v-model="username" label="Username" :disabled="isLoading" />
        <MazInput v-model="password" label="Password" type="password" :disabled="isLoading" />
        <button @click="handleLogin" :disabled="isLoading">
            <i class="icon-login"></i> Login
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const router = useRouter()

const handleLogin = async () => {
    isLoading.value = true
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })

        const data = await response.json()

        if (data.token) {
            alert('Login successful!')

            localStorage.setItem('token', data.token)
            localStorage.setItem('username', username.value)

            router.push('/')
        } else {
            alert('Login failed. Please check your credentials.')
        }
    } catch (error) {
        alert('An error occurred. Please try again later.')
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
.login-container {
    margin-top: 100px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 600px;
    height: 51px;
    border: 4px solid rgba(0, 0, 0, 0.00);
    gap: 1rem;
}

button {
    width: 162px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 43.5px;
    border: 4px solid rgba(0, 0, 0, 0.00);
    background: #71b84e;
}
</style>