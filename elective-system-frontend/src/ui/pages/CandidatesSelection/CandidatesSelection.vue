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

        <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Puestos a
            votar</button>
        <button @click="$router.push('user-selection')" type="button" class="yourSelectionButton btn btn-secondary">Tu selección</button>
    </div>
    <div class="selectContainer">
        <div class="dropDownSelection">
            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Seleccionar categoria</option>
                    <option value="1">Presidentes</option>
                    <option value="2">Vicepresidentes</option>
                    <option value="3">Diputados</option>
                    <option value="4">Senadores</option>
                    <option value="5">Alcaldes</option>
                    <option value="6">Regidores</option>
                </select>
                <label for="floatingSelect">Despliegue el menú</label>
            </div>
        </div>
    </div>

    <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top"
            alt="[LOGO_PARTIDO]">
        <div class="card-body">
            <img src=""
                class="card-img-top" alt="[IMAGEN_CANDIDATO]">
            <h5 style="text-align: center;" class="card-title">[NOMBRE_CANDIDATO]</h5>
            <br>
            <div class="col text-center">
                <button class="btn btn-dark regular-button"> Votar</button>
            </div>
        </div>
    </div>
</template>

<style scoped src="./style.css"></style>
