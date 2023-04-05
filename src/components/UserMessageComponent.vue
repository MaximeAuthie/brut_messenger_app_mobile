<template>
    <div class="container">
        <div class="indication">Maxime Authié (18h33)</div>
        <div class="message">Nickel! Et toi?</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'user-message',
    }); 
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        margin-top: 1vh;
        padding-right: 2vw;
        font-family: 'Dongle', sans-serif;
        font-size: 1.2em;
    }

    .indication {
        text-align: end;
        line-height: 1vh;
        padding-left: 2vw;
    }

    .message {
        width: 49%;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-right: 0.5vh;
        line-height: 1vh;
        border: solid black 3px;
        border-radius: 10px 10px 0px 10px;
        box-shadow: 5px 5px 0px black;
        color: white;
        text-align: end;
        background-color: var(--ion-color-brutYellow);
    }
</style>