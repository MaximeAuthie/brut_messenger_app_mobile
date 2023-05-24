<template>
    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <router-link to="/contacts-list">
                        <img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations">
                    </router-link>
                    
                </ion-col>
                <ion-col size="10">
                    <h1 class="title">{{ contact.firstName }} {{ contact.lastName }}</h1>
                </ion-col>
            </ion-row>
        </ion-grid>
        
        
        <ion-avatar>
            <img src="../../public/assets/images/moi.jpg" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Prénom</ion-label>
            <ion-input :value="contact.firstName" :disabled="true" type="text" name="firstName"></ion-input>

            <ion-label position="fixed">Nom</ion-label>
            <ion-input :value="contact.lastName" :disabled="true" type="text" name="lastName"></ion-input>

            <ion-label position="fixed">Surnom</ion-label>
            <ion-input v-model="contact.nickname" type="text" name="nickName"></ion-input>
        
            <ion-label position="fixed">Adresse mail</ion-label>
            <ion-input :value="contact.mail" :disabled="true" type="email" name="mail"></ion-input>

            <ion-label position="fixed">Anniversaire</ion-label>
            <ion-input :value="contact.birthday" :disabled="true" type="text" name="birthday"></ion-input>

            <p v-if="isFormSubmit" class="successMsg">Modifications enregistrées</p>

            <div class="button">
                <ion-button @click="submitContactNickname" class="main" expand="block">Enregistrer</ion-button>
                <ion-button class="accessory" expand="block">Bloquer</ion-button>
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
                contact: {
                    firstName: 'Cécilia',
                    lastName: 'Orsi',
                    nickname: 'Sasa',
                    mail: 'cecilia.orsi@orange.fr',
                    birthday: '25 février',
                    urlImg:'../../public/assets/images/cecilia.jpg',
                },
            }
        },
        methods: {
            submitContactNickname() {
                this.checkNickname();
                this.isFormSubmit = true;
            },
            checkNickname() {
                if (this.contact.nickname == '') {
                    this.contact.nickname = this.contact.firstName + ' ' + this.contact.lastName;
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
    .title {
        font-size: 2em;
        line-height: 7vh;
    }

    ion-avatar {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-bottom: 4vh;
    }

</style>