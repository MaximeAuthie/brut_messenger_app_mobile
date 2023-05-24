<template>
    <ion-app>
        <ion-content :fullscreen="true">

            <h1 class="title">Réglages généraux</h1>
    
            <ion-avatar>
                <img src="../../public/assets/logo/LOGO_ROUND_RED.png" alt="">
            </ion-avatar>

            <div class="form">
                <ion-label position="fixed">Taille des polices :</ion-label>

                <ion-list>
                    <ion-radio-group v-model="fontSize">
                    <ion-item lines="none">
                        <ion-label>Petites</ion-label>
                        <ion-radio color="dark" slot="end" value="small"></ion-radio>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-label>Moyennes</ion-label>
                        <ion-radio color="dark" slot="end" value="medium"></ion-radio>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-label>Grandes</ion-label>
                        <ion-radio color="dark" slot="end" value="big"></ion-radio>
                    </ion-item>
                    </ion-radio-group>
                </ion-list>

                <p v-if="isFormSubmit" class="successMsg">Vos informations personnelles ont bien été enregistrées.</p>

                <div class="button">
                    <ion-button @click="submitGeneralSettings" class="main" expand="block">Enregistrer</ion-button>
                </div>

            </div>
        </ion-content>
        <ion-footer>
                <nav-bar></nav-bar>
        </ion-footer>
    </ion-app>
</template>

<script lang="ts">
    import { IonContent, IonAvatar, IonButton, IonItem, IonLabel, IonRadioGroup, IonRadio, IonList, IonFooter } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import NavBar from '../components/NavBarComponent.vue';

    export default defineComponent({
        components: { 'nav-bar': NavBar, IonContent, IonLabel, IonAvatar, IonRadio, IonRadioGroup, IonButton, IonItem, IonList, IonFooter },
        data() {
            return {
                isFormSubmit: false,
                fontSize: 'small'
            }
        },
        methods: {
            submitGeneralSettings() {
                this.isFormSubmit = true;
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
        font-size: 1.7em;
        line-height: 4.5vh;
    }

    ion-avatar {
        width:150px;
        height: 150px;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
   
</style>