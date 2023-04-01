<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/conversation-list">
                        <router-link to="/conversation-list"><img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations"></router-link>
                    </router-link>
                    
                </ion-col>
                <ion-col size="10">
                    <h1 class="title">Réglages du membre</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar class="custom">
            <img src="../../public/assets/images/moi.jpg" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Surnom de l'interlocuteur</ion-label>
            <ion-input class="custom" type="email" name="contact-email"></ion-input>
            <ion-label position="fixed">Couleur de ses messages</ion-label>
            <ion-select placeholder="Choisissez une couleur">
                <ion-select-option value="red">Rouge</ion-select-option>
                <ion-select-option value="green">Vert</ion-select-option>
                <ion-select-option value="yellow">Jaune</ion-select-option>
                <ion-select-option value="blue">Bleu</ion-select-option>
            </ion-select>
            <br>
            <ion-label position="fixed">Rôle dans le groupe :</ion-label>
            <ion-list>
                <ion-radio-group value="strawberries">
                    <ion-item lines="none">
                        <ion-label>Administrateur</ion-label>
                        <ion-radio color="dark" slot="end" value="small"></ion-radio>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-label>Membre</ion-label>
                        <ion-radio color="dark" slot="end" value="medium"></ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>
            <div class="button">
                <ion-button class="custom main" expand="block">Envoyer</ion-button>
                <ion-button class="custom accessory" expand="block">Exclure</ion-button>
            </div>
        </div>
    </ion-content>
  </template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonList, IonRadioGroup, IonRadio, IonItem } from '@ionic/vue';
    import { chevronBackOutline, addOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: { IonContent, IonLabel, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonList, IonRadioGroup, IonRadio, IonItem },
        setup() {
            return { chevronBackOutline, addOutline };
        },
    }); 
</script>

<style scoped>
ion-content {
        --ion-background-color: var(--ion-color-brutRed);
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
    

    ion-avatar.custom {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-left: auto;
        margin-right: auto;
        border: solid black 5px;
        box-shadow: 7px 7px 0px black;
    }

    .form {
        padding: 10%;
    }

    ion-label {
        font-size: 2em;
        font-weight: bold;
        font-family: 'Dongle', sans-serif;
    }
    ion-input.custom {
        --background: var(--ion-color-brutLight);
        --padding-start:1vw;
        height: 40px;
        border: 4px solid black;
        box-shadow: 7px 7px 0px black;
        margin-bottom: 1.5vh;
        font-size: 1.2em;
        color: black;
    }

    ion-select {
        background-color: var(--ion-color-brutLight);
        --padding-start:1vw;
        width: 100%;
        height: 40px;
        border: 4px solid black;
        box-shadow: 7px 7px 0px black;
        margin-bottom: 1.5vh;
        font-size: 1.2em;
        color: black;
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
</style>