<template>
    <div class="contenido">
        <div class="search01">
            <div class="search"> 
                <UTextarea 
                color="primary" 
                variant="none" 
                placeholder="Search..." 
                model-value="" />
                
            </div>
            
            <button class="circle_button">
                <Icon name="ic:sharp-search" color="white" size="2em"></Icon>
            </button>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <section class="cat" v-for="(categorias, index) in categorias" :key="index" data-aos="fade-up">
                <h3 class="text-xl">{{ categorias }}</h3>

            </section>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const categorias = ref([
    'ECONOMÍA',
    'DEPORTES',
    'CULTURA',
    'MÚSICA',
    'MISTERIO',
    'INVESTIGACIÓN',
    'MODA',
    'PRENSA ROSA',
    'CINE',
    'DOCUMENTALES',
    'ARTE',
]);
</script>
<style lang="postcss">
.contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search01 {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.search {
    width: 264.251px;
    height: 41.172px;
    flex-shrink: 0;
    border-radius: 39.5px 39.5px 39.5px 39.5px;
    border: 4px solid #72B84E;
    background-color: #71b84e56
}

.text-xl {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cat {
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 996.808px;
    height: 70px;
    border-radius: 43.5px;
    border: 4px solid rgba(0, 0, 0, 0.00);
    background: #E1F5D9;
}

@media screen and (max-width: 768px) {
    .cat {
        width: 80%;
        height: 70px;
        padding: 20px;
    }

    .text-2xl {
        font-size: 1.5rem;
        /* Ajusta el tamaño del texto */
    }

    .search {
        width: 200px;
        height: 35px;
    }
}


@media screen and (min-width: 768px) and (max-width: 1024px) {
    .cat {
        width: 90%;
        height: 70px;
        padding: 25px;
    }

    .text-2xl {
        font-size: 1.75rem;
    }

    .search {
        width: 220px;
        height: 38px;
    }
}
</style>