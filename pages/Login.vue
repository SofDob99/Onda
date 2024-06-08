<template>
    <div class="login-container">
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: blue;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>