<template>
    <ion-app>
        <ion-content>
            <ion-grid class="header">
                <ion-row>
                    <ion-col size="1.5">
                        <router-link to="/conversation-list">
                            <img class="return" src="../../public/assets/icon/back.png" id="return-icon" alt="Retour à la liste des conversations" title="Retour à la liste des conversations">
                        </router-link>
                    </ion-col>
                    <ion-col size="2.5">
                        <ion-avatar class="custom">
                            <img src="../../public/assets/images/cecilia.jpg" alt="">
                        </ion-avatar>
                    </ion-col>
                    <ion-col size="8">
                        <h1 class="title">Cécilia Orsi</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <div class="conv-container">
                <interlocutor-message></interlocutor-message>
                <user-message slot="end"></user-message>
                <interlocutor-message></interlocutor-message>
                <user-message slot="end"></user-message>
                <interlocutor-message></interlocutor-message>
                <user-message slot="end"></user-message>
                <interlocutor-message></interlocutor-message>
                <user-message slot="end"></user-message>
                <interlocutor-message></interlocutor-message>
                <interlocutor-message></interlocutor-message>
                <interlocutor-message></interlocutor-message>
            </div>
        </ion-content>
        <ion-footer class="custom">
            <ion-grid>
                <ion-row>
                    <ion-col size="10">
                        <ion-input class="custom">
                        </ion-input>
                    </ion-col>
                    <ion-col size="2">
                        <!-- <ion-button > -->
                            <img class="send" src="../../public/assets/icon/SEND.png" id="send-icon" alt="Envoyer message" title="Envoyer message">
                        <!-- </ion-button> -->
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-footer>
    </ion-app>
</template>

<script lang="ts">
    import { IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter, IonInput } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import InterlocutorMessage from '../components/InterlocutorMessageComponent.vue';
    import UserMessage from '../components/UserMessageComponent.vue';

    export default {
        components: { 'interlocutor-message': InterlocutorMessage, 'user-message': UserMessage, IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter, IonInput},
    }
</script>

<style scoped>
    ion-content {
        --ion-background-color: var(--ion-color-brutBlue);
    }

    ion-grid.header{
        display: flex;
        flex-direction: row;
        align-items: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .return {
        padding-top: 2.5vh;
    }

    .header ion-col {
        padding: 0;
        line-height: 25px;
        display: flex;
        flex-direction: row;
        align-items:center;
    }

    .title {
        color: #000000;
        line-height: 0px;
        text-align: center;
        font-family: BUNGEE;
        font-size: 1.7em;
        line-height: 3.5vh;
        padding-top: 1.5vh;
        margin-left: auto;
        margin-right: auto;
    }

    ion-avatar.custom {
        width:70px;
        height: 70px;
        margin-top: 2vh;
        margin-left: auto;
        margin-right: auto;
        border: solid black 3px;
        box-shadow: 4px 4px 0px black;
    }

    .conv-container {
        margin: 3%;
        height: 75vh;
        background-color: var(--ion-color-brutLight);
        border: solid black 3px;
        border-radius: 10px;
        box-shadow: 4px 4px 0px black;
    }

    ion-footer.custom {
        background-color: var(--ion-color-brutYellow);
        border-top: solid black 4px;
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

    .send {
        width: 10vw;
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
</style>