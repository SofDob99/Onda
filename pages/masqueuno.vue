<template>
    <div class="podcast">
        <CardPodcast class="cardP" data-aos="fade-down-right" />
        <Playlist />


    </div>
</template>


<style lang="postcss">
.podcast {
    display: flex;
    flex-direction: row;
    margin: 50px;
    gap: 190px;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .podcast {
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    .cardP {
        margin-right: 20px;
    }
}
</style>