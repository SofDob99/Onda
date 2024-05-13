<template>
    <nav>
        <ul>
    
        </ul>
        <div class="user" @click="panelActive = !panelActive">u</div>
        <div class="panel" v-show="panelActive">
        </div>


    </nav>
</template>

<style lang="postcss">
nav {
    background-color: bisque;
    

}
ul {
    @apply flex p-4;

    li {
        @apply p-4;
    }
}

.user {
    margin-left: 30px

}

.panel {
    width: 30px;
    height: 30px;
    background-color: aqua
}
.cuerpo {
    margin: 30px;
}
</style>

<script setup>
import { ref } from 'vue'
const panelActive = ref(false)
</script>