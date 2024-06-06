<template>
    <div>
        <h1>Episodio {{ episodeId }}</h1>
        <p>Aquí puedes mostrar más detalles sobre el episodio con ID {{ episodeId }}.</p>
    </div>
</template>

<script>
export default {
    async asyncData({ params }) {
        const episodeId = params.id;
        return { episodeId };
    }
};
</script>