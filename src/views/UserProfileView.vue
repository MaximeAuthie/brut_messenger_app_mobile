<template>
    <ion-app>
        <ion-content :fullscreen="true">

            <h1 class="title">Mon profil</h1>
    
            <ion-avatar>
                <img src="../../public/assets/images/moi.jpg" alt="">
            </ion-avatar>

            <div class="form">
                <ion-label position="fixed">Prénom</ion-label>
                <ion-input v-model="userData.firstName" @keyup="checkImputKeyUp" :class="{badInput: isFirstNameEmpty}" type="text" name="firstName"></ion-input>
                <p v-if="isFirstNameEmpty" class="errorMsg errorMsgImput">Veuillez saisir votre prénom</p>

                <ion-label position="fixed">Nom</ion-label>
                <ion-input v-model="userData.lastName" @keyup="checkImputKeyUp" :class="{badInput: isLastNameEmpty}" type="text" name="lastName"></ion-input>
                <p v-if="isLastNameEmpty" class="errorMsg errorMsgImput">Veuillez saisir votre nom</p>
                
                <ion-label position="fixed">Surnom</ion-label>
                <ion-input v-model="userData.nickName" class="custom" type="text" name="nickName"></ion-input>
            
                <ion-label position="fixed">Adresse mail</ion-label>
                <ion-input v-model="userData.mail" @keyup="checkImputKeyUp" :class="{badInput: isMailEmpty}" type="email" name="mail"></ion-input>
                <p v-if="isMailEmpty" class="errorMsg errorMsgImput">Veuillez saisir votre adresse mail</p>
                <p v-if="!isMailCorrect" class="errorMsg errorMsgImput">Adresse mail incorrecte.</p>

                <ion-label position="fixed">Nouveau mot de passe</ion-label>
                <ion-input v-model="userData.password" @keyup="checkImputKeyUp" :class="{badInput: passwordError}" type="password" name="password"></ion-input>
            
                <ion-label position="fixed">Ressaisir le mot de passe</ion-label>
                <ion-input v-model="userData.rePassword" @keyup="checkImputKeyUp" :class="{badInput: passwordError}" type="password" name="rePassword"></ion-input>

                <p v-if="passwordError" class="errorMsg">Les deux mots de passe saisis ne sont pas identiques!</p>
                <p v-if="isFormSubmit" class="successMsg">Vos informations personnelles ont bien été enregistrées.</p>

                <div class="button">
                    <ion-button @click="submitUserProfile" class="main" expand="block">Enregistrer</ion-button>
                    <router-link to="/delete-account" class="noUnderline">
                        <ion-button class="accessory" expand="block">Supprimer mon compte</ion-button>
                    </router-link>
                </div>

            </div>
        </ion-content>
        <ion-footer>
                <nav-bar></nav-bar>
        </ion-footer>
    </ion-app>
  </template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonLabel, IonInput, IonFooter } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import NavBar from '../components/NavBarComponent.vue';

    export default defineComponent({
        name: "user-profile",
        components: { 'nav-bar': NavBar, IonContent, IonInput, IonLabel, IonAvatar, IonButton, IonFooter },
        data() {
            return {
                isFormSubmit: false,
                isFirstNameEmpty: false,
                isLastNameEmpty: false,
                isMailEmpty: false,
                isPasswordEmpty: true,
                isRePasswordEmpty: true,
                isMailCorrect: true,
                isImputEmpty: true,
                passwordError: false,
                userData: {
                    firstName: 'Maxime',
                    lastName: 'Authié',
                    nickName: 'DarkRabbiT',
                    mail: 'authie.maxime@orange.fr',
                    password: '',
                    rePassword:''
                },
            }
        },
        methods: {
            submitUserProfile() {
                this.checkImputSubmit();
                this.checkMail();
                this.checkPassword();
                if (this.isImputEmpty == false && this.isMailCorrect == true && !this.passwordError) {
                    this.isFormSubmit = true;
                }
            },
            checkImputKeyUp() {
                if (this.userData.firstName != '') {
                  this.isFirstNameEmpty = false;
                }
                if (this.userData.lastName != '') {
                  this.isLastNameEmpty = false;
                } 
                if (this.userData.mail != '') {
                  this.isMailEmpty = false;
                } 
                if (this.userData.password != '') {
                    this.isPasswordEmpty = false;
                }
                if (this.userData.rePassword != '') {
                    this.isRePasswordEmpty = false;
                } 
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
              this.resetIsEmptyData(); // Remets tous les booléens à leur valeur par défaut
              if (this.userData.firstName == '') {
                  this.isFirstNameEmpty = true;
                  this.isImputEmpty=  true;
              }
              if (this.userData.lastName == '') {
                  this.isLastNameEmpty = true;
                  this.isImputEmpty = true;
              }
              if (this.userData.mail == '') {
                  this.isMailEmpty = true;
                  this.isImputEmpty = true;
              }
              if (this.userData.password != '') {
                  this.isPasswordEmpty = false;
              }
              if (this.userData.rePassword != '') {
                  this.isRePasswordEmpty = false;
              }
          },
          resetIsEmptyData() { // Remets tous les booléens à leur valeur initiale
                this.isFormSubmit = false;
                this.isImputEmpty = false;
                this.isFirstNameEmpty = false;
                this.isLastNameEmpty = false;
                this.isMailEmpty = false;
                this.isPasswordEmpty = true;
                this.isRePasswordEmpty = true;
          },
          checkPassword() { // Vérifie si les deux password sont identiques
                this.passwordError = false;
                if (!this.isPasswordEmpty || !this.isRePasswordEmpty) {
                    if (this.userData.password != this.userData.rePassword) {
                        this.passwordError= true;
                    }
                }
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
        --ion-background-color: var(--ion-color-brutYellow);
        padding: 10%;
    }

    ion-avatar {
        width:150px;
        height: 150px;
        margin-top: 2vh;
        margin-bottom: 4vh;
    }

    .title {
        font-size: 1.7em;
        line-height: 4.5vh;
    }

</style>