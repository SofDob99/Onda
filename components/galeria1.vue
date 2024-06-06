<template>
    <MazCarousel>
        <template #title>
            <h4 class="maz-m-0 texth1">Más de uno</h4>
        </template>
        <MazCard v-for="(item, i) in Array(6)" :key="i" class="card2" style="min-width: 250px;">
            <template #default>
                <div class="card2-content">
                    <div><img src="/carlos2.png" alt=""></div>
                    <div class="text2">
                        <h1 class="text-4xl">Más de Uno</h1>
                        <div >
                            <h2 class="text-base">Carlos Alsina.</h2>
                        </div>
                    </div>
                </div>
            </template>
        </MazCard>
    </MazCarousel>
</template>

<script lang="ts" setup>
import MazCarousel from 'maz-ui/components/MazCarousel'
import MazCard from 'maz-ui/components/MazCard'
</script>

<style lang="postcss">
.card2 {
    background: var(--Blue, #ffffff);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 390px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 59px;
    box-shadow: -1px -1px 16px 0px rgba(114, 184, 78, 0.30);
    padding: 10px;
}

.card2-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.texth1 {
    color: var(--Blue, #ffffff);
    font-family: Nunito;
    font-style: normal;
    line-height: 15px;
    /* 62.5% */
}

.text2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sub2 {
    color: var(--Green, #72B84E);
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 23px;
    display: flex;
    align-items: center;
}

.sub2 h2 {
    margin-right: 10px;
}

.maz-m-0 {
    margin-left: 40px;
    color: #71B84E;
    font-family: Nunito;
    font-size: 37px;
    font-style: normal;
    font-weight: 900;
    line-height: 29px;
}
</style>
