<template>
    <ion-content :fullscreen="true" class="flex">

        <ion-avatar>
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
            
            <p v-if="isAuthentificationError" class="errorMsg errorMsgImput">Adresse mail ou mot de passe incorrect</p>

            <div class="button">
                <ion-button @click="submitConnexion" class="main" expand="block">Connexion</ion-button>
                <ion-button class="accessory" expand="block"><a href="http://localhost:8080/forgot-password" class="noUnderline">Mot de passe oublié</a></ion-button>
            </div>

            <ion-text color="light">
                <p>Pas encore inscrit? <a href="http://localhost:8080/register" >Clique ici</a> pour accéder au formulaire d'inscription.</p>
            </ion-text>
        </div>
       

    </ion-content>
</template>

<script lang="ts">
    import { IonContent, IonText, IonAvatar, IonButton, IonLabel, IonInput } from '@ionic/vue';
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
                isAuthentificationError: false,
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

    ion-avatar {
        width:150px;
        height: 150px;
        margin-top: 10vh;
        margin-bottom: 4vh;
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