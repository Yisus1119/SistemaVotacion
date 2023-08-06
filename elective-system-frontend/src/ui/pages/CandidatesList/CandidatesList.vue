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
        <h3 class="principalTitle">MANTENIMIENTO DE LOS CANDIDATOS</h3>
    </div>

    <div class="maintenanceContainer">
        <div class="navBar container-sm">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar candidatos" aria-label="Search">
                <button class="btn btn-success" type="submit">Buscar</button>
            </form>
        </div>

        <div class="table container-sm">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td class="actionsFields"><button class="btnActions btn btn-warning" type="submit">Editar</button>
                            <button class="btnActions btn btn-danger" type="submit">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><button class="btnActions btn btn-warning" type="submit">Editar</button>
                            <button class="btnActions btn btn-danger" type="submit">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>@twitter</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><button class="btnActions btn btn-warning" type="submit">Editar</button>
                            <button class="btnActions btn btn-danger" type="submit">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary" type="submit">Crear candidato</button>
        </div>
    </div>
</template>

<style scoped src="./style.css"></style>
