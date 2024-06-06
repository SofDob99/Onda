<template>
    <div class="tit">
        <h1 class="text-3xl">Hola</h1>
    </div>
    <nuxt-link to="/masqueuno">
        <div class="gallery" data-aos="fade-right">
        <div class="row" v-for="(section, index) in sections" :key="index">
            <div class="card" v-for="(card, cardIndex) in section.cards" :key="cardIndex">
                <img :src="card.image" :alt="card.alt">
                <div>
                    <h1 class="text-3xl">{{ card.title }}</h1>
                    <h3 class="text-lg">{{ card.subtitle }}</h3>
                </div>
            </div>
        </div>
    </div>


    </nuxt-link>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    cards: [
                        { title: "Más de uno", subtitle: "Carlos Alsina", image: "/carlos2.png", alt: "Carlos Alsina", },
                        { title: "After Hour", subtitle: "Gema Ruiz", image: "/after.png", alt: "gema ruiz" },
                        { title: "Toma la pastilla roja", subtitle: "Andrés Moraleda", image: "/pastillaroja.png", alt: "Andrés Moraleda" },
                    ]
                },
                
            ]
        };
    }
};
</script>

<style lang="postcss">
.tit {
    margin: 30px;
    margin-left: 5%;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 20px;
}

.card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100% - 20px);
    max-width: 465.652px;
    flex-shrink: 0;
    border-radius: 87.26px 87.263px 87.26px 87.26px;
    background: var(--Blanco, #FFF);
    box-shadow: 17px 17px 50px -33px #72B84E;
    margin: 10px;
}

.card-image {
    display: none;
    
}


@media screen and (min-width: 768px) {
    .card {
        width: calc(50% - 20px);
        
    }
}

@media screen and (min-width: 1024px) {
    .card {
        width: calc(33.33% - 20px);
        
    }
}
</style>