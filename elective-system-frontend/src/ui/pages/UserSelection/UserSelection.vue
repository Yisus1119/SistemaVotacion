<script setup lang="ts">
import Logo from "../../components/Logo/Logo.vue";
</script>

<template>
    <div class="div-tio-slide d-flex">
        <div>
            <Logo></Logo>
        </div>
    </div>
    <div class="div-top-slide-column">
        <h3 class="principalTitle">SISTEMA DIGITAL DE GESTIÓN Y PROCESAMIENTO DE VOTOS ELECTRÓNICOS </h3>
        <h3 class="sdgpve animate__animated animate__fadeInLeft">NOMBRE DEL VOTANTE: [NOMBRE_VOTANTE]</h3>
    </div>
    <div class="properties container-sm">

        <button @click="$router.push('candidates-selection')" type="button" class="yourSelectionButton btn btn-primary"
            data-bs-toggle="button" aria-pressed="true">Puestos a
            votar</button>
        <button type="button" class="btn btn-primary active">Tu selección</button>
    </div>
    <br>
    <div class="selectionContainer container-sm">
        <div class="card">
            <div class="card-header">
                Puesto: [NOMBRE_PUESTO]
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <img src="" class="card-img-top" alt="[IMAGEN_CANDIDATO]">
                    <img class="deleteSelection" src="../../../assets/vectors/delete-candidate.png">
                    <p>[NOMBRE_CANDIDATO]</p>
                </blockquote>
            </div>
        </div>
    </div>
    <button type="button" class="btnConfirm btn btn-primary">Confirmar selección</button>
</template>

<style scoped src="./style.css"></style>
