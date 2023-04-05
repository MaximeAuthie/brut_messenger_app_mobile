<template>
    <ion-app>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="3">
                        <ion-avatar class="custom">
                            <img src="../../public/assets/images/moi.jpg" alt="">
                        </ion-avatar>
                    </ion-col>
                    <ion-col size="9">
                        <h1 class="title">Liste des conversations</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <div class="button">
                <router-link to="/new-conversation" class="no-underline">
                    <ion-button class="custom main" expand="block">Nouvelle conversation</ion-button>
                </router-link>
                <router-link to="/new-group" class="no-underline">
                    <ion-button class="custom main" expand="block">Nouveau groupe</ion-button>
                </router-link>
            </div>
            <div class="button">
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
                <conv-button></conv-button>
            </div>    
        </ion-content>
        <ion-footer>
            <nav-bar></nav-bar>
        </ion-footer>
    </ion-app>
</template>

<script lang="ts">
    
    import { IonContent, IonAvatar, IonButton,IonGrid, IonRow, IonCol, IonFooter } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import NavBar from '../components/NavBarComponent.vue';
    import ConversationButton from '../components/ConversationButtonComponent.vue'

    export default {
        components: { 'nav-bar': NavBar, 'conv-button': ConversationButton, IonContent, IonAvatar, IonButton,IonGrid, IonRow, IonCol, IonFooter },
        data() {
            return {
                conversations: {
                    nom1: "Cécilia Orsi",
                    nom2: "Simon Labatut",
                    nom3: "La famille <3",
                    nom4: "Chantal Authié",
                    nom5: "Daniel Authié",
                }
            }
        }
    }
</script>

<style scoped>
ion-content {
        --ion-background-color: var(--ion-color-brutLight);
        padding: 10%;
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
    
    ion-col {
        text-align: center;
    }
    ion-avatar.custom {
        width:90px;
        height: 90px;
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
    }
    ion-input.custom {
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
        font-family: 'Dongle', sans-serif;
        line-height: 0px;
        height: 7vh;
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
        font-size: 1.2em;
        font-family: 'Space Mono', monospace;
    }

    .badInput {
        border: 4px solid #F55A4F;
        box-shadow: 7px 7px 0px black;
    }
    .no-underline {
        text-decoration: none;
    }   
</style>