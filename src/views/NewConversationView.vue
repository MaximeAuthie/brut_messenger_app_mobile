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
                    <h1 class="title">Nouvelle conversation</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar class="custom">
            <img src="../../public/assets/logo/LOGO_ROUND_YELLOW.png" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Adresse mail du contact</ion-label>
            <ion-input v-model="contactMail" @keyup="checkImputKeyUp" :class="{badInput: isMailEmpty || !isMailCorrect}" type="email" name="contact-email"></ion-input>

            <p v-if="isMailEmpty" class="errorMsg errorMsgImput">Veuillez saisir une adresse mail</p>
            <p v-if="!isMailCorrect" class="errorMsg errorMsgImput">Adresse mail incorrecte</p>

            <p v-if="isFormSubmit" class="successMsg">L'invitation a bien été envoyée</p>

            <div class="button">
                <ion-button @click="submitConversationInvitation" class="main" expand="block">Envoyer</ion-button>
            </div>
        </div>
    </ion-content>
  </template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonGrid, IonRow, IonCol, IonInput } from '@ionic/vue';
    import { chevronBackOutline, addOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: { IonContent, IonLabel, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonInput },
        setup() {
            return { chevronBackOutline, addOutline };
        },
        data() {
            return {
                contactMail: '',
                isMailEmpty: false,
                isMailCorrect: true,
                isFormSubmit: false
            }
        },
        methods: {
            submitConversationInvitation() {
                this.checkImputSubmit();
                this.checkMail();
                if (this.isMailEmpty == false && this.isMailCorrect == true) {
                    this.isFormSubmit = true;
                }
            },
            checkImputKeyUp() {
                if (this.contactMail!= '') {
                  this.isMailEmpty = false;
                }
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
              this.resetIsEmptyData(); // Remets tous les booléens à leur valeur par défaut
                if (this.contactMail == '') {
                  this.isMailEmpty = true;
                }
            },
            resetIsEmptyData() { // Remets tous les booléens à false +
                this.isMailEmpty = false;
            },
            checkMail() { // Vérifie si le format du mail est correct
                this.isMailCorrect = true;
                const pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

                if (this.contactMail != '') {
                    if (pattern.test(this.contactMail)) {
                        this.isMailCorrect = true;
                    } else {
                        this.isMailCorrect = false;
                    }
                }
            }
        }
    }); 
</script>

<style scoped>

    ion-content {
        --ion-background-color: var(--ion-color-brutGreen);
        padding: 10%;
    }
    ion-grid {
        line-height: 30px;
        width: 100%;
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
    ion-button {
        --border-radius: 10px;
        --border-color: #000000;
        --border-style: solid;
        --border-width: 5px;
        --box-shadow: 7px 7px 0px 0 rgb(0, 0, 0, 1);
        max-height: 6.5vh;
        font-family: 'Dongle', sans-serif;
        line-height: 0px;
        font-size: 2.2em;
        margin-top: 7vh;
        font-weight: normal;
    }
    ion-button.main {
        --background: var(--ion-color-brutRed);
        --background-hover: #9ce0be;
        --background-activated: #88f4be;
        --background-focused: #88f4be;
        --color: #FFFFFF;
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