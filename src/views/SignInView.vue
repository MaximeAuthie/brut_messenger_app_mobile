<template>
    <ion-content :fullscreen="true" class="flex">

        <ion-avatar class="custom">
            <img src="../../public/assets/logo/LOGO_ROUND_YELLOW.png" alt="">
        </ion-avatar>

        <div class="form">
            <ion-label position="fixed">Adresse mail</ion-label>
            <ion-input v-model="userData.mail" :class="{badInput: isMailEmpty || !isMailCorrect}" @keyup="checkImputKeyUp" type="email" name="email"></ion-input>
            <p v-if="isMailEmpty" class="errorMsg errorMsgImput">Veuillez saisir votre adresse mail</p>
            <p v-if="!isMailCorrect" class="errorMsg errorMsgImput">Adresse mail incorrecte.</p>

            <ion-label position="fixed">Mot de passe</ion-label>
            <ion-input v-model="userData.password" :class="{badInput: isPasswordEmpty}" @keyup="checkImputKeyUp" type="password" name="password"></ion-input>
            <p v-if="isPasswordEmpty" class="errorMsg errorMsgImput">Veuillez saisir un mot de passe</p>

            <div class="button">
                <ion-button @click="submitConnexion" class="custom main" expand="block">Connexion</ion-button>
                <ion-button class="custom accessory" expand="block"><a href="http://localhost:8080/forgot-password" class="no-underline">Mot de passe oublié</a></ion-button>
            </div>

            <ion-text color="light">
                <p>Pas encore inscrit? <a href="http://localhost:8080/register" >Clique ici</a> pour accéder au formulaire d'inscription.</p>
            </ion-text>
        </div>
       

    </ion-content>
</template>

<script lang="ts">
    import { IonContent, IonText, IonAvatar, IonButton, IonLabel, IonInput, IonButtons   } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'settings-component',
        components: { IonContent, IonInput, IonLabel, IonAvatar, IonText, IonButton},
        data() {
            return {
                isMailEmpty: false,
                isPasswordEmpty: false,
                isMailCorrect: true,
                isImputEmpty: true,
                userData: {
                    mail: '',
                    password: '',
                },

            }
        },
        methods: {
            submitConnexion() {
                this.checkImputSubmit();
                this.checkMail();
                if (this.isImputEmpty == false && this.isMailCorrect == true) {
                    this.$router.push('/conversation-list')
                }
            },
            checkImputKeyUp() {
                if (this.userData.mail != '') {
                  this.isMailEmpty= false;
                } 
              if (this.userData.password != '') {
                  this.isPasswordEmpty= false;
              } 
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
              this.resetIsEmptyData(); // Remets tous les booléens à false 
              if (this.userData.mail == '') {
                  this.isMailEmpty= true;
                  this.isImputEmpty= true;
              }
              if (this.userData.password == '') {
                  this.isPasswordEmpty= true;
                  this.isImputEmpty= true;
              }
          },
          resetIsEmptyData() { // Remets tous les booléens à false 
                this.isImputEmpty=false; 
                this.isMailEmpty= false;
                this.isPasswordEmpty= false;
          },
          checkMail() { // Vérifie si le format du mail est correct
            this.isMailCorrect = true;
            const pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
            if (this.userData.mail != '') {
              if (pattern.test(this.userData.mail)) {
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

    .title {
        color: #000000;
        text-align: center;
        font-family: BUNGEE;
        font-size: 2.2em;
    }

    ion-avatar.custom {
        width:150px;
        height: 150px;
        margin-top: 10vh;
        margin-bottom: 5vh;
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
        margin-top: 5vh;
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
        font-size: 1.5em;
        font-family: 'Dongle', sans-serif;
        line-height: 15px;
    }
    .errorMsgImput {
        margin-left: 5%;
    }

    .badInput {
        border: 4px solid #F55A4F;
        box-shadow: 7px 7px 0px black;
    }

    .no-underline {
        text-decoration: none;
        color: #000000;
    } 

    ion-text p {
        text-align: center;
        font-family: 'Dongle', sans-serif;
        font-size: 1.8em;
        line-height: 25px;
        margin-top: 10vh;
    }

    ion-text a:visited {
        color: var(--ion-color-light);
    }
</style>