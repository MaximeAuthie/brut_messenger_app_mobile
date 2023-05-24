<template>
    <ion-app>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="3">
                        <ion-avatar>
                            <img src="../../public/assets/images/moi.jpg" alt="">
                        </ion-avatar>
                    </ion-col>
                    <ion-col size="9">
                        <h1 class="title">Liste des conversations</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <div class="button">
                <router-link to="/new-conversation" class="noUnderline">
                    <ion-button class="main" expand="block">Nouvelle conversation</ion-button>
                </router-link>
                <router-link to="/new-group" class="noUnderline">
                    <ion-button class="main" expand="block">Nouveau groupe</ion-button>
                </router-link>
            </div>
            <div class="button">
                <conv-button v-for="conversation in conversationsList" 
                    :key="conversation.id"
                    :urlImg="conversation.urlImg"
                    :name="conversation.name">
                </conv-button>
            </div>    
        </ion-content>
        <ion-footer>
            <nav-bar></nav-bar>
        </ion-footer>
    </ion-app>
</template>

<script lang="ts">
    
    import { IonContent, IonAvatar, IonButton,IonGrid, IonRow, IonCol, IonFooter } from '@ionic/vue';
    // import { defineComponent } from 'vue';

    import NavBar from '../components/NavBarComponent.vue';
    import ConversationButton from '../components/ConversationButtonComponent.vue'

    export default {
        name:'conversations-list',
        components: { 'nav-bar': NavBar, 'conv-button': ConversationButton, IonContent, IonAvatar, IonButton,IonGrid, IonRow, IonCol, IonFooter },
        data() {
            return {
                conversationsList: [
                    {
                        id:1,
                        name:'Cécilia Orsi',
                        urlImg:'../../public/assets/images/cecilia.jpg',
                    },
                    {
                        id:2,
                        name:'Simon Labatut',
                        urlImg:'../../public/assets/images/simon.jpg',
                    },
                    {
                        id:3,
                        name:'La famille <3',
                        urlImg:'../../public/assets/images/Julia.jpg',
                    },
                    {
                        id:4,
                        name:'Chantal Authié',
                        urlImg:'../../public/assets/images/chantal.jpg',
                    },
                    {
                        id:5,
                        name:'Daniel Authié',
                        urlImg:'../../public/assets/images/daniel.JPG',
                    },
                    {
                        id:6,
                        name:'Les copaiiiings!',
                        urlImg:'../../public/assets/images/compaings.JPG',
                    },
                    {
                        id:7,
                        name:'Camille Lagane',
                        urlImg:'../../public/assets/images/camille.jpg',
                    },
                    {
                        id:8,
                        name:'Mathieu Lestrade',
                        urlImg:'../../public/assets/images/mathieu.jpg',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    ion-content {
        --ion-background-color: var(--ion-color-brutLight);
        padding: 10%;
    }
    .title {
        font-size: 1.7em;
        line-height: 3.5vh;
        padding-top: 1.5vh;
    }

    ion-avatar {
        width:90px;
        height: 90px;
        margin-top: 2vh;
    }
 
</style>