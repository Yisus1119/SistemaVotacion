<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
    <div class="div-tio-slide d-flex">
        <div>
            <Logo></Logo>
        </div>
    </div>
    <img class="loginImage" src="../../../assets/vectors/system-administrator 1.png" alt="login-admin">
    <h2 class="principalTitle animate__animated animate__fadeInTopLeft">Iniciar sesión como administrador</h2>

    <div class="container-sm">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Usuario:</label>
            <input type="email" class="userControl form-control" id="exampleFormControlInput1" placeholder="Ej: useradmin8520">
        </div>
        <br>
        <label for="inputPassword5" class="form-label">Contraseña:</label>
        <input type="password" id="inputPassword5" class="userControl form-control" aria-describedby="passwordHelpBlock">
        <div id="passwordHelpBlock" class="form-text">
            Su contraseña debe tener entre 8 a 20 caracteres.
        </div>
        <div class="buttonContainer">
            <button type="button" class="btnIngresar btn btn-primary">Ingresar</button>
        </div>
    </div>
</template>

<style scoped src="./style.css"></style>
