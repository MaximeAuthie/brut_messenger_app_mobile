<template>
    <div id="back">
        <img id="logo" class="center" alt="logo de Brut Messenger" src="../../public/assets/logo/LOGO_ROUND_YELLOW.png">
        <form class="center" action="post">
            <label class="dongle" for="email">Adresse e-mail</label><br>
            <input id="email" name="email" type="email"><br>
            <label class="dongle" for="password">Mot de passe</label><br>
            <input id="password" name="password" type="password"><br>
            <input class="principal" type="submit" value="Inscription">
        </form>
    </div>
</template>


<style>
    #back {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #23A093;
        min-height: 100vh;
    }

    #logo {
        width: 45%;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    form  { 
        width:70%;
        font-family: 'Dongle', sans-serif;
    }

    input {
        display: block;
        width: 100%;
        height: 40px;
        background-color: #FFFEF8;
        border: 4px solid black;
        box-shadow: 7px 7px 0px black;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.2em;
        color: black;
    }

    label {
        font-size: 2em;
        font-weight: bold;
    }

    .dongle {
        font-family: 'Dongle', sans-serif;
        line-height: 0px;
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

    .principal {
        display: block;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        font-weight: bold;
        font-size: 2em;
        background-color: #F55A4F;
        color: white;
        height: 50px;
        width: 220px;
        border-radius: 5px 5px 5px 5px;
        text-align: center;
        font-family: 'Dongle', sans-serif;
        cursor: pointer;
    }

    .secondary {
        display: block;
        margin-top: 10px;
        font-weight: bold;
        font-size: 2em;
        color: black;
        background-color: #FFFEF8;
        height: 50px;
        width: 220px;
        border-radius: 5px 5px 5px 5px;
        text-align: center;
        font-family: 'Dongle', sans-serif;
        cursor: pointer;
    }
</style>