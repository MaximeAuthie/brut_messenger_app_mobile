<template>
    <ion-content :fullscreen="true">
        <h1 class="title">Supprimer mon compte</h1>

        <img class="warning" src="../../public/assets/logo/WARNING.png" alt="Attention">
       
        <div class="form">
            <p>La suppression de votre compte implique que tout vos messages et vos contacts soient supprimés.</p>
            <p>Etes-vous sûr de vouloir supprimer votre compte?</p>

            <div class="button">
                <ion-button class="custom main" expand="block">Confirmer</ion-button>
                <router-link to="/general-settings" class="no-underline">
                    <ion-button class="custom accessory" expand="block">Annuler</ion-button>
                </router-link>
            </div>

        </div>
    </ion-content>
  </template>

<script lang="ts">
    import { IonContent, IonButton } from '@ionic/vue';
    
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'settings-component',
        components: { IonContent, IonButton },
        
    }); 

</script>

<style scoped>
    ion-content {
        --ion-background-color: var(--ion-color-brutYellow);
        padding: 10%;
    }
    .return {
        padding-top: 2.5vh;
    }

    .title {
        color: #000000;
        line-height: 0px;
        text-align: center;
        font-family: BUNGEE;
        font-size: 1.7em;
        line-height: 3.5vh;
        padding-top: 1.5vh;
    }

    .warning {
        margin-top: 2vh;
        display: block;
        width: 200px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
    }
  
    .form {
        padding: 10%;
    }

    p {
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        font-family: 'Dongle', sans-serif;
        line-height: 25px;
    }

    .button {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        height: 17vh;
        margin-top: 2vh;
        padding-left: 5%;
        padding-right: 5%;
    }

    ion-button.custom {
        --border-radius: 10px;
        --border-color: #000000;
        --border-style: solid;
        --border-width: 5px;
        --box-shadow: 7px 7px 0px 0 rgb(0, 0, 0, 1);
        height: 6.5vh;
        font-family: 'Dongle', sans-serif;
        line-height: 0px;
        font-size: 2.2em;
        margin-top: 1vh;
        font-weight: normal;
    }

    ion-button.main {
        --background: var(--ion-color-brutRed);
        --background-hover: #9ce0be;
        --background-activated: #88f4be;
        --background-focused: #88f4be;
        --color: #FFFFFF;
    }
    ion-button.accessory {
        --background: var(--ion-color-brutLight);
        --background-hover: #9ce0be;
        --background-activated: #88f4be;
        --background-focused: #88f4be;
        --color: #000000;
    }
    .errorMsg {
        color: rgb(255, 0, 0);
        font-weight: bold;
        font-size: 1.2em;
        font-family: 'Space Mono', monospace;
    }

    .badInput {
        border: 4px solid #F55A4F;
        box-shadow: 7px 7px 0px black;
    }
    .no-underline {
        text-decoration: none;
    }   
</style>