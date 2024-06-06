<template>
    <div>
        <header></header>
        <main>
            <h1 class="text-4xl"> Usuarios</h1>
            <section class="container cards-section">
                <user-card
                    v-for="(user, index) in data"
                    :key="index"
                    :user="user"
                ></user-card>

            </section>
        </main>
    </div>

</template>

<script setup>
    const { data } = await useFetch('https://fakestoreapi.com/users', {
        lazy: true,
        server: false,
    })
</script>

<style>
main{
    margin: 30px;
}
</style>