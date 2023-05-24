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
                        <h1 class="title">Liste des contacts</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <div class="buttonList">
                <contact-button v-for="contact in contactsList" 
                    :key="contact.id"
                    :name="contact.name"
                    :url-img="contact.urlImg">
                </contact-button>
            </div>
        </ion-content>
        <ion-footer>
            <nav-bar></nav-bar>
        </ion-footer>
    </ion-app>
</template>
  
<script lang="ts">
    
    import { IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/vue';
    // import { defineComponent } from 'vue';

    import NavBar from '../components/NavBarComponent.vue';
    import ContactButton from '../components/ContactButtonComponent.vue'

    export default {
        name:'contact-list',
        components: { 'nav-bar': NavBar, 'contact-button': ContactButton, IonContent, IonAvatar, IonGrid, IonRow, IonCol, IonFooter },
        data() {
            return {
                contactsList: [
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
                        name:'Julia Biderman',
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
                        name:'Anatole Brunel',
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
        --ion-background-color: var(--ion-color-brutRed);
        padding: 10%;
    }
    .title {
        font-size: 1.7em;
        line-height: 3.5vh;
        padding-top: 1.5vh;
    }

    ion-col {
        text-align: center;
    }

    ion-avatar {
        width:90px;
        height: 90px;
        margin-top: 2vh;
    }
    .buttonList {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin-top: 2vh;
        padding-left: 5%;
        padding-right: 5%;
    }

</style>