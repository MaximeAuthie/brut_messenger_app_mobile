<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/conversations-list">
                        <img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations">
                    </router-link>
                    
                </ion-col>
                <ion-col size="10">
                    <h1 class="title">Nouveau groupe</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar class="custom">
            <img src="../../public/assets/logo/LOGO_ROUND_YELLOW.png" alt="logo rut Messenger">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Nom du groupe : </ion-label>
            <ion-input v-model="groupData.name" @keyup="checkImputKeyUp" :class="{badInput : isGroupNameEmpty}" type="text" name="firstName"></ion-input>
            <p v-if="isGroupNameEmpty" class="errorMsg errorMsgImput">Veuillez saisir un nom de groupe</p>
            <br>
            <ion-grid>
                <ion-row>
                    <ion-col class="members" size="10">
                        <ion-label  position="fixed">Membres du groupe : </ion-label>
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
    ion-avatar.custom {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-bottom: 4vh;
    }

    .title {
        font-size: 2em;
        line-height: 3.5vh;
    }
    
    .members {
        display: block;
    }

    ion-label {
        width: 100%;
        line-height: 20px;
    }
</style>