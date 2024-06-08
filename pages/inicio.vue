<template>
    <div >
        <img src="/public/inicio.png" alt="">
        <div class="inicio-pastilla">
            <div class="inicio-tot">
                <h1>Inicio Sesión</h1>
                <h3>¿No tienes cuenta? registrate</h3>
                
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.inicio-tot{
    display: flex;
    flex-direction: column;
}
.inicio-pastilla {
    display: flex;
    flex-direction: row;
    width: 780px;
    height: 895px;
    flex-shrink: 0;
    border-radius: 0px 200px 200px 0px;
    background: var(--Blanco, #FFF);
    box-shadow: -1px -9px 23px 0px rgba(114, 184, 78, 0.30);
}
</style>