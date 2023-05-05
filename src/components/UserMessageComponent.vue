<template>
    <div class="container">
        <div class="indication">{{ userFirstName }} {{ userLastName }} ({{ date }} {{ hour }})</div>
        <div class="message">{{ messageText }}</div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'user-message',
        props: {
            userFirstName: {
                type: String,
                required: true
            },
            userLastName: {
                type: String,
                required: true
            },
            messageDate: {
                type: String,
                required: true
            },
            messageText: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                date:'',
                hour:''
            }
        },
        mounted() {
            const dateObject = new Date(this.messageDate);
            const dateOptions = {year: "numeric", month: "2-digit", day: "2-digit"};
            const hourOptions = { hour:"2-digit", minute:"2-digit"};
            this.date = dateObject.toLocaleDateString("fr-FR", dateOptions);
            this.hour = dateObject.toLocaleTimeString("fr-FR", hourOptions);
        }
    })
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        margin-top: 1.5vh;
        margin-bottom: 3vh;
        padding-right: 2vw;
        font-family: 'Dongle', sans-serif;
        
    }
    .indication {
        text-align: end;
        line-height: 1vh;
        padding-left: 2vw;
        font-size: 1.2em;
    }
    .message {
        max-width: 75%;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-right: 1vh;
        padding-left: 1vh;
        font-size: 1.5em;
        line-height: 2vh;
        border: solid black 3px;
        border-radius: 10px 10px 0px 10px;
        box-shadow: 5px 5px 0px black;
        color: white;
        text-align: start;
        background-color: var(--ion-color-brutYellow);
    }
    
</style>