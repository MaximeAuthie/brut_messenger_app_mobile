<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/conversation-list">
                        <router-link to="/contacts-list"><img src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à l'accueil du site" title="Retour à l'accueil du site"></router-link>
                    </router-link>
                </ion-col>
                <ion-col size="10">
                    <h1 class="title">Cécilia Orsi</h1>
                </ion-col>
            </ion-row>
        </ion-grid>
        
        
        <ion-avatar class="custom">
            <img src="../../public/assets/images/moi.jpg" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Prénom</ion-label>
            <ion-input :value="contactData.firstName" :disabled="true" type="text" name="firstName"></ion-input>

            <ion-label position="fixed">Nom</ion-label>
            <ion-input :value="contactData.lastName" :disabled="true" type="text" name="lastName"></ion-input>

            <ion-label position="fixed">Surnom</ion-label>
            <ion-input v-model="contactData.nickName" type="text" name="nickName"></ion-input>
        
            <ion-label position="fixed">Adresse mail</ion-label>
            <ion-input :value="contactData.mail" :disabled="true" type="email" name="mail"></ion-input>

            <ion-label position="fixed">Anniversaire</ion-label>
            <ion-input :value="contactData.birthday" :disabled="true" type="text" name="birthday"></ion-input>

            <p v-if="isFormSubmit" class="successMsg">Modifications enregistrées</p>

            <div class="button">
                <ion-button @click="submitContactNickname" class="custom main" expand="block">Enregistrer</ion-button>
                <ion-button class="custom accessory" expand="block">Bloquer</ion-button>
            </div>
        </div>
    </ion-content>
  </template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonInput, IonGrid, IonRow, IonCol } from '@ionic/vue';
    
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'contact-profile',
        components: { IonContent, IonInput, IonLabel, IonAvatar, IonButton, IonGrid, IonRow, IonCol },
        data() {
            return {
                isFormSubmit: false,
                contactData: {
                    firstName: 'Cécilia',
                    lastName: 'Orsi',
                    nickName: 'Sasa',
                    mail: 'cecilia.orsi@orange.fr',
                    birthday: '25 février',
                    urlImg:'../../public/assets/images/cecilia.jpg',
                },
            }
        },
        methods: {
            submitContactNickname() {
                this.isFormSubmit = true;
            }
        }
    }); 
</script>

<style scoped>
    ion-content {
        --ion-background-color: var(--ion-color-brutBlue);
        padding: 10%;
    }
    .title {
        color: #000000;
        text-align: center;
        font-family: BUNGEE;
        font-size: 2.2em;
        line-height: 1.5vh;
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
        line-height: 0px;
    }

    ion-input {
        --background: var(--ion-color-brutLight);
        --padding-start:1vw;
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

    .errorMsgImput {
        margin-left: 5%;
    }
    .badInput {
        border: 4px solid #F55A4F;
        box-shadow: 7px 7px 0px black;
    }
    .successMsg {
        color: rgb(62, 118, 87);
        font-weight: bold;
        font-size: 1.2em;
        font-family: 'Space Mono', monospace;
        text-align: center;
    }
</style>