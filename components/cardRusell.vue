<template>
    <div class="div3">
        <MazCarousel>
            <template #title>
                <h4 class="maz-m-0 texth1">Más de uno</h4>
            </template>
            <MazCard v-for="(item, i) in Array(3)" :key="i" :images="['/carlos2.png']" class="card2"
                style="min-width: 250px;">
                <template #title>
                    <h4 class="maz-m-0 texth1">Más de Uno</h4>
                </template>
                <template #content>
                    <p class="maz-text-muted sub2" style="margin-bottom: 0;">
                        Carlos Alsina
                    </p>
                </template>
            </MazCard>
        </MazCarousel>
    </div>
</template>

<script lang="ts" setup>
import MazCarousel from 'maz-ui/components/MazCarousel'
import MazCard from 'maz-ui/components/MazCard'
</script>

<style lang="postcss">
.maz-m-0 {
    color: #71B84E;

    /* H4-Pc */
    font-family: Nunito;
    font-size: 37px;
    font-style: normal;
    font-weight: 900;
    line-height: 29px;
    /* 78.378% */
}

.div3 {
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
}

.card2 {
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 458px;
    height: 117px;
    flex-shrink: 0;
    border-radius: 59px;
    background: #FFF;
    /* box-shadow: 6px 3px 6px 0px rgba(114, 184, 78, 0.30); */
}

.texth1 {
    color: #1A1C37;

    /* H4-Pc */
    font-family: Nunito;
    font-size: 37px;
    font-style: normal;
    font-weight: 900;
    line-height: 29px;
    /* 78.378% */
    /* 62.5% */
}

.sub2 {
    color: var(--Green, #72B84E);
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 23px;
}
</style>