<template>
    <div>
        <div class="cardafter">
            <div class="card-content1">
                <img src="/after.png" alt="after">
                <h1 class="text-4xl">After Hours</h1>
                <h3 class="text-xl">Gema Ruiz</h3>
            </div>
            <div class="card-content2">
                <button class="oval-button" @click="addTofollow('After Hours')">Seguir</button>
                <Icon name="ic:sharp-download-for-offline" color="#72B84E" size="2em"></Icon>
                <Icon name="ic:outline-share" color="#72B84E" size="2em"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup>
const addTofollow = (seguir) => {
    let following = JSON.parse(localStorage.getItem('following')) || [];
    if (!following.includes(seguir)) {
        following.push(seguir);
        localStorage.setItem('following', JSON.stringify(following));
        alert(`${seguir} añadido a tus seguidos`);
    } else {
        alert(`${seguir} ya está en tus seguidos`);
    }
};
</script>

<style lang="postcss">
.cardafter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400.416px;
    height: 520px;
    flex-shrink: 0;
    border-radius: 170.4px;
    background: #FFF;
    box-shadow: -10px 17px 50px -33px #72B84E;
    padding: 20px;
}

.card-content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.card-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    
}

.card-content2 {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}

@media screen and (min-width: 425px) {
    .cardafter {
        margin-left: 10px;
        width: calc(90% - 10px);
        
    }
}
</style>