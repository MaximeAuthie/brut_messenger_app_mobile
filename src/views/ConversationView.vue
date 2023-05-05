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
                        <ion-avatar>
                            <img src="../../public/assets/images/cecilia.jpg" alt="">
                        </ion-avatar>
                    </ion-col>
                    <ion-col size="8">
                        <h1 class="title">Cécilia Orsi</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <div class="conv-container">
                <div v-for="message in messages" :key="message.id">
                    <user-message 
                    v-if="message.authorId == connectedUser.id" 
                    slot="end"
                    :userFirstName="message.authorFirstName"
                    :userLastName="message.authorLastName"
                    :messageDate="message.date"
                    :messageText="message.content"
                    ></user-message>
                    <interlocutor-message
                    v-else
                    :userFirstName="message.authorFirstName"
                    :userLastName="message.authorLastName"
                    :messageDate="message.date"
                    :messageText="message.content"
                    ></interlocutor-message>
                </div>
            </div>
        </ion-content>
        <ion-footer>
            <ion-grid>
                <ion-row>
                    <ion-col size="10">
                        <ion-input v-model="messageInput"></ion-input>
                    </ion-col>
                    <ion-col size="2">
                        <!-- <ion-button > -->
                            <img @click="sendNewMessage" class="send" src="../../public/assets/icon/SEND.png" id="send-icon" alt="Envoyer message" title="Envoyer message">
                        <!-- </ion-button> -->
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-footer>
    </ion-app>
</template>

<script>
    import { IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter, IonInput } from '@ionic/vue';
    // import { defineComponent } from 'vue';

    import InterlocutorMessage from '../components/InterlocutorMessageComponent.vue';
    import UserMessage from '../components/UserMessageComponent.vue';

    export default {
        components: { 'interlocutor-message': InterlocutorMessage, 'user-message': UserMessage, IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter, IonInput},
        data() {
            return {
                connectedUser: {
                    id: 1,
                    firstName: 'Maxime',
                    lastName: 'Authié'
                },
                messageInput: '',
                messages: [
                    {
                        id: 1,
                        authorId : 2,
                        authorFirstName: 'Cécilia',
                        authorLastName: 'Orsi',
                        date: 'Thu, 04 May 2023 12:15:28 GMT',
                        content: 'Salut copaing! Comment ça va?'
                    },
                    {
                        id: 2,
                        authorId : 1,
                        authorFirstName: 'Maxime',
                        authorLastName: 'Authié',
                        date: 'Thu, 04 May 2023 12:17:28 GMT',
                        content: 'Salut partner! Muy bien! Y tu?'
                    },
                    {
                        id: 3,
                        authorId : 2,
                        authorFirstName: 'Cécilia',
                        authorLastName: 'Orsi',
                        date: 'Thu, 04 May 2023 12:17:58 GMT',
                        content: 'No hablo el Espanol! ^^'
                    },
                    {
                        id: 4,
                        authorId : 2,
                        authorFirstName: 'Cécilia',
                        authorLastName: 'Orsi',
                        date: 'Thu, 04 May 2023 12:18:25 GMT',
                        content: 'Ca me rappelle le lycée! :)'
                    },
                    {
                        id: 5,
                        authorId : 1,
                        authorFirstName: 'Maxime',
                        authorLastName: 'Authié',
                        date: 'Thu, 04 May 2023 12:25:18 GMT',
                        content: 'T\'as encore des nouvelles de JG au fait?'
                    },
                ]
            }
        },
        methods: {
            sendNewMessage() {
                if (this.messageInput !== '') {
                    const now = new Date();
                    const date = now.toUTCString();
                    const newMessage = {
                        id: this.messages.length + 1,
                        authorId : this.connectedUser.id,
                        authorFirstName:this.connectedUser.firstName,
                        authorLastName: this.connectedUser.lastName,
                        date: date,
                        content: this.messageInput
                    }
                    this.messages.push(newMessage);
                    this.messageInput='';
                }
            }
        }
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
    ion-avatar {
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
        min-height: 75vh;
        background-color: var(--ion-color-brutLight);
        border: solid black 3px;
        border-radius: 10px;
        box-shadow: 4px 4px 0px black;
    }
    ion-footer {
        background-color: var(--ion-color-brutYellow);
        border-top: solid black 4px;
    }
    ion-input {
        --background: var(--ion-color-brutLight);
        --padding-start:1vw;
        font-family: 'Dongle', sans-serif;
        height: 40px;
        border: 4px solid black;
        box-shadow: 7px 7px 0px black;
        margin-bottom: 1.5vh;
        font-size: 1.5em;
        color: black;
    }
    .send {
        width: 10vw;
    }

</style>