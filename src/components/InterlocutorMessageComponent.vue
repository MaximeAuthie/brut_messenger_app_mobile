<template>
    <div class="container">
        <div class="indication">Cécilia Orsi (18h30)</div>
        <div class="message">Salut! Ca va?</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'interlocutor-message',
    }); 
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 2vh;
        margin-left: 1vw;
        font-family: 'Dongle', sans-serif;
        font-size: 1.2em
    }
    .indication {
        text-align: start;
        line-height: 1vh;
        padding-left: 2vw;
    }
    .message {
        width: 49%;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 0.5vh;
        line-height: 1vh;
        border: solid black 3px;
        border-radius: 10px 10px 10px 0px;
        box-shadow: 5px 5px 0px black;
        color: white;
        background-color: var(--ion-color-brutRed);
    }

</style>