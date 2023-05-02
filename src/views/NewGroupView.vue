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
                    <h1 class="title">Nouveau groupe</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar class="custom">
            <img src="../../public/assets/images/moi.jpg" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Nom du groupe : </ion-label>
            <ion-input v-model="groupData.name" @keyup="checkImputKeyUp" :class="{badInput : isGroupNameEmpty}" type="text" name="firstName"></ion-input>
            <p v-if="isGroupNameEmpty" class="errorMsg errorMsgImput">Veuillez saisir un nom de groupe</p>
            <br>
            <ion-grid>
                <ion-row>
                    <ion-col size="10">
                        <ion-label position="fixed">Membres du groupe : </ion-label>
                    </ion-col>
                    <ion-col size="2">
                        <router-link to="/group-invitation">
                            <ion-icon :icon="addOutline" size="large"></ion-icon>
                        </router-link>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <p v-if="isMembersListEmpty" class="errorMsg errorMsgImput">Veuillez ajouter des membres au groupe</p>
            <p v-if="isFormSubmit" class="successMsg">Le groupe a été créé et ajouté à la liste de vos conversations</p>

            <div class="button">
                <ion-button @click="submitNewGroup" class="custom main" expand="block">Créer</ion-button>
            </div>
        </div>
    </ion-content>
  </template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonInput } from '@ionic/vue';
    import { chevronBackOutline, addOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'new-group',
        components: { IonContent, IonLabel, IonAvatar, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonInput },
        setup() {
            return { chevronBackOutline, addOutline };
        },
        data() {
            return {
                isGroupNameEmpty: false,
                isMembersListEmpty: false,
                isImputEmpty: false,
                isFormSubmit: false,
                groupData: {
                    name:'',
                    membersList: []
                }
            }
        },
        watch: {
            groupData() {
                if (this.groupData.membersList.length !== 0) {
                    this.isMembersListEmpty = false;
                }
            } 
           
        },
        methods: {
            submitNewGroup() {
                this.checkImputSubmit();
                if (!this.isImputEmpty) {
                    this.isFormSubmit = true;
                }
            },
            checkImputKeyUp() {
                if (this.groupData.name != '') {
                  this.isGroupNameEmpty = false;
                }
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
              this.resetIsEmptyData(); // Remets tous les booléens à leur valeur par défaut
                if (this.groupData.name == '') {
                  this.isGroupNameEmpty = true;
                  this.isImputEmpty = true;
                }
                if (this.groupData.membersList.length == 0) {
                  this.isMembersListEmpty = true;
                  this.isImputEmpty = true;
                }
            },
            resetIsEmptyData() { // Remets tous les booléens à false +
                this.isFormSubmit = false;
                this.isImputEmpty = false;
                this.isGroupNameEmpty = false;
                this.isMembersListEmpty = false;
            },
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

    ion-icon{
        color: #000000;
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
</style>