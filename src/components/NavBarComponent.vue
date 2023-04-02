<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <router-link to="/conversation-list">
                    <img src="../../public/assets/icon/CONVERSATIONS.png" alt="Liste des conversations" title="Liste des conversations">
                </router-link>
                
            </ion-col>
            <ion-col>
                <router-link to="/contacts-list">
                    <img src="../../public/assets/icon/CONTACTS.png" alt="Liste des contacts" title="Liste des contacts">
                </router-link>
            </ion-col>
            <ion-col>
                <router-link to="/user-profile">
                    <img src="../../public/assets/icon/PROFILE.png" alt="Profil utilisateur" title="Profil utilisateur">
                </router-link>
            </ion-col>
            <ion-col>
                <router-link to="/general-settings">
                    <img src="../../public/assets/icon/SETTINGS.png" alt="Réglages de l'application" title="Réglages de l'application">
                </router-link>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts">
    import { IonGrid, IonRow, IonCol } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'settings-component',
        components: { IonGrid, IonRow, IonCol },
    }); 
</script>

<style scoped>
    ion-grid {
        border-top: solid 4px black;
        background-color: var(--ion-color-brutGreen);
    }

    ion-col {
        text-align: center;
    }

    img {
        width: 75%;
    }
</style>

