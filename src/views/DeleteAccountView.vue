<template>
    <ion-content :fullscreen="true">
        <h1 class="title">Supprimer mon compte</h1>

        <img class="warning" src="../../public/assets/logo/WARNING.png" alt="Attention">
       
        <div class="form">
            <p>La suppression de votre compte implique que tout vos messages et vos contacts soient supprimés.</p>
            <p>Etes-vous sûr de vouloir supprimer votre compte?</p>

            <div class="button">
                <ion-button class="main" expand="block">Confirmer</ion-button>
                <router-link to="/user-profile  " class="noUnderline">
                    <ion-button class="accessory" expand="block">Annuler</ion-button>
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
    .title {
        font-size: 2.2em;
        line-height: 3.5vh;
    }
    .warning {
        margin-top: 2vh;
        display: block;
        width: 200px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
    }
  
    p {
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        font-family: 'Dongle', sans-serif;
        line-height: 25px;
    }

</style>