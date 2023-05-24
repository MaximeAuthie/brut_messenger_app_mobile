<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/conversation">
                        <img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations">
                    </router-link>
                    
                </ion-col>
                <ion-col size="10">
                    <h1 class="title">Réglages conversation</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar>
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
                <ion-button @click="submitConversationSettings" class="main" expand="block">Envoyer</ion-button>
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
        --ion-background-color: var(--ion-color-brutBlue);
        padding: 10%;
    }

    ion-avatar {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-bottom: 4vh;
    }
    .title {
        font-size: 2em;
        line-height: 3.5vh;
    }

</style>