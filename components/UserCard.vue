<template>
    <article class="us">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p>{{ user.username }}</p>
            <p>{{ user.password }}</p>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: false
    }
    });
    const { user } = props
</script>

<style lang="postcss">
.us{
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    flex-shrink: 0;
    border-radius: 170.4px;
    background: #71b84e54;
    box-shadow: -10px 17px 50px -33px #72B84E;
    padding: 20px;
}
</style>