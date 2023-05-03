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
                    <h1 class="title">Réglages conversation</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar class="custom">
            <img src="../../public/assets/images/moi.jpg" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Surnom de l'interlocuteur</ion-label>
            <ion-input v-model="contact.nickname" :class="{ badInput: isContactNicknameEmpty }" type="email" name="contact-email"></ion-input>
            <p v-if="isContactNicknameEmpty" class="errorMsg errorMsgImput">Veuillez saisir votre prénom</p>

            <ion-label position="fixed">Couleur de mes messages</ion-label>
            <ion-select v-model="conversationSettings.userColor" >
                <ion-select-option v-for="color in availableColors" :value="color.id" :key="color.id">{{ color.name }}</ion-select-option>
            </ion-select>

            <ion-label position="fixed">Couleur de ses messages</ion-label>
            <ion-select v-model="contact.color">
                <ion-select-option v-for="color in availableColors" :value="color.id" :key="color.id">{{ color.name }}</ion-select-option>
            </ion-select>

            <p v-if="isFormSubmit" class="successMsg">Vos préférences ont bien été enregistrées.</p>

            <div class="button">
                <ion-button @click="submitConversationSettings" class="custom main" expand="block">Envoyer</ion-button>
            </div>
        </div>
    </ion-content>
</template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
    import { chevronBackOutline, addOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: { IonContent, IonLabel, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption },
        setup() {
            return { chevronBackOutline, addOutline };
        },
        data() {
            return {
                isContactNicknameEmpty: false,
                isFormSubmit: false,
                contact: {
                    id: 3,
                    name: 'Simon Labatut',
                    nickname: 'Don Diego de la Vega',
                    color: 2,
                    role: 'admin'
                },
                conversationSettings: {
                    userColor: 3,
                },
                availableColors: [
                    {
                        id: 1,
                        name: 'Rouge'
                    },
                    {
                        id: 2,
                        name: 'Vert'
                    },
                    {
                        id: 3,
                        name: 'Jaune'
                    },
                    {
                        id: 4,
                        name: 'Bleu'
                    },
                ]
            }
        },
        methods: {
            submitConversationSettings() {
                this.checkNickname();
                this.checkImputSubmit();
                if (this.isContactNicknameEmpty == false) {
                    this.isFormSubmit = true;
                }
            },
            checkImputKeyUp() {
                if (this.contact.nickname != '') {
                  this.isContactNicknameEmpty = false;
                }
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
                this.resetIsEmptyData(); // Remets tous les booléens à leur valeur par défaut
                if (this.contact.nickname == '') {
                    this.isContactNicknameEmpty = true;
                }
            },
            resetIsEmptyData() { // Remets tous les booléens à leur valeur initiale
                    this.isFormSubmit = false;
                    this.isContactNicknameEmpty = false;
            },
            checkNickname() {
                if (this.contact.nickname == '') {
                    this.contact.nickname = this.contact.name;
                }
            }
        }
    }); 
</script>

<style scoped>
    ion-content {
        --ion-background-color: var(--ion-color-brutRed);
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

    .badInput {
        border: 4px solid #F55A4F;
        box-shadow: 7px 7px 0px black;
    }

    .errorMsgImput {
        margin-left: 5%;
    }
    .successMsg {
        color: rgb(62, 118, 87);
        font-weight: bold;
        font-size: 1.2em;
        font-family: 'Space Mono', monospace;
        text-align: center;
    }
</style>