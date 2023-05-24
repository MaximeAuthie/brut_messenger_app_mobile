<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/group-settings">
                        <img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations">
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
            <ion-input v-model="member.nickname" :class="{ badInput: isMemberNicknameEmpty }" type="email" name="contact-email"></ion-input>
            <p v-if="isMemberNicknameEmpty" class="errorMsg errorMsgImput">Veuillez saisir un nom de groupe</p>

            <ion-label position="fixed">Couleur de ses messages</ion-label>
            <ion-select v-model="member.color" >
                <ion-select-option v-for="color in availableColors" :value="color.id" :key="color.id">{{ color.name }}</ion-select-option>
            </ion-select>
            <br>
            <ion-label position="fixed">Rôle dans le groupe :</ion-label>
            <ion-list>
                <ion-radio-group v-model="member.role">
                    <ion-item lines="none">
                        <ion-label>Administrateur</ion-label>
                        <ion-radio color="dark" slot="end" value="admin"></ion-radio>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-label>Membre</ion-label>
                        <ion-radio color="dark" slot="end" value="member"></ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>

            <p v-if="isFormSubmit" class="successMsg">Vos préférences ont bien été enregistrées.</p>

            <div class="button">
                <ion-button @click="submitMemberSettings" class="main" expand="block">Envoyer</ion-button>
                <ion-button class="accessory" expand="block">Exclure</ion-button>
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
        data() {
            return {
                isMemberNicknameEmpty: false,
                isFormSubmit: false,
                member: {
                    id: 1,
                    name: 'Maxime Authié',
                    nickname: 'Maxou',
                    role: 'member' ,
                    color: 3
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
            submitMemberSettings() {
                this.checkNickname();
                this.checkImputSubmit();
                if (this.isMemberNicknameEmpty == false) {
                    this.isFormSubmit = true;
                }
            },
            checkImputKeyUp() {
                if (this.member.nickname != '') {
                  this.isMemberNicknameEmpty = false;
                }
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
                this.resetIsEmptyData(); // Remets tous les booléens à leur valeur par défaut
                if (this.member.nickname == '') {
                    this.isMemberNicknameEmpty = true;
                }
            },
            resetIsEmptyData() { // Remets tous les booléens à leur valeur initiale
                    this.isFormSubmit = false;
                    this.isMemberNicknameEmpty = false;
            },
            checkNickname() {
                if (this.member.nickname == '') {
                    this.member.nickname = this.member.name;
                }
            }
        }
    }); 
</script>

<style scoped>

    ion-content {
        --ion-background-color: var(--ion-color-brutYellow);
        padding: 10%;
    }

    ion-content {
        --ion-background-color: var(--ion-color-brutRed);
        padding: 10%;
    }
    .title {
        font-size: 2em;
        line-height: 3.5vh;
    }

    ion-avatar.custom {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-bottom: 4vh;
    }

</style>