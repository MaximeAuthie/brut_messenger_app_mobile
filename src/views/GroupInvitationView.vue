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
                    <h1 class="title">Invitation</h1>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-avatar>
            <img src="../../public/assets/logo/LOGO_ROUND_YELLOW.png" alt="logo rut Messenger">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Adresse mail du contact</ion-label>
            <ion-input v-model="contactMail" :class="{badInput: isMailEmpty || !isMailCorrect}" @keyup="checkImputKeyUp" type="email" name="contact-email"></ion-input>
            <p v-if="isMailEmpty" class="errorMsg errorMsgImput">Veuillez saisir une adresse mail</p>
            <p v-if="!isMailCorrect" class="errorMsg errorMsgImput">Adresse mail incorrecte</p>

            <p v-if="isFormSubmit" class="successMsg">L'invitation a bien été envoyée</p>

            <div class="button">
                <ion-button @click="submitGroupInvitation" class="main" expand="block">Envoyer</ion-button>
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
            submitGroupInvitation() {
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