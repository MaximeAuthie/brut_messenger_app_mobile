<template>
    <div>
        <ion-avatar class="custom">
                <img src="../../public/assets/images/cecilia.jpg" alt="Photo interlocuteur">
        </ion-avatar>
        <h2>Cécilia Orsi</h2> 
        <img src="../../public/assets/icon/go.png" alt="Icone go" class="go">
    </div>
</template>

<script lang="ts">
    import { IonAvatar } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'conversation-button',
        components: { IonAvatar },
    }); 
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
        padding-top: 0.3vh;
        padding-bottom: 0.3vh;
        padding-left: 0;
        background-color: var(--ion-color-brutBlue);
        border: solid black 5px;
        border-radius: 10px;
        box-shadow: 7px 7px 0px;
        font-family: 'Dongle', sans-serif;
        margin-bottom: 1.5vh;
    }
    ion-avatar.custom {
        height: 6vh;
        width: 6vh;
        border: solid black 3px;
    }
    img.go {
        height: 4vh;
        width: 4vh;
    }

    h2 {
        font-size: 2.2em;
        line-height: 0;
    }

</style>