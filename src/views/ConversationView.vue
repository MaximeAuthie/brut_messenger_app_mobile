<template>
    <img src="../../public/assets/images/moi.jpg" alt="avatar de l'utilisateur">
    <div>
    </div>
    <nav-bar></nav-bar>
</template>

<script lang="ts">
    import NavBar from './NavBar.vue';

    export default {
        name: 'App',
        components: {
            'nav-bar': NavBar,
        },
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