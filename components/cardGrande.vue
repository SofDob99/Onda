<template>
    <div class="carousell" data-aos="zoom-out-right">
        <div class="carousel-content">
            <img src="/carlos.png" alt="Carlos Alsina">
        </div>
        <div class="text">
            <h3>Los programas de OndaCero</h3>
            <h1>Más de Uno</h1>
            <div class="sub">
                <h2>Carlos Alsina.</h2>
                <p>Las mañanas de OndaCero</p>
            </div>
            <div class="botonesresponsive"> 
                <button class="oval-button" @click="addTofollow('Carlos Alsina')">Seguir</button>
                <nuxt-link to="/masqueuno">
                    <button class="arrow-button">
                        <Icon name="ic:baseline-arrow-forward" color="white" size="2em"></Icon>
                    </button>
                </nuxt-link>
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
.carousell {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 384px;
    background-color: #ffffff;
    border-radius: 178.029px 178.031px 178.03px 178.029px;
    box-shadow: 20px 5px 50px -33px #72B84E;
}

.carousel-content {
    margin-left: 20px;
    margin-right: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 0;
}

.text {
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

h1 {
    color: var(--Blue, #20212c);
    font-family: Nunito;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 66.5px;
}

h3 {
    color: #71B84E;
    margin-bottom: 30px;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 10px;
}

h2 {
    color: var(--Green, #72B84E);
    font-family: Nunito;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
}

p {
    color: var(--Green, #72B84E);
    font-family: Nunito;
    font-size: 22px;
    font-style: normal;
    font-weight: light;
    line-height: 29px;
}

.sub {
    display: flex;
    align-items: center;
}

.oval-button,
.arrow-button {
    margin-top: 1rem;
    border: none;
    border-radius: 20px;
    background-color: #72B84E;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
}

.oval-button:hover,
.arrow-button:hover {
    background-color: #1A1B37;
}

.arrow-button {
    margin-top: 1rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

@media (max-width: 1024px) {
    .carousell {
        height: 350px;
        border-radius: 150px;
    }

    .text {
        margin-right: 100px;
    }

    h1 {
        font-size: 50px;
    }

    h3 {
        font-size: 20px;
    }

    h2 {
        font-size: 30px;
    }

    p {
        font-size: 20px;
    }

    .carousell img {
        display: none;
    }
}

@media (max-width: 992px) {
    .carousell {
        flex-direction: column;
        height: auto;
    }

    .carousel-content {
        flex-direction: column;
    }

    .text {
        margin-right: 0;
        margin-top: 20px;
    }

    h1 {
        font-size: 48px;
    }

    h3 {
        font-size: 20px;
    }

    h2 {
        font-size: 28px;
    }

    p {
        font-size: 18px;
    }

    .carousell img {
        display: none;
    }
}

@media (max-width: 768px) {
    .carousell {
        height: auto;
    }

    .carousel-content {
        text-align: left;
    }

    h1 {
        font-size: 36px;
        line-height: 33.5px;
    }

    h3 {
        font-size: 18px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }
    .botonesresponsive {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-bottom: 10px;

    }

    .oval-button {
        margin-top: 1rem;
        padding: 0.4rem 0.8rem;
    }

    .arrow-button {
        margin-top: 1rem;
        width: 40px;
        height: 40px;
    }

    .carousell img {
        display: none;
    }
}

@media (max-width: 576px) {
    .carousell {
        margin: 0 10px;
    }

    .text {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 28px;
        line-height: 33.5px;
    }

    h3 {
        margin-bottom: 12px;
        font-size: 16px;
    }

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }
    .botonesresponsive {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-bottom: 10px;

    }
    .oval-button {
        margin-top: 0.5rem;
        padding: 0.3rem 0.6rem;
    }

    .arrow-button {
        margin-top: 0.5rem;
        width: 40px;
        height: 40px;
    }

    .carousell img {
        display: none;
    }
}
</style>
